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

const areas = [
  {
    t: "Ansiedade e stress",
    d: "Preocupação persistente, tensão, insónia, sintomas somáticos.",
  },
  {
    t: "Depressão e vazio",
    d: "Tristeza continuada, perda de sentido, apatia, sentimentos de solidão.",
  },
  {
    t: "Relações e vínculos",
    d: "Dificuldades relacionais, repetições afectivas, questões conjugais e familiares.",
  },
  {
    t: "Perdas e luto",
    d: "Acompanhamento em processos de perda — de pessoas, projectos ou etapas de vida.",
  },
  {
    t: "Identidade e transições",
    d: "Momentos de reorganização pessoal, profissional ou de rumo.",
  },
  {
    t: "Autoconhecimento",
    d: "Um espaço para pensar sobre si, sem sintoma clínico como ponto de partida.",
  },
];

function ServicosPage() {
  return (
    <SiteLayout>
      <section className="container-prose py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Serviços
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
            Áreas de intervenção
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Acompanho adultos em psicoterapia individual. Abaixo alguns dos
            temas mais frequentes — a lista não é exaustiva e cada processo é
            único.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-x-10 gap-y-2">
          {areas.map((a, i) => (
            <div
              key={a.t}
              className="group py-8 border-t border-border/70 flex gap-6"
            >
              <span className="font-serif text-sm text-primary pt-1 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif text-2xl text-foreground">{a.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {a.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 border-t border-border/60">
        <div className="container-prose py-20">
          <Modality
            title="Consulta psicológica individual"
            body="Sessões individuais de acompanhamento psicológico, presenciais no consultório do Porto ou online."
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
