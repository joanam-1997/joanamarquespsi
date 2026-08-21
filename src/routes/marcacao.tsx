import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/marcacao")({
  head: () => ({
    meta: [
      { title: "Marcação e Preços — Joana Marques, Psicóloga" },
      {
        name: "description",
        content:
          "Preços das consultas e formas de marcar. Consultório no Porto, com opção de sessões online.",
      },
      { property: "og:title", content: "Marcação e Preços — Joana Marques" },
      {
        property: "og:description",
        content: "Marque uma primeira consulta de psicoterapia no Porto ou online.",
      },
    ],
  }),
  component: MarcacaoPage,
});

function MarcacaoPage() {
  return (
    <SiteLayout>
      <section className="container-prose py-20 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Marcação
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
            Marcar uma consulta
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            Se pretender agendar uma consulta ou esclarecer alguma questão, pode
            contactar-me através do e-mail, whatsapp ou por telefone. Responderei
            com a maior brevidade possível.
            {"\n"}As consultas são realizadas mediante marcação prévia.
          </p>
        </div>

        <div className="mt-16">
          <div className="rounded-3xl bg-secondary/60 p-8 space-y-6 border border-border/60">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                CONTACTOS
              </p>
              <a
                href="tel:+351935727106"
                className="block text-muted-foreground hover:text-foreground transition whitespace-pre-line"
              >
                Telefone:{"\n"}+351 935727106
              </a>
              <a
                href="mailto:joanatmarques.psi@gmail.com"
                className="block mt-2 text-muted-foreground hover:text-foreground transition whitespace-pre-line"
              >
                Email:{"\n"}joanatmarques.psi@gmail.com
              </a>
              <a
                href="https://wa.me/+351935727106"
                target="_blank"
                rel="noreferrer noopener"
                className="block mt-2 text-muted-foreground hover:text-foreground transition"
              >
                Enviar mensagem pelo WhatsApp
              </a>
            </div>
            <div className="border-t border-border/60 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                Consultório
              </p>
              <p className="text-foreground">Rua Dominguez Alvarez 44, Piso 4, Sala 4.6</p>
              <p className="text-muted-foreground">4150-801 Porto</p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

