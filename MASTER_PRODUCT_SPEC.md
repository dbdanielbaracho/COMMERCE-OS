**CREATOR  
COMMERCE OS**

Documento Mestre de Produto, UX, Dados, IA e Arquitetura Técnica

Produto novo e independente • Codinome de trabalho • Nome comercial
final: TBD

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>PROMESSA DO PRODUTO<br />
Descobrir o que está vendendo, por que está vendendo, quem está fazendo
vender, ativar e desenvolver os creators certos, escalar o conteúdo
vencedor e aprender com cada resultado.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

Versão: 1.5.3  
Status: PRODUCT SPEC BASELINE APROVADA — v1.5.3 incorpora gates visuais/funcionais e contrato SKU Opportunity; congelada para execução; mudanças futuras exigem decisão explícita e changelog  
Data: 04 de outubro de 2026  
Fonte de verdade: MASTER_PRODUCT_SPEC.md no repositório; este DOCX é
artefato gerado

**Princípio de construção**

***“Cobrir as capacidades relevantes dos líderes e executá-las em nível
igual ou superior. Paridade não é presença na UI: é profundidade,
confiabilidade, UX, integração e resultado comprovados por
benchmark.”***

Baseline congelada para execução: a partir desta versão, mudanças de
produto entram por decisão explícita, changelog e atualização primeiro
no MASTER_PRODUCT_SPEC.md.

# Controle do documento

| **Campo**                                     | **Definição**                                                                                                                                                                                                                                      |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Documento**                                 | Documento Mestre — Creator Commerce OS                                                                                                                                                                                                             |
| **Versão**                                    | v1.5.3                                                                                                                                                                                                                                             |
| **Status**                                    | PRODUCT SPEC BASELINE APROVADA — v1.5.3 incorpora gates visuais/funcionais e contrato SKU Opportunity; congelada para execução. Mudanças futuras exigem decisão explícita, changelog e atualização primeiro no MASTER_PRODUCT_SPEC.md.                                              |
| **Responsável por especificação/arquitetura** | ChatGPT — coordenação, arquitetura, implementação e integração                                                                                                                                                                                     |
| **Revisão adversarial**                       | Claude — revisão independente de requisitos, arquitetura, código, testes e regressões materiais                                                                                                                                                    |
| **Aprovação de decisões materiais**           | Usuário / Product Owner                                                                                                                                                                                                                            |
| **Regra de versionamento**                    | Qualquer mudança material em produto, arquitetura, dados, segurança ou gates gera nova versão ou ADR rastreável.                                                                                                                                   |
| **Regra de congelamento**                     | A fonte editável canônica é MASTER_PRODUCT_SPEC.md. DOCX/PDF são artefatos gerados. Nenhuma posição de ChatGPT ou Claude é congelada por autoridade; decisões exigem evidência, implementação/teste quando aplicável e aprovação do Product Owner. |

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>IMPORTANTE<br />
Este documento descreve o produto final e a sequência de construção.
Construir em fases não significa aceitar módulos superficiais: cada fase
precisa cumprir seu próprio gate de profundidade antes de avançar.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

# Sumário executivo do documento

1\. Resumo executivo e definição do produto

2\. Decisões congeladas e princípios inegociáveis

3\. Mercado-alvo, clientes e Jobs-to-be-Done

4\. Concorrência, benchmarks e meta de paridade/superação

5\. Arquitetura funcional do produto

6\. Jornadas principais e experiência do usuário

7\. Especificação funcional detalhada dos motores

8\. Design e UX — profundidade no backend, simplicidade no frontend

9\. Estratégia de dados, proveniência e acesso às plataformas

10\. Arquitetura técnica de referência

11\. Modelo de dados e eventos

12\. APIs, integrações e contratos

13\. IA/ML — scoring, matching, oportunidade e aprendizado

14\. Segurança, privacidade, compliance e antiabuso

15\. Confiabilidade, performance e observabilidade

16\. Estratégia de testes e Production Truth Gate

17\. CI/CD, ambientes e operação

18\. Sequência de construção

19\. Definition of Done e gates de excelência

20\. Governança de construção — ChatGPT + Claude

21\. Riscos, dependências e decisões pendentes

22\. Apêndices

23\. Histórico do Blueprint v0.3 — conteúdo substituído

24\. Doutrina competitiva Parity+ — igualdade ou superioridade por
capability

