import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
          Nota: Numa fase inicial, sempre que possível, privilegio uma frequência semanal para dar
          maior continuidade ao processo. A frequência pode depois ser pensada em conjunto.
        </p>

        <div className="mt-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Perguntas frequentes</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-border/70">
                <AccordionTrigger className="py-5 font-serif text-lg text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12">
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

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "A quem se destinam as consultas?",
    a: "As consultas destinam-se a pessoas adultas que procuram apoio psicológico ou um espaço para compreenderem melhor o que sentem.\u00a0\nNão é necessário ter um diagnóstico ou saber exatamente o que dizer para procurar acompanhamento.",
  },
  {
    q: "Onde decorrem as sessões?",
    a: "As sessões podem ser presenciais, no consultório na Boavista (Porto), ou online, por videochamada (Meet).",
  },
  {
    q: "Qual é a frequência das consultas?",
    a: "A frequência é conversada consigo e acordada tendo em conta as suas necessidades e o enquadramento do acompanhamento. Sempre que possível, numa fase inicial, privilegio uma frequência semanal para dar maior continuidade ao processo.",
  },
  {
    q: "Qual é o valor da consulta?",
    a: "O valor é de 50€ por sessão. Cada sessão tem uma duração de 50 minutos.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é, antes de mais, um espaço para nos conhecermos. Serve para perceber o que a traz e o que procura, sem necessidade de saber exatamente por onde começar. É uma conversa de 50 minutos, presencial ou online, a partir da qual decidimos em conjunto se e como faz sentido avançar.",
  },
  {
    q: "O que é a abordagem psicodinâmica?",
    a: "A abordagem psicodinâmica procura compreender o que sentimos e vivemos à luz da nossa história, das nossas relações e das nossas experiências. A relação terapêutica ocupa um lugar central neste processo de compreensão e mudança. É neste modelo que baseio a minha intervenção.",
  },
  {
    q: "O que falamos em consulta é confidencial?",
    a: "Sim. O acompanhamento rege-se pelo sigilo profissional e pelo código deontológico da Ordem dos Psicólogos Portugueses.",
  },
  {
    q: "Como agendo a primeira consulta?",
    a: (
      <>
        Pode contactar-me por WhatsApp, telefone ou e-mail{" "}
        <Link
          to="/marcacao"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          (aqui)
        </Link>
        . As consultas são realizadas mediante marcação prévia.
      </>
    ),
  },
];
