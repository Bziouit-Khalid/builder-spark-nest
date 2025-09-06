import { company } from "@/lib/company";
import { Hammer, Layers, Wrench, Check } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  platrerie: <Hammer className="h-5 w-5" />,
  "faux-plafonds": <Layers className="h-5 w-5" />,
  renovations: <Wrench className="h-5 w-5" />,
};

export default function Services() {
  return (
    <section className="container py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Nos services
        </h1>
        <p className="mt-3 text-muted-foreground">
          Des solutions complètes en plâtrerie, faux plafonds et petites
          rénovations.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {company.services.map((s) => (
          <div
            key={s.id}
            className="overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            {s.image && (
              <div className="relative aspect-[4/3]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {iconMap[s.id]}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Conseil et devis
                  gratuits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Matériaux de
                  qualité
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" /> Finitions soignées
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
