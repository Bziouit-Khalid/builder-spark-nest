import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      // Safely read body once; some environments may throw if body stream is read elsewhere
      const text = await res.text();
      let body: any = {};
      try {
        body = text ? JSON.parse(text) : {};
      } catch (err) {
        body = {};
      }
      if (!res.ok) throw new Error(body?.error || "Login failed");
      // store token
      localStorage.setItem("admin_token", body.token);
      toast({
        title: "Connecté",
        description: "Vous êtes connecté en tant qu'admin.",
      });
      navigate("/admin");
    } catch (err) {
      console.error(err);
      toast({ title: "Erreur", description: "Identifiants invalides." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-md rounded-xl border bg-card p-6">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <form onSubmit={submit} className="mt-4 grid gap-3">
          <label className="text-sm">Utilisateur</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          />
          <label className="text-sm">Mot de passe</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full rounded-md border px-3 py-2"
          />
          <button
            className="mt-3 inline-flex items-center justify-center rounded-md bg-[hsl(var(--accent))] px-4 py-2 text-sm font-semibold text-white"
            disabled={loading}
          >
            {loading ? "Connexion..." : "Se connecter"}
          </button>
        </form>
      </div>
    </section>
  );
}
