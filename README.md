# Creator Commerce OS

Repositório documental do **Creator Commerce OS**.

## Fonte canônica

A especificação oficial do produto está em:

- [MASTER_PRODUCT_SPEC.md](./MASTER_PRODUCT_SPEC.md)

**Baseline vigente:** v1.5.5  
**Status:** Product Spec Baseline aprovada, com errata editorial pós-auditoria aplicada.

Neste momento, este repositório é somente documental. Nenhum código de produto deve ser criado aqui sem decisão explícita do Product Owner.

## Governança

- `MASTER_PRODUCT_SPEC.md` é a única fonte editável canônica.
- DOCX/PDF são artefatos derivados.
- Mudanças materiais exigem decisão explícita, changelog e atualização da especificação.

## Memória do projeto

O histórico vivo de conversas, decisões, revisões e contexto operacional está em:

- [MEMORIA_CREATOR_COMMERCE_OS.md](./MEMORIA_CREATOR_COMMERCE_OS.md)

O Documento Mestre continua sendo a fonte normativa; a memória preserva o histórico e o contexto.

## Protótipo navegável do Marco 1

- [prototype/marco1/index.html](./prototype/marco1/index.html) — referência navegável das telas do Marco 1, com dados fictícios claramente marcados como DEMO.

## Referência funcional — Unit Economics

- [prototype/unit-economics/index.html](./prototype/unit-economics/index.html) — tela funcional em dados DEMO no design system branco aprovado.

## UI quality gates

- `npm install`
- `npx playwright install chromium`
- `npm run test:ui`

O gate automatizado abre a SKU Opportunity em navegador real, falha em erro JavaScript não tratado, exige conteúdo renderizado, testa controles críticos, verifica overflow horizontal em 1536 px e preserva captura da página funcional nos resultados de CI.

### Referência visual congelada — SKU Opportunity

- `prototype/sku-opportunity/reference-approved.html` — referência congelada usada pelo teste de regressão visual.
- O teste compara pixels da página funcional com esta referência; mudanças visuais intencionais exigem revisão e atualização explícita da referência.
