import { company } from "@/lib/company";

export default function Gallery() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Réalisations</h1>
        <p className="mt-3 text-muted-foreground">Quelques projets réalisés récemment.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {company.projects.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-xl border bg-card shadow-sm">
            <div className="relative aspect-[4/3]">
              <img
                src={p.afterImage}
                alt={p.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.type} · {p.location} · {new Date(p.date).toLocaleDateString("fr-FR")}
              </p>
              {p.description && (
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
