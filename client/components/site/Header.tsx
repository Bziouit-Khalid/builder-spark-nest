import { NavLink } from "react-router-dom";
import { company } from "@/lib/company";

const navLinkBase =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-accent/40";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/80">
      <div className="container flex h-16 items-center justify-between px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex flex-col leading-tight">
            <div style={{ color: "rgb(202, 112, 33)", fontSize: 18, fontWeight: 700, letterSpacing: "-0.45px", lineHeight: "28px" }}>
              GRANDI SOLUTIONS
            </div>
            <div style={{ color: "rgb(85, 99, 119)", fontSize: 12 }}>
              Travaux de Construction et génie civil
            </div>
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
