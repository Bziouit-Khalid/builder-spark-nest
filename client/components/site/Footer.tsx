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
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-[hsl(var(--primary))] grid place-items-center shadow-sm ring-1 ring-black/5 overflow-hidden">
              <svg
                viewBox="0 0 120 120"
                width="36"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <defs>
                  <linearGradient id="fBlue" x1="0" x2="1">
                    <stop offset="0" stopColor="hsl(var(--primary))" />
                    <stop
                      offset="1"
                      stopColor="hsl(var(--primary))"
                      stopOpacity="0.9"
                    />
                  </linearGradient>
                  <linearGradient id="fGold" x1="0" x2="1">
                    <stop offset="0" stopColor="hsl(var(--accent))" />
                    <stop
                      offset="1"
                      stopColor="hsl(var(--accent))"
                      stopOpacity="0.95"
                    />
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M30 40c0-0 28-14 50 0 22 14 10 48-20 56-30 8-40-10-40-26 0-18 6-30 10-30z"
                    fill="url(#fBlue)"
                  />
                  <path
                    d="M74 30c10 0 18 8 18 18 0 10-8 16-18 20s-14 8-6 14 22 2 30-8"
                    stroke="url(#fGold)"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-[hsl(var(--accent))]">
                {company.name}
              </span>
              <small className="text-xs text-muted-foreground">
                Travaux de Construction et génie civil
              </small>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-prose">
            {company.description}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Adresse: {company.address}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Téléphone:{" "}
            <a className="hover:underline" href={`tel:${company.phone}`}>
              {company.phone}
            </a>{" "}
            · Email:{" "}
            <a className="hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Liens rapides</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a className="hover:text-foreground" href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="/a-propos">
                À propos
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="/realisations">
                Réalisations
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="/contact">
                Contact
              </a>
            </li>
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
            <p className="mt-3 text-sm text-muted-foreground">
              Informations disponibles sur demande.
            </p>
          )}
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between py-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
          <p>{company.activity}</p>
        </div>
      </div>
    </footer>
  );
}
