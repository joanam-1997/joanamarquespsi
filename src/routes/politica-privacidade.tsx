import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/politica-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Joana Marques" },
      {
        name: "description",
        content:
          "Política de privacidade do site de Joana Marques, psicóloga na Boavista, Porto. Como são tratados os dados pessoais no cumprimento do RGPD.",
      },
      { property: "og:title", content: "Política de Privacidade — Joana Marques" },
      {
        property: "og:description",
        content:
          "Como são tratados os dados pessoais no site de Joana Marques, psicóloga.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PoliticaPrivacidade,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl text-foreground">{title}</h2>
      <div className="space-y-3 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

function PoliticaPrivacidade() {
  return (
    <SiteLayout>
      <article className="container-prose py-16 md:py-24 space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Informação legal</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground">
            Última atualização: 23 de julho de 2026
          </p>
        </header>

        <Section title="1. Responsável pelo tratamento">
          <p>
            Joana Marques, psicóloga, inscrita na Ordem dos Psicólogos Portugueses
            sob a cédula profissional n.º 30473.
          </p>
          <p>
            Consultório: Rua Dominguez Alvarez 44, Piso 4, 4100-801 Boavista, Porto.
            <br />
            E-mail:{" "}
            <a href="mailto:joanatmarques.psi@gmail.com" className="text-foreground underline underline-offset-4">
              joanatmarques.psi@gmail.com
            </a>
            <br />
            Telefone: +351 935 727 106
          </p>
        </Section>

        <Section title="2. Dados recolhidos através do site">
          <p>
            Este site é meramente informativo. Não existem formulários de contacto,
            áreas de registo ou de utilizador, nem qualquer recolha automática de
            dados pessoais durante a navegação.
          </p>
        </Section>

        <Section title="3. Dados recolhidos fora do site">
          <p>
            Quando entra em contacto por e-mail, telefone ou outro meio indicado
            neste site, poderão ser recolhidos os dados necessários para
            responder ao seu pedido, nomeadamente nome, contacto e o conteúdo da
            mensagem.
          </p>
          <p>
            Se optar por contactar via WhatsApp, está a usar um serviço
            prestado pela Meta Platforms, Inc., sujeito à sua própria política
            de privacidade. Os dados partilhados nessa plataforma são tratados
            pela Meta e não por este site.
          </p>
          <p>
            Caso venha a iniciar acompanhamento psicológico, os dados clínicos
            recolhidos no âmbito da consulta são tratados de forma autónoma,
            estando sujeitos ao sigilo profissional e ao Código Deontológico da
            Ordem dos Psicólogos Portugueses.
          </p>
        </Section>

        <Section title="4. Finalidade e base legal">
          <p>Os dados recolhidos destinam-se apenas a:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responder a contactos e pedidos de informação;</li>
            <li>Agendar e organizar consultas;</li>
            <li>Cumprir obrigações legais, fiscais e deontológicas aplicáveis.</li>
          </ul>
          <p>
            O tratamento assenta no consentimento do titular, na execução de
            diligências pré-contratuais ou contratuais e no cumprimento de
            obrigações legais a que a responsável está sujeita.
          </p>
        </Section>

        <Section title="5. Conservação dos dados">
          <p>
            Os dados são conservados apenas pelo período estritamente necessário
            à finalidade para que foram recolhidos ou pelo prazo exigido por
            obrigações legais e deontológicas aplicáveis à prática clínica.
          </p>
        </Section>

        <Section title="6. Partilha com terceiros">
          <p>
            Os dados pessoais não são partilhados, cedidos ou vendidos a
            terceiros, salvo quando tal seja exigido por lei ou por autoridade
            competente.
          </p>
        </Section>

        <Section title="7. Cookies e ferramentas de análise">
          <p>
            Este site não utiliza cookies de rastreio, ferramentas de analítica
            (como Google Analytics) nem serviços de publicidade. Não é feito
            perfilamento dos visitantes.
          </p>
        </Section>

        <Section title="8. Os seus direitos">
          <p>
            Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD),
            pode a qualquer momento exercer os direitos de acesso, retificação,
            apagamento, limitação, oposição e portabilidade dos seus dados.
          </p>
          <p>
            Para exercer estes direitos, contacte:{" "}
            <a href="mailto:joanatmarques.psi@gmail.com" className="text-foreground underline underline-offset-4">
              joanatmarques.psi@gmail.com
            </a>
            .
          </p>
          <p>
            Tem também o direito de apresentar reclamação junto da Comissão
            Nacional de Proteção de Dados (CNPD) —{" "}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground underline underline-offset-4"
            >
              www.cnpd.pt
            </a>
            .
          </p>
        </Section>

        <Section title="9. Alterações a esta política">
          <p>
            Esta política pode ser atualizada sempre que se justifique. A versão
            em vigor está sempre disponível nesta página, com a respetiva data
            de atualização.
          </p>
        </Section>
      </article>
    </SiteLayout>
  );
}
