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
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Marcação
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
            Marcar uma consulta
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Se pretender agendar uma consulta ou esclarecer alguma questão, pode
            contactar-me através do e-mail ou por telefone. Responderei com a
            maior brevidade possível.
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
                className="block text-muted-foreground hover:text-foreground transition"
              >
                +351 935727106
              </a>
              <a
                href="mailto:joanatmarques.psi@gmail.com"
                className="block mt-2 text-muted-foreground hover:text-foreground transition"
              >
                joanatmarques.psi@gmail.com
              </a>
              <a
                href="https://wa.me/351935727106"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:opacity-90 transition"
              >
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <div className="border-t border-border/60 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                Consultório
              </p>
              <p className="text-foreground">Rua Dominguez Alvarez 44, Piso 4</p>
              <p className="text-muted-foreground">4100-801 Boavista</p>
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

