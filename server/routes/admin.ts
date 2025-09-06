import { RequestHandler } from "express";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "12345";

const supabase = createClient(
  SUPABASE_URL || "",
  SUPABASE_SERVICE_ROLE_KEY || "",
);

// Simple in-memory token store
const tokens = new Map<string, { user: string; expiresAt: number }>();
const TOKEN_TTL = 1000 * 60 * 60 * 24; // 24 hours

function genToken() {
  return crypto.randomBytes(24).toString("hex");
}

export const handleAdminLogin: RequestHandler = async (req, res) => {
  const { username, password } = req.body as {
    username?: string;
    password?: string;
  };
  if (!username || !password)
    return res.status(400).json({ error: "Missing credentials" });

  if (username !== ADMIN_USER || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = genToken();
  tokens.set(token, { user: username, expiresAt: Date.now() + TOKEN_TTL });
  return res.json({ token, expiresAt: Date.now() + TOKEN_TTL });
};

function validateTokenFromHeader(req: any) {
  const auth = req.headers["authorization"] as string | undefined;
  if (!auth) return null;
  const parts = auth.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") return null;
  const token = parts[1];
  const info = tokens.get(token);
  if (!info) return null;
  if (info.expiresAt < Date.now()) {
    tokens.delete(token);
    return null;
  }
  return { token, user: info.user };
}

export const handleGetSubmissions: RequestHandler = async (req, res) => {
  try {
    const auth = validateTokenFromHeader(req);
    if (!auth) return res.status(401).json({ error: "Unauthorized" });

    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.json({ submissions: data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unexpected error" });
  }
};

export const handleDeleteSubmission: RequestHandler = async (req, res) => {
  try {
    const auth = validateTokenFromHeader(req);
    if (!auth) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Missing id" });

    const { error } = await supabase.from("contacts").delete().eq("id", id);
    if (error) return res.status(500).json({ error: error.message });
    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unexpected error" });
  }
};
