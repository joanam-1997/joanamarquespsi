import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import consultorioImg from "@/assets/consultorio.jpg";


export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Approach />
      <Consultorio />
    </SiteLayout>
  );
}

function Consultorio() {
  return (
    <section className="container-prose py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
        O CONSULTÓRIO
      </p>
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-accent/40 -rotate-2" aria-hidden />
            <img
              src={consultorioAsset.url}
              alt="Consultório de psicologia na Boavista, Porto, com duas poltronas frente a frente"
              loading="lazy"
              className="relative rounded-[1.75rem] w-full object-cover aspect-[4/3] shadow-soft"
            />
          </div>
        </div>

        <div className="md:col-span-5 space-y-5">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-foreground">
            Um espaço calmo e reservado
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            As consultas presenciais decorrem na Boavista, no Porto, num
            ambiente tranquilo, pensado para que se sinta à vontade para falar
            no seu tempo.
          </p>
          <Link
            to="/marcacao"
            className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
          >
            Ver morada e contactos <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


function Hero() {
  return (
    <section className="container-prose pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-3xl space-y-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">
          PSICOLOGIA · PORTO
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
          Um espaço para <em className="text-primary not-italic">sentir</em>,
          <br /> pensar e habitar-se.
        </h1>
        <div className="space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acompanhamento psicológico para adultos, no Porto ou online, com uma abordagem psicodinâmica.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Um espaço de escuta e reflexão para o ajudar a compreender o que sente, reconhecer padrões e construir novas formas de se relacionar consigo e com os outros.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            to="/marcacao"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:bg-primary/90 transition"
          >
            Marcar consulta
          </Link>
          <Link
            to="/sobre"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-accent/30 transition"
          >
            Conhecer o meu percurso
          </Link>
        </div>
      </div>
    </section>
  );
}



function Approach() {
  return (
    <section className="container-prose py-4 md:py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
          SOBRE O ACOMPANHAMENTO PSICOLÓGICO
        </p>
        <blockquote className="font-serif text-xl md:text-2xl leading-relaxed text-foreground italic">
          "Parte de nos conhecermos é deixarmos de nos conhecer — abandonarmos
          as histórias limitadoras que contamos a nós próprios acerca de quem
          somos."
        </blockquote>
        <cite className="mt-4 block text-sm not-italic text-muted-foreground">
          — Lori Gottlieb
        </cite>
        <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
          A minha intervenção baseia-se no modelo psicodinâmico, através do qual
          procuro compreender a história e as singularidades de cada pessoa,
          valorizando a relação terapêutica como elemento central do processo
          psicoterapêutico.
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

