
## Objetivo
Criar uma Política de Privacidade simples e conforme com o RGPD para o site, refletindo o facto de o site ser meramente informativo (sem formulários, sem analytics, sem cookies de tracking).

## O que vou criar

**Nova rota:** `src/routes/politica-privacidade.tsx`
- Head com título e meta description próprios
- Página mantida no mesmo design system (Sage & Cream, Lora + Nunito Sans)
- Conteúdo dividido em secções curtas:
  1. Responsável pelo tratamento (Joana Marques, OPP 30473, morada, email, telefone)
  2. Que dados são recolhidos através do site — nenhum (site apenas informativo)
  3. Dados recolhidos fora do site — quando o utilizador contacta por email/telefone/WhatsApp (nome, contacto, conteúdo da mensagem) e, em caso de acompanhamento, os dados clínicos ficam sujeitos a sigilo profissional e ao Código Deontológico da OPP
  4. Finalidade e base legal (resposta a contactos, execução de contrato, obrigações legais/deontológicas)
  5. Conservação dos dados
  6. Partilha com terceiros — não há; exceção legal
  7. Cookies e analytics — o site não utiliza cookies de tracking nem ferramentas de analytics
  8. Direitos do titular (acesso, retificação, apagamento, oposição, portabilidade, reclamação à CNPD)
  9. Contacto para exercer direitos
  10. Data da última atualização

**Rodapé:** `src/components/SiteLayout.tsx`
- Adicionar link discreto "Política de Privacidade" no rodapé (junto ao copyright)

## O que não faço
- Sem página de Termos de Utilização (não necessária num site informativo)
- Sem banner de cookies (não há cookies de tracking)
- Sem alterações a outras páginas

## Nota
O texto é redigido em português, com linguagem clara e não jurídica. Podes rever e ajustar qualquer secção depois.
