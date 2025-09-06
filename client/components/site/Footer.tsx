import { company } from "@/lib/company";

export function Footer() {
  const { legal } = company;
  const legalItems = [
    legal.rc ? `RC: ${legal.rc}` : null,
    legal.ice ? `ICE: ${legal.ice}` : null,
    legal.capital ? `Capital: ${legal.capital}` : null,
    legal.forme ? `${legal.forme}` : null,
  ].filter(Boolean) as string[];

  return (
    <footer className="border-t bg-white dark:bg-background">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary text-primary-foreground grid place-items-center font-bold">G</div>
            <span className="text-lg font-semibold tracking-tight">{company.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-prose">
            {company.description}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Adresse: {company.address}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Téléphone: <a className="hover:underline" href={`tel:${company.phone}`}>{company.phone}</a> · Email: <a className="hover:underline" href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Liens rapides</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><a className="hover:text-foreground" href="/">Accueil</a></li>
            <li><a className="hover:text-foreground" href="/a-propos">À propos</a></li>
            <li><a className="hover:text-foreground" href="/services">Services</a></li>
            <li><a className="hover:text-foreground" href="/realisations">Réalisations</a></li>
            <li><a className="hover:text-foreground" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Informations légales</h4>
          {legalItems.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {legalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">Informations disponibles sur demande.</p>
          )}
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <p>{company.activity}</p>
        </div>
      </div>
    </footer>
  );
}
