## Objetivo
Cumprir a obrigação legal de disponibilizar acesso ao Livro de Reclamações Online, adicionando um link discreto no rodapé do site.

## Alterações

**`src/components/SiteLayout.tsx`**
- No rodapé, junto ao link existente "Política de Privacidade", acrescentar um segundo link "Livro de Reclamações" que aponta para `https://www.livroreclamacoes.pt/inicio`.
- Abre em nova aba (`target="_blank"` + `rel="noreferrer noopener"`), com o mesmo estilo discreto do link da Política de Privacidade, separados por um ponto médio (·) para manter a consistência visual.

## Fora do âmbito
- Sem selo/imagem oficial (apenas texto, conforme pedido).
- Sem página interna dedicada — o link vai diretamente para a plataforma oficial.
- Sem alterações à Política de Privacidade nem a outras páginas.