25\. Competitive Capability Registry v0.4 — auditoria pública dos quatro
benchmarks

26\. Auditoria autenticada e incorporação competitiva v0.5

27\. Cruva — auditoria pública sem plano v0.6

28\. FastMoss — auditoria pública sem plano v0.7

29\. Kalodata — auditoria pública sem plano v0.8

30\. Histórico de design v0.9 — conteúdo substituído

31\. Histórico de design v1.0 — conteúdo substituído

32\. Histórico de design v1.1 — conteúdo substituído

33\. Histórico de design v1.2 — conteúdo substituído

34\. Histórico de design v1.3 — conteúdo substituído

35\. Direção visual e funcional v1.4 — Intelligence-First Workspace

36\. Changelog v1.5.3 e pendências vigentes

Anexo H — Histórico de especificações substituídas

# 1. Resumo executivo e definição do produto

Creator Commerce OS é um produto novo e independente, especializado em
transformar sinais de social commerce em vendas por meio de creators.
Ele combina a profundidade de market/commerce intelligence de Kalodata e
FastMoss com creator discovery, outreach, CRM e affiliate operations de
Cruva, e incorpora a evolução mais ampla de creator programs, automações
comportamentais, rights, paid amplification e AI Copilot observada na
Euka. Essas capacidades são reorganizadas em um único ciclo de decisão,
execução, escala, atribuição e aprendizado.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th>DEFINIÇÃO CURTA<br />
Uma plataforma de AI Creator Commerce que une market intelligence,
creator intelligence, execução, creator programs, direitos de conteúdo,
atribuição e aprendizado em um único sistema operacional
especializado.</th>
</tr>
</thead>
<tbody>
</tbody>
</table>

O produto não será vendido como “um pacote de ferramentas”. A unidade de
valor é o ciclo completo:

| **Etapa**      | **Pergunta que o produto resolve**                                                | **Saída**                                                                                      |
|----------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| **Discover**   | O que está mudando e começando a vender?                                          | Sinais, tendências, produtos, creators e concorrentes relevantes.                              |
| **Decide**     | Qual oportunidade realmente importa para esta marca?                              | Opportunity Score, explicação, risco, janela e ação recomendada.                               |
| **Match**      | Quem tem maior chance de vender este produto?                                     | Creator shortlist, Product-Creator Fit e justificativas.                                       |
| **Create**     | O que cada creator deveria produzir?                                              | Briefing, formatos, hooks, mensagens e restrições.                                             |
| **Activate**   | Como colocar a campanha em operação?                                              | Outreach, CRM, samples, workflow, colaboração e acompanhamento.                                |
| Engage & Scale | Como transformar bons creators e conteúdos em um motor recorrente de crescimento? | Contests, retainers, community, contracts, content rights, paid amplification e re-engagement. |
| **Attribute**  | O que de fato gerou resultado?                                                    | Creator → conteúdo → produto → pedido → GMV → margem, com confiança.                           |
| **Learn**      | O que devemos mudar na próxima rodada?                                            | Aprendizados por marca, categoria, creator, conteúdo e oferta.                                 |

A ambição final é simples: quando um usuário abrir o produto, ele deve
encontrar as melhores oportunidades e ser capaz de ir da decisão até a
campanha sem sair da plataforma. A interface deve esconder a
complexidade dos dados, APIs, modelos, jobs e atribuição.

## 1.1 North Star

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>NORTH STAR</strong></p>
<p>Ser o melhor sistema para responder: “Qual é minha melhor
oportunidade de Creator Commerce agora, quais creators devo usar, que
conteúdo devo pedir e o que devo fazer para transformar isso em
vendas?”</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 1.2 O que o produto não é

- Não é ERP, CRM comercial genérico ou e-commerce próprio.

- Não é uma plataforma genérica de social media management.

- Não é um substituto de mídia paga ou uma suíte de SEO.

- Não é um “dashboard de TikTok Shop” com dezenas de gráficos sem
  decisão.

- Não é uma cópia literal de Kalodata, FastMoss, Cruva, Euka ou Reacher.

- Não é parte, módulo, extensão ou dependência do Growth OS.

# 2. Decisões congeladas e princípios inegociáveis

