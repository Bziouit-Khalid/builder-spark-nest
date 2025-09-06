import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContact } from "./routes/contact";
import {
  handleAdminLogin,
  handleGetSubmissions,
  handleDeleteSubmission,
} from "./routes/admin";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContact);

  // Admin routes
  app.post("/api/admin/login", handleAdminLogin);
  app.get("/api/admin/submissions", handleGetSubmissions);
  app.delete("/api/admin/submissions/:id", handleDeleteSubmission);

  return app;
}
