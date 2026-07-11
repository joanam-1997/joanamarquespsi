import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Intro />
      <Approach />
      <Cta />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="container-prose pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 space-y-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Psicoterapia · Porto
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Um espaço para <em className="text-primary not-italic">pensar</em>,
            <br /> sentir e habitar-se.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Sou a Joana Marques, psicóloga clínica no Porto. Ofereço psicoterapia
            de abordagem psicodinâmica a adultos que procuram compreender-se com
            mais profundidade — no seu tempo, sem pressa.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/marcacao"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
            >
              Marcar primeira consulta
            </Link>
            <Link
              to="/sobre"
              className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-accent/30 transition"
            >
              Conhecer o meu percurso
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/40 rotate-2" aria-hidden />
            <img
              src={heroImg}
              alt="Consultório sereno com poltrona junto à janela"
              width={1024}
              height={1024}
              className="relative rounded-[1.75rem] object-cover w-full aspect-square shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const items = [
    {
      k: "01",
      t: "Escuta atenta",
      d: "Um espaço confidencial onde as suas palavras — e os seus silêncios — têm lugar.",
    },
    {
      k: "02",
      t: "Abordagem psicodinâmica",
      d: "Um trabalho continuado que procura o sentido daquilo que se repete e nos limita.",
    },
    {
      k: "03",
      t: "No seu tempo",
      d: "A terapia acontece ao ritmo de cada pessoa. Sem fórmulas, sem promessas rápidas.",
    },
  ];
  return (
    <section className="bg-secondary/60 border-y border-border/60">
      <div className="container-prose py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {items.map((i) => (
            <div key={i.k} className="space-y-3">
              <p className="font-serif text-primary text-sm">{i.k}</p>
              <h3 className="font-serif text-2xl text-foreground">{i.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="container-prose py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
          Sobre a terapia
        </p>
        <blockquote className="font-serif text-3xl md:text-4xl leading-snug text-foreground italic">
          "Aquilo que não é elaborado internamente, tende a repetir-se
          externamente."
        </blockquote>
        <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
          A psicoterapia psicodinâmica parte do pressuposto de que muito daquilo
          que sentimos e fazemos escapa à nossa consciência. Ao dar espaço a
          essa vida interior — memórias, afetos, sonhos, relações — abre-se a
          possibilidade de escolher, em vez de repetir.
        </p>
        <Link
          to="/sobre"
          className="inline-flex items-center gap-2 mt-8 text-sm text-primary hover:gap-3 transition-all"
        >
          Ler mais sobre o meu percurso <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="container-prose pb-24">
      <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 shadow-soft">
        <div className="max-w-2xl space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl">
            Dar o primeiro passo é, muitas vezes, o mais difícil.
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Se está a considerar iniciar um processo terapêutico, podemos
            começar por uma consulta de avaliação — um espaço para nos
            conhecermos e perceber se faz sentido caminharmos juntas.
          </p>
          <Link
            to="/marcacao"
            className="inline-flex items-center rounded-full bg-background text-foreground px-6 py-3 text-sm hover:bg-background/90 transition"
          >
            Marcar consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