| **Princípio**                   | **Regra**                                                                                                                                                             |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Produto independente**        | Marca, produto, roadmap, repositório, dados e arquitetura próprios. Integrações futuras com outros produtos só por decisão explícita e via APIs públicas/contratuais. |
| **Depth before breadth**        | O produto final terá o ciclo completo, mas cada capacidade só entra quando atingir profundidade de especialista.                                                      |
| **Feature parity essencial**    | Funcionalidades essenciais dos líderes são requisitos, não inspiração opcional. Cada uma terá um benchmark e um gate de qualidade.                                    |
| **Decision-first**              | Dados devem culminar em decisão ou ação. Dashboard não é produto final.                                                                                               |
| **Proveniência obrigatória**    | Todo número derivado deve ser rotulado como MEASURED, ESTIMATED ou INFERRED e guardar sua origem.                                                                     |
| **Complexidade no backend**     | O usuário não deve operar como analista de dados. Máximo de cinco áreas primárias na navegação.                                                                       |
| **Explicabilidade**             | Scores e recomendações devem mostrar fatores principais, confiança, frescor e limitações.                                                                             |
| **Sem “fake precision”**        | Nunca exibir precisão aparente quando a fonte não suporta; intervalos e confiança substituem números inventados.                                                      |
| **Automação com controle**      | Agentes podem recomendar e executar dentro de políticas, limites, consentimento e auditoria; ações sensíveis precisam de regras e reversibilidade.                    |
| **Qualidade antes de expansão** | Nova plataforma/geografia só entra depois do módulo atual cumprir os gates de dados, UX, atribuição e confiabilidade.                                                 |

## 2.1 Regra de entrada de funcionalidades

Uma feature só entra no roadmap quando satisfaz as quatro perguntas
abaixo:

1\. Ela melhora diretamente descoberta, decisão, matching, criação,
ativação, atribuição ou aprendizado?

2\. Existe fonte de dados legal/técnica suficiente para fazê-la bem?

3\. Existe benchmark objetivo de qualidade?

4\. Conseguimos testar sua qualidade de forma automatizada e
reproduzível?

Se a resposta for “não” em qualquer uma, a feature fica fora até a
dependência ser resolvida.

# 3. Mercado-alvo, clientes e Jobs-to-be-Done

O produto é B2B e deve ser desenhado primeiro para marcas e operadores
que já tratam creators como canal de venda, não apenas branding. A
arquitetura suporta agências e múltiplas lojas desde o início, mas a UX
deve priorizar uma pessoa tomando decisões e executando rapidamente.

| **Persona**                               | **Dor principal**                                                | **Resultado desejado**                                                      |
|-------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Head of TikTok Shop / Social Commerce** | Dados dispersos, creators demais, pouca clareza de prioridade.   | Saber onde atacar, quem ativar e como escalar GMV lucrativo.                |
| **Affiliate/Creator Manager**             | Outreach manual, CRM fragmentado, samples e follow-ups caóticos. | Operar centenas/milhares de relações sem planilhas e sem perder contexto.   |
| **Brand/Growth Lead**                     | Não sabe diferenciar creator de alcance de creator de venda.     | Tomar decisões por performance comercial e fit, não vanity metrics.         |
| **Agência / TSP / operador multi-shop**   | Múltiplas lojas, caixas de entrada, campanhas e equipes.         | Padronizar operação, ownership, SLA e reporting por cliente.                |
| **Founder / SMB seller**                  | Pouca equipe e pouca capacidade analítica.                       | Receber poucas recomendações claras e executá-las com o mínimo de trabalho. |

## 3.1 Jobs-to-be-Done prioritários

- Quando uma categoria começa a acelerar, quero saber cedo se ela é
  relevante para minha marca antes de desperdiçar tempo em tendências
  irrelevantes.

- Quando tenho um produto para escalar, quero encontrar creators com
  evidência de capacidade de vender produtos semelhantes.

- Quando seleciono creators, quero saber o que pedir para cada um
  produzir com base em evidência real de conteúdo que converte.

- Quando executo outreach, quero automação que respeite limites, evite
  duplicidade e preserve contexto.

- Quando envio amostras, quero saber quem recebeu, quem publicou, quem
  não publicou e qual resultado cada amostra gerou.

- Quando uma campanha termina, quero saber o que causou resultado e como
  isso muda a próxima decisão.

# 4. Concorrência, benchmarks e meta de paridade/superação

