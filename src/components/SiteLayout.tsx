import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const linkBase =
    "text-sm text-foreground/70 hover:text-foreground transition-colors";
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container-prose flex items-center justify-between py-5">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-foreground">
            Joana Marques
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-accent">
            Psicóloga
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/sobre" className={linkBase} activeProps={{ className: "text-foreground font-medium" }}>
            Sobre
          </Link>
          <Link to="/servicos" className={linkBase} activeProps={{ className: "text-foreground font-medium" }}>
            Serviços
          </Link>
          <a
            href="https://substack.com"
            target="_blank"
            rel="noreferrer noopener"
            className={linkBase}
          >
            Escrita ↗
          </a>
          <Link
            to="/marcacao"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Marcar consulta
          </Link>
        </nav>
        <Link
          to="/marcacao"
          className="md:hidden inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs text-primary-foreground"
        >
          Marcar
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-prose py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <p className="font-serif text-lg text-foreground">Joana Marques</p>
          <p className="text-muted-foreground mt-1">
            Psicóloga · Porto
          </p>
        </div>
        <div className="space-y-1 text-muted-foreground">
          <p>Consultório na Boavista</p>
          <p>Consultas presenciais e online</p>
          <p>Cédula OPP nº 30473</p>
        </div>
        <div className="space-y-1">
          <a href="mailto:joanatmarques.psi@gmail.com" className="block text-foreground hover:text-primary transition">
            joanatmarques.psi@gmail.com
          </a>
          <a href="tel:+351935727106" className="block text-muted-foreground hover:text-foreground transition">
            +351 935727106
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Joana Marques. Todos os direitos reservados.</span>
          <span>Sigilo profissional garantido.</span>
        </div>
      </div>
    </footer>
  );
}
