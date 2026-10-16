import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Joana Marques, Psicóloga" },
      {
        name: "description",
        content:
          "Áreas de intervenção: psicoterapia individual, consultas de avaliação e acompanhamento online.",
      },
      { property: "og:title", content: "Serviços — Joana Marques" },
      {
        property: "og:description",
        content: "Psicoterapia individual, consultas de avaliação e sessões online no Porto.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <SiteLayout>
      <section className="container-prose py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
          O que ofereço
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
          Serviços
        </h1>
      </section>

      <section className="container-prose pb-24">
        <div>
          <PriceRow
            label="Consulta psicológica individual"
            price="50 €"
            note="Sessão semanal ou quinzenal de 50 minutos, presencial ou online."
          />
        </div>
        <p className="mt-6 text-muted-foreground text-xs leading-relaxed">
          Nota: Numa fase inicial, sempre que possível, privilegio uma frequência semanal, para dar
          maior continuidade ao processo. A frequência pode depois ser pensada em conjunto.
        </p>
        <div className="mt-10">
          <Link
            to="/marcacao"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Marcar consulta
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

function PriceRow({ label, price, note }: { label: string; price: string; note: string }) {
  return (
    <div className="border-y border-border/70 py-6 flex items-baseline justify-between gap-6">
      <div>
        <h3 className="font-serif text-2xl text-foreground">{label}</h3>
        <p className="mt-1 text-muted-foreground text-sm">{note}</p>
      </div>
      <div className="font-serif text-2xl text-primary shrink-0">{price}</div>
    </div>
  );
}