O mercado nasceu dividido em dois arquétipos: (A) inteligência de TikTok
Shop, liderada por ferramentas como Kalodata/FastMoss; e (B) creator
affiliate operations, com Cruva/Euka/Reacher. Em 2026 esses blocos estão
convergindo: Euka adicionou Social Intelligence e Copilot acionável,
Cruva expandiu competitor/social intelligence, e FastMoss avançou em
creator collaboration e creative tooling. Nosso produto deve cobrir o
ciclo completo sem perder profundidade em nenhum bloco. A meta do
produto final não é cobrir apenas a interseção desses arquétipos: é
atingir paridade funcional nas capabilities relevantes de cada líder
dentro do escopo de Creator Commerce e superar a experiência integrada
de ponta a ponta.

## 4.1 Bloco A — Commerce / Market Intelligence

| **Benchmark**         | **Força observada**                                                                                                                                                                                                          | **Obrigação para nós**                                                                                                                                                                          |
|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Kalodata**          | \[VERIFICADO — fonte pública\] Produtos, creators, lojas, categorias, vídeos, lives, diferenciação ad/organic, gravação/análise de live, script transcription/rewrite e competitive tracking. \[S4\]                         | Paridade nas entidades e investigação; superar em decisão contextual, provenance, workflow e aprendizado por marca.                                                                             |
| **FastMoss**          | \[VERIFICADO — fonte pública\] Winning products, market/category insights, competitor shops, creator discovery, top-converting ads, live/video monitor, AI Script Generator, review analysis e creator collaboration. \[S5\] | Paridade em pesquisa, ads/video/live intelligence e creator signals; integrar diretamente à oportunidade e execução.                                                                            |
| **EchoTik / Shoplus** | \[DESCONHECIDO — benchmark secundário; fonte a reconfirmar\] Pesquisa de produtos, creators, lojas e tendências.                                                                                                             | Usar como benchmark secundário de cobertura e UX.                                                                                                                                               |
| **TikWatch**          | \[DESCONHECIDO — benchmark secundário; fonte a reconfirmar\] Profundidade em live commerce.                                                                                                                                  | Usar como benchmark secundário. Live Commerce é capacidade de primeira classe se o Brasil for confirmado; profundidade depende da cobertura real das fontes e da telemetria disponível. \[S27\] |
| **PiPiADS**           | \[DESCONHECIDO — benchmark secundário; fonte a reconfirmar\] Inteligência de criativos/anúncios.                                                                                                                             | Inspirar Creative Intelligence, sem transformar o produto em ad suite.                                                                                                                          |

## 4.2 Bloco B — Creator / Affiliate Operations

| **Benchmark**                    | **Força observada**                                                                                                                                                                                                                                                                                              | **Obrigação para nós**                                                                                                                                                |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Cruva**                        | \[VERIFICADO — fonte pública\] AI/natural-language creator search, image/lookalike search, competitor creator intelligence, outreach multicanal, CRM, samples, community, content tracking, GMV e halo measurement. \[S6\]\[S12\]                                                                                | Paridade no affiliate flywheel e melhor conexão entre intelligence → creator fit → creative brief → outcome learning.                                                 |
| **Euka**                         | \[VERIFICADO — fonte pública\] AI + visual creator search, GMV-based ranking, dynamic segments, outreach agents, auto-responder, contests, retainers, contracts/payout tracking, content rights, Meta Ads amplification, attribution, Social Intelligence, Copilot e MCP/API. \[S7\]\[S13\]\[S14\]\[S15\]\[S16\] | Benchmark principal de amplitude operacional. Precisamos igualar o ciclo de creator programs e superar em Opportunity Engine, provenance, cross-module learning e UX. |
| **Reacher**                      | \[VERIFICADO — fonte pública\] CRM, inbox, samples, GMV, rights e re-engagement. \[S8\]\[S9\]                                                                                                                                                                                                                    | Paridade em estados, histórico e automações; UX mais simples.                                                                                                         |
| **Colaba**                       | \[VERIFICADO — fonte pública\] Creator database, filtros, bulk invites, CRM e outreach multicanal. \[S10\]                                                                                                                                                                                                       | Cobertura operacional e controles anti-duplicidade.                                                                                                                   |
| **TikTok Shop Affiliate Center** | \[VERIFICADO — documentação pública\] Existem workflows/primitivos nativos e regras de plataforma. \[DESCONHECIDO\] A lista autenticada e atual de capabilities permanece OPEN RESEARCH.                                                                                                                         | Integrar sem quebrar políticas; usar APIs oficiais quando acessíveis.                                                                                                 |

