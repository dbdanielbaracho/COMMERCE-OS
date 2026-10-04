# MEMÓRIA DO PROJETO — Creator Commerce OS

> Documento vivo de memória operacional e histórica do projeto.
>  
> **Não substitui o `MASTER_PRODUCT_SPEC.md`**, que continua sendo a fonte canônica normativa do produto.
> Este arquivo registra o que foi discutido, decidido, revisado, rejeitado, alterado e deixado em aberto ao longo das conversas.

## 0. Regra de uso desta memória

- Projeto: **Creator Commerce OS / COMMERCE-OS**.
- Repositório: `dbdanielbaracho/COMMERCE-OS`.
- Não misturar com Growth OS, MLivreTrabalho, PrediBeacon, AI Wealth OS, Euka.ai como projeto separado ou qualquer outro projeto.
- FastMoss, Kalodata, Cruva, Euka e TikTok Affiliate Center aparecem aqui apenas como benchmarks/concorrentes/fontes do Creator Commerce OS.
- Toda conversa material sobre produto, arquitetura, dados, APIs, UX, benchmarks, decisões, riscos, roadmap, governança ou documentação deve ser resumida e acrescentada aqui.
- O histórico aqui pode conter hipóteses e posições que depois foram substituídas. Quando houver conflito, vale a decisão mais nova e o `MASTER_PRODUCT_SPEC.md`.
- Mudanças normativas não devem ser feitas apenas aqui: precisam primeiro ou simultaneamente atualizar o `MASTER_PRODUCT_SPEC.md` e o changelog/ADR correspondente.

## 1. Estado atual

- **Documento Mestre vigente:** v1.5.2 FINAL.
- **Status:** Product Spec Baseline aprovada e congelada para execução; errata editorial pós-auditoria aplicada.
- **Fonte canônica:** `MASTER_PRODUCT_SPEC.md`.
- **Word final:** `Creator_Commerce_OS_Documento_Mestre_v1.5.2_FINAL.docx`.
- **Revisão adversarial:** concluída sem bloqueador material; correções finais foram editoriais/coerência.
- **Código de produto:** ainda não iniciado neste repositório.
- **Repositório GitHub:** criado em 03/10/2026 e inicialmente usado somente como repositório documental.

## 2. Definição do produto

Creator Commerce OS é um produto independente especializado em transformar sinais de social commerce em decisões e vendas por meio de creators.

Ciclo principal consolidado:

`DISCOVER → DECIDE → MATCH → CREATE → ACTIVATE / ENGAGE & SCALE → ATTRIBUTE → LEARN`

Promessa resumida:

> Descobrir o que está vendendo, por que está vendendo, quem está fazendo vender, ativar e desenvolver os creators certos, escalar o conteúdo vencedor e aprender com cada resultado.

Áreas principais consolidadas:

1. Opportunities
2. Intelligence
3. Creators
4. Campaigns
5. Performance

O produto não deve ser tratado como:
- ERP;
- CRM comercial genérico;
- social media manager;
- dashboard de TikTok Shop;
- cópia literal de concorrentes;
- módulo do Growth OS.

## 3. Benchmarks e concorrentes

### FastMoss
Referência principal para:
- pesquisa densa de produtos;
- creators;
- shops;
- categorias;
- vídeos;
- ads;
- live commerce;
- rankings;
- filtros de alta densidade;
- historical/market intelligence.

Diretriz: igualar ou superar profundidade funcional relevante, não copiar menus.

### Kalodata
Referência principal para:
- analytics de TikTok Shop;
- filtros;
- tabelas;
- performance;
- produtos/categorias/shops/creators;
- vídeos/lives;
- pesquisa e investigação de mercado.

Limite importante: evidência pública/amostral não deve ser confundida com cobertura comercial contratada.

### Cruva
Referência principal para:
- creator operations;
- CRM;
- outreach;
- campanhas;
- samples;
- rights;
- Spark Ads;
- creator lifecycle;
- GMV/attribution/halo claims.

Ponto já consolidado: ausência de endpoint público não prova ausência de capability no produto.

### Euka
Referência principal para:
- creator programs;
- dynamic segments;
- automation/agents;
- Copilot;
- Social Intelligence;
- retainers;
- contests;
- rights;
- paid amplification;
- workflow orientado a operação.

Euka deve ser benchmark do Creator Commerce OS; não é o projeto em si.

