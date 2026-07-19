Uniformizar a tipografia do parágrafo "Procuro oferecer um espaço seguro..." para igualar o parágrafo anterior ("Sou psicóloga, com consultório na Boavista...").

## O que muda

Em `src/routes/sobre.tsx`, na secção "Sobre mim":

- O bloco `<div className="space-y-5 text-foreground/90 leading-relaxed pt-4">` passa a usar as mesmas classes do parágrafo anterior: `text-lg text-muted-foreground leading-relaxed`.
- O `<p>` interno herda esse estilo (mesmo tamanho, mesma cor mais suave, mesmo espaçamento entre linhas).
- Mantém-se o `pt-4` para preservar o espaçamento vertical entre os dois parágrafos.
- Nenhum outro conteúdo é alterado (texto, quebras de linha e restante da página ficam iguais).

## Resultado visual

Os dois parágrafos passam a ler-se como um bloco coerente — mesma fonte (Nunito Sans, já herdada), mesmo tamanho `text-lg` e mesma cor `muted-foreground`, em vez do contraste atual entre texto maior/claro e texto menor/mais escuro.