## 4.3 Onde precisamos ser claramente melhores

| **Área**                           | **Meta de diferenciação**                                                                                              |
|------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Opportunity Intelligence**       | Não apenas mostrar “o que cresceu”; priorizar o que faz sentido para a marca, com explicação, confiança e ação.        |
| **Creator-Product Fit**            | Combinar histórico comercial, conteúdo, audiência, categoria, confiabilidade e brand fit em um ranking explicável.     |
| **Creative Commerce Intelligence** | Conectar dados do conteúdo vencedor ao briefing individual do creator e ao resultado posterior.                        |
| **Attribution + Profit**           | Separar GMV de resultado econômico; mostrar nível de confiança e custo completo quando os dados estiverem disponíveis. |
| **Learning Loop**                  | Transformar campanha em aprendizado persistente e mensurável; cada recomendação futura deve poder usar esse histórico. |
| **UX**                             | Cinco áreas primárias, progressive disclosure, respostas antes dos gráficos e ações contextuais.                       |

Regra competitiva Parity+: cada capability relevante presente em
Kalodata, FastMoss, Cruva ou Euka e pertencente ao nosso escopo entra em
uma matriz formal de paridade. Cada capability terá benchmark primário,
dataset/fixture, métricas de qualidade e gate explícito. “Existe na UI”
nunca conta como paridade; o requisito é comportamento igual ou melhor,
com dados confiáveis, UX superior e integração ao ciclo completo.

Euka deixou de ser apenas “creator operations”: hoje combina Social
Intelligence, Copilot acionável, creator discovery, agents, retainers,
rights e Meta amplification. Cruva também combina discovery, competitor
intelligence, outreach, CRM, samples e GMV. Portanto, a vantagem do
nosso produto não pode ser simplesmente “unir dois softwares”; precisa
ser um sistema com inteligência, decisão, execução, escala e aprendizado
conectados.

## 4.4 Convergência competitiva em 2026

A convergência competitiva v1.5 combina FastMoss/Kalodata como
benchmarks de intelligence, Cruva/Euka como benchmarks de creator
operations e o TikTok Affiliate Center como benchmark nativo/gratuito. O
objetivo não é copiar menus: é fechar o ciclo decisão → ativação →
resultado → economics → aprendizagem, com evidência rotulada e
integração real.

# 5. Arquitetura funcional do produto

A arquitetura funcional é organizada por um loop único. Todas as
features devem se encaixar nele; se não se encaixarem, provavelmente não
pertencem ao núcleo do produto.

| **DISCOVER**                            | **DECIDE**         | **MATCH**                  | **CREATE**                    | ACTIVATE & SCALE                                                                                                 | **ATTRIBUTE**                      | **LEARN**                      |
|-----------------------------------------|--------------------|----------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------------------|--------------------------------|
| Market + Product + Competitor + Content | Opportunity Engine | Creator Intelligence + Fit | Creative Intelligence + Brief | Outreach + CRM + Samples + Campaigns + Dynamic Segments + Agents + Contests + Retainers + Rights + Amplification | Orders + GMV + Margin + Confidence | Brand-specific Learning Engine |

## 5.1 Navegação principal

| **Área**          | **Propósito**                                                                                              | **O que não deve acontecer**                                    |
|-------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| **Opportunities** | Mostrar o que merece ação agora.                                                                           | Virar uma lista infinita de tendências sem relevância.          |
| Intelligence      | Explorar produtos, categorias, shops, concorrentes, vídeos, lives, ads e creative patterns.                | Forçar o usuário a navegar por dezenas de relatórios separados. |
| **Creators**      | Pesquisar, comparar, selecionar, segmentar e entender a relação comercial com creators.                    | Misturar descoberta com CRM de modo confuso.                    |
| **Campaigns**     | Executar outreach, agents, samples, briefs, campaigns, contests, retainers, rights e creator partnerships. | Exigir planilhas paralelas.                                     |
| **Performance**   | Atribuição, lucro, ROAS, rights/amplification, aprendizados e recomendações para escalar/parar.            | Exibir vanity metrics como objetivo final.                      |

# 6. Jornadas principais e experiência do usuário

## 6.1 Jornada A — “Encontre a melhor oportunidade”

1\. Usuário conecta/define marca, catálogo, categorias, mercados e
objetivos.

