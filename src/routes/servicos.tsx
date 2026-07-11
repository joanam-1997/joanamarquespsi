import { createFileRoute } from "@tanstack/react-router";
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
        <div className="max-w-3xl">
          <PriceRow
            label="Consulta psicológica individual"
            price="50 €"
            note="Sessão semanal de 50 minutos, presencial ou online."
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function PriceRow({ label, price, note }: { label: string; price: string; note: string }) {
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
