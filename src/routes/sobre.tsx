import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import aboutImg from "@/assets/joana-retrato-editada.jpeg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Joana Marques, Psicóloga no Porto" },
      {
        name: "description",
        content:
          "Conheça o percurso e a abordagem clínica da psicóloga Joana Marques, no Porto.",
      },
      { property: "og:title", content: "Sobre — Joana Marques" },
      {
        property: "og:description",
        content: "Percurso, formação e abordagem psicodinâmica.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <SiteLayout>
      <section className="container-prose py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Sobre mim</p>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
              Olá, sou a Joana
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou psicóloga e acompanho adultos em diferentes momentos das suas
              vidas — presencialmente e online.
            </p>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Procuro oferecer um espaço seguro, confidencial e sem
                julgamentos, em que iremos compreender a sua história e
                construir o seu bem-estar.
              </p>
              <p>
                Mais do que “respostas certas”, procuro oferecer um espaço onde
                possa ser ouvido/a e possa construir as suas próprias respostas.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 md:sticky md:top-28">
            <img
              src={aboutImg}
              alt="Joana Marques, psicóloga, no seu consultório no Porto"
              loading="lazy"
              width={1440}
              height={1920}
              className="rounded-[1.75rem] object-cover w-full aspect-[4/5] shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border/60">
        <div className="container-prose py-20 md:py-24">
          <div>
            <h2 className="font-serif text-3xl text-foreground mb-6">
              Formação
            </h2>
            <ul className="space-y-4 text-foreground/90">
              <li>
                <p className="font-medium">Curso de Formação Profissional: Intervenção Psicológica Com Pessoas LGBTQ</p>
                <p className="text-sm text-muted-foreground">
                  Ordem dos Psicólogos Portugueses
                </p>
              </li>
              <li>
                <p className="font-medium">Mestrado em Psicologia Clínica</p>
                <p className="text-sm text-muted-foreground">
                  Faculdade de Psicologia e de Ciências da Educação da Universidade do Porto (FPCEUP)
                </p>
              </li>
              <li>
                <p className="font-medium">Licenciatura em Psicologia</p>
                <p className="text-sm text-muted-foreground">
                  Faculdade de Psicologia e de Ciências da Educação da Universidade do Porto (FPCEUP)
                </p>
              </li>
              <li>
                <p className="font-medium text-sm">
                  Invisto continuamente no meu desenvolvimento profissional através de supervisão clínica e da participação regular em ações de formação e eventos científicos.
                </p>
              </li>


            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