2\. Sistema ingere sinais e calcula oportunidades com provenance e
freshness.

3\. Home mostra poucas oportunidades priorizadas, não um feed infinito.

4\. Usuário abre uma oportunidade e vê: por que agora, evidências,
concorrência, creators, conteúdo, risco, confiança e ação.

5\. Usuário seleciona “Ativar oportunidade”.

6\. Sistema gera shortlist de creators, estratégia de conteúdo e
campanha rascunho.

7\. Usuário revisa e lança; toda ação fica auditada.

## 6.2 Jornada B — “Tenho um produto; encontre quem vende”

1\. Selecionar produto da loja ou criar produto manual/importado.

2\. Ver mapa de creators que já venderam categoria/produtos semelhantes.

3\. Aplicar busca natural (“microcreators de skincare que vendem bem e
publicam com consistência”).

4\. Receber ranking Product-Creator Fit com explicação e confiança.

5\. Criar lista ou campanha; evitar creators já contatados/inelegíveis.

6\. Gerar outreach e briefing personalizados; acompanhar aceite, sample,
post e venda.

## 6.3 Jornada C — “Minha campanha está travando”

1\. Campaigns mostra funil e gargalo automaticamente.

2\. Sistema compara taxas com histórico da própria marca e benchmarks
internos.

3\. Exemplo: boa resposta, mas baixa publicação após sample.

4\. Recomendação: mudar perfil de auto-approval, briefing, reminder
cadence ou oferta.

5\. Usuário aplica ação; sistema mede efeito e registra aprendizado.

## 6.4 Jornada D — “O que realmente funcionou?”

1\. Performance separa reach, engagement, clicks, orders, GMV e margem.

2\. Cada métrica exibe origem e confiança.

3\. Sistema identifica creators de alcance, conversão, escala e
retenção.

4\. Sistema identifica padrões de conteúdo por produto e audiência.

5\. Learning Engine gera hipóteses e recomenda testes, sem apresentar
correlação como causalidade comprovada.

# 7. Especificação funcional detalhada dos motores

Cada motor abaixo possui “saída mínima de excelência”. Isso evita
implementar uma feature nominalmente sem que ela seja realmente útil.

## 7.1 Market Intelligence

Detectar e explorar movimentos do mercado de social commerce.

- Entidades: categoria, shop, marca, produto, creator, vídeo, live,
  campanha/affiliate quando disponível.

- Filtros por mercado, categoria, janela, faixa de preço, vendas,
  crescimento, creator count e shop.

- Séries temporais e deltas; snapshots históricos; detecção de
  aceleração e desaceleração.

- Rankings com normalização por categoria/mercado para evitar comparar
  escalas incompatíveis.

- Alertas de mudança material e anomalia.

- Proveniência e freshness em cada card/linha.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Usuário consegue explicar “o que mudou, quanto mudou, em relação a
quê e quão confiável é” sem exportar para uma planilha.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.2 Product Intelligence

Descobrir produtos vencedores, emergentes, saturados e oportunidades.

- Product detail com preço, sold count/GMV quando autorizado, ratings,
  shops, creators, vídeos/lives associados e histórico.

- Growth velocity, creator adoption velocity, content velocity,
  competition density e saturation signals.

- Comparação entre produtos e clusters de substitutos/semelhantes.

- Buyer-review intelligence quando a fonte permitir; temas, objeções e
  drivers.

- Commission/affiliate context quando disponível.

- Product Opportunity Score separado do Opportunity Score da marca.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Produto emergente pode ser detectado por combinação de sinais, não
por um único ranking bruto.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.3 Competitor Intelligence

Entender como concorrentes ganham tração.

- Monitorar shops/marcas selecionadas.

- Produtos novos, preços/ofertas, creators novos, share por creators,
  vídeos/lives e ritmo de crescimento.

- Creator overlap e creators exclusivos por concorrente.

- Change log: “o que mudou desde a última revisão”.

- Gap finder: oportunidades relevantes onde concorrentes ainda não
  entraram ou estão sub-representados.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Usuário recebe movimentos acionáveis, não apenas comparação de
totais.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.4 Creator Intelligence

Encontrar e entender creators com capacidade comercial.

- Busca estruturada + linguagem natural.

- Creator profile: categorias, produtos, conteúdo, sales/GMV quando
  permitido, post rate, sample completion, crescimento, histórico com a
  marca.

