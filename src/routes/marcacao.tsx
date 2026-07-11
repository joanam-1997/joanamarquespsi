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
            O primeiro contacto é feito por email ou telefone. Depois, marcamos
            uma consulta de avaliação em horário compatível.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-10">
            <PriceRow
              label=""
              price=""
              note=""
            />
            <PriceRow
              label="Consulta de Psicologia"
              price="50 €"
              note="Sessão semanal de 50 minutos, presencial ou online."
            />
            <PriceRow
              label=""
              price=""
              note=""
            />
            <p className="text-sm text-muted-foreground pt-4">
              O pagamento pode ser feito por MB Way, transferência ou numerário.
              A frequência semanal é essencial para a continuidade do processo
              terapêutico.
            </p>
          </div>

          <aside className="md:col-span-2">
            <div className="rounded-3xl bg-secondary/60 p-8 space-y-6 border border-border/60">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  CONTACTOS
                </p>
                <a
                  href="mailto:ola@joanamarques.pt"
                  className="block font-serif text-2xl text-foreground hover:text-primary transition"
                >
                  ola@joanamarques.pt
                </a>
                <a
                  href="tel:+351000000000"
                  className="block mt-2 text-muted-foreground hover:text-foreground transition"
                >
                  +351 000 000 000
                </a>
              </div>
              <div className="border-t border-border/60 pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  Consultório
                </p>
                <p className="text-foreground">Rua exemplo, Nº 00</p>
                <p className="text-muted-foreground">4000-000 Porto</p>
              </div>
              <div className="border-t border-border/60 pt-6">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  Horário
                </p>
                <p className="text-foreground">Segunda a sexta</p>
                <p className="text-muted-foreground">09h — 20h, por marcação</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-prose pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 shadow-soft">
          <div className="max-w-2xl space-y-5">
            <h2 className="font-serif text-3xl md:text-4xl">
              Escreva-me quando estiver preparada.
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              Não precisa de saber ao certo o que dizer. Um email breve é
              suficiente para começarmos.
            </p>
            <a
              href="mailto:ola@joanamarques.pt?subject=Marca%C3%A7%C3%A3o%20de%20consulta"
              className="inline-flex items-center rounded-full bg-background text-foreground px-6 py-3 text-sm hover:bg-background/90 transition"
            >
              Enviar email
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PriceRow({
  label,
  price,
  note,
}: {
  label: string;
  price: string;
  note: string;
}) {
  return (
    <div className="border-t border-border/70 pt-6 flex items-baseline justify-between gap-6">
      <div>
        <h3 className="font-serif text-2xl text-foreground">{label}</h3>
        <p className="mt-1 text-muted-foreground text-sm">{note}</p>
      </div>
      <div className="font-serif text-2xl text-primary shrink-0">{price}</div>
    </div>
  );
}
