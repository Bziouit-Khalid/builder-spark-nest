import { company } from "@/lib/company";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !message) {
      toast({ title: "Champs requis", description: "Veuillez remplir tous les champs." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Erreur lors de l'envoi du message");
      }

      // Use the stored form reference to avoid React synthetic event pooling issues
      form.reset();
      toast({ title: "Message envoyé", description: "Nous vous répondrons sous peu." });
    } catch (err) {
      console.error(err);
      toast({ title: "Erreur", description: "Impossible d'envoyer le message. Réessayez plus tard." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
          <p className="mt-3 text-muted-foreground">
            Adresse: {company.address}
          </p>
          <p className="mt-1 text-muted-foreground">
            Téléphone: <a className="hover:underline" href={`tel:${company.phone}`}>{company.phone}</a>
          </p>
          <p className="mt-1 text-muted-foreground">
            Email: <a className="hover:underline" href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border">
            <iframe
              title="Carte"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit} className="rounded-xl border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Envoyez-nous un message</h2>
            <div className="mt-4 grid gap-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Nom</label>
                <input id="name" name="name" type="text" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2" placeholder="Votre nom" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" name="email" type="email" className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2" placeholder="vous@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" name="message" className="mt-1 h-32 w-full resize-none rounded-md border bg-background px-3 py-2 text-sm outline-none ring-primary/20 focus:ring-2" placeholder="Décrivez votre projet" />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-md bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95 disabled:opacity-50"
              >
                {submitting ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
