## Objetivo
Adicionar uma ligação direta para WhatsApp no site e atualizar a Política de Privacidade para refletir o envio de dados para um serviço de terceiros.

## Alterações

### `src/components/SiteLayout.tsx`
- No rodapé, junto ao telefone e e-mail, adicionar um link/icon para WhatsApp.
- URL: `https://wa.me/+351935727106` (formato internacional sem espaços).
- Abre num novo separador com `target="_blank"` e `rel="noreferrer noopener"`.
- Manter o estilo existente do rodapé (text-sm, cor muted-foreground/foreground).

### `src/routes/marcacao.tsx`
- Na secção de contactos, adicionar uma linha/botão para contacto via WhatsApp.
- Usar o mesmo número `+351 935727106` e URL `https://wa.me/+351935727106`.
- Manter o estilo minimalista da página.

### `src/routes/politica-privacidade.tsx`
- Atualizar a secção "Dados recolhidos fora do site" para mencionar que, ao contactar via WhatsApp, o utilizador está a usar um serviço da Meta com política própria.
- Atualizar a secção "Partilha com terceiros" para referir que links externos (WhatsApp, Instagram, Substack, Livro de Reclamações) levam para plataformas de terceiros.
- Manter a afirmação de que o site não utiliza cookies nem ferramentas de análise.

## Fora do âmbito
- Não serão adicionados cookies nem scripts de tracking.
- Não será integrado widget/iframe do WhatsApp Business.
- Não serão alterados os restantes conteúdos do site.
