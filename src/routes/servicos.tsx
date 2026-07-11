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
          />
        </div>
      </section>
    </SiteLayout>
  );
}

function Modality({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-serif text-2xl text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