### TikTok Affiliate Center
Benchmark nativo/gratuito.
Toda capability deve passar pelo teste:
- o que o TikTok já oferece nativamente?
- qual valor adicional mensurável oferecemos?
- o que continua valioso se um endpoint desaparecer?
- o que continua valioso se o TikTok copiar a feature?

## 4. Direção de UX e design

Decisão consolidada:
- **Opportunities:** decision-first.
- **Intelligence:** alta densidade.
- **Creators / CRM / Campaigns:** operation-first.

Intelligence deve permitir:
- sidebar;
- seleção de mercado/plataforma;
- busca global;
- favoritos/alerts;
- Products / Creators / Videos / Shops / Brands;
- Trends / Rankings / Compare / Market;
- Discovery / Lists / Outreach / Campaigns / CRM;
- shop spy / ads / API;
- filtros densos, KPIs, gráficos, cards e tabelas.

Regra: botão, filtro, tabela ou ação não pode ser decorativo. Toda interface precisa corresponder a comportamento funcional real.

## 5. Arquitetura e engenharia

Princípios consolidados:
- arquitetura modular;
- PostgreSQL como base;
- store analítico especializado somente quando justificado por ADR/workload;
- Redis/BullMQ ou equivalente para jobs quando necessário;
- object storage;
- TypeScript/Next.js no core;
- Python somente quando ML/data justificar;
- LLM gateway com política;
- LLM nunca é fonte de verdade numérica;
- state machines explícitas;
- idempotência;
- outbox;
- audit trail;
- degradação explícita;
- Production Truth Gate.

Proveniência:
- MEASURED
- ESTIMATED
- INFERRED
- USER_PROVIDED / UNKNOWN quando aplicável ao contexto econômico e de fonte.

Taxonomia de evidência de capability/benchmark:
- PUBLIC-CONFIRMED
- AUTH-VERIFIED
- VENDOR-CLAIM
- UNKNOWN

## 6. Dados, direitos e tenancy

Decisões centrais:
- isolamento por tenant;
- RLS/workspace boundary;
- derived data herda a política mais restritiva da fonte;
- não usar dados restritos de um cliente para outro sem base jurídica/contratual explícita;
- Global Intelligence e Tenant Learning são conceitos separados;
- provenance/rights registry deve ser imposto no código;
- purpose binding.

Finalidades consolidadas de purpose binding:
1. operar a conta;
2. analytics do cliente;
3. modelo/aprendizado do cliente;
4. inteligência global somente com dados cuja licença permita uso transversal.

Classificação de dependência de plataforma:
- NONE
- LOW
- MATERIAL
- CRITICAL

## 7. TikTok Shop / Affiliate APIs / termos

Pontos consolidados:
- API e dados do TikTok devem ser tratados como tenant-scoped por padrão.
- Não montar base global de creators usando cache de buscas de múltiplos clientes sem autorização contratual explícita.
- Não assumir que consentimento do merchant resolve todas as restrições.
- Seller API para uso do seller e Partner/Developer integration para serviço a terceiros podem ter termos diferentes.
- Há risco contratual em replicar/recriar funcionalidades centrais do TikTok Shop.
- A versão aplicável dos termos ao uso real no Brasil precisa permanecer explicitamente rastreada.
- Affiliate APIs são uma dependência crítica para shortlist/outreach/samples quando a integração real exigir essas capacidades.
- Enquanto aprovação externa não existir, o produto pode usar fixtures para desenvolvimento, mas não fingir capability real.

## 8. Brasil e conectores

Brasil foi tratado como hipótese prioritária de primeiro mercado, não como fato irrevogável.

Live Commerce:
- primeira classe se Brasil for confirmado;
- prioridade condicionada às entrevistas e à cobertura real de dados.

Famílias de conectores:
- ERP/hub: Bling, Olist e outros;
- commerce platform: Shopify, Nuvemshop, VTEX e outros.

Bling:
- REST + webhooks;
- nenhum MCP oficial confirmado;
- pedidos/produtos/estoque;
- alguns campos de custo/produto-fornecedor;
- não assumir que isso equivale automaticamente a COGS contábil final.

Regra de escolha de conector:
- usar matriz VERIFIED / PARTIAL / UNKNOWN;
- validar via entrevistas;
- não inventar score numérico sem evidência;
- não escolher o primeiro conector por conveniência técnica.

## 9. Marco 1

Thin slice consolidada:

`1 SKU → shortlist creators → activation → content → attributed order → unit economics → learning → next action`

Global Market Intelligence licenciada não é pré-requisito do Marco 1.

