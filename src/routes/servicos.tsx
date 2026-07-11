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


      <section className="bg-secondary/60 border-t border-border/60">
        <div className="container-prose py-20">
          <Modality
            title="Consulta psicológica individual"
            body="Sessões individuais de acompanhamento psicológico para adultos. Presenciais (na Boavista) ou online."
            price="50 €"
            priceNote="Sessão semanal de 50 minutos, presencial ou online."
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Modality({ title, body, price, priceNote }: { title: string; body: string; price?: string; priceNote?: string }) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
      {price && (
        <div className="mt-6 border-t border-border/70 pt-6 flex items-baseline justify-between gap-6">
          <p className="text-muted-foreground text-sm">{priceNote}</p>
          <div className="font-serif text-2xl text-primary shrink-0">{price}</div>
        </div>
      )}
    </div>
  );
}
