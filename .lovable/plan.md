# Adicionar foto do consultório à página inicial

## O que vamos fazer

Adicionar uma nova secção na página inicial — **"O consultório"** — com uma foto grande de destaque do espaço, acompanhada de um pequeno texto descritivo.

## Detalhes do plano

1. **Escolha e envio da foto**
   - A Joana escolhe 1 das 4 fotos do consultório e envia pelo chat.
   - Sugestão: preferir uma imagem que transmita calma, luz natural e conforto do espaço.

2. **Integração na Home (`src/routes/index.tsx`)**
   - Criar uma nova secção abaixo da citação/abordagem, com:
     - subtítulo "O consultório";
     - título curto (ex: "Um espaço acolhedor no Porto");
     - um parágrafo breve sobre o ambiente;
     - a foto em destaque, ocupando toda a largura do contentor.
   - Manter o estilo visual do site: cantos arredondados, sombra suave, paleta Sage & Cream.

3. **Tratamento da imagem**
   - Se a foto for maior que 100 KB, migrá-la para o CDN através de `lovable-assets` (menor peso no repo, entrega mais rápida).
   - Caso contrário, mantê-la em `src/assets/` como as imagens existentes (`hero.jpg`, `about.jpg`).
   - Adicionar `alt` descritivo e acessível (ex: "Sala de consulta com luz natural, poltrona e plantas").

4. **Responsividade e performance**
   - Garantir que a imagem se adapta a mobile e desktop sem quebras de layout.
   - Usar `loading="lazy"` para não atrasar o carregamento inicial da página.

## Não incluído neste plano

- Carrossel ou galeria de múltiplas fotos (o utilizador optou por foto de destaque única).
- Nova página separada para o consultório.
- Alterações às restantes páginas ou à política de privacidade.

## Resultado esperado

A página inicial passa a ter uma secção dedicada ao consultório, com uma imagem de destaque que reforça a sensação de acolhimento e profissionalismo do espaço.
