import { RequestHandler } from "express";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn(
    "SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set - /api/contact will not work until configured.",
  );
}

const supabase = createClient(
  SUPABASE_URL || "",
  SUPABASE_SERVICE_ROLE_KEY || "",
);

export const handleContact: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Missing required fields (name, email, message)." });
    }

    // Insert into Supabase table 'contacts'
    const { data, error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ success: true, record: data?.[0] ?? null });
  } catch (err) {
    console.error("Unexpected error in handleContact:", err);
    return res.status(500).json({ error: "Unexpected server error" });
  }
};
