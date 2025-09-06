import { NavLink } from "react-router-dom";
import { company } from "@/lib/company";

const navLinkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-accent/40";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-md bg-[hsl(var(--primary))] grid place-items-center shadow-sm ring-1 ring-black/5 overflow-hidden">
            <svg viewBox="0 0 120 120" width="44" height="44" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="gBlue" x1="0" x2="1">
                  <stop offset="0" stopColor="hsl(var(--primary))" />
                  <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                </linearGradient>
                <linearGradient id="gGold" x1="0" x2="1">
                  <stop offset="0" stopColor="hsl(var(--accent))" />
                  <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0.95" />
                </linearGradient>
              </defs>
              <g>
                <path d="M30 40c0-0 28-14 50 0 22 14 10 48-20 56-30 8-40-10-40-26 0-18 6-30 10-30z" fill="url(#gBlue)" />
                <path d="M74 30c10 0 18 8 18 18 0 10-8 16-18 20s-14 8-6 14 22 2 30-8" stroke="url(#gGold)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-[hsl(var(--accent))] tracking-tight">{company.name}</span>
            <small className="text-xs text-muted-foreground">Travaux de Construction et génie civil</small>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/realisations"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Réalisations
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-primary" : "text-foreground/80"}`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="md:hidden">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[hsl(var(--accent))] px-4 py-2 text-sm font-medium text-[hsl(var(--accent-foreground))] shadow hover:opacity-90"
          >
            Demandez un devis
          </a>
        </div>
        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-[hsl(var(--accent))] px-4 py-2 text-sm font-medium text-[hsl(var(--accent-foreground))] shadow hover:opacity-90"
          >
            Demandez un devis
          </a>
        </div>
      </div>
    </header>
  );
}
