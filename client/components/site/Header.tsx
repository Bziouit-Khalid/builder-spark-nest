import { NavLink } from "react-router-dom";
import { company } from "@/lib/company";

const navLinkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-accent/40";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] grid place-items-center shadow-sm">
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <linearGradient id="gsg" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="white" stopOpacity="1"/>
                  <stop offset="1" stopColor="white" stopOpacity="0.9"/>
                </linearGradient>
              </defs>
              <text x="0" y="14" fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto" fontWeight="700" fontSize="14" fill="url(#gsg)">GS</text>
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">{company.name}</span>
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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
          >
            Demandez un devis
          </a>
        </div>
        <div className="hidden md:block">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
          >
            Demandez un devis
          </a>
        </div>
      </div>
    </header>
  );
}
