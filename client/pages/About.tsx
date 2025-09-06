import { company } from "@/lib/company";

export default function About() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            À propos de nous
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {company.name}
          </h1>
          <p className="mt-4 text-muted-foreground">{company.description}</p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>• Basée à: {company.address}</li>
            <li>• Expérience: {company.experienceYears} ans</li>
            <li>• Activité: {company.activity}</li>
          </ul>
          <div className="mt-6 rounded-lg border p-5">
            <h2 className="text-sm font-semibold">Informations légales</h2>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              <div>Forme: {company.legal.forme}</div>
              {company.legal.rc && <div>RC: {company.legal.rc}</div>}
              {company.legal.ice && <div>ICE: {company.legal.ice}</div>}
              {company.legal.capital && <div>Capital: {company.legal.capital}</div>}
              {!company.legal.rc && !company.legal.ice && !company.legal.capital && (
                <div className="sm:col-span-2">Coordonnées complètes disponibles sur demande.</div>
              )}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-xl border">
          <img
            src="https://images.unsplash.com/photo-1523419409543-8f6f5cbd7c38?q=80&w=1600&auto=format&fit=crop"
            alt="Équipe au travail"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
