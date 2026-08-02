## Objetivo
Ligar o item de menu "Escrita" ao Substack pessoal.

## Alterações

**`src/components/SiteLayout.tsx`**
- No cabeçalho, o link "Escrita ↗" aponta atualmente para `https://substack.com` (genérico).
- Passa a apontar para `https://substack.com/@joanamarquespsi`.
- Mantém `target="_blank"` e `rel="noreferrer noopener"`, o mesmo estilo e a seta ↗.

## Fora do âmbito
- Sem nova página interna de escrita nem listagem de artigos.
- Sem alterações ao rodapé ou a outras páginas.