### Creator activation
Começa como **Activation Heuristic / ruleset v0.1**, não ML calibrado.

Fatores discutidos:
- afinidade com produtos comparáveis;
- nível do creator quando fornecido pelo provider;
- ajuste de comissão;
- relacionamento prévio com o merchant;
- recusa recente;
- confiabilidade;
- performance relevante.

Ruleset:
- transparente;
- versionado;
- explicável;
- avaliado antes de mudar.

## 10. Unit Economics

Bases possíveis de custo:
- SUPPLIER_PURCHASE_PRICE
- ERP_COST
- SHOPIFY_UNIT_COST
- USER_ENTERED_COGS
- AVERAGE_COST
- LANDED_COST
- UNKNOWN

Precedência configurável por merchant.

Waterfall consolidado:

Gross sales  
− refunds  
− TikTok/platform fees  
− affiliate commission  
− shipping/fulfillment  
− product cost  
− sample cost  
− creator fixed fee  
− ad spend, quando conectado  
− merchant tax estimate  
= Contribution Margin

Estados de linha econômica:
- MEASURED_PROVISIONAL
- MEASURED_SETTLED
- USER_PROVIDED
- ESTIMATED
- UNKNOWN

Estados de lucro:
- PROFIT_CONFIRMED
- PROFIT_INCOMPLETE
- PROFIT_NEGATIVE

Economic Confidence separado:
- HIGH
- MEDIUM
- LOW
- INSUFFICIENT

Regras:
- nunca inventar margem;
- GMV não substitui lucro para decisões de escala;
- custo ausente é caso normal e deve gerar resolução explícita;
- negativo com baixa confiança pode virar REVIEW_ECONOMICS;
- escala agressiva exige economics confiável.

Tax:
- Marco 1 não vira engine fiscal;
- usar taxa efetiva informada pelo merchant/accountant ou UNKNOWN.

## 11. Próxima ação / Next Best Action

Códigos discutidos/consolidados:
- SCALE_CREATOR
- REPEAT_CREATOR
- RAISE_COMMISSION
- LOWER_COMMISSION
- FOLLOW_UP_SAMPLE
- WAIT_FOR_CONTENT
- PAUSE_SKU_LOW_STOCK
- REVIEW_ECONOMICS
- STOP_NEGATIVE_MARGIN
- TRY_NEW_CREATOR_SEGMENT

Regra:
`recommended action → action taken → outcome`

Isso deve virar dado de aprendizado posterior.

## 12. Attribution e Commerce Impact

Separação consolidada:
- **Desempenho atribuído:** receita/pedidos medidos pela atribuição disponível.
- **Contexto do negócio:** vendas totais e outros canais no mesmo período.

Não alegar causalidade onde só existe correlação.

Commerce Impact só deve ser usado para estimativas incrementais quando houver metodologia suficiente; caso contrário, declarar evidência insuficiente.

## 13. Production Gate e Parity+

Production Truth Gate verifica:
- isolamento de tenant;
- tokens protegidos;
- sem pedidos duplicados;
- sem números fabricados;
- provenance;
- quotas/opt-out/dedupe;
- audit;
- empty/error states;
- controles funcionais.

Parity+:
- benchmark por capability;
- fixture/workflow reproduzível;
- UX benchmark;
- objetivo de superioridade;
- revisão adversarial.

Regra: PUBLIC-CONFIRMED prova existência, não prova paridade.

## 14. ADR-000 — Market Data

Objetivo:
decidir se e como dados de mercado externos podem ser usados em produção.

Candidatas discutidas:
- FastMoss
- Kalodata
- Tabcut

Checklist contratual:
- origem dos dados;
- direitos de exibição;
- derivação;
- cache;
- retenção;
- histórico;
- aprendizado/model training;
- continuidade após rescisão;
- mudança de termos;
- auditoria/garantias.

Modos de tratamento previstos:
- QUERY_ONLY
- TTL_CACHE
- PERSIST_SNAPSHOTS
- FULL_HISTORY

Implementar a política/enum cedo; só habilitar os modos permitidos pelo contrato real.

## 15. Governança documental

Decisão consolidada:
- `MASTER_PRODUCT_SPEC.md` = única fonte canônica editável.
- DOCX/PDF = artefatos gerados.
- revisões adversariais = documentos separados.
- Documento Mestre registra decisões vigentes, não todo o debate.
- este `MEMORIA_PROJETO.md` registra o debate/histórico/contexto operacional.