- Filtros por market, categoria, follower band, performance, content
  type, language e commercial signals.

- Listas, tags, exclusions, do-not-contact e deduplicação.

- Lookalikes baseados em embedding + performance, não só followers.

- Competitor creator map e creator overlap.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Ranking prioriza probabilidade de resultado comercial e explica os
sinais principais.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Creator graph: creator \<-\> product \<-\> brand \<-\> content \<-\>
  category \<-\> market \<-\> outcome, com relações temporais e
  provenance.

- Lookalikes usando seeds de top performers, competitors ou listas
  internas; evitar lookalike baseado somente em aparência.

- Visual/image search para encontrar creators por estética, ambiente,
  persona e linguagem visual, sempre combinado com performance e
  elegibilidade.

- Natural-language search que converte briefing humano em filtros +
  ranking semântico/comercial.

## 7.5 Creator Commerce Score

Pontuar creator para contexto comercial específico.

- Score contextual por creator × product × brand × market.

- Componentes: commerce performance, product fit, audience fit, content
  fit, consistency, reliability, growth velocity e brand
  safety/compatibility.

- Score sempre acompanhado de confidence e data freshness.

- Model calibration por categoria/mercado e avaliação offline/online.

- Nunca usar followers como proxy dominante.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Dois creators com follower count semelhante devem poder receber
scores muito diferentes por evidência comercial.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.6 Content Intelligence

Entender o que os conteúdos vencedores fazem.

- Video/live metadata, transcrição quando permitida, produtos, creator,
  views/engagement e commerce outcome quando disponível.

- Extrair estrutura: hook, problem, proof, demonstration, offer, CTA,
  duration, pacing e objection handling.

- Clusters de formatos e temas; comparação winner vs baseline.

- Organic vs paid somente quando a fonte/metodologia sustentar, sempre
  com confidence.

- Content-to-commerce linkage: conteúdo deve ser analisável junto do
  resultado.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>O sistema consegue responder “o que este conteúdo faz diferente dos
demais e qual evidência sustenta isso”.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.7 Creative Commerce Intelligence

Transformar inteligência de conteúdo em ação criativa.

- Brief por creator + produto + audiência + oportunidade.

- Recomendar formato, hook families, proof points, CTA, duration range,
  objections e do/don’t.

- Gerar variantes, mas preservar brand claims e políticas.

- Referencia evidências usadas para a recomendação.

- Após publicação, ligar brief → conteúdo real → resultado para
  aprendizagem.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Brief não é um texto genérico de LLM; ele é evidência contextualizada
e rastreável.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.8 Live Commerce Intelligence

Live Commerce é capacidade de primeira classe se o Brasil for confirmado
como primeiro mercado; sua prioridade é condicionada às entrevistas e à
cobertura real das fontes. \[S27\]

- Sessões, hosts, produtos, timeline, viewers, pedidos/GMV quando a
  fonte permitir, oferta e conteúdo.

- Atribuição a uma live específica só é MEASURED quando o endpoint
  oficial retorna referência de conteúdo/live; caso contrário é
  ESTIMATED ou UNKNOWN.

- Dados de terceiros podem alimentar descoberta/ranking, nunca
  liquidação, pagamento ou comissão.

- Não lançar o módulo se a capacidade real for apenas listar lives sem
  decisão ou resultado.

## 7.9 Opportunity Engine

Converter sinais em oportunidades contextualizadas para cada marca.

- Entrada: market, product, competitor, creator, content, brand catalog,
  goals e economics.

- Saída: score, confidence, why-now, evidence set, window, risks,
  recommended action e creators/content candidates.

- Deduplicar oportunidades semelhantes e agrupar por causa raiz.

- Explicar fatores positivos e negativos.

- Permitir feedback: relevant/not relevant, acted/not acted, outcome.

- Calibrar por sucesso real e não apenas cliques na UI.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Home mostra poucas oportunidades de alta relevância; precisão de
prioridade importa mais do que volume.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.10 Product-Creator Fit

Encontrar creators adequados para uma oportunidade/produto.

- Combinar embeddings semânticos/visuais, histórico de produtos,
  categoria, audiência e performance.

- Hard constraints: market, eligibility, platform limits, brand
  exclusions.

- Soft ranking: propensity + commercial performance + reliability +
  novelty/diversification.

- Explicação por creator e comparação side-by-side.

