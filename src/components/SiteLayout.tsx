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
          <span className="text-xs uppercase tracking-[0.2em] text-primary">
            Psicóloga
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkBase} activeOptions={{ exact: true }} activeProps={{ className: "text-foreground font-medium" }}>
            Página inicial
          </Link>
          <Link to="/sobre" className={linkBase} activeProps={{ className: "text-foreground font-medium" }}>
            Sobre
          </Link>
          <Link to="/servicos" className={linkBase} activeProps={{ className: "text-foreground font-medium" }}>
            Serviços
          </Link>
          <a
            href="https://substack.com/@joanamarquespsi"
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
          Marcar consulta
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
          <p className="font-serif text-lg text-foreground">Joana Marques · Psicóloga · Porto</p>
          <p className="text-muted-foreground mt-1 text-xs">
            Cédula Profissional OPP n.º 30473
          </p>
          <p className="text-muted-foreground mt-1 text-xs">
            Entidade registada na ERS n.º&nbsp;E172096
          </p>
        </div>

        <div className="space-y-1 text-muted-foreground">
          <p>Rua Dominguez Alvarez 44, Piso 4, Sala 4.6</p>
          <p>4100-801 Boavista</p>
        </div>
        <div className="space-y-1">
          <a href="tel:+351935727106" className="block text-foreground hover:text-primary transition">
            +351 935727106
          </a>
          <a href="mailto:joanatmarques.psi@gmail.com" className="block text-muted-foreground hover:text-foreground transition">
            joanatmarques.psi@gmail.com
          </a>
          <a
            href="https://instagram.com/joanamarques.psi"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 pt-2 text-muted-foreground hover:text-foreground transition"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-prose py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Joana Marques. Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Link to="/politica-privacidade" className="hover:text-foreground transition">
              Política de Privacidade
            </Link>
            <span aria-hidden="true">·</span>
            <a
              href="https://www.livroreclamacoes.pt/inicio"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-foreground transition"
            >
              Livro de Reclamações
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