Rótulos de origem de mudança:
- EXISTING-BUT-NOT-ENFORCED
- NEW REQUIREMENT

Estados de pendência:
- RESOLVED
- EXTERNAL ACTION REQUIRED
- OPEN RESEARCH
- DECISION REQUIRED

## 16. Histórico de versões e revisões

### v0.2
Consolidou:
- ciclo Discover→Decide→Match→Create→Activate→Engage & Scale→Attribute→Learn;
- cinco áreas principais;
- arquitetura técnica inicial;
- taxonomia MEASURED/ESTIMATED/INFERRED.

### v0.3
Introduziu Parity+ e gates por capability.

### v0.5–v0.8
Auditorias competitivas aprofundaram:
- Euka;
- Cruva;
- FastMoss;
- Kalodata;
- capabilities públicas;
- gaps de auth;
- dados/UX;
- riscos de inferência a partir de páginas públicas.

### v1.4
Documento Mestre consolidado antes das rodadas adversariais finais.

### v1.5
Incorporou:
- ADR-000;
- Brasil;
- Marco 1;
- Unit Economics;
- decision layer;
- governança;
- riscos;
- pendências;
- fontes;
mas teve problema de integração aditiva e duplicações.

### v1.5.1
Correções:
- roadmap único;
- ClickHouse não obrigatório;
- identidade;
- stack;
- riscos;
- fontes;
- histórico/stubs;
- redução de duplicações.

Revisão adversarial concluiu:
- nenhum problema nos critérios objetivos principais;
- ainda havia conteúdo aprovado perdido;
- roadmap paralelo;
- inconsistências de evidência;
- duplicidade/URLs de fontes;
- ausência de mapa cláusula→regra.

### v1.5.2
Reinseriu:
- ADR-000 completo;
- conectores Brasil;
- purpose binding;
- reversível × irreversível;
- labels de governança;
- ruleset v0.1;
- Next Best Action;
- dependência de plataforma;
- mapa cláusula→regra;
- fontes normalizadas;
- roadmap único.

### v1.5.2 FINAL
Errata editorial pós-auditoria:
- esclareceu arquitetura-alvo v1 vs implementação inicial v0/v0.1;
- unificou `PROFIT_CONFIRMED`;
- melhorou rastreabilidade de evidência;
- vinculou fontes restantes ao corpo;
- removeu hard-code frágil de níveis de creator;
- manteve escopo, arquitetura e roadmap inalterados.

## 17. Decisões explícitas de processo do usuário

- O documento deve permanecer completo e servir como “documento da verdade”.
- Não misturar projetos.
- Revisões devem ser críticas/adversariais.
- Claude não é autoridade final; ChatGPT também não.
- Decisões materiais dependem de evidência e aprovação do Product Owner.
- Não ficar reabrindo grandes análises competitivas sem necessidade.
- Concorrentes entram como benchmark de capability durante a construção.
- Antes de construir, o Documento Mestre deveria estar coerente e fechado.
- Em 03/10/2026 o usuário criou o repositório `dbdanielbaracho/COMMERCE-OS`.
- Em seguida, o `MASTER_PRODUCT_SPEC.md` e o `README.md` foram commitados no branch `main`.
- O usuário decidiu que, neste momento, queria tratar primeiro do Documento Mestre antes de iniciar construção.

## 18. Pendências externas conhecidas

- Aprovação/documentação logada das Affiliate APIs quando aplicável.
- Termos comerciais e data rights de FastMoss/Kalodata/possíveis providers.
- Confirmação dos termos jurídicos aplicáveis ao uso real no Brasil.
- Parecer jurídico quando necessário para pontos de alto risco.
- Entrevistas de mercado para decidir:
  - primeiro mercado;
  - primeiro commerce connector;
  - preço.
- Auditoria autenticada de capabilities onde a evidência pública não basta.

## 19. Regra de atualização daqui para frente

A partir de agora:
1. toda conversa material neste chat sobre o Creator Commerce OS deve gerar uma entrada nova nesta memória;
2. a entrada deve registrar data, assunto, decisão, motivo, impacto e pendências;
3. se a conversa alterar o produto, também atualizar `MASTER_PRODUCT_SPEC.md`;
4. se for apenas contexto, debate ou decisão operacional, atualizar somente este arquivo;
5. não apagar histórico anterior — marcar como substituído quando necessário.

---

## 20. Log contínuo

### 03/10/2026 — Criação da memória do projeto
**Pedido do Product Owner:** criar um documento de memória no qual tudo que já foi conversado e tudo que for conversado daqui para frente sobre o Creator Commerce OS seja preservado e guardado também no GitHub.

