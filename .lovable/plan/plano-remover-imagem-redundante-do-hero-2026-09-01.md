# Plano: remover imagem redundante do Hero

## Contexto
A página inicial (`src/routes/index.tsx`) tem atualmente duas fotos do consultório:
1. Uma imagem grande no Hero, à direita do texto de boas-vindas.
2. A nova secção "O Consultório" com foto de destaque e descrição.

Como a secção "O Consultório" já apresenta o espaço de forma intencional, a imagem no Hero repete conteúdo e desfoca a mensagem principal.

## Objectivo
Remover a imagem do Hero e ajustar o layout para que o texto de introdução ocupe a largura total, mantendo a secção "O Consultório" intacta.

## Alterações
1. Em `src/routes/index.tsx`:
   - Remover o bloco de imagem do Hero (`<div className="md:col-span-5">` com a `<img>`).
   - Ajustar a coluna de texto do Hero de `md:col-span-7` para ocupar a largura total (`md:col-span-12` ou equivalente).
   - Garantir que o `max-w-xl` nos parágrafos pode ser alargado para `max-w-3xl` ou removido, conforme preferência visual.
2. Verificar se o asset `heroImg` importado deixa de ser usado e, nesse caso, remover a importação.
3. Revisar o `alt` da imagem restante na secção "O Consultório" para garantir que continua descritivo e acessível.

## Resultado esperado
- Home mais limpa, com foco na mensagem terapêutica.
- Secção "O Consultório" mantida como único local onde a foto do espaço é exibida.
- Layout responsivo preservado.