- Exploration budget para testar creators emergentes sem sacrificar todo
  o budget em incumbentes.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Shortlist deve ser útil para decisão humana e mensurável por
acceptance/post/sales.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.11 Outreach

Ativar creators com automação controlada.

- TikTok official affiliate outreach quando aprovado/permitido.

- Email conectado via OAuth e outros canais permitidos.

- Templates, personalização, sequences, cooldowns, quotas e
  deduplicação.

- Consent/opt-out, suppression lists e sender reputation.

- AI drafting com aprovação configurável; ações totalmente auditadas.

- Rate limiting deve respeitar limites dinâmicos da plataforma.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Zero contato duplicado por bug; automação nunca deve violar quota
conhecida ou opt-out.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Mensagens por TikTok/affiliate channel, email e outros canais somente
  quando legalmente e tecnicamente permitidos.

- Auto-responder com FAQ/policies aprovadas, confidence threshold e
  handoff humano obrigatório quando a intenção não estiver coberta.

- Outreach Agents: triggers condition→action versionados, com audience
  preview, dry-run, quotas, suppression e kill switch.

- Dynamic segments: cohorts atualizados por comportamento (posted,
  sampled-not-posted, gone quiet, GMV milestone, rights eligible etc.).

## 7.12 Creator CRM

Manter uma visão única do relacionamento.

- Um registro por creator por workspace com identidade consolidada.

- Status configuráveis, tags, owner, tasks, notes, messages, samples,
  briefs, content e performance.

- Unified inbox onde integrações permitirem.

- Bulk actions seguras e reversíveis.

- Histórico completo antes de qualquer novo contato.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Operador não precisa de planilha externa para saber estado, histórico
e próximo passo.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Re-engagement inteligente sem spam: frequency caps, suppression e
  priorização por valor esperado.

- Relationship health: last touch, response lag, deliverable
  reliability, revenue history, community/retainer status e risk flags.

- Segmentação comportamental automática e histórico de mudança de
  segmento.

## 7.13 Sample Management

Operar amostras do pedido ao conteúdo.

- Queue de requests; rules de auto-approve/deny; quotas por
  product/campaign.

- States: requested, review, approved, rejected, shipped, delivered,
  content_due, posted, expired.

- Track de shipping quando disponível; reminders; completion rate.

- Conectar custo da amostra e frete a profit attribution.

- Identificar sampled-not-posted e re-engagement.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Cada amostra precisa fechar o loop até conteúdo e resultado ou ficar
explicitamente classificada como exceção.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.14 Campaign Management

Orquestrar o ciclo operacional.

- Objetivo, products, creators, commission, sample policy, brief, dates,
  owners e budget.

- Pipeline visual + list/table para power users.

- Funil: targeted → contacted → replied → accepted → sampled → posted →
  converted.

- Gargalos detectados automaticamente.

- Automations versionadas e testáveis.

- Change log e approvals para alterações materiais.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Campanha deve funcionar do início ao fim sem planilha ou ferramenta
paralela.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

- Payments/payouts apenas por PSP/provider apropriado; não misturar
  fundos de creators à conta operacional da plataforma.

- Contratos/templates opcionais e assinatura via provider externo; o
  core guarda status, hashes/references e audit trail.

- Deliverables explícitos por creator/período, aprovação, deadlines,
  disqualification e change history.

- Campaign types: affiliate activation, paid collaboration, product
  launch, creator challenge/contest e retainer program.

## 7.15 Affiliate Management

Gerenciar colaboração e atribuição afiliada.

- Links/campaign links oficiais quando disponíveis.

- Commission metadata, campaign eligibility, creator fulfillment status
  e order search quando autorizado.

- Guardar snapshots das regras aplicáveis à campanha.

- Não assumir que todas as capacidades estão habilitadas em todas as
  regiões/apps.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Integração deve falhar de forma explícita quando scope/permissão não
existe; nunca simular capacidade.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.16 Attribution

Ligar atividade ao resultado comercial.

- Prioridade de evidência: platform order attribution \> merchant
  order/link/code \> modeled/inferred.

- Creator → content → product → order → revenue/GMV.

- Deduplicação de pedidos/eventos e tratamento de returns/cancellations.

- Attribution confidence e source lineage.

- Janelas configuráveis e versionadas.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Mesmo pedido nunca pode contar duas vezes; estimativa não pode
aparecer como medição.</p></th>
</tr>
</thead>