**Decisão:** criar `MEMORIA_PROJETO.md` separado do `MASTER_PRODUCT_SPEC.md`.

**Motivo:** o Documento Mestre deve continuar normativo e limpo, enquanto a memória preserva histórico, contexto, decisões, revisões, mudanças de posição e pendências.

**Estado:** ativo a partir desta data.

### 03/10/2026 — Revisão adversarial do layout branco pelo Claude
**Contexto:** o layout visual em fundo branco foi enviado para revisão adversarial contra o Documento Mestre v1.5.2 FINAL e benchmarks competitivos.

**Conclusão validada:** a imagem não deve ser congelada como design de referência. Ela representa corretamente a direção visual geral, mas ainda funciona apenas como moodboard/protótipo estático e contém desvios materiais do Documento Mestre.

**Principais pontos confirmados:**
- Marco 1 deve começar por Merchant Opportunity Engine de 1 SKU com margem/indisponível, estoque e comissão, e não por oportunidade global de mercado.
- Unit Economics, Economic Coverage, Economic Confidence e próxima ação precisam aparecer como elementos centrais, não subordinados a GMV/ROI genéricos.
- Creators precisam de justificativa/ruleset explicável; não apenas seguidores e variação percentual.
- Outreach deve representar produto, comissão, mensagem, follow-up, quotas/aprovação e estados reais.
- Toda métrica precisa de origem/proveniência, confiança e freshness; nenhuma feature pode depender de dado sem direito técnico/contratual.
- Dados TikTok permanecem tenant-scoped; métricas agregadas cross-tenant não podem ser usadas sem base específica.
- A navegação não deve introduzir módulos não canônicos como Capital; Market deve permanecer dentro da arquitetura vigente de Intelligence quando aplicável.
- Connections/Coverage e estados empty/partial/stale/unauthorized/degraded precisam existir.
- O layout branco, sidebar e KPIs compactos permanecem como elementos visuais aproveitáveis.

**Decisão operacional:** não congelar a imagem atual. O próximo desenho deve priorizar as telas do Marco 1 e obedecer ao contrato funcional da seção 35 antes de expandir para Intelligence global/Market.

**Observação:** dizer que a imagem é “não funcional” significa que uma imagem estática não comprova funcionalidade. A funcionalidade somente poderá ser aceita em protótipo navegável/implementação com contratos de comportamento, dados, estados e testes.

### 04/10/2026 — Segunda revisão adversarial do layout Marco 1
**Contexto:** a segunda versão do layout foi reorganizada em torno do Marco 1: SKU → shortlist → outreach → campanha → Unit Economics → próxima ação.

**Conclusão validada:** houve avanço estrutural significativo, mas o layout ainda não pode ser congelado.

**Erros materiais confirmados:**
- Unit Economics não fechava matematicamente e omitia custo do produto; também faltavam frete, imposto e reembolsos.
- Economic Coverage foi tratada como veredito qualitativo em vez de cobertura de GMV/pedidos/SKUs com base econômica suficiente.
- Próxima ação recomendava escalar apesar de economics incompletos; a ação correta em dados incompletos deve ser REVIEW_ECONOMICS/aguardar liquidação conforme o caso.
- A tela de SKU misturava taxa de plataforma e comissão de afiliado; a comissão de afiliado precisa ser comparada com a faixa observada de comparáveis.
- Shortlist precisa explicar por que cada creator foi recomendado e expor origem/confiança dos sinais.
- Pagamento fixo não deve parecer disponível no Marco 1 quando pertence a onda posterior.
- Learning deve registrar recomendação → decisão → ação → resultado e diferenciar observação de aprendizado/causalidade.
- Connections/Coverage continua faltando como tela explícita.
- Navegação deve seguir as cinco áreas canônicas; Market não deve aparecer como área primária separada de Intelligence.
- Estados demo/partial/stale/freshness ainda precisam aparecer explicitamente.

**Correção à revisão do Claude:** não existe requisito canônico de níveis fixos L1–L6. A versão final do Documento Mestre usa nível do creator somente quando fornecido pela plataforma, no formato genérico L1–Ln, como sinal categórico e não verdade isolada.

**Decisão operacional:** a próxima versão deve ser um protótipo navegável ou especificação funcional editável, não outra imagem gerada. O foco passa a ser verdade econômica, rastreabilidade e comportamento testável antes de refinamento visual.
