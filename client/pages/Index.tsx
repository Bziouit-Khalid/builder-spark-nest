import { company } from "@/lib/company";
import { ArrowRight, Hammer, Layers, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1564540587829-9a6c93f1b1c4?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="container py-24 md:py-36 text-white">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              {company.experienceYears} ans d'expérience à Agadir
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {company.tagline}
            </h1>
            <p className="mt-6 text-lg text-white/90">
              {company.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
              >
                Demandez un devis <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20"
              >
                Nos services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nos services
          </h2>
          <p className="mt-3 text-muted-foreground">
            Plâtrerie, faux plafonds et petits travaux de rénovation avec une finition soignée.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.services.map((s) => (
            <Link
              key={s.id}
              to="/services"
              className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {s.id === "platrerie" && <Hammer className="h-5 w-5" />}
                {s.id === "faux-plafonds" && <Layers className="h-5 w-5" />}
                {s.id === "renovations" && <Wrench className="h-5 w-5" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects preview */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Réalisations récentes
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Un aperçu de projets livrés à Agadir et sa région.
              </p>
            </div>
            <a
              href="/realisations"
              className="hidden md:inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
            >
              Voir la galerie
            </a>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {company.projects.slice(0, 3).map((p) => (
              <div key={p.id} className="group overflow-hidden rounded-xl border bg-card shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.afterImage}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.type} · {p.location} · {new Date(p.date).toLocaleDateString("fr-FR")}
                  </p>
                  {p.description && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 md:hidden">
            <a
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:opacity-90"
            >
              Voir la galerie
            </a>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="container py-14">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 px-8 py-10 text-primary-foreground md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold">Un projet en tête ?</h3>
            <p className="mt-2 text-white/90">
              Contactez-nous pour un devis gratuit et des conseils personnalisés.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-white/90 md:mt-0"
          >
            Contactez-nous <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
