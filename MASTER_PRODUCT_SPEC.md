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

Versão: 1.5.4  
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

# Sumário

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

36\. Changelog v1.5.4 e pendências vigentes

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
<tbody>
</tbody>
</table>

- Comparar creator organic GMV, retained/paid partnership output e
  amplified performance sem double-count.

- Halo measurement quando houver sinais merchant/commerce suficientes;
  nunca apresentar modeled halo como venda medida.

- Paid amplification attribution: conteúdo licenciado →
  ad/account/campaign → spend → attributed revenue/GMV → ROAS, com fonte
  e janela explícitas.

## 7.17 Profit Intelligence

Profit Intelligence evolui para Unit Economics Engine: ir além de GMV e
mostrar quanto realmente sobrou, com origem, cobertura e confiança.

- Contribution Waterfall: receita bruta − reembolsos − taxas da
  plataforma − comissão de afiliado − frete/fulfillment disponível −
  custo do produto − custo de amostra − fee fixo do creator − imposto
  estimado − demais custos atribuíveis = margem de contribuição.

- Finanças do TikTok são fonte primária para tudo o que a plataforma
  mede; não recalcular valores medidos sem necessidade.

- Status por linha: MEASURED_PROVISIONAL / MEASURED_SETTLED /
  USER_PROVIDED / ESTIMATED / UNKNOWN.

- Bases de custo: fornecedor, ERP, Shopify unitCost, manual, custo médio
  e landed cost quando disponível; precedência configurável pelo
  merchant.

- Custo ausente é caso normal; nunca inventar margem. Mostrar o que
  falta e oferecer importação/entrada/conexão.

- Economic Coverage: % do GMV, % dos pedidos e SKUs com base suficiente;
  também por SKU.

- Estados de lucro e confiança são separados: PROFIT_CONFIRMED,
  PROFIT_INCOMPLETE, PROFIT_NEGATIVE + Economic Confidence
  HIGH/MEDIUM/LOW/INSUFFICIENT.

- Margem negativa com custo fraco gera REVIEW_ECONOMICS; escala
  agressiva exige economics confiável e valores liquidados quando
  aplicável.

- Imposto no Marco 1 é taxa efetiva informada pelo merchant/accountant
  ou UNKNOWN; o produto não vira motor fiscal.

## 7.18 Learning Engine

Transformar cada execução em conhecimento persistente, primeiro por
tenant/marca.

- Registrar recomendação → decisão do usuário → ação executada →
  resultado, por creator × SKU × campaign.

- Guardar recommendation_code/reason_codes, versão do ruleset/modelo,
  profit_state, economic_confidence, accepted/rejected/ignored e
  outcomes.

- O aceite do Marco 1 exige reutilizar esse histórico em uma
  recomendação posterior explicável, mesmo antes de ML.

- Tenant Learning Engine e Global Intelligence Engine são separados;
  inteligência global só usa dados cuja licença permita uso transversal.

- Modelos aprendidos só substituem regras quando outcomes e avaliação
  forem suficientes.

## 7.19 AI Copilot

Interface conversacional e de ação sobre todo o produto.

- Perguntas naturais com respostas citadas aos dados internos.

- Ações: criar lista, campanha draft, filtros, resumo, diagnóstico —
  sempre respeitando permissões.

- Tool calling com políticas e logs.

- Nunca responder com número que não exista no data layer.

- Resumos devem diferenciar fato, estimativa e hipótese.

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>Saída mínima de excelência</strong></p>
<p>Copilot é outra interface para o mesmo sistema; não cria uma segunda
verdade paralela.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 7.20 Creator Programs — Contests, Retainers & Community

- Contests/challenges para incentivar GMV, volume de posts ou metas
  configuráveis, com leaderboard, regras, eligibility, prazo e
  resultado.

- Retainers para creators comprovados: períodos, deliverables,
  pricing/terms, applications/invites, submissions, status e performance
  por período.

- Community/cohorts para reter creators, reconhecer milestones e criar
  loops de conteúdo recorrente sem transformar o produto em rede social
  genérica.

- Creator lifecycle deve reconhecer one-off affiliate, active partner,
  retained partner, dormant, blocked e rights-enabled.

## 7.21 Content Rights & Paid Amplification

- Solicitar, negociar e registrar usage rights de conteúdo com prazo,
  canais, território, fee/revenue/ad-spend share e evidence/contract
  reference.

- Biblioteca de licensed content com status: requested, negotiating,
  signed, active, expiring, expired, revoked.

- Publicar/entregar conteúdo licenciado para plataformas de ads via
  connectors aprovados; Meta é benchmark inicial, não dependência
  rígida.

- Medir performance paid separadamente do orgânico e reconciliar
  attribution para evitar double-count.

## 7.22 Creator Marketplace & Paid Collaborations

- Estado v1.5.1: capacidade de alto risco de substituição de
  funcionalidade nativa. Construção de arquitetura e mocks é permitida;
  ativação em produção exige escopo aprovado pela plataforma e
  confirmação documental das permissões aplicáveis.

- Dados de creators e resultados de marketplace oriundos da API
  permanecem tenant-scoped; não formar base transversal própria a partir
  do cache de múltiplos clientes.

- Payouts devem permanecer orchestration/adapters auditáveis; nunca
  presumir autorização para executar pagamento ou marketplace paralelo
  sem capability/approval explícitos.

- Permitir campanhas invite-only e open application quando a estratégia
  exigir creators pagos, sem substituir o affiliate engine.

- Offers com flat fee, affiliate commission, deliverables, product/SKU,
  usage rights e terms.

- Application workflow: applied → shortlisted → offered → accepted →
  contracted → sampled → submitted → approved → paid/closed.

- Proteções de entrega e disputas ficam sob regras explícitas;
  pagamentos são orquestrados via provider apropriado e auditável.

## 7.23 Customer API & Agent Interface

- Customer API para market/social intelligence, creator search,
  performance, lists, campaigns e reports sob scopes separados.

- Tool contracts estáveis para agentes externos; read e write tools
  separados, com least privilege.

- Webhooks para eventos relevantes de
  creator/campaign/rights/attribution e jobs assíncronos.

- Export não deve quebrar provenance: cada dataset exportado inclui
  source, freshness e measured/estimated/inferred.

- Copilot pode analisar, criar listas, criar campaign drafts,
  diagnosticar funis e preparar relatórios usando dados reais do
  workspace.

- External Agent Interface: API/MCP-style tool surface versionada para
  Claude/Codex/outros clientes autorizados, com as mesmas RBAC/policies
  do app.

- Ações de escrita executadas por agentes devem produzir audit event,
  idempotency key e resultado verificável; nenhuma automação opera fora
  do policy engine.

# 8. Design e UX — profundidade no backend, simplicidade no frontend

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>REGRA DE DESIGN</strong></p>
<p>A interface deve ter simplicidade de aplicativo de consumo e
profundidade de ferramenta profissional. O usuário vê primeiro a
decisão; detalhes e filtros aparecem por progressive
disclosure.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 8.1 Princípios de UX

| **Princípio**               | **Aplicação**                                                                                         |
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **Answer first**            | Título e primeira dobra respondem “o que aconteceu?” e “o que fazer?”.                                |
| **Progressive disclosure**  | Primeiro resumo; depois evidência, filtros e dados avançados.                                         |
| **One obvious next action** | Toda tela operacional deve ter próximo passo claro.                                                   |
| **No dashboard graveyard**  | Gráfico sem decisão associada precisa justificar sua existência.                                      |
| **Preserve context**        | Ao sair de oportunidade para creator/campaign, manter produto, market e filtros.                      |
| **Fast paths**              | Ativar oportunidade, adicionar creator, enviar brief e corrigir gargalo em poucos cliques.            |
| **Explain uncertainty**     | Confiança, freshness e provenance visíveis sem poluir a tela.                                         |
| **Accessibility**           | WCAG 2.2 AA como baseline; teclado, contraste, foco e screen reader.                                  |
| **Responsive**              | Desktop é superfície primária para análise; mobile suporta review, alerts, approvals e ações rápidas. |
| **No dark patterns**        | Sem automações silenciosas, opt-out escondido ou métricas enganosas.                                  |

## 8.2 Home / Opportunities

A home não começa com gráficos. Ela começa com prioridade. Estrutura
recomendada:

- Header: “X oportunidades importantes hoje”, “Y campanhas precisam de
  atenção”, “Z creators recomendados”.

- Opportunity cards com score, confidence, why-now, evidence summary,
  expected action e \[Explorar\]/\[Ativar\].

- Campaign attention cards somente para exceções/gargalos.

- Learning cards com mudanças reais de recomendação (“microcreators de
  faixa X melhoraram margin em Y vs baseline”, quando medido).

- Global search / command palette para entity search e ações.

## 8.3 Opportunity Detail

| **Seção**       | **Conteúdo**                                                          |
|-----------------|-----------------------------------------------------------------------|
| **Summary**     | Score, confidence, freshness, why-now, recommended action.            |
| **Evidence**    | Charts/tables de market/product/creator/content que sustentam a tese. |
| **Competition** | Quem já entrou, intensidade e gap.                                    |
| **Creators**    | Shortlist explicável e alternativas.                                  |
| **Creative**    | Formatos/hooks/brief recomendados.                                    |
| **Economics**   | GMV/margin assumptions e limitações.                                  |
| **Risks**       | Saturação, baixa confiança, policy, inventory ou margin.              |
| **Action**      | Ativar oportunidade → campaign draft com contexto preservado.         |

## 8.4 Estados obrigatórios de UI

- Loading: skeletons que preservam layout; sem spinner global
  prolongado.

- Empty: explicar por que não há dados e qual ação resolve.

- Partial data: mostrar o que existe e marcar fontes faltantes.

- Permission missing: explicar scope/permissão e linkar fluxo de
  autorização.

- Stale: badge de freshness + data/hora da última atualização.

- Error: preservar contexto e oferecer retry seguro; nunca perder
  formulário/campanha em edição.

- Async job: mostrar estado, progresso sem prometer tempo, e atualizar
  quando disponível.

- Rótulos do Marco 1 em português: “Desempenho atribuído” separado de
  “Contexto do negócio”; não usar “impacto” sem estimativa incremental
  com suficiência estatística.

- “Próxima ação” é o rótulo de interface para Next Best Action. Códigos
  internos permitidos: SCALE_CREATOR, REPEAT_CREATOR, RAISE_COMMISSION,
  FOLLOW_UP_SAMPLE, WAIT_FOR_CONTENT, PAUSE_SKU_LOW_STOCK,
  REVIEW_ECONOMICS, STOP_NEGATIVE_MARGIN e TRY_NEW_CREATOR_SEGMENT.

## 8.5 Design system

Criar um design system próprio em pacote compartilhado dentro do novo
repositório, sem dependência do Growth OS. Componentes devem ser
acessíveis e ter tokens de cor, espaço, tipografia, radius, elevation e
motion. O visual deve ser premium, limpo e informativo; “data dense”
somente sob demanda.

| **Componente**       | **Regra**                                                                              |
|----------------------|----------------------------------------------------------------------------------------|
| **Opportunity Card** | Nunca mais de 5 sinais principais; ação dominante visível.                             |
| **Score**            | Mostrar componente + confiança; evitar número mágico isolado.                          |
| **Table**            | Column chooser, sticky header, filtros salvos, export controlado, keyboard navigation. |
| **Chart**            | Sempre com baseline/denominador, tooltip, freshness e source.                          |
| **Creator Card**     | Performance comercial e fit primeiro; followers secundário.                            |
| **Automation**       | Preview, audience size, limits, dry-run e undo/stop quando aplicável.                  |
| **AI response**      | Citações internas aos dados + ações propostas separadas de fatos.                      |

# 9. Estratégia de dados, proveniência e acesso às plataformas

Dados são a principal dependência do produto. A documentação oficial do
TikTok Shop indica que a API cobre products, orders, finance, affiliate
e outras áreas, mas o acesso varia por developer type e authorization.
Seller, creator e partner usam contextos e credenciais distintos. A
integração de Affiliate APIs é desativada por padrão e exige aprovação
do Partner/Account Manager. \[S1\]\[S2\]\[S3\]

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>REGRA DE REALIDADE</strong></p>
<p>Nenhuma feature pode depender de um dado que não tenhamos direito
técnico/contratual de obter. O produto deve degradar de forma explícita
e nunca inventar cobertura.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 9.1 Classes de dados

| **Classe**    | **Definição**                                                                          | **Exemplo**                                                               |
|---------------|----------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **MEASURED**  | Dado obtido diretamente de fonte autorizada/merchant/platform e ligado ao evento real. | Order/GMV via API autorizada; product sold count oficial onde disponível. |
| **ESTIMATED** | Valor calculado/modelado a partir de sinais observáveis; possui intervalo/metodologia. | GMV estimado de mercado quando fonte não publica o valor exato.           |
| **INFERRED**  | Conclusão qualitativa/score derivado por modelo/LLM.                                   | “Formato demonstração parece contribuir para performance”.                |

## 9.2 Provenance envelope obrigatório

Toda métrica/feature derivada que entra em score deve carregar:

- source_system e source_endpoint/dataset;

- source_actor_type (seller, creator, partner, merchant connector,
  public/licensed);

- observed_at e ingested_at;

- market/region;

- confidence class e quality flags;

- raw payload hash / source record id quando legalmente permitido;

- calculation version para derivados;

- retention / legal basis / deletion scope quando aplicável.

- allowed_purpose / purpose_id e tenant_scope;

- redistribution / cross_tenant_allowed / ML_use_allowed;

- deletion_propagation e lineage dos derivados;

- data_handling_mode do fornecedor: QUERY_ONLY / TTL_CACHE /
  PERSIST_SNAPSHOTS / FULL_HISTORY.

- Derivados herdam a política mais restritiva das fontes; registry
  precisa de enforcement em código e teste automatizado.

- Purpose binding vigente: cada artefato deve declarar uma das
  finalidades permitidas — operar a conta do cliente; analytics do
  cliente; modelo/aprendizado do cliente; inteligência global somente
  com dados licenciados para uso transversal.

- purpose_id, tenant_scope e políticas de acesso devem impedir que dado
  tenant-scoped alimente artefato global; derivados herdam a política
  mais restritiva das fontes.

## 9.3 Conectores de dados

| **Conector**                     | **Responsabilidade**                                                                | **Regras**                                                                                                                                                                                                                           |
|----------------------------------|-------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **TikTok Shop Seller**           | Shop/product/order/finance/affiliate seller data autorizada.                        | OAuth/token lifecycle, scopes, market capability matrix.                                                                                                                                                                             |
| **TikTok Shop Creator**          | Creator-side affiliate data/capabilities.                                           | Token separado do seller; creator authorization obrigatória. \[S3\]                                                                                                                                                                  |
| **TikTok Shop Partner/TAP**      | Partner campaigns, links, fulfillment e orders quando autorizado.                   | Feature flags por API/scope; acesso depende de aprovação. \[S2\]                                                                                                                                                                     |
| Commerce Connector (Brasil)      | Pedidos, catálogo, estoque, custo/economics do lojista por ERP/hub ou loja própria. | Candidatas: Bling/Olist (ERP/hub) e Shopify/Nuvemshop/VTEX (loja/commerce). Escolher o primeiro conector por matriz VERIFIED/PARTIAL/UNKNOWN + entrevistas. Bling: REST + webhooks; MCP oficial não confirmado.\[S21\]\[S22\]\[S26\] |
| **Email**                        | Outreach e replies.                                                                 | OAuth, suppression, unsubscribe, reputation.                                                                                                                                                                                         |
| **Licensed/Public Intelligence** | Dados de mercado adicionais quando contratualmente e legalmente permitidos.         | Proveniência, ToS review e separação de estimated/measured.                                                                                                                                                                          |

- WhatsApp permanece hipótese de canal até validação com clientes e
  fonte/base adequada para contato de creators; não é fallback assumido.

## 9.4 Ingestion pipeline

| **Etapa**                   | **Ação**                                                                                                                     |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------|
| **1. Fetch/Webhook**        | Connector recebe webhook ou executa sync incremental respeitando rate limits.                                                |
| **2. Raw capture**          | Payload bruto imutável no object store com hash, source id e metadata.                                                       |
| **3. Normalize**            | Mapeia para schema canônico sem perder campos de origem.                                                                     |
| **4. Identity resolution**  | Resolve shop/product/creator/content identities e aliases.                                                                   |
| **5. Transactional upsert** | Entidades e configurações em PostgreSQL com idempotência.                                                                    |
| **6. Analytics facts**      | Fatos analíticos em PostgreSQL/materialized views por padrão; store especializado só após ADR, ADR-000 e benchmark de carga. |
| **7. Feature jobs**         | Calcula features, embeddings, deltas e quality flags.                                                                        |
| **8. Scores/opportunities** | Modelos versionados geram scores e evidence sets.                                                                            |
| **9. Audit/observability**  | Métricas de freshness, coverage, error e lag.                                                                                |

## 9.5 Resolução canônica de identidade

- Pré-requisito do Marco 1: resolver a mesma entidade entre TikTok,
  ERP/hub, loja própria e providers licenciados sem presumir que IDs
  externos sejam globais.

- Creator identity: canonical_creator_id + external identities por
  source/market/handle; aliases históricos; confidence;
  last_verified_at; provenance; tenant visibility.

- Product identity: canonical_product_id ligado a SKU/variant do
  merchant e external_product_id por source; nunca fundir apenas por
  nome.

- Order identity: chave canônica por source + external_order_id +
  shop/market; dedupe e reconciliation explícitos entre order,
  settlement, refund e return.

- Merge/split: toda fusão automática exige regra determinística ou
  confiança mínima; casos ambíguos entram em review queue; merge manual
  é auditado e reversível.

- Fronteira de dados: identidade tenant-scoped não pode enriquecer
  artefato global com dados restritos; o Global Intelligence Engine só
  usa atributos cuja licença permita uso transversal.

- Acceptance: testes de collision, alias change, handle reuse, duplicate
  source IDs, split/merge rollback e cross-tenant leakage.

## 9.6 Data quality gates

- Completeness por source/market/entity.

- Freshness SLO por dataset.

- Uniqueness/idempotency de entity/event IDs.

- Referential integrity entre content \<-\> creator \<-\> product \<-\>
  shop.

- Anomaly detection em saltos impossíveis/negativos.

- Cross-source reconciliation onde existirem duas fontes.

- Backfill/replay seguro a partir de raw data.

- Quarantine de dados suspeitos sem contaminar scores.

## 9.7 Termos TikTok — mapa de cláusula para regra

Mapa de rastreabilidade das versões de termos revisadas nas rodadas;
qual versão se aplica ao Brasil continua EXTERNAL ACTION REQUIRED — P0.
Fontes externas de rastreabilidade/corroboração:
\[S19\]\[S29\]\[S30\]\[S31\]\[S32\]. A versão contratual exata aplicável ao
app/actor no Brasil permanece EXTERNAL ACTION REQUIRED — P0. A numeração de
cláusulas varia entre versões; quando uma restrição vier de versão histórica,
o documento deve registrar isso explicitamente em vez de atribuí-la a uma
versão atual sem evidência.

| Cláusula revisada                        | Regra vigente do produto                                                                                                                                                | Aplicação                                                                        |
|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 2.7                                      | Uso como prestador de serviço do End User; retenção mínima necessária; compartilhamento só com permissão; não agregar/usar dados do usuário para fins próprios. \[S29\] | Tenant boundary, purpose binding, retention/deletion e bloqueio de cross-tenant. |
| 3.5(j), versão histórica revisada / restrição análoga vigente | Não construir/complementar perfis ou bancos de dados sobre indivíduos, dispositivos, conteúdo ou browsers a partir de dados restritos. A numeração histórica 3.5(j) não deve ser tratada como numeração vigente sem confirmação. \[S32\] | Sem base global de creators formada por cache de buscas entre clientes. |
| 3.5(r)/(s), versão UE revisada           | Restrição de competir/replicar/recriar funcionalidade central observada na versão UE revisada. \[S29\] A aplicabilidade ao Brasil/actor concreto permanece P0; \[S30\] não é usado como prova desta restrição. | Teste de substituição da 24.3 e revisão específica da 7.22. |
| Partner Center Terms Brasil, cláusula 10 | Referência registrada nas rodadas; texto/versão aplicável ao uso concreto ainda deve ser confirmado. \[S31\]                                                            | Pendência P0 antes de produção.                                                  |

## 9.8 ADR-000 — fonte de market data

Candidatas: FastMoss \[S20\], Kalodata e Tabcut. Nenhuma promessa de
paridade de intelligence depende de provider não contratado; o gate
inicial é cobertura declarada, com lacunas BLOCKED / NOT SUPPORTED.

- Checklist contratual obrigatório: direito de exibir e derivar;
  armazenamento/cache e retenção pós-contrato; uso em ML/embeddings;
  redistribuição; auditoria; exclusão; mudança de termos; continuidade
  após rescisão; origem/legalidade da coleta; garantias e limites de
  responsabilidade.

- Data handling modes: QUERY_ONLY / TTL_CACHE / PERSIST_SNAPSHOTS /
  FULL_HISTORY. Implementar enum/enforcement; pipeline físico apenas
  para modos efetivamente contratados.

- Dependência externa bloqueia ativação em produção, não a
  interface/contrato genérico com dados sintéticos.

# 10. Arquitetura técnica de referência

A arquitetura inicial deve ser um monólito modular com workers
assíncronos e data stores especializados. Evitamos microserviços
prematuros, mas não forçamos analytics de grande volume dentro do banco
transacional.

## 10.1 Visão de alto nível

Monólito modular para OLTP/operations, com separação lógica do analytics
desde o início. PostgreSQL é o default transacional; store analítico
especializado (ex.: ClickHouse) só entra por ADR após ADR-000 e
benchmark de carga. Motor de workflow durável também só entra por ADR
quando houver necessidade real de long-running workflows.

- WIP de execução: no máximo 1 vertical de produto + 1 iniciativa
  habilitadora de plataforma; incidentes, segurança, produção,
  compliance urgente e Production Truth Gate ficam fora do limite.

- TikTok-first, canonical-domain-first: modelo canônico e contrato de
  conector neutros; generalizações multiplataforma profundas só após a
  segunda plataforma real.

| Camada          | Tecnologia/forma                                                   | Responsabilidade                                                                                                                                       |
|-----------------|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Web             | Next.js + React + TypeScript + shared design system                | Experiência responsiva, research denso quando necessário, opportunities decision-first e CRM operation-first.                                          |
| Application API | TypeScript structured API (NestJS/Fastify ou equivalente)          | RBAC, orchestration, state machines, policies, contracts, idempotent writes.                                                                           |
| Workers         | TypeScript/Python workers + fila durável inicial                   | Connectors, syncs, enrichments, embeddings, scoring, outreach, backfills e webhooks. Temporal/Inngest só por ADR se workflows long-lived justificarem. |
| Transactional   | PostgreSQL                                                         | Tenancy, canonical entities, relationships, workflows, rights/program states, audit pointers e analytics inicial.                                      |
| Analytics       | PostgreSQL logical analytics primeiro; store especializado por ADR | Snapshots/eventos/series e ranking features. ClickHouse é opção, não baseline; entrada depende de ADR-000 e benchmark de carga.                        |
| Cache/Queue     | Redis/BullMQ ou equivalente                                        | Cache, locks, quotas, rate limits e coordenação de jobs.                                                                                               |
| Object store    | S3-compatible                                                      | Raw payloads permitidos, exports, media/artifacts permitidos, contracts refs e eval assets.                                                            |
| Intelligence    | Python quando ML/data justificar + embeddings/modelos              | Ranking, fit, anomaly/trend, clustering, creative features e evaluation. TypeScript permanece default fora dessas cargas.                              |
| Agent/LLM       | LLM gateway + tool registry + policy engine                        | Copilot, briefs, explicações e ações controladas; nunca fonte numérica de verdade.                                                                     |
| Observability   | OpenTelemetry + logs/metrics/traces/error tracking                 | Tracing ponta a ponta, SLOs e correlação de audit.                                                                                                     |
| Deployment      | Containers; Railway-compatible inicialmente                        | Web/API/workers separados; managed stores; extração para serviços dedicados somente por ADR.                                                           |

## 10.2 Diagrama lógico

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
<col style="width: 20%" />
</colgroup>
<thead>
<tr class="header">
<th>FONTES</th>
<th>INGESTÃO</th>
<th>CORE</th>
<th>INTELLIGENCE</th>
<th>EXPERIÊNCIA</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>TikTok Seller<br />
TikTok Creator<br />
TikTok Partner<br />
Merchant<br />
Email<br />
Licensed Data</td>
<td>Connector Runtime<br />
Webhooks<br />
Schedulers<br />
Raw Store<br />
Normalization</td>
<td>PostgreSQL<br />
Redis<br />
Analytical Store (somente por ADR)<br />
Domain Modules<br />
Audit</td>
<td>Features<br />
Embeddings<br />
Scores<br />
Opportunity<br />
Learning<br />
LLM Gateway</td>
<td>Web App<br />
Search<br />
Opportunities<br />
Creators<br />
Campaigns<br />
Performance<br />
Copilot</td>
</tr>
</tbody>
</table>

## 10.3 Por que monólito modular

- Transações de campanha/CRM/samples atravessam módulos; um boundary de
  processo é mais simples e seguro no início.

- Um único contrato de domínio reduz drift entre serviços durante
  construção rápida.

- Workers já separam carga assíncrona e podem escalar horizontalmente.

- Data stores especializados dão escala onde importa sem multiplicar
  APIs internas.

- Extração para serviço separado só ocorre com ADR quando houver pressão
  de escala, equipe, segurança ou isolamento de falha.

## 10.4 Estrutura de repositório recomendada

> /apps  
> /web \# Next.js UI  
> /api \# Application API / domain modules  
> /worker \# async jobs / connectors / enrichment  
> /services  
> /intelligence \# Python ranking / ML / eval jobs (somente onde Python
> agrega valor)  
> /packages  
> /domain \# contracts, value objects, events  
> /db \# schemas, migrations, repositories  
> /connectors \# TikTok/email/merchant adapters  
> /ui \# design system  
> /ai-contracts \# prompts, schemas, tool contracts, eval fixtures  
> /observability \# logs, metrics, trace helpers  
> /config \# typed env/config  
> /infra \# deployment, policies, runbooks  
> /docs  
> /adr \# architecture decision records  
> /product \# versioned master docs / specs  
> /tests  
> /contract / integration / e2e / load / security / model-eval

## 10.5 Domain modules

| **Módulo**                       | **Responsabilidade**                                                                                         | **Não deve possuir**                              |
|----------------------------------|--------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| **Identity & Tenancy**           | Workspace, brand, shop, users, roles, auth connections.                                                      | Business logic de campaigns.                      |
| Intelligence                     | Categories, shops, market snapshots, competitor tracking e research intelligence.                            | Outreach.                                         |
| **Catalog**                      | Products, variants, merchant mappings, economics.                                                            | Creator CRM state.                                |
| **Creator**                      | Creator identity, profiles, features, lists, fit.                                                            | Campaign orchestration.                           |
| **Content**                      | Videos/lives, transcripts/features, creative patterns.                                                       | Orders.                                           |
| **Opportunity**                  | Evidence graph, scoring, recommendations, feedback.                                                          | Direct source fetching.                           |
| **Engagement**                   | Outreach, inbox, suppression, sequences.                                                                     | Analytics truth.                                  |
| **Campaign**                     | Campaign state machine, creator participation, briefs, samples.                                              | Raw connector parsing.                            |
| **Attribution**                  | Orders, links, returns, dedupe, revenue/profit facts.                                                        | UI-specific calculations.                         |
| **Learning**                     | Features/outcomes, model versions, experiments, learned policies.                                            | Unversioned prompt logic.                         |
| Programs & Partnerships          | Contests, retainers, communities/cohorts, applications, deliverables, terms and lifecycle.                   | Raw connector parsing or direct payment custody.  |
| Rights & Amplification           | Usage-rights state machine, licensed-content library, activation to ad connectors, term expiry.              | Attribution truth or unmanaged contract text.     |
| Contracts & Payout Orchestration | Provider references, signatures/status, payout instructions, fees and reconciliation metadata.               | Holding creator funds in the operating account.   |
| Agent Runtime                    | Copilot tools, external agent/MCP-style contracts, approvals, policy checks, audit and idempotent execution. | Direct DB access or bypass of domain permissions. |

## 10.6 State machines obrigatórias

Processos operacionais não devem ser uma coleção de flags. Devem usar
estados explícitos com transições válidas, idempotentes e auditadas.

| **Agregado**              | **Estados exemplo**                                                                                           |
|---------------------------|---------------------------------------------------------------------------------------------------------------|
| **Campaign**              | draft → ready → active → paused → completed → archived                                                        |
| **Creator Participation** | candidate → shortlisted → contacted → replied → accepted → declined → sampled → posted → converted → retained |
| **Sample**                | requested → review → approved/rejected → shipped → delivered → content_due → posted/expired                   |
| **Outreach Message**      | queued → sending → sent → delivered/opened (quando disponível) → replied → failed/suppressed                  |
| **Opportunity**           | detected → scored → surfaced → dismissed/activated → observing → outcome_known → learned                      |
| **Data Sync**             | scheduled → running → checkpointed → succeeded/partial/failed → retrying/quarantined                          |

# 11. Modelo de dados e eventos

O modelo é multi-tenant, market-aware e provenance-first. IDs internos
são UUID/ULID; IDs externos ficam em tabelas de identity mapping e nunca
são assumidos como globalmente únicos entre sources/markets.

| **Entidade**                  | **Campos-chave / relações**                                                                |
|-------------------------------|--------------------------------------------------------------------------------------------|
| **workspace**                 | id, name, plan, locale, timezone, status                                                   |
| **brand**                     | workspace_id, name, positioning, policy_profile                                            |
| **shop_connection**           | brand_id, platform, market, external_shop_id, auth_actor_type, scopes, token_ref, status   |
| **product**                   | brand/shop mapping, canonical attributes, category, price, cost, margin, availability      |
| **external_product**          | source, market, external_id, shop, raw attributes, canonical_product_id?                   |
| **creator**                   | canonical identity, handles, markets, languages, contact refs, safety flags                |
| **creator_snapshot**          | creator_id, observed_at, followers, commercial metrics, source/provenance                  |
| **content**                   | creator, platform, type video/live, timestamps, source IDs, transcript refs                |
| **content_product_link**      | content_id, product_id/external_product_id, confidence, source                             |
| **market_snapshot**           | entity_type/id, metric, value, observed_at, provenance                                     |
| **opportunity**               | brand_id, market, score, confidence, status, model_version, window, risk                   |
| **opportunity_evidence**      | opportunity_id, evidence_type, entity_ref, metric_ref, weight, polarity                    |
| **creator_fit**               | brand/product/creator, score, confidence, component scores, model_version                  |
| **campaign**                  | brand, products, goal, status, commission config, budget/economics                         |
| **campaign_creator**          | campaign, creator, state, owner, offer, fit_snapshot                                       |
| **outreach_sequence/message** | audience, channel, template_version, state, provider ids, suppressions                     |
| **sample**                    | campaign_creator, product, state, cost, shipping refs, due dates                           |
| **brief**                     | campaign_creator, content strategy, evidence refs, version, approval state                 |
| **published_content**         | campaign_creator, content_id, brief_version, detected/verified                             |
| **order_fact**                | source order, creator/content/product attribution refs, GMV, returns, currency, confidence |
| **profit_fact**               | order/campaign/creator, revenue, COGS, commission, sample, shipping, contribution          |
| **learning_observation**      | context features, action, outcome, timestamps, experiment/model refs                       |
| **audit_event**               | actor, action, target, before/after refs, request id, timestamp                            |

## 11.1 Event taxonomy

Eventos são append-only no analytics layer e possuem event_id
idempotente, workspace_id, occurred_at, ingested_at, source, entity refs
e schema_version.

- product.observed / product.metric_changed / product.trend_detected

- creator.observed / creator.fit_scored / creator.shortlisted

- content.observed / content.features_extracted / content.product_linked

- opportunity.detected / opportunity.surfaced / opportunity.activated /
  opportunity.dismissed / opportunity.outcome_recorded

- outreach.queued / sent / replied / failed / suppressed

- sample.requested / approved / shipped / delivered / posted / expired

- campaign.started / paused / completed / bottleneck_detected

- attribution.order_linked / order_returned / attribution_reconciled

- learning.observation_recorded / model_scored / model_promoted /
  model_rolled_back

- program.contest_started / creator_joined / milestone_reached /
  contest_completed

- retainer.offered / accepted / period_started / deliverable_submitted /
  period_completed

- rights.requested / offered / signed / activated / expiring / expired /
  revoked

- amplification.published / spend_observed / outcome_reconciled

- agent.action_proposed / approved / executed / failed / reverted

# 12. APIs, integrações e contratos

A API interna deve ser contract-first. OpenAPI é gerado e validado em
CI. Writes relevantes aceitam idempotency keys; operações assíncronas
retornam job/resource state, não escondem execução.

| **Grupo**                  | **Endpoints exemplificativos**                                                                 |
|----------------------------|------------------------------------------------------------------------------------------------|
| **Opportunities**          | GET /v1/opportunities; GET /v1/opportunities/{id}; POST /{id}/activate; POST /{id}/feedback    |
| Intelligence               | GET /v1/intelligence/products; /shops; /categories; /competitors; /content; /lives             |
| **Creators**               | POST /v1/creators/search; GET /{id}; POST /fit; POST /lookalikes; lists/tags                   |
| **Campaigns**              | POST/GET/PATCH /v1/campaigns; creator participation; state transitions; bottlenecks            |
| **Outreach**               | sequences, previews, audience dry-run, messages, suppressions, inbox                           |
| **Samples**                | requests, approvals, shipment, completion                                                      |
| **Attribution**            | orders, reconciliation, performance, profit                                                    |
| **Copilot**                | POST /v1/assistant/query; tool actions create drafts only unless policy permits execution      |
| **Admin/Connections**      | OAuth initiation/callback, scopes, health, capability matrix, sync status                      |
| Programs                   | contests, retainers, applications, periods, submissions, deliverables, community/cohorts       |
| Rights                     | rights requests/offers/contracts, licensed content, expiry, amplification destinations         |
| Marketplace/Collaborations | paid collaboration campaigns, applications, offers, deliverables, provider payout references   |
| Agent API                  | scoped read/write tools for Copilot/external agents; action preview/execute/status; audit refs |

## 12.1 Connector contract

- capabilities(): retorna matriz por market + actor type + scope +
  approval.

- authorize()/refresh()/revoke(): lifecycle de credenciais.

- sync(cursor, since): incremental, checkpointável, idempotente.

- handleWebhook(payload): valida assinatura, deduplica e normaliza.

- rateLimitPolicy(): quotas dinâmicas e backoff.

- health(): auth validity, last success, lag, error taxonomy.

- normalize(): source model → canonical model com provenance.

- searchFilters()/capability filters: carregar dinamicamente por
  market/shop/app/scope; nunca hard-codear filtros específicos de
  creator discovery.

- dataHandlingMode(): QUERY_ONLY / TTL_CACHE / PERSIST_SNAPSHOTS /
  FULL_HISTORY; o pipeline só pode executar modos permitidos pelo
  contrato/configuração.

- unknown external dependency bloqueia ativação em produção, não
  design/interface genérica com dados sintéticos.

# 13. IA/ML — scoring, matching, oportunidade e aprendizado

A IA é dividida em três classes: modelos determinísticos/estatísticos
para métricas e ranking; modelos de representação
(embeddings/vision/text) para matching e clustering; LLMs para
explicação, síntese e geração controlada. LLM nunca é fonte de verdade
numérica.

## 13.1 Opportunity Score — arquitetura-alvo v1; Marco 1 = Merchant Opportunity Engine v0

Opportunity Score começa como heurística transparente e versionada; não
fingir calibração/ML antes de outcomes suficientes. O Merchant
Opportunity Engine v0 decide qual SKU do próprio merchant merece
ativação agora.

- Inputs iniciais: margem/cobertura disponível, estoque, comissão atual,
  sinais oficiais de produtos comparáveis/open collaborations,
  disponibilidade de creators e histórico próprio quando existir.
  \[S28\]

- Benchmark de comissão deve dizer “abaixo/acima da faixa observada nos
  comparáveis encontrados”, não “mediana da categoria” sem cobertura
  estatística demonstrada.

- Sinais oficiais, inteligência licenciada e aprendizado first-party
  coexistem; no início usar regras de precedência explícitas, não pesos
  aprendidos arbitrários.

- Rulesets carregam versão e motivos positivos/negativos; mudanças
  seguem avaliação da seção 13.3.

## 13.1.1 Contrato do Merchant Opportunity Engine v0 — SKU Opportunity

A superfície de SKU Opportunity do Marco 1 é decision-first e opera sobre
os produtos do próprio merchant. Ela não é uma cópia de “produtos em
alta” de mercado. O objetivo é responder **qual SKU deve ser ativado
agora, por quê e qual é a próxima ação**.

- A lista deve exibir, quando disponíveis: produto/SKU, preço, custo,
  margem, comissão, estoque, canal principal, creators ativos, tendência
  recente, oportunidade, motivo e ação.

- O rótulo de oportunidade nunca pode aparecer isolado. Alta/Média/Baixa
  precisa ter fatores explicáveis e consistentes com a linha e o detalhe.

- Comissão deve ser comparada à **faixa observada nos produtos
  comparáveis encontrados**. A interface deve mostrar o tamanho da base
  utilizada (por exemplo, “10–20% em 38 comparáveis”) quando conhecido;
  não apresentar essa faixa como mediana de categoria sem cobertura
  estatística demonstrada.

- Estoque governa a ação. SKU zerado não pode recomendar ativação de
  creators; deve oferecer “Repor estoque” ou ação equivalente. Estoque
  baixo com creators/campanha ativos gera alerta e pode acionar
  PAUSE_SKU_LOW_STOCK.

- Custo ausente é estado normal. Quando não houver base suficiente, a
  margem aparece como indisponível/UNKNOWN e a ação é “Informar custo”;
  nunca inventar margem.

- Canal principal (Vídeo / LIVE / Vitrine ou equivalente do provider)
  deve aparecer quando a fonte o suportar; Live é entidade de primeira
  classe no Brasil.

- Produtos entram por sincronização do catálogo/conector. O CTA primário
  é “Sincronizar catálogo” ou equivalente; cadastro manual não deve ser a
  metáfora principal da tela.

- O detalhe do SKU deve preservar contexto e oferecer, conforme dados
  disponíveis: Visão Geral, Comparáveis, Economics e Histórico/Performance,
  com provenance nos campos econômicos e separação entre “Desempenho
  atribuído” e “Contexto do negócio”.

- “Ver creators recomendados” leva à Creator Shortlist com o SKU e os
  motivos preservados. Ações em massa devem revalidar elegibilidade; SKUs
  sem estoque ou sem pré-condições não podem ser ativados silenciosamente.

- Cards de “O que fazer hoje” devem ser atalhos reais: ao clicar, a tabela
  abre exatamente o recorte correspondente, não apenas uma mensagem ou
  decoração.

## 13.2 Creator Fit — arquitetura-alvo v1; cold start = ruleset de ativação v0.1

| **Componente**           | **Exemplos**                                                                 |
|--------------------------|------------------------------------------------------------------------------|
| **Commerce Performance** | GMV/orders/sales efficiency normalizada quando measured; proxies quando não. |
| **Product Fit**          | Histórico em produtos/categorias semelhantes + semantic/visual similarity.   |
| **Audience Fit**         | Market/language/demographics/interests quando legalmente disponíveis.        |
| **Content Fit**          | Formatos e temas compatíveis com o produto/brief.                            |
| **Reliability**          | Post rate, sample completion, reply/acceptance, consistency.                 |
| **Growth Velocity**      | Mudança recente em performance e audience, evitando depender só de tamanho.  |
| **Brand Compatibility**  | Brand safety, claims, tone, exclusions e prior relationships.                |

Ruleset de ativação v0.1 — heurística transparente e versionada, não
previsão calibrada no cold start. \[S24\]

- Afinidade competitiva: creator já promoveu produtos comparáveis.

- Nível do creator (quando fornecido pela plataforma; ex.: L1–Ln) como sinal
  categórico, não verdade isolada.

- Ajuste de comissão versus a faixa observada nos comparáveis
  encontrados.

- Recusa recente gera penalidade; conversão anterior com o merchant gera
  impulso quando houver histórico.

## 13.3 Model lifecycle

- Todo modelo tem owner, version, training/eval dataset refs, metrics,
  fairness/safety notes e rollback target.

- Offline eval antes de promotion; shadow scoring antes de alterar
  ranking crítico.

- A/B ou interleaving para ranking quando volume permitir.

- Métricas: precision@K, NDCG, calibration, reply/accept/post/order
  uplift, false-positive opportunity rate.

- Drift por market/category e freshness dos features.

- Retraining não é automático sem gate de avaliação e rollback.

## 13.4 LLM guardrails

- Inputs estruturados e tool-backed; não permitir que o modelo invente
  métricas.

- Output schemas validados; prompts/versiones em repositório.

- Evidence citations internas obrigatórias para recomendações factuais.

- Claims de produto/saúde/financeiros e conteúdo regulado passam por
  policy rules configuráveis.

- AI outreach respeita brand voice, opt-out, quotas e lista de campos
  permitidos.

- AI actions usam policy engine: suggest → draft → execute conforme
  risco e configuração.

# 14. Segurança, privacidade, compliance e antiabuso

O produto manipula tokens OAuth, dados comerciais, contatos de creators,
orders e potencialmente dados pessoais. Segurança deve ser baseline de
arquitetura, não etapa posterior.

| **Controle**            | **Requisito**                                                                                      |
|-------------------------|----------------------------------------------------------------------------------------------------|
| **Authentication**      | SSO/OIDC-ready, MFA para admins, session rotation, secure cookies.                                 |
| **Authorization**       | RBAC + resource scoping por workspace/brand/shop; deny-by-default.                                 |
| **Secrets/Tokens**      | Tokens criptografados em envelope/KMS-equivalent; nunca logados; rotation/revocation.              |
| **Tenant isolation**    | workspace_id obrigatório; database policies/repository guards; testes de cross-tenant access.      |
| **Audit**               | Immutable audit events para auth, connections, campaigns, outreach, roles, exports e AI actions.   |
| **PII**                 | Minimização, purpose limitation, retention e deletion workflows.                                   |
| **Encryption**          | TLS em trânsito; encryption at rest nos provedores; backups criptografados.                        |
| **Webhooks**            | Signature verification, timestamp/replay protection, idempotency.                                  |
| **Rate limiting**       | Per workspace/user/source e provider-aware.                                                        |
| **Exports**             | RBAC, audit, limits e signed temporary URLs.                                                       |
| **Email outreach**      | Unsubscribe/suppression, compliance aplicável (ex.: CAN-SPAM/legislação local), sender safeguards. |
| **Platform compliance** | Capacidades ativadas somente se scopes/approvals/ToS permitirem.                                   |

## 14.1 Privacy lifecycle

- Data inventory por source e finalidade.

- Retention matrix por tipo de dado.

- Delete/anonymize jobs com tombstone e audit trail.

- Export e subject request workflow quando aplicável.

- Revogar connection deve parar sync imediatamente e disparar policy de
  retenção.

- Backups devem respeitar janela de expiração documentada.

- Compliance é market-aware: Brasil/LGPD, EUA/regras aplicáveis,
  UE/GDPR/ePrivacy quando aplicável.

- Dados TikTok são tenant-scoped por padrão em armazenamento, features e
  modelos; uso cross-tenant permanece bloqueado até decisão/evidência
  específica.

- Marketplace API results são tratados como API-origin restricted data
  até prova em contrário; não montar base global própria a partir do
  cache de vários clientes.

- “Service provider” contratual não define automaticamente papel
  controlador/operador na LGPD; classificar por fluxo de tratamento.

# 15. Confiabilidade, performance e observabilidade

Metas abaixo são SLOs iniciais de engenharia; podem ser ajustadas com
dados reais, mas não removidas sem ADR.

| **Área**             | **Meta inicial**                                                                                             |
|----------------------|--------------------------------------------------------------------------------------------------------------|
| **Availability**     | 99,9% para web/API de leitura e operação principal após produção estabilizada.                               |
| **API reads**        | p95 \< 500 ms para reads comuns cacheáveis; endpoints analíticos pesados podem ser async/precomputed.        |
| **Search**           | p95 \< 1 s para creator/product search em volume nominal.                                                    |
| **Opportunity page** | Primeira resposta útil \< 2 s com evidence blocks carregando progressivamente.                               |
| **Ingestion**        | Freshness por source exposta; alertar quando ultrapassar SLO específico.                                     |
| **Queues**           | No silent loss; retries bounded; DLQ/quarantine e replay.                                                    |
| **RPO/RTO**          | Definir por data class; transacional com backups/PITR; analytics reconstruível do raw store quando possível. |

## 15.1 Observability

- Correlation/request ID do browser até connector/worker.

- OpenTelemetry traces para API e jobs críticos.

- Métricas por connector: calls, rate-limit, failures, auth errors, lag,
  data count.

- Métricas de data quality e model quality separadas de uptime.

- Business telemetry: opportunities surfaced/activated, creator funnel,
  attribution coverage.

- Alerts devem ser acionáveis e possuir runbook.

# 16. Estratégia de testes e Production Truth Gate

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>REGRA</strong></p>
<p>Nenhum módulo é “pronto” porque a tela abriu. Precisamos provar
domínio, dados, integração, UX, segurança e produção no mesmo
SHA.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

| **Camada**             | **O que testar**                                                                                                  |
|------------------------|-------------------------------------------------------------------------------------------------------------------|
| **Unit**               | Scores, state transitions, policies, normalization, calculations, dedupe.                                         |
| **Property-based**     | Idempotency, aggregation invariants, currency/time windows, ranking constraints.                                  |
| **Connector contract** | Fixtures oficiais, auth expiry, rate limit, partial pages, retries, webhooks, schema drift.                       |
| **Integration**        | PostgreSQL/Redis/object store; analytical store somente quando ADR-aprovado; transaction boundaries, outbox/jobs. |
| **Data quality**       | Freshness, completeness, duplicates, referential integrity, reconciliation.                                       |
| **Model eval**         | Ranking metrics, calibration, regression sets, hallucination/factuality for LLM outputs.                          |
| **API contract**       | OpenAPI schema, backward compatibility, auth/RBAC.                                                                |
| **E2E browser**        | Critical journeys: opportunity → creator → campaign → outcome.                                                    |
| **Accessibility**      | Automated + keyboard/manual critical flows.                                                                       |
| **Security**           | SAST, dependencies, secrets, authz tests, tenant isolation, webhook replay.                                       |
| **Performance**        | Search, opportunity lists, bulk actions, connector bursts, queue backlogs.                                        |
| **Recovery**           | Restore backup, replay raw ingestion, DLQ replay, token revoke.                                                   |

## 16.1 Production Truth Gate

1\. URL pública/ambiente correto responde.

2\. Versão/SHA exibido no runtime corresponde ao commit aprovado.

3\. Frontend crítico carrega sem erro console bloqueante.

4\. API principal responde com schema esperado.

5\. Dado exibido pode ser rastreado até source/provenance real.

6\. Fluxo principal executa write real em ambiente de teste/produção
controlada.

7\. Browser smoke usa o mesmo SHA do deploy.

8\. Observability confirma ausência de spike de errors/queue lag.

9\. Rollback testado/documentado.

## 16.2 Gates por motor

| **Motor**          | **Gate de qualidade**                                                    |
|--------------------|--------------------------------------------------------------------------|
| **Market/Product** | Cobertura + freshness + ranking regression + provenance.                 |
| **Creator**        | Search relevance + fit eval + dedupe + profile completeness.             |
| **Opportunity**    | Precision/utility eval + explanation factuality + false-positive review. |
| **Outreach**       | Quota/suppression/idempotency + delivery provider contract.              |
| **CRM/Samples**    | State machine + concurrent updates + full audit.                         |
| **Attribution**    | Dedup/reconciliation/returns + source confidence.                        |
| **Learning**       | Offline eval + shadow + rollback + model version trace.                  |
| **UX**             | E2E + accessibility + performance + empty/error states.                  |

# 17. CI/CD, ambientes e operação

| **Ambiente**   | **Uso**                                          | **Regras**                                          |
|----------------|--------------------------------------------------|-----------------------------------------------------|
| **Local**      | Dev rápido com fixtures/containers.              | Sem credenciais de produção; seeded test data.      |
| **Test/CI**    | Unit/integration/contracts/model eval.           | Ephemeral DB/services; deterministic fixtures.      |
| **Staging**    | Integrações sandbox/dev shops, E2E e acceptance. | Dados separados; feature flags; replay controlado.  |
| **Production** | Clientes e dados reais.                          | Migrations gated, audit, rollback, secrets managed. |

## 17.1 Pipeline mínimo

1\. Lint + typecheck + formatting.

2\. Unit + property-based.

3\. DB migration validation.

4\. Integration + connector contracts.

5\. OpenAPI compatibility.

6\. Model/prompt eval regression.

7\. SAST + secret scan + dependency scan.

8\. Build containers.

9\. Deploy staging.

10\. E2E + accessibility + smoke.

11\. Manual/automated approval gate conforme risco.

12\. Deploy production.

13\. Production Truth Gate no mesmo SHA.

14\. Post-deploy metrics + rollback if thresholds breached.

## 17.2 Database migrations

- Expand/contract para mudanças breaking.

- Migrations forward-only; rollback por deploy/schema strategy, não por
  editar histórico.

- Backfills assíncronos e resumíveis.

- Índices grandes criados de modo online/seguro conforme provider.

- Nenhuma migration destrutiva sem backup/PITR validado e ADR.

# 18. Sequência de construção

Isto é uma ordem de dependências, não um “MVP superficial”. Cada onda
precisa chegar ao seu gate de excelência antes de servir de base para a
próxima.

| Onda                              | Escopo                                                                                                                                                                                               | Gate para avançar                                                                                                              |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| 0 — Foundation                    | Repo, tenancy/auth, design system, observability, connector runtime, provenance/rights, CI/CD e contratos canônicos.                                                                                 | Security + tenancy + deploy + replay + design primitives + capability registry aprovados.                                      |
| 1 — Marco 1: thin slice econômica | 1 SKU → shortlist → ativação → conteúdo → pedido atribuído → Unit Economics → learning signal → próxima ação. Live é first-class se Brasil for confirmado e a capability oficial estiver disponível. | Thin slice funciona ponta a ponta; coverage da fonte é declarada; lacunas ficam BLOCKED/NOT SUPPORTED; nenhum dead end.        |
| 2 — Intelligence deepening        | Market/Product/Shop/Competitor/Content/Live/Ads/Creator intelligence adicional, inclusive provider licenciado após ADR-000.                                                                          | Cobertura/freshness/provenance/replay verificados para o source contratado; benchmark por capability antes de alegar paridade. |
| 3 — Execution scale               | CRM, segments, outreach agents, inbox, samples, campaigns e briefs em escala.                                                                                                                        | Fluxo completo sem planilha; quotas, suppressions, idempotency e audit aprovados.                                              |
| 4 — Creator Programs              | Contests, retainers, community/cohorts, paid collaborations, contracts e payout orchestration conforme capability aprovada.                                                                          | State machines e payment refs testados; nenhum payout duplicado; escopo de plataforma confirmado.                              |
| 5 — Rights & Amplification        | Usage rights, licensed content, expiry e paid amplification quando conectores existirem.                                                                                                             | Rights enforcement + separação paid/organic sem double-count.                                                                  |
| 6 — Attribution & Commerce Impact | Reconciliation, returns/refunds, contribution economics e incremental impact somente com suficiência estatística.                                                                                    | Financial truth gate + source hierarchy/confidence; correlação não é causalidade.                                              |
| 7 — Learning & Agent API          | Learning Engine, Copilot, external API/tools e model lifecycle.                                                                                                                                      | Eval + RBAC/policy + rollback + evidence requirements aprovados.                                                               |
| 8 — Expansion                     | Novo market/plataforma e aprofundamentos adicionais somente após capability/source review.                                                                                                           | Sem regressão de specialist depth; cobertura e UX comprovadas no novo escopo.                                                  |

## 18.1 Primeira fatia vertical de implementação

Marco 1 oficial: uma única thin slice ponta a ponta, sem exigir Global
Market Intelligence licenciada.

1\. Merchant Opportunity Engine v0: explicar por que 1 SKU merece
ativação (margem ou indisponível, estoque, comissão versus faixa
observada).

2\. Creator shortlist: ruleset de ativação v0.1 versionado e explicável.

3\. Ativação: outreach, amostra e campanha com estados reais e
auditoria.

4\. Conteúdo e resultado: publicação e pedidos atribuídos/medidos.

5\. Unit Economics: waterfall por linha, provisional/settled, origem,
Economic Coverage e Economic Confidence.

6\. Aprendizado: registrar recomendação → decisão → ação → resultado por
creator × SKU e reutilizar histórico depois.

7\. Próxima ação: regras explicáveis; nunca usar GMV como substituto
silencioso de lucro. Margem negativa com custo duvidoso vira
REVIEW_ECONOMICS.

8\. Contexto de vendas: “Desempenho atribuído” separado de “Contexto do
negócio”, sem causalidade.

Transversal: nenhuma lacuna termina em beco sem saída; explicar o que
falta e oferecer próxima ação.

Fora do aceite do Marco 1: Opportunity global, Global Creator
Intelligence, Commerce Impact incremental/causal e ML; entram quando
fonte/volume/evidência permitirem.

# 19. Definition of Done e gates de excelência

Uma feature pode ser Production-Ready quando passa os gates de
segurança, tenant isolation, dados/provenance, estados, testes,
observabilidade, UX e Production Truth Gate. Parity+ é um gate separado
e só é obrigatório antes de alegar igualdade/superioridade competitiva
para a capability.

- [ ] Requisito funcional e edge cases documentados.

- [ ] Dados de entrada têm fonte, autorização, provenance e freshness.

- [ ] Domain model/state transitions implementados, não apenas UI.

- [ ] API contract versionado e testado.

- [ ] UI possui loading, empty, partial, error e permission states.

- [ ] Accessibility crítica passa.

- [ ] Unit/integration/contract/E2E apropriados passam.

- [ ] Security/RBAC/tenant isolation testados.

- [ ] Observability e audit events existem.

- [ ] Performance dentro do SLO definido.

- [ ] Documentação/runbook atualizados.

- [ ] Comparação com benchmark do concorrente correspondente executada.

- [ ] Claude revisou adversarialmente mudanças materiais e achados foram
  resolvidos.

- [ ] Production Truth Gate passou no SHA de produção.

## 19.1 Feature parity não é checkbox

| **Exemplo ruim**             | **Padrão exigido**                                                                                                        |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| **“Tem creator search.”**    | Busca encontra creators relevantes em dataset real, com filtros, ranking, explicação, performance e testes de relevância. |
| **“Tem CRM.”**               | Estados, owner, histórico, inbox, samples, dedupe, bulk actions, audit e E2E completos.                                   |
| **“Tem opportunity score.”** | Score reproduzível, calibrado, explicado, com confidence, evidence e outcome learning.                                    |
| **“Tem attribution.”**       | Dedupe, returns, source hierarchy, reconciliation e confidence; sem double counting.                                      |
| **“Tem IA.”**                | IA usa tools/dados reais, output schema, evals, guardrails e audit.                                                       |

# 20. Governança de construção — ChatGPT + Claude

O documento foi desenhado para permitir execução por dois agentes com
papéis claros e revisão cruzada. A prioridade é evitar decisões
implícitas, drift arquitetural e “aprovação por autodeclaração”.

| **Papel**                   | **Responsabilidades**                                                                                                                                             |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Product Owner / usuário** | Aprovar mudanças materiais de visão, escopo, prioridade, risco comercial e decisões de produto não delegadas.                                                     |
| **ChatGPT**                 | Manter documento mestre/ADRs, decompor trabalho, implementar/coordenar, integrar módulos, executar gates e consolidar correções.                                  |
| **Claude**                  | Revisão adversarial independente de especificação, arquitetura, migrations, segurança, testes e mudanças materiais; procurar falhas, não apenas validar intenção. |

## 20.1 Workflow por mudança material

1\. Issue/spec com acceptance criteria e impacto no documento/ADR.

2\. Implementação em branch/PR pequena o suficiente para revisão real.

3\. CI e testes específicos.

4\. Revisão adversarial do Claude com evidência no código/schema/testes.

5\. Correções; nova execução dos gates afetados.

6\. Merge somente após gates verdes.

7\. Deploy e Production Truth Gate no mesmo SHA.

8\. Atualização de Documento Mestre/ADR quando a mudança alterou verdade
do projeto.

## 20.2 ADRs obrigatórios

- Adicionar/remover data store ou serviço independente.

- Mudar fonte de verdade de qualquer domínio.

- Alterar estratégia de tenancy/auth/secrets.

- Adicionar nova plataforma/market com semântica diferente.

- Mudar definição de score/attribution que afete comparabilidade
  histórica.

- Relaxar qualquer security/data quality/production gate.

- Introduzir automação autônoma com novo nível de risco.

## 20.3 Rótulos de governança e estado

- Origem da mudança: EXISTING-BUT-NOT-ENFORCED quando a regra já existia
  mas faltava enforcement; NEW REQUIREMENT quando a regra nasceu nas
  revisões.

- Estado de pendência: RESOLVED / OPEN RESEARCH / EXTERNAL ACTION
  REQUIRED / DECISION REQUIRED. Nenhum item muda de estado sem evidência
  correspondente.

# 21. Riscos, dependências e decisões pendentes

Riscos ativos e pendências devem ter severidade separada de
aceitação/mitigação. PLATFORM_CONCENTRATION está ASSESSED HIGH;
aceitar/mitigar permanece decisão do Product Owner.

- Concentração TikTok: access risk, economics risk, feature-absorption
  risk, policy/data-rights risk.

- Dependência dupla: TikTok + provider de market intelligence
  potencialmente concorrente.

- Origem/direitos de dados licenciados e contatos de creators.

- Economics incorreto por custo ausente, desatualizado ou bases
  misturadas.

- Pendências P0/externas: documentação logada da Affiliate API;
  aprovação/escopo; termos comerciais FastMoss/Kalodata/Tabcut;
  entrevistas de ICP/preço/conectores; lista autenticada do Affiliate
  Center nativo.

- DECISION REQUIRED: primeiro mercado, primeiro Commerce Connector e
  aceitação do risco de plataforma.

- EXTERNAL ACTION REQUIRED: termos comerciais de
  FastMoss/Kalodata/Tabcut; documentação logada da Affiliate API;
  aprovação escrita do escopo; 10–15 entrevistas de
  ICP/conectores/preço.

- EXTERNAL ACTION REQUIRED — P0: parecer jurídico específico sobre
  cláusulas 2.7/3.5, LGPD, contatos de creators e licenças de dados.

- EXTERNAL ACTION REQUIRED — P0: verificar a versão vigente dos TikTok
  Shop Developer Terms antes de produção.

- Risco ativo: disponibilidade/approval das Affiliate APIs e mudanças de
  escopo por mercado.

- Risco ativo: custo/continuidade de providers de market data e
  diferenças regionais de cobertura.

- Risco ativo: feature sprawl; limite de WIP = 1 vertical + 1 iniciativa
  de plataforma, salvo exceções registradas.

- Risco ativo: AI overclaim/hallucination; LLM nunca é fonte numérica de
  verdade e recomendações precisam de evidence refs.

- Risco ativo: resolução de identidade incorreta entre
  creator/product/order/fontes pode contaminar attribution e learning;
  mitigar com confidence, review e merge/split auditável.

- Regra de decisão por reversibilidade: risco reversível pode avançar
  com dúvida explícita e rollback; risco irreversível — mistura entre
  clientes, base global de perfis ou marketplace paralelo — só avança
  com confirmação aplicável.

## 21.1 Decisões comerciais abertas

- Nome comercial final: TBD.

- Pricing e packaging: TBD; só congelar após entrevistas, custo real dos
  providers e disposição a pagar.

- \[VERIFICADO — fontes públicas listadas em 22.5\] Faixas observadas de
  intelligence: aproximadamente US\$ 49–299/mês; operação creator:
  aproximadamente US\$ 199–599/mês. Referência competitiva não equivale
  a receita, margem ou willingness-to-pay. \[S23\]

- DECISION REQUIRED: primeiro mercado, primeiro Commerce Connector e
  aceitação/mitigação do risco de concentração de plataforma.

# 22. Apêndices

## 22.1 Capability matrix para integrações TikTok Shop

A documentação oficial distingue seller, creator e partner integrators;
autorizações e tokens não são intercambiáveis. O sistema deve
representar capacidade por conexão, market, actor type, app e scopes.
\[S1\]\[S3\]

| **Capability**         | **Seller**                       | **Creator**                        | **Partner/TAP**                           | **Fallback**                       |
|------------------------|----------------------------------|------------------------------------|-------------------------------------------|------------------------------------|
| Shop/catalog           | Conforme scopes                  | Limitado/contextual                | Conforme partner scope                    | Merchant connector/manual          |
| Affiliate creator data | Conforme Affiliate Seller APIs   | Creator-side authorized            | Conforme partner APIs                     | Licensed/estimated only if allowed |
| Outreach/collaboration | Conforme approval/limits         | Creator actions quando autorizadas | Partner campaigns quando aprovadas        | Email permitted channel            |
| Orders/GMV             | Authorized seller/affiliate APIs | Creator conversion where available | Affiliate order search when scope permits | Merchant order reconciliation      |
| Campaign links         | Seller/affiliate specific        | Share links where scope permits    | Partner campaign links                    | UTM/code merchant tracking         |

## 22.2 Score output contract

Todo score crítico deve retornar, além do valor:

- score: 0–100;

- confidence: 0–1 + class (high/medium/low);

- model_version;

- feature_snapshot_id;

- positive_factors\[\];

- negative_factors\[\];

- evidence_refs\[\];

- freshness summary;

- eligibility/policy flags;

- calculated_at.

## 22.3 Opportunity card contract

| **Campo**                          | **Obrigatório**                                                      |
|------------------------------------|----------------------------------------------------------------------|
| **Título acionável**               | Sim                                                                  |
| **Opportunity Score + confidence** | Sim                                                                  |
| **Why now (1–3 fatores)**          | Sim                                                                  |
| **Evidence count/sources**         | Sim                                                                  |
| **Relevant product/category**      | Sim quando aplicável                                                 |
| **Creator candidates**             | Sim quando há dados suficientes                                      |
| **Competitive gap**                | Sim quando monitoramos concorrentes                                  |
| **Risk/constraint**                | Sim                                                                  |
| **Recommended action**             | Sim                                                                  |
| **Activate CTA**                   | Sim quando execução é viável; desabilitado com explicação quando não |

## 22.4 Checklist de benchmark por release

- Comparar discovery/product views com Kalodata/FastMoss para o mesmo
  tipo de tarefa.

- Comparar creator discovery/matching com Euka/Cruva no mesmo cenário.

- Comparar CRM/samples/outreach com Reacher/Cruva/Colaba.

- Identificar pelo menos um fluxo onde somos objetivamente melhores em
  time-to-decision ou time-to-action.

- Registrar lacunas; não esconder “não suportado”.

- Não liberar marketing claim de superioridade sem benchmark
  reproduzível.

## 22.5 Fontes verificadas e evidências — atualizado em 03/10/2026

| **Fonte**                                                                                | **URL**                                                                                                    | **Uso no documento**                                                                                                                                                                   |
|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **\[S1\] TikTok Shop Partner Center — Developer Guide**                                  | https://partner.tiktokshop.com/docv2/page/tts-developer-guide                                              | API gives programmatic access to products, orders, fulfillment, finance, affiliate; developer types seller/creator/partner differ.                                                     |
| **\[S2\] TikTok Shop Partner Center — Affiliate Integration**                            | https://partner.tiktokshop.com/docv2/page/affiliate-integration                                            | Affiliate APIs require app/partner setup and are inactive by default until approval.                                                                                                   |
| **\[S3\] TikTok Shop Partner Center — Creator Authorization Guide**                      | https://partner.tiktokshop.com/docv2/page/creator-authorization-guide                                      | Creator authorization is OAuth-based and creator tokens differ from seller tokens.                                                                                                     |
| **\[S4\] Kalodata Knowledge Base**                                                       | https://www.kalodata.com/knowledge.html                                                                    | Core features: product, creator, shop, category, video creative, ads/organic analysis and livestream monitoring.                                                                       |
| **\[S5\] FastMoss official site**                                                        | https://www.fastmoss.com/pt                                                                                | Product, creator, shop, ads, videos, livestreams and historical TikTok Shop analytics.                                                                                                 |
| **\[S6\] Cruva User Guide**                                                              | https://cruva.com/guide                                                                                    | Creator sourcing, outreach, automated CRM/community and affiliate lifecycle.                                                                                                           |
| **\[S7\] Euka official site**                                                            | https://euka.ai/                                                                                           | AI creator search, discovery, activation, engagement, GMV tracking and optimization.                                                                                                   |
| **\[S8\] Reacher — Creator CRM**                                                         | https://reachermail.com/features/creator-crm                                                               | CRM unifying status, samples, content, messages and GMV.                                                                                                                               |
| **\[S9\] Reacher — Sample Management**                                                   | https://reachermail.com/features/sample-management                                                         | Sample queue, rules, shipping/post tracking and GMV context.                                                                                                                           |
| **\[S10\] Colaba official site**                                                         | https://www.colaba.us/                                                                                     | Creator database, filtering, bulk invites, CRM and outreach analytics.                                                                                                                 |
| **\[S11\] TikTok for Developers — Shop Product Research API**                            | https://developers.tiktok.com/docs/en/research-api-specs-query-tiktok-shop-products                        | Example of official product fields and regional/authorization constraints; not a substitute for Affiliate APIs.                                                                        |
| \[S12\] Cruva — AI Creator Search                                                        | https://www.cruva.com/ai-creator-search                                                                    | Natural-language creator search, image/lookalike search, full creator graph enrichment and conversion-oriented ranking.                                                                |
| \[S13\] Euka — AI Copilot                                                                | https://support.euka.ai/articles/4811696780-introducing-ai-copilot-your-personal-data-analyst-inside-euka  | Copilot over live store data; creator discovery/evaluation, lists, campaigns, Social Intelligence and actions.                                                                         |
| \[S14\] Euka — Retainers                                                                 | https://support.euka.ai/articles/3721218095-10-retainer-beta                                               | Recurring creator partnerships, deliverables, applications, contracts, period tracking and payouts.                                                                                    |
| \[S15\] Euka — Social Intelligence                                                       | https://support.euka.ai/articles/4033482346-euka-ai-social-intelligence-research-your-tiktok-shop-market   | Top brands/products/categories, creator videos, creative insights; available in app, Copilot, API and MCP.                                                                             |
| \[S16\] Euka — Claude MCP                                                                | https://support.euka.ai/articles/1497068944-euka-claude-mcp                                                | External AI client access to performance, creator discovery, CRM, campaigns and market intelligence via tool interface.                                                                |
| \[S17\] Euka — Product Site                                                              | https://euka.ai/                                                                                           | Dynamic segments, outreach agents, auto-responder, contests, retainers, rights, Meta Ads amplification, Copilot and attribution.                                                       |
| \[S18\] FastMoss — Product Site                                                          | https://m.fastmoss.com/                                                                                    | Winning products, market insights, creator discovery, competitor shops, ads, live/video monitor, script generator and review analysis.                                                 |
| \[S19\] TikTok Shop Partner Center Terms — página global vigente                         | https://partner.tiktokshop.com/docv2/page/6506bbf2de672602b7bc0697                                         | Página oficial de termos; não resolve sozinha qual versão de Developer Terms se aplica ao Brasil. A pendência P0 permanece.                                                            |
| \[S20\] FastMoss API — Creator Search                                                    | https://developers.fastmoss.com/api/docs/creator/v1/search                                                 | API pública documenta creator search e região BR; direitos comerciais/armazenamento continuam sujeitos ao ADR-000 e contrato.                                                          |
| \[S21\] Shopify Help Center — TikTok Shop setup                                          | https://help.shopify.com/pt-BR/manual/online-sales-channels/social-commerce/tiktok/setup                   | Brasil listado entre países suportados; integração de catálogo/estoque/fulfillment/pedidos conforme documentação.                                                                      |
| \[S22\] Bling Developers — Webhooks                                                      | https://developer.bling.com.br/webhooks                                                                    | Webhooks oficiais para pedidos/produtos/estoque e recursos relacionados; usar REST + webhooks, sem MCP oficial confirmado.                                                             |
| \[S23\] Euka Pricing                                                                     | https://euka.ai/pricing                                                                                    | Referência pública de planos/capabilities; preço público não equivale a receita, margem ou disposição a pagar.                                                                         |
| \[S24\] Euka — Cold-Start Shop Playbook                                                  | https://support.euka.ai/articles/5703901799-cold-start-shop-playbook                                       | Benchmark público de cold start e progressão operacional; claims tratados conforme taxonomia de evidência.                                                                             |
| \[S25\] Cruva API Documentation                                                          | https://cruva.com/docs/api                                                                                 | custom_cogs, timeseries/analytics e campos públicos usados no benchmark; ausência de endpoint público não prova ausência no produto.                                                   |
| \[S26\] Baguete — As empresas de TI por detrás no TikTok Shop no Brasil                  | https://www.agencia.baguete.com.br/noticias/as-empresas-de-ti-por-detras-no-tiktok-shop-no-brasil          | Contexto jornalístico sobre os 13 parceiros de lançamento no Brasil; não prova capability contratual.                                                                                  |
| \[S27\] Momentum Works — TikTok Shop in Brazil H1 2026                                   | https://momentum.asia/insights/detail/tiktok-shop-in-brazil-h1-2026                                        | Estimativas de terceiro sobre escala/canal/live no Brasil; sempre rotular como estimativa de terceiro.                                                                                 |
| \[S28\] TikTok for Developers — Affiliate APIs launch                                    | https://developers.tiktok.com/blog/2024-tiktok-shop-affiliate-apis-launch-developer-opportunity            | Fonte pública sobre Affiliate APIs e busca de produtos/open collaboration; uso continua subordinado a tenant, approval e termos aplicáveis.                                            |
| \[S29\] TikTok Shop Developer Terms — EU/EEA (versão pública atual revisada nas rodadas) | https://seller-hu.tiktok.com/university/essay?knowledge_id=8802234122356497                                | Corrobora restrições de End User data, retenção, compartilhamento, profiling/database e competir/replicar/recriar; aplicabilidade exata ao Brasil continua P0.                         |
| \[S30\] TikTok Shop Seller Terms — Brasil (2026)                                         | https://seller-br.tiktok.com/university/essay?default_language=en&identity=1&knowledge_id=3268441302615809 | Termos públicos do Brasil para Sellers; úteis para contexto de actor/mercado, mas não usados como evidência da restrição de competir/replicar/recriar sem trecho verificável correspondente. |
| \[S31\] TikTok Shop Global Partner Center Terms                                          | https://seller-br.tiktok.com/university/essay?knowledge_id=3037474364589840&lang=pt-BR                     | Define Partner/prestador terceirizado e termos complementares; usado para mapear actor/app type sem resolver sozinho qual contrato rege cada capability.                               |
| \[S32\] TikTok Developer Terms of Service — Global                                       | https://www.tiktok.com/legal/page/global/tik-tok-developer-terms-of-service/en                            | Termos globais atuais corroboram a proibição de coletar dados pessoais para finalidade não autorizada e de construir/complementar perfis, bancos de dados ou registros semelhantes; a numeração difere de versões históricas. |

## 22.6 Critério de sucesso do produto

<table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><p><strong>PRODUTO BEM-SUCEDIDO</strong></p>
<p>O cliente não precisa alternar entre uma ferramenta de intelligence e
outra de creator operations. Ele encontra a oportunidade, entende a
evidência, seleciona os creators, executa a campanha, mede o resultado e
aprende — com profundidade de especialista em cada etapa e uma UX
simples o suficiente para não exigir um analista dedicado.</p></th>
</tr>
</thead>
<tbody>
</tbody>
</table>

## 22.7 Próximo passo de construção

A implementação começa pelo Marco 1 thin-slice. Global Market
Intelligence licenciada não bloqueia o Marco 1; antes de ativar qualquer
provider em produção, ADR-000 deve fixar direitos de exibição,
derivação, cache, retenção e uso em aprendizado.

A documentação vigente usa gates Production Truth e Parity+ separados.
Histórico de versões antigas foi movido ao Anexo H; somente as seções
canônicas atuais orientam construção.

# 23. Histórico do Blueprint v0.3 — conteúdo substituído

Conteúdo normativo removido desta seção. As decisões vigentes foram
fundidas nas seções canônicas. Ver Anexo H para o registro histórico;
esta seção não é fonte normativa.

# 24. Doutrina competitiva Parity+ — igualdade ou superioridade por capability

Decisão material v0.3. O produto final não será um resumo funcional dos
concorrentes. Ele deverá cobrir as capabilities relevantes de Kalodata,
FastMoss, Cruva e Euka dentro do escopo de Creator Commerce e entregar
cada uma em nível igual ou superior. A sequência de construção existe
para reduzir risco de engenharia; não reduz a ambição nem o escopo
final.

## 24.1 O que “igual ou melhor” significa

- Cobertura: a capability relevante existe de ponta a ponta, incluindo
  estados de erro, permissões, histórico, exportação/ações quando
  aplicáveis e integrações necessárias.

- Profundidade: suporta os filtros, entidades, relações e decisões que
  tornam a capability realmente útil para um operador profissional.

- Qualidade de dados: provenance, freshness, identidade canônica e
  classificação MEASURED / ESTIMATED / INFERRED são visíveis e
  auditáveis.

- Confiabilidade: resultados reproduzíveis, jobs idempotentes,
  observabilidade, state machines e recuperação de falhas.

- UX: executar a tarefa deve exigir menos esforço cognitivo e menos
  troca de contexto que no benchmark, sem esconder profundidade de
  power-user.

- Integração: a saída de uma capability alimenta automaticamente a
  próxima etapa do ciclo; o usuário não precisa exportar CSV e
  reconstruir contexto em outra ferramenta.

- Resultado: sempre que mensurável, medir time-to-insight,
  time-to-action, precision/recall, completion rate, conversion lift,
  attribution coverage, GMV/margem incremental ou outra métrica
  adequada.

## 24.2 Matriz de paridade por benchmark

| **Benchmark** | **Capabilities que entram na paridade**                                                                                                                                                                                                                                              | **Nossa obrigação mínima**                                                                                                                                                      |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kalodata      | \[VERIFICADO — fonte pública\] Product research/rankings; category/market trends; shop intelligence; creator intelligence; video intelligence; LIVE intelligence; competitor tracking; histórico e séries; sinais de vendas/GMV quando disponíveis.                                  | Paridade funcional e de profundidade em intelligence; superar em provenance, explicabilidade, Opportunity Engine e passagem direta para ação.                                   |
| FastMoss      | \[VERIFICADO — fonte pública\] Winning products; market/category intelligence; shops/competitors; creators; vídeos; LIVEs; ads/creative intelligence; monitoramento; scripts/review intelligence e recursos adjacentes relevantes ao commerce.                                       | Paridade nas capabilities do escopo; superar na unificação do evidence graph, decisão, creator fit, campanha e learning.                                                        |
| Cruva         | \[VERIFICADO — fonte pública\] Creator discovery; competitor creators; lookalikes; outreach; follow-ups; CRM; samples; cohorts/communities; content tracking; affiliate analytics/GMV e flywheel de reativação.                                                                      | Paridade operacional real; superar em matching, creative brief, automação governada, atribuição/profit e integração com market intelligence.                                    |
| Euka          | \[VERIFICADO — fonte pública\] Natural-language creator search; sales-oriented matching; dynamic segments; outreach agents; auto-responder; CRM comportamental; samples/campaigns; contests; retainers; communities; content rights; paid amplification/Meta; attribution e Copilot. | Paridade funcional nas capabilities relevantes; superar em data truth, explainability, Opportunity Engine, profit intelligence, learning por marca e agent safety/auditability. |

## 24.3 Gate Parity+ por capability

1\. Benchmark spec: documentar exatamente como o concorrente resolve a
tarefa, entradas, saídas, filtros, estados e limites conhecidos.

2\. Competitor fixture: criar cenário reproduzível com dataset e tarefa
equivalente.

3\. Functional parity test: provar que o nosso fluxo cobre o mesmo
job-to-be-done sem atalhos manuais externos.

4\. Data-quality test: comparar consistência, freshness, cobertura e
proveniência; nunca esconder diferença entre dado oficial, estimado ou
inferido.

5\. UX benchmark: medir passos, tempo para concluir, taxa de erro e
clareza da decisão.

6\. Reliability/security gate: carga, retries, idempotência, tenant
isolation, audit trail, permission model e abuse controls.

7\. Superiority target: cada capability deve ter pelo menos uma dimensão
objetiva em que somos melhores — por exemplo, decisão, integração,
explicabilidade, velocidade, UX ou aprendizagem.

8\. Adversarial review: Claude revisa a evidência, tenta falsificar a
alegação de paridade e registra blockers.

9\. Production Truth Gate: só conta como entregue se a mesma capability
passar no SHA realmente implantado.

10\. Evidence label: quando o benchmark usar somente documentação
pública, marcar PUBLIC-CONFIRMED; isso prova existência, não paridade.
AUTH-VERIFIED continua obrigatório antes de declarar que reproduzimos ou
superamos um fluxo autenticado.

11\. Native benchmark: incluir o Affiliate Center gratuito e medir valor
incremental, não só passos. Cada capability deve responder se o TikTok
já faz, o que resta se o endpoint mudar e o que resta se o TikTok copiar
a feature.

- Classificação de dependência da plataforma por capability: NONE / LOW
  / MATERIAL / CRITICAL, sempre com justificativa. O teste deve
  registrar sobreposição nativa, finalidade autorizada, valor adicional,
  necessidade de aprovação e o que resta se a plataforma mudar/copiar a
  capability.

## 24.4 O que não será aceito

- Tela vazia ou mock que apenas imita visualmente a feature do
  concorrente.

- Feature com metade dos filtros ou relações essenciais e chamada de
  “equivalente”.

- Score sem explanation/evidence ou baseado em dados que não conseguimos
  provar.

- GMV, vendas, ROAS ou conversão estimados apresentados como medidos.

- Fluxo que exige exportar dados e terminar a operação em planilha ou
  ferramenta externa quando prometemos execução nativa.

- Automação de outreach sem quotas, suppression, deduplicação, opt-out e
  auditoria.

- Adicionar nova plataforma antes de a capability anterior atingir o
  gate de excelência definido.

- Claim comercial “melhor que X” sem benchmark atual, reproduzível e
  documentado.

## 24.5 Ordem de construção não é ordem de importância

Para construir com qualidade, as capabilities serão liberadas por
sequência controlada. Isso não significa que as etapas posteriores sejam
opcionais. O produto-alvo inclui a matriz completa acima. Se uma
capability crítica de um benchmark estiver planejada para uma etapa
posterior, ela permanece um requisito obrigatório do produto final e
deve estar rastreada no backlog com owner, dependências, benchmark e
acceptance criteria.

## 24.6 Regra de encerramento competitivo

Uma família funcional só pode ser marcada como PARITY+ COMPLETE quando:
(a) todas as capabilities relevantes da matriz daquele benchmark
estiverem implementadas ou justificadamente classificadas como
NOT-APPLICABLE por escopo; (b) cada capability passar seus gates; (c)
nenhuma limitação de acesso a dados for mascarada; e (d) houver
evidência de pelo menos uma superioridade objetiva no fluxo integrado.
Se acesso oficial ou legal impedir equivalência real, o status correto é
BLOCKED / NOT SUPPORTED — nunca “paridade”.

## 24.7 Impacto no plano ChatGPT + Claude

A partir da v0.3, todo épico competitivo deve carregar os campos
benchmark, competitor_capability, parity_metric, superiority_target,
evidence_fixture, data_access_status, test_plan e
adversarial_review_status. ChatGPT coordena especificação e
implementação; Claude revisa adversarialmente a paridade e tenta
encontrar gaps antes do fechamento do gate.

# 25. Competitive Capability Registry v0.4 — auditoria pública dos quatro benchmarks

**Decisão material v0.4.** A matriz competitiva anterior foi aprofundada
com uma auditoria sistemática das páginas públicas, help centers,
pricing e documentação técnica de Kalodata, FastMoss, Cruva e Euka em
03/09/2026. Este registro passa a ser a referência competitiva até a
auditoria autenticada. Nenhuma alegação de paridade pode se apoiar
apenas na homepage do concorrente.

## 25.1 Níveis de evidência e regra de comparação

- VERIFICADO / PUBLIC-CONFIRMED: funcionalidade explicitamente
  documentada em fonte oficial pública.

- VERIFICADO-AUTENTICADO / AUTH-VERIFIED: fluxo observado em área
  autenticada/trial, com passos/estados/limites registrados.

- CLAIM DO FORNECEDOR / VENDOR-CLAIM: número, precisão ou vantagem
  declarada pelo fornecedor sem validação independente.

- DESCONHECIDO / UNKNOWN: capability citada/sugerida sem evidência
  suficiente.

- INFERÊNCIA: conclusão analítica derivada de fatos observados; nunca
  apresentar como capability verificada.

**Regra Parity+:** PUBLIC-CONFIRMED basta para entrar no nosso
capability registry e no roadmap. AUTH-VERIFIED é obrigatório antes de
declarar que reproduzimos ou superamos um fluxo cuja UX, estados ou
limites dependem da área logada. Credenciais e senhas não devem ser
armazenadas no documento nem copiadas para chats.

## 25.2 Kalodata — capability inventory

| Domínio               | Capability pública confirmada                                                                                                                       | Implicação para o nosso produto                                                                                      |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Superfícies           | PC, mobile web e apps iOS/Android; navegação Explore, Category, Shop, Creator, Product, Video e Livestream.                                         | Nossa experiência precisa atingir paridade cross-device e não tratar mobile como versão reduzida sem ações críticas. |
| Product Intelligence  | Produtos populares/em crescimento, creators promotores, comissão, selling points, reviews de compradores resumidas por IA.                          | Product detail precisa conectar performance, creators, conteúdo, comissão e voz do cliente.                          |
| Creator Intelligence  | Filtros para high-sales, fast-growing e “dark horse”; distinção streamer/vídeo; demografia de audiência; exportação de mais de 10 tipos de contato. | Creator graph e search precisam ter profundidade comercial, audiência, contato e histórico.                          |
| Shop/Competitor       | Sales-source mix, produtos populares, creators promotores e detalhes de vendas por shop.                                                            | Competitor view precisa explicar como a loja vende e por quais canais/creators.                                      |
| Category Intelligence | Hierarquia de três níveis, combinações multi-categoria, crescimento, produtos e creators; identificação proprietária de “blue ocean”.               | Precisamos de category market maps e oportunidade normalizada por mercado/categoria.                                 |
| Video/Ads             | Separação orgânico x pago, monitoramento de ad placement e revenue, download HD sem watermark, transcrição e rewrite de script com IA.              | Creative intelligence deve distinguir distribuição, deconstruir criativo e transformar insight em brief/roteiro.     |
| LIVE                  | Gravação de live e análise minuto a minuto de tráfego/transações; filtros por conta, followers, horário e origem do produto.                        | LIVE intelligence deve ser tratada como capability profunda, não apenas lista de lives.                              |
| Dados                 | Cobertura declarada em 15 países; custom data export pago.                                                                                          | Precisamos manter provenance/coverage por país e evitar claims de precisão sem metodologia verificável.              |

- Fontes oficiais públicas:

<!-- -->

- https://www.kalodata.com/knowledge.html

- Exemplos públicos de páginas de detalhe em https://www.kalodata.com/
  (parte dos dados exige login).

<!-- -->

- Pendências para auditoria autenticada:

<!-- -->

- Campos/filtros exatos e comportamento de cada detail page após login.

- Limites reais de exportação, favoritos/monitoramento e workflows de
  alertas por plano.

- Metodologia dos modelos/estimativas e critérios exatos de
  rankings/scores proprietários.

- Disponibilidade e escopo de API/integrações privadas, se houver.

## 25.3 FastMoss — capability inventory

| Domínio            | Capability pública confirmada                                                                                                                          | Implicação para o nosso produto                                                                            |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Market/Product     | Market Pulse, category trends, keyword trends, winning products, rankings e ampla série histórica.                                                     | Nosso intelligence core precisa cobrir descoberta, ranking e tendência com histórico comparável ou melhor. |
| Shop/Competitor    | Insights de lojas e monitoramento de lançamentos, preços e estratégia de marketing de concorrentes.                                                    | Competitor intelligence precisa ir além de métricas e modelar movimentos estratégicos.                     |
| Creator            | Base declarada de centenas de milhões de creators, matching multidimensional e contato; MossCreator acrescenta outreach e gestão de equipe.            | Precisamos unir data depth e operations sem separar contexto em produtos distintos.                        |
| LIVE/Video         | Monitor de vídeo/live, rankings, casos de sucesso, viral/e-commerce video history, downloader.                                                         | Precisamos monitoramento contínuo, histórico, decomposição e alertas.                                      |
| Ads                | Pesquisa/ranking de anúncios e análise de materiais de alta performance.                                                                               | Ad/creative intelligence entra como benchmark de contexto comercial, mesmo sem virar mídia paga genérica.  |
| AI Toolbox         | VOC/consumer insights, smart video cutting, content insights, script generation/imitation e product-review analysis.                                   | Creative/VOC intelligence precisa produzir decisão e ativo acionável, não apenas resumo.                   |
| Ecosystem          | MossCreator para marketing de creators e YooFinds para product selection/affiliate matching.                                                           | O nosso produto deve cobrir o ciclo dentro de uma única verdade de dados e identidade.                     |
| Developer Platform | API comercial e 55 ferramentas em seis domínios — Product, Shop, Creator, Agency/MCN, Market e Advertising — expostas também por MCP/CLI/Agent Skills. | Agent API/MCP não é extra: deve operar os mesmos dados e ações do produto com policy/audit.                |

- Fontes oficiais públicas:

<!-- -->

- https://www.fastmoss.com/pt

- https://www.fastmoss.com/pt/pricing

- https://developers.fastmoss.com/

- https://developers.fastmoss.com/docs/cli/skills.html

<!-- -->

- Pendências para auditoria autenticada:

<!-- -->

- UX e state machines do MossCreator e YooFinds dentro da área
  autenticada.

- Semântica/metodologia exata de vendas e outros dados apresentados como
  “reais” pelo fornecedor.

- Filtros completos, export formats e limites por plano além do que
  pricing expõe.

- Precisão/latência prática das 55 tools e comportamento de
  writes/actions, se existentes.

## 25.4 Cruva — capability inventory \[S25\]

| Domínio             | Capability pública confirmada                                                                                                                                                                                    | Implicação para o nosso produto                                                                            |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| AI Creator Search   | Natural-language search, Lookalike Search, Image Search, 20+ filter dimensions; audiência, GMV history, cadence, topics, brand affinity e ranking por likelihood to convert.                                     | Creator discovery precisa ser multimodal, explicável e conectado diretamente ao outreach.                  |
| Social Intelligence | Indexação/pesquisa de marcas, produtos, vídeos virais e creators; competitor creator mining.                                                                                                                     | Social intelligence deve alimentar Opportunity Engine e lists sem export manual.                           |
| Outreach            | Automations, Target Collab/DM, email, quotas/caps, AI auto replies e integração direta com lists.                                                                                                                | Precisamos igualar automação, rate-limit awareness, suppression/dedupe e personalização.                   |
| CRM/Samples         | CRM, groups, automations, sample requests, auto-approval e funnel até posted/repeat.                                                                                                                             | Creator state machine e sample state machine precisam ser first-class.                                     |
| Content             | Affiliate videos/LIVEs, creator briefs, content moderation, adspend/ROI e insights de combinações de formato.                                                                                                    | Content intelligence deve ser operacional e ligada a GMV/ROI.                                              |
| Halo Effect         | Correlação transparente entre TikTok activity e Amazon/Shopify revenue, com product mapping, CSV e métricas documentadas.                                                                                        | Off-platform effect precisa ser explícito sobre correlação versus causal attribution.                      |
| Creator Community   | Brand Hub; Contest, Leaderboard, Race, Bingo, Sweepstakes, Retainer; payouts; creator/video rosters.                                                                                                             | Programs/retention precisam ter workflows completos e accounting/audit apropriado.                         |
| Rights & Paid Scale | Usage Rights, licensed content, Spark codes, TikTok GMV Max, Meta Partnership Ads, whitelisting, versioned agreements e creator payouts.                                                                         | Rights/paid amplification precisa ser stateful, versionada, auditável e conectada à performance.           |
| Developer/Copilot   | Copilot, MCP em todos os planos e REST API; chaves escopáveis; standard endpoints incluem stats, products, affiliates, videos, lives, spark, ads, samples, messaging e automations. Não há webhook público hoje. | Nosso Agent/API layer deve alcançar paridade de leitura/ação e superar em eventing/webhooks quando seguro. |

- Fontes oficiais públicas:

<!-- -->

- https://cruva.com/guide

- https://cruva.com/help-center/

- https://www.cruva.com/ai-creator-search

- https://cruva.com/help-center/copilot/api-mcp

- https://cruva.com/help-center/integrations/meta-ads-programs

- https://cruva.com/help-center/integrations/halo-effect

<!-- -->

- Pendências para auditoria autenticada:

<!-- -->

- Comportamento real e latência de AI Search/Lookalike/Image Search com
  datasets equivalentes.

- Configuração completa e recovery/error states de outreach automations
  e AI Auto Replies.

- Copilot: conjunto real de write actions, confirmation gates e
  qualidade de respostas.

- Frescor/cobertura dos dados, sincronização e casos-limite de
  attribution/Meta/TikTok/Amazon/Shopify.

## 25.5 Euka — capability inventory

| Domínio              | Capability pública confirmada                                                                                                                                                            | Implicação para o nosso produto                                                                  |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Operating Model      | Fluxo Analyze → Recruit → Engage & Manage → Amplify → Measure, também exposto via MCP.                                                                                                   | É o benchmark mais próximo da consolidação end-to-end que queremos superar.                      |
| AI Creator Search    | ~4M creators em TikTok e Instagram; busca Profile, Visual, Transcript e By Image; product-curated recommendations, GMV/follower filters, bulk select, lists e CSV.                       | Nossa busca precisa igualar multimodalidade, escala operacional e contexto de produto.           |
| Agents/Outreach      | My Agents com diferentes métodos, incluindo Target Collaboration + product card + message; automação de creator operations.                                                              | Agent execution deve ser policy-driven, auditável e com preview/approval conforme risco.         |
| Samples              | Auto-approval por GMV, post rate, PPS e estimated sales/video; tiered manual review.                                                                                                     | Sample scoring/approval precisa combinar regras, score e human review.                           |
| Social/Creative      | Premium Social Intelligence, automated outreach to competitors’ creators e automated creative briefing.                                                                                  | Opportunity/Creative engines precisam absorver competitor signals e produzir briefs específicos. |
| Programs             | Unlimited contests no Growth; retainers, creator marketplace/paid collaborations, contracts/deliverables e creator payouts.                                                              | Engage & Scale precisa suportar recorrência e paid collaborations sem virar CRM genérico.        |
| Rights/Amplification | Usage rights, licensed creator content, one-click Meta Ads, creator compensation por ad spend/revenue/flat fee; paid-collab content inclui direitos amplos conforme termos documentados. | Rights engine precisa registrar term/channel/territory/version/fee e impedir uso após expiração. |
| Billing              | Automatic invoicing agrega payouts vencidos em uma fatura recorrente, com auto-pay opcional e records itemizados.                                                                        | Payout/billing ops precisa escalar sem trabalho manual e com ledger/audit.                       |
| Measure/Copilot/MCP  | GMV, creators, products, content, LIVE, ads, funnels, retention; MCP mostra read/write steps e pode preparar rights→Meta de forma rastreável.                                            | Nosso Copilot/agent layer precisa unir diagnosis, recommendation e safe execution.               |

- Fontes oficiais públicas:

<!-- -->

- https://euka.ai/

- https://euka.ai/pricing

- https://euka.ai/mcp

- https://support.euka.ai/articles/1355698115-9-ai-creator-search-finding-the-right-creators

- https://support.euka.ai/articles/8679263075-1-my-agents-type-of-agents-outreach-methods

- https://support.euka.ai/articles/5716714446-2-sample-requests-auto-approval

- https://support.euka.ai/articles/5035558206-7-creator-marketplace-paid-collaborations

- https://support.euka.ai/articles/5387391252-automatic-invoicing

<!-- -->

- Pendências para auditoria autenticada:

<!-- -->

- Campos completos e UX do Social Intelligence dentro da aplicação.

- Todas as categorias de Agents, triggers, retry/error states e limits.

- Retainers/contracts e payout workflows completos em cenários de
  edição, cancelamento e disputa.

- Metodologia exata de attribution/ROI e profundidade de dados Instagram
  versus TikTok Shop.

- Copilot/MCP write permissions, confirmation semantics e rollback em
  produção.

## 25.6 Conclusão competitiva da auditoria pública

- **Euka:** É hoje o benchmark mais próximo da consolidação end-to-end:
  analyze/recruit/engage/amplify/measure + agent/MCP.

- **Cruva:** É o benchmark operacional mais amplo em affiliate flywheel,
  community, rights, Meta/TikTok paid amplification, halo effect e
  API/MCP.

- **FastMoss:** É o benchmark de profundidade/amplitude de commerce
  intelligence e está transformando dados em infraestrutura de agentes
  via API/MCP/CLI.

- **Kalodata:** É benchmark de analytics/market intelligence detalhado,
  especialmente product/creator/shop/category/video/live e decomposição
  orgânico/pago.

**Target arquitetural do nosso produto:** não somar quatro produtos
superficialmente, mas atingir paridade ou superioridade dentro de cada
família relevante: intelligence de Kalodata/FastMoss; creator operations
e scale de Cruva/Euka; e superar todos na integração entre evidence →
opportunity → creator fit → creative strategy → execution →
attribution/profit → learning.

## 25.7 Plano da auditoria autenticada

- **Kalodata:** Explore; Category; Shop; Creator; Product; Video;
  Livestream; filtros avançados; detail pages; watch/favorite/monitor;
  exports; mobile; limites por plano.

- **FastMoss:** Market Pulse; Product; Shop; Creator; Video; LIVE; Ads;
  AI toolbox; monitor; MossCreator; YooFinds; extension;
  developer/API/MCP/CLI workflows.

- **Cruva:** AI/Lookalike/Image Search; Social Intelligence; outreach
  automation builder; CRM/groups; samples; content/brief/moderation;
  community campaigns; rights; Spark/GMV Max; Meta Ads; Halo; Copilot;
  API.

- **Euka:** Social Intelligence; AI Search; Agents; CRM/lists; samples;
  contests; retainers; marketplace; rights; Meta; payouts/invoices;
  performance; Copilot/MCP.

**Security rule:** o usuário deve autenticar-se diretamente no ambiente
de navegação autorizado. Senhas, códigos MFA, API secrets ou recovery
codes não devem ser enviados para o chat nem persistidos em
documentação. Para cada tela autenticada, registrar capability, inputs,
outputs, filtros, estados, limites, screenshots/evidência,
data/freshness e comparação Parity+.

## 25.8 Impacto imediato na construção

Registry competitivo v1.5 inclui também o TikTok Affiliate Center
nativo, Reacher, Hubfluence, DAMI, Social Snowball e Agentative como
referências adicionais quando relevantes. Toda afirmação competitiva usa
Verificado / Claim do fornecedor / Inferência / Desconhecido e, para
fluxos autenticados, PUBLIC-CONFIRMED / AUTH-VERIFIED conforme seção
25.1.

- O Architecture Freeze Pack não pode congelar capability coverage dos
  quatro benchmarks sem incorporar este registry.

- Cada épico competitivo passa a ter evidence_level = PUBLIC-CONFIRMED
  \| AUTH-VERIFIED \| VENDOR-CLAIM \| UNKNOWN.

- Capabilities desconhecidas ou não verificadas não podem ser removidas
  do escopo silenciosamente; devem permanecer como gap explícito.

- Nova auditoria pública deve ser repetida antes de cada freeze material
  e antes de claims externos de superioridade.

- Claude deve revisar adversarialmente cada família de capability e
  tentar encontrar funções do concorrente que ficaram fora da matriz.

**Histórico de versão:** v0.4 incorpora a auditoria pública aprofundada
dos quatro benchmarks e cria o Competitive Capability Registry. A
próxima revisão documental será gerada após a auditoria autenticada ou
qualquer descoberta material adicional.

# 26. Auditoria autenticada e incorporação competitiva v0.5

Evidência da seção: VERIFICADO-AUTENTICADO somente para fluxos realmente
observados; claims públicos não autenticados continuam separados.

Decisão material v0.5. Em 03/09/2026, a sessão autorizada da Euka foi
confirmada dentro de app.euka.ai/dashboard. A coleta registrou o que é
realmente observável na conta Free Plan, separando capability de menu,
paywall, declaração comercial e bloqueio de acesso. Nenhuma senha,
código MFA ou segredo foi armazenado neste documento.

## 26.1 Euka — evidência autenticada confirmada

- Conta autenticada: “dbdanielbaracho's Brand”, plano Free Plan;
  dashboard e navegação principal carregaram com sucesso.

- Navegação observada: Dashboard; AI Creator Search; Outreach; Affiliate
  CRM; Content; Ads; Social Intelligence; Campaigns; Community;
  Copilot + MCP; Organization Dashboard; Messages; Settings.

- Submódulos expostos no menu: Outreach Agents, Auto Responder, Email
  Campaigns; Creators, Lists, Segments, Sample Requests, Creative
  Briefs; Videos, Content Moderation, Livestreams; Usage Rights,
  Licensed Content, Spark Codes, GMV Max e Meta Ads; Top Brands,
  Products, Categories, Videos e Discover Trends; Contests, Retainers,
  Contracts, Creator Marketplace e Creator Rate Cards; Brand HQ e
  Discord.

- Comportamento real do Free Plan: AI Creator Search, Outreach Agents e
  outras áreas avançadas redirecionam para uma tela de upgrade/paywall,
  em vez de oferecerem dataset e workflow operacional.

- Limites explícitos na tela de planos: Outreach 10K/ciclo e 2.500/dia
  no Starter; Growth ilimitado por ciclo e 5.000/dia; Enterprise
  10.000/dia. CRM no Starter limitado a lojas abaixo de \$2K GMV; Social
  Intelligence no Starter com 1 exportação/ciclo; Growth e Enterprise
  exibem ilimitado.

- Recursos associados aos planos superiores: AI Creator Search, Visual
  Search, Autoresponder Agent, Contests, Retainers, Creative Briefs,
  Usage Rights, Video Moderation, Amazon Halo Effect attribution,
  relatórios e chamadas estratégicas.

- Configurações observadas: Profile com nome, troca de senha e
  notificações; Brand Name com edição do nome da marca; menu de conta
  com Upgrade, Account Settings, Manage Subscription e Log out.

- Estados de atenção: algumas rotas de integração/configuração
  permaneceram em Loading ou retornaram ao upgrade screen; isso é um
  estado observado, não uma explicação causal confirmada.

- Não executado: Start 14-day free trial, compra, convite de equipe,
  outreach, alteração de dados ou integração externa. Essas ações
  permanecem atrás de aprovação explícita do Product Owner.

## 26.2 Euka — claims públicos que continuam não autenticados

- A Euka declara AI Creator Search com linguagem natural e visual,
  filtros de categoria/região/GMV e base de milhões de creators; a
  qualidade, cobertura, frescor e metodologia não foram validados no
  Free Plan.

- A Euka declara Agents, CRM dinâmico, auto-responder, contests,
  retainers, usage rights, Meta Ads/licensed content, payouts/invoicing,
  performance e Copilot/MCP; os fluxos completos, estados de erro,
  permissões e limites continuam AUTH-PENDING.

- Números promocionais de homepage/pricing são VENDOR-CLAIM, não
  métricas auditadas. O nosso produto deve exibir fonte, data, frescor,
  confidence e metodologia em qualquer número equivalente.

## 26.3 Estado de auditoria dos quatro benchmarks

| Benchmark | Evidência coletada                                                                                                                                  | Status                          | Implicação para o produto                                                                             |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|-------------------------------------------------------------------------------------------------------|
| Euka      | \[VERIFICADO — acesso autenticado parcial\] Dashboard, menu, plano, limites e settings observados; workflows premium continuam não autenticados.    | AUTH-VERIFIED parcial           | Benchmark de capability; a sequência canônica de construção é definida somente na seção 18.           |
| Cruva     | \[VERIFICADO — fonte pública\] Homepage, guide/help center e sign-in público. \[DESCONHECIDO\] Fluxos autenticados ainda não validados.             | PUBLIC-CONFIRMED; auth pendente | Benchmark público de creator ops; a sequência canônica de construção é definida somente na seção 18.  |
| FastMoss  | \[VERIFICADO — fonte pública\] Site, categorias e live/detail públicos. \[DESCONHECIDO\] Fluxos autenticados; account center bloqueado por CAPTCHA. | PUBLIC-OBSERVED; auth bloqueada | Benchmark público de intelligence; a sequência canônica de construção é definida somente na seção 18. |
| Kalodata  | \[VERIFICADO — fonte pública\] Páginas públicas. \[DESCONHECIDO\] Fluxos autenticados; acesso bloqueado por challenge.                              | PUBLIC-OBSERVED; auth bloqueada | Benchmark público de intelligence; a sequência canônica de construção é definida somente na seção 18. |

## 26.4 O que será incorporado ao Creator Commerce OS

- Capability registry canônico: cada capability precisa de benchmark,
  evidence_level, data_access_status, parity_metric, superiority_target,
  fixture, limites, estados de erro e adversarial_review_status.

- Regra de UX aprendida com a Euka: quando o plano ou a fonte não
  permite operação, mostrar preview honesto com motivo, limite, dado
  ausente e próximo passo; não simular uma capability apenas porque o
  menu existe.

- Regra de performance: cada tela deve declarar latency budget,
  partial-data state, retry, freshness e fallback. CAPTCHA, Cloudflare e
  integrações não devem ser contornados; a plataforma precisa de
  conectores oficiais, upload controlado ou dataset claramente sintético
  para desenvolvimento.

A seção 26 registra evidência competitiva e gates derivados; não define
prioridade nem roadmap. A única sequência canônica de construção está na
seção 18.

## 26.5 Acceptance gates derivados da coleta

- Gate de acesso: login, session state, plano, tenant e permissões
  aparecem de forma verificável; segredo nunca entra em logs, chat ou
  documento.

- Gate de capability: menu + rota não são suficientes. Deve existir
  fixture executável com input, output, métricas de qualidade, limite,
  estado vazio, erro e evidência.

- Gate de dados: toda métrica de GMV, sales, creator performance, ad
  spend ou attribution carrega origem, timestamp, janela, moeda,
  estimativa/observação e confidence.

- Gate de plano: limites por ciclo/dia/GMV/export devem ser
  policy-as-data, testados em backend e refletidos na UX sem
  ambiguidade.

- Gate de superioridade: a nossa saída deve conectar evidência →
  oportunidade → creator fit → brief → execução → attribution/profit →
  learning em uma jornada contínua.

## 26.6 Pendências e próximo passo controlado

A auditoria autenticada completa dos módulos premium da Euka depende de
autorização explícita para acionar o trial de 14 dias. Cruva, FastMoss e
Kalodata permanecem com auditoria autenticada pendente por bloqueios de
acesso observados. Até que isso mude, o roadmap deve usar os níveis de
evidência acima e não transformar claims públicos em fatos de produto.

Histórico de versão: v0.5 adiciona evidência autenticada parcial da
Euka, limites observados do Free Plan, estado de bloqueio dos
concorrentes e gates de incorporação. O registry público da v0.4 foi
preservado como histórico e base comparativa.

# 27. Cruva — auditoria pública sem plano v0.6

Evidência da seção: VERIFICADO em fonte pública oficial, salvo quando
explicitamente rotulado CLAIM DO FORNECEDOR ou DESCONHECIDO.

Decisão material v0.6. O Product Owner não autorizou a ativação de
qualquer plano ou trial do Cruva. A coleta foi encerrada no limite
seguro: sessão autenticada detectada, onboarding direcionado para
escolha de região, região Brazil selecionada e, em seguida, tela de
planos. Nenhum botão de 14-Day FREE Trial foi acionado. O restante desta
seção é evidência pública/documental e não deve ser tratado como
validação de UX autenticada.

## 27.1 Superfície pública e mapa de capacidades

- Discovery: AI Creator Search em linguagem natural; Lookalike Search
  por creator-seed; Image Search multimodal; Competitor Discovery por
  marca, creator, produto, conteúdo e GMV.

- Creator operations: Automated Outreach, smart follow-ups, DMs, Target
  Collab invites, email campaigns, sequências, listas, exclusões, grupos
  e atribuição de creators a teammates.

- CRM e samples: pipeline Contacted → Replied → Sample sent → Posted →
  Repeat; timeline de interações; GMV por creator; sample requests;
  auto-approval; status To Review, Ready to Ship, In Shipment, Content
  Pending, Posted, Overdue, Expired, Cancelled, Rejected e Ignored.

- Content: vídeos, LIVEs, slideshows, creative briefs,
  transcrição/insights, hooks, selling points, tom, moderação por regras
  e solicitação de usage rights.

- Community e programas: Brand Hub, tiers de creators, contests, bingo
  cards, leaderboards, retainers, sweepstakes, CPM campaigns,
  recompensas, payouts e reativação de creators.

- Ads e canais: TikTok Ads, Spark Codes, GMV Max, Meta Ads/partnership
  ads, Licensed Content, Amazon, Shopify, Discord, SMS e email.

## 27.2 Dados, limites e estados que devemos absorver

- Cap de TikTok não é igual ao limite do plano: o limite semanal de
  mensagens é definido pelo TikTok conforme o Affiliate GMV da loja; é
  compartilhado por todas as automações e normalmente reseta no domingo.

- Limite operacional do Cruva: automações concorrentes Basic 5, Growth 7
  e Scale 100; email campaigns possuem limite padrão de 60 envios/dia
  por endereço.

- Data truth: o Cruva declara sincronização aproximada a cada 2–5 horas;
  o TikTok pode levar até cerca de 24 horas para acomodar dados.
  Diferenças de GMV também podem ocorrer porque o Cruva inclui pedidos
  cancelados/refundados enquanto o Affiliate Center tende a mostrar
  pedidos liquidados.

- Groups são segmentos dinâmicos recalculados por condições de samples,
  produtos/SKUs, posts, dias desde o último post, GMV, comissão, status
  de showcase, relação prévia e atividade do creator.

- Workflows são grafos com trigger único, triggers recorrentes
  diário/semanal/mensal, ações, espera, condições, branches, merges,
  monitoramento, import/export e estado Active/Paused. A documentação
  informa que Workflows são recurso Scale.

- O produto deve modelar estados, transições, timestamps, origem do
  dado, janela, timezone, freshness e motivo de falha; não esconder
  discrepâncias atrás de um número único.

## 27.3 Copilot, MCP e API — referência técnica pública

- Copilot responde sobre performance, vídeos/LIVEs, afiliados, samples,
  grupos, produtos, tags, ads e séries temporais; pode aprovar/rejeitar
  samples, enviar DMs, criar/ativar/desativar automações e criar/deletar
  grupos.

- Ações que enviam, criam, atualizam, deletam, aprovam ou rejeitam
  exigem confirmação explícita. As ações são registradas no audit log.
  Copilot trabalha com uma loja por conversa e não faz pesquisa de
  concorrentes; isso fica no Social Intelligence.

- MCP público: mcp.cruva.com, com OAuth, integração anunciada para
  Claude e ChatGPT. A documentação afirma MCP disponível em todos os
  planos; a execução de actions continua dependente de autorização,
  escopo e capacidade do plano.

- API documentada: até 50 API keys por conta; headers Content-Type,
  x-api-key e x-shop-id; limite declarado de 50 requests/s e 1.000.000
  requests/dia por shop; paginação até 10.000 linhas; Idempotency-Key
  opcional em writes com cache de 24 horas.

- A documentação distingue endpoints Standard (stats, products,
  affiliates, videos, LIVEs, Spark, ads, samples, messaging e
  automations) de endpoints Enterprise para inteligência proprietária
  cross-shop/market/creator.

- Contradição a resolver antes de implementar: a página de pricing
  associa API Enterprise ao plano Enterprise, enquanto o Help Center diz
  que MCP/API estão disponíveis em todos os planos e que apenas dados
  Enterprise exigem plano separado. Registrar como UNKNOWN até
  confirmação autenticada ou comercial.

## 27.4 Tela de preços observada sem ativação

| Plano      | Preço mensal exibido | Capacidades destacadas                                                                                                          | Status da auditoria                            |
|------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Basic      | \$199/mês            | Outreach, CRM, Email/Message Center, 4M+ affiliates, analytics, samples, 5 automações concorrentes                              | Preço/capacidade pública; não testado na conta |
| Growth     | \$399/mês            | AI/Lookalike Search, briefs, community 20 creators, auto-approval, cohort analysis, moderation, Spark/phone/email, 7 automações | Preço/capacidade pública; não testado na conta |
| Scale      | \$599/mês            | Save Lists, community ilimitada, AI Auto Replies, Usage Rights, Halo, GMV Max/full ads, automações ilimitadas                   | Preço/capacidade pública; não testado na conta |
| Enterprise | Custom               | Acesso ilimitado, custom features/reports, API Standard/Enterprise, suporte dedicado                                            | Preço/capacidade pública; sem negociação       |

## 27.5 Incorporação ao nosso produto

- Construir um único Creator Graph com creator, shop, product, SKU,
  content, sample, message, campaign, ad, outcome e source, preservando
  relações temporais e provenance.

- Separar limites externos de limites do produto: TikTok quota, API
  quota, plano, automações concorrentes, email deliverability, exports e
  permissões devem ser policies distintas.

- Fazer o CRM orientar ação: grupo dinâmico → trigger →
  mensagem/brief/sample → resposta → post → GMV → repeat → reativação,
  com intervenção humana apenas em exceções.

- Implementar Copilot/agents com leitura, rascunho, confirmação,
  execução, audit log, idempotência, rollback quando possível e escopo
  de shop explícito.

- Superar o Cruva em honestidade analítica: declarar quando a métrica é
  observada, estimada, correlacional ou causal; mostrar freshness,
  confidence, fórmula e discrepâncias.

- Manter capabilities premium no registry, mas oferecer preview
  utilizável e explicação clara do bloqueio; não exibir menus que
  prometem fluxos inexistentes ou inacessíveis.

## 27.6 Fontes públicas verificadas

- https://cruva.com/ — promessa, dashboard demonstrativo, discovery,
  outreach, CRM, community e Halo.

- https://cruva.com/site-map — mapa público de features, ferramentas,
  recursos e artigos.

- https://cruva.com/pricing — planos, preços e capacidades anunciadas.

- https://cruva.com/help-center/ — categorias oficiais de onboarding,
  outreach, CRM, content, Social Intelligence, community, Copilot,
  integrations e account/agency.

- https://cruva.com/help-center/copilot/api-mcp — MCP/API, escopos,
  limites, autenticação e audit log.

- https://cruva.com/help-center/copilot/copilot-actions-and-limits —
  confirmações, limites, loja por conversa e ações auditadas.

- https://cruva.com/help-center/having-an-issue/outreach-caps-and-limits
  — quota semanal, GMV e automações concorrentes.

- https://cruva.com/help-center/having-an-issue/data-discrepancies —
  sincronização, atribuição e discrepâncias.

- https://cruva.com/help-center/crm-automations/workflows — triggers,
  ações, branches, estados e import/export.

- https://cruva.com/help-center/integrations/gmv-max-and-tiktok-ads;
  https://cruva.com/help-center/integrations/meta-ads-spark-codes-and-usage-rights;
  https://cruva.com/help-center/integrations/halo-effect — ads, rights,
  Meta, Amazon, Shopify e Halo.

Histórico de versão: v0.6 incorpora a auditoria pública detalhada do
Cruva sem ativar plano, registra limites, estados, integrações,
capacidades de Copilot/MCP/API e uma contradição documental que exige
validação. A evidência autenticada permanece pendente por decisão
explícita de não iniciar trial.

# 28. FastMoss — auditoria pública sem plano v0.7

Evidência da seção: VERIFICADO em superfícies/documentação públicas;
métricas de cobertura/precisão sem validação independente são CLAIM DO
FORNECEDOR.

Decisão material v0.7. O Product Owner não autorizou a ativação de
plano, trial, compra, checkout ou cobrança. A coleta ficou restrita às
páginas públicas do FastMoss e do Developer Center. A área de conta foi
identificada como protegida por CAPTCHA/validação; não houve tentativa
de contornar essa proteção. Os números e capacidades abaixo são
evidências públicas e claims do fornecedor, não validação autenticada de
disponibilidade ou precisão.

## 28.1 Superfície pública e mapa de capacidades

- Dashboard/ecossistema: painel, Market Pulse, produtos, horário de
  publicação, lojas, publicidade, vídeos e materiais, transmissões ao
  vivo, ferramentas de IA, monitoramento, agências e central de contas.

- Produtos: pesquisa de produtos, ranking de vendas, novos produtos,
  produtos populares e ranking de produtos em vídeo; a tabela pública
  expõe loja associada, conversão por influencer, tendência de vendas,
  vendas, receita, GMV e influencers afiliados.

- Creators: pesquisa e rankings por crescimento de seguidores, vendas,
  selo azul/verificação, popularidade e creators em ascensão; a promessa
  central é ordenar por GMV, não apenas por seguidores.

- Lojas e mercado: busca/ranking de lojas, Market Pulse com filtros de
  dia/semana/mês, país/região e categorias; categorias públicas incluem
  beleza, saúde, moda, acessórios, esportes, eletrônicos, casa,
  alimentos, pets e outras.

- Publicidade e conteúdo: anúncios de e-commerce, anunciante, hashtags e
  tendências de palavras-chave/categorias; vídeos populares,
  transcrição, análise quadro a quadro, TTS/roteiro, câmera,
  atratividade, cenários e insights de marca.

- Lives e monitoramento: pesquisa e rankings de lives, produtos
  populares ao vivo, influencers que vendem ao vivo; monitoramento
  minuto a minuto de curtidas, comentários e compartilhamentos, com
  ciclos de 24h, 48h, 72h ou 7 dias.

- Produtos adjacentes: MossCreator para colaboração com creators,
  YooFinds para afiliados e extensão Chrome para insights de mercado,
  concorrência e seleção de produtos. Esses serviços são relacionados e
  não foram autenticados nesta auditoria.

## 28.2 Dados, sinais e limites públicos

- Claims institucionais observados: 620M+ produtos, 380M+ creators,
  1.500+ dias de histórico, 20+ mercados e 4,7M+ usuários; devem ser
  tratados como vendor-claims até validação independente.

- Na página pública de produtos, a exportação aparece desabilitada e a
  consulta exibida pode retornar ‘No hay datos’ sem
  autenticação/assinatura; portanto, o preview público não equivale a
  acesso operacional aos dados.

- Monitoramento de vídeo exibiu 1 uso restante no mês na tela pública,
  junto de consumo de 1 unidade ao iniciar; registrar isso como limite
  observado na sessão, não como quota universal do produto.

- A página de preços pública exibiu Basic R\$110/mês, Pro R\$215/mês e
  Ultimate R\$348/mês na visão anual, além de Enterprise custom; a
  oferta de aniversário anunciava início em R\$69/mês e até 50% de
  desconto. Não clicar em comprar agora.

- Limites exibidos: Basic 90 dias de histórico, 150
  buscas/dia/categoria, top 300, 5 contatos de creators/dia, 10
  exports/mês; Pro 180 dias, 300 buscas/dia/categoria, top 1.000, 300
  contatos/dia, 100 exports/mês; Ultimate 1.200 dias, buscas/detalhes
  ilimitados, contatos ilimitados e período customizado. Registrar como
  pricing snapshot público.

- Recursos avançados aparecem escalonados: filtros avançados, rankings
  de agências, Market Pulse, ranking por período e histórico de AI E-com
  video ranking variam por plano. O detalhe público informa ainda
  limites de views de página e de ranking; estes números podem mudar por
  campanha e devem ser rechecados antes de codificar policies rígidas.

## 28.3 MCP, CLI e API — referência técnica pública

- MCP/CLI: o Developer Center anuncia 55 ferramentas para produtos,
  creators, lojas, vídeos e lives, com suporte a Claude, ChatGPT/Codex,
  Cursor, Gemini, Windsurf, Cline e Cherry Studio.

- MCP: a configuração pública pede criação de uma chave no centro da
  conta, conexão de um servidor remoto e uma pergunta real para validar
  números ao vivo. O endpoint público documentado usa o formato
  https://mcp.fastmoss.com/mcp?api_key=...; a chave nunca deve ser
  colocada no chat ou no repositório.

- CLI: instalação pública anunciada por npm install -g
  @fastmoss/cli@latest e configuração fastmoss set api-key; a CLI
  executa localmente e chama o motor FastMoss. Skills anunciadas: npx
  skills add FastMoss/fastmoss-skills.

- MCP pricing público: Basic \$16/mês com 500 créditos, 40 req/min e 1
  chave; Pro \$49/mês com 1.800 ou 2.400 créditos, 60 req/min e até 3
  chaves; Max \$109/mês com faixas de 5.000 a 27.000 créditos, 80–100
  req/min e até 5 chaves; Enterprise custom. Resultados vazios, falhos
  ou limitados não consomem créditos segundo a página.

- A lógica de crédito anunciada é por chamada de ferramenta: utilitários
  0, busca/ranking/detalhes 1, tendências/desempenho 2 e análise
  profunda/rankings 3. O agente deve paginar explicitamente e aplicar
  guardrails de gasto.

- API pública: OpenAPI com 45+ endpoints REST, a partir de
  \$0,01/chamada, sem cobrança por resultado vazio; a documentação
  demonstra Bearer token, pagesize padrão até 10 e consumo proporcional
  para páginas maiores. O endpoint de exemplo retorna produto, preço,
  unidades, GMV e crescimento.

- Distribuição de domínios publicada para API: 13 produtos, 12 creators,
  16 lojas, 11 vídeos/live e mercado/categoria via MCP; a página de CLI
  resume seis domínios com 55 ferramentas. Há diferença de contagem por
  agrupamento editorial; manter 55 como total de ferramentas, não somar
  categorias entre páginas.

## 28.4 Incorporação ao nosso produto

- Criar um FastMossAdapter com conectores MCP, CLI e API separados, mas
  um mesmo modelo canônico para product, SKU, shop, creator, content,
  live, ad, category, metric, window, country, source e freshness.

- Implementar cost-aware orchestration: estimar créditos/requests antes
  da chamada, limitar pagesize, usar consulta de saldo gratuita, cachear
  resultados por janela e bloquear chamadas acima de budget sem
  confirmação.

- Registrar provenance completo: fornecedor, endpoint/tool, país,
  categoria, janela, timezone, timestamp, plano/quota, resposta vazia,
  falha, estimativa e transformação aplicada.

- Separar descoberta de execução: FastMoss é forte em intelligence e
  ranking; ações de outreach, CRM, samples, aprovação e publicação devem
  permanecer em nosso orquestrador/integrações com confirmação e audit
  log.

- Normalizar unidades e moeda: as telas públicas misturam exemplos com
  ¥, \$ e R\$, e alguns dados são exemplos ilustrativos do fornecedor.
  Nenhum número deve entrar em decisão financeira sem moeda, conversão,
  janela e confidence explícitos.

- Oferecer preview público limitado com estado ‘dados
  indisponíveis/assinatura necessária’ em vez de simular completude;
  degradar para fontes permitidas e marcar o resultado como incompleto
  quando a autenticação não estiver disponível.

## 28.5 Bloqueios e decisões de segurança

- A área de conta FastMoss apresentou validação CAPTCHA; não contornar,
  automatizar ou pedir ao usuário credenciais no chat. Para autenticação
  futura, usar somente o fluxo de login anunciado no navegador e deixar
  a inserção de segredo sob controle do usuário.

- Não iniciar trial de 3 dias, não resgatar cupom, não assinar plano,
  não clicar em checkout e não enviar API key. A documentação pública
  menciona trial, mas a autorização recebida foi apenas para colher
  dados sem plano.

- Pendência: auditoria autenticada de precisão, cobertura por país,
  quota real da conta, permissões de exportação, custos efetivos e
  resposta das 55 ferramentas. Só executar após autorização explícita e
  sem compartilhar segredos.

## 28.6 Fontes públicas verificadas

- https://www.fastmoss.com/pt — posicionamento, módulos, claims
  institucionais e links do ecossistema.

- https://www.fastmoss.com/pt/pricing — preços, limites, histórico,
  buscas, exports, contatos e benefícios anunciados.

- https://www.fastmoss.com/pt/dashboard — menu público, rankings e
  países/regiões visíveis.

- https://www.fastmoss.com/pt/e-commerce/search;
  https://www.fastmoss.com/pt/influencer/search;
  https://www.fastmoss.com/pt/market/market-pulse — superfícies de
  produtos, creators e Market Pulse.

- https://www.fastmoss.com/pt/shop-marketing/tiktok;
  https://www.fastmoss.com/pt/creativecenter/search;
  https://www.fastmoss.com/pt/live/tiktok — lojas, anúncios e lives.

- https://www.fastmoss.com/pt/monitor/videoMonitor;
  https://www.fastmoss.com/pt/ai-creation/video/analysis — monitoramento
  e IA de vídeo.

- https://www.fastmoss.com/pt/mcp-landing — MCP/CLI, 55 ferramentas,
  plataformas compatíveis e FAQ de acesso.

- https://developers.fastmoss.com/pt/docs/mcp/setup;
  https://developers.fastmoss.com/pt/mcp/pricing — configuração MCP,
  créditos, limites e ferramentas.

- https://developers.fastmoss.com/pt/cli/overview;
  https://developers.fastmoss.com/pt/api/overview;
  https://developers.fastmoss.com/pt/api/pricing — CLI, API, endpoints,
  consumo e preços públicos.

Histórico de versão: v0.7 incorpora o FastMoss ao mapa de parity+,
registra capacidades públicas, limites e preços observados, MCP/CLI/API,
guardrails de custo, normalização de moeda e o bloqueio por CAPTCHA.
Nenhum plano, trial, checkout ou credencial foi acionado. A próxima
etapa externa permanece a auditoria pública/autorizada do Kalodata.

# 29. Kalodata — auditoria pública sem plano v0.8

Evidência da seção: VERIFICADO em documentação/superfícies públicas onde
reproduzido; cobertura, pricing ou performance não confirmados ficam
CLAIM DO FORNECEDOR/INFERÊNCIA/DESCONHECIDO conforme o caso.

Decisão material v0.8. O Product Owner autorizou a coleta de
capacidades, mas não autorizou plano, trial, compra, checkout ou
pagamento. O navegador de auditoria encontrou uma verificação da
Cloudflare antes de disponibilizar a sessão autenticada. A auditoria
abaixo usa páginas públicas, documentação/editorial oficial e páginas de
detalhe indexadas; números repetidos como 999, 99.9k e 33.3% são
explicitamente amostras/placeholders e não devem entrar em decisões ou
benchmarks como se fossem dados reais.

## 29.1 Mapa público de superfícies

- Navegação principal: Explore, Category, Shop, Brand, Creator, Product,
  Video & Ad, Livestream e Settings; as páginas públicas exibem
  login/sign-up para liberar dados reais.

- Produtos e categorias: rankings de produtos, detalhes de produto,
  categoria, preço atual e menor preço em 30 dias, data mais antiga
  registrada, vendas/receita, preço médio, revenue de vídeo, revenue de
  live e revenue de shopping mall.

- Lojas e marcas: ranking de lojas, busca de brand/retailer, perfil de
  loja, data de início da coleta, receita por Shopping Mall, conta
  própria e afiliados, produtos, creators associados, vídeos e lives.

- Creators: ranking por performance de e-commerce, perfil com
  seguidores, data de estreia, produtos nos últimos 30 dias, contato
  mascarado, vendas, receita, receita de vídeo/live, preço médio, views
  de live/vídeo e novos seguidores.

- Conteúdo e anúncios: ranking de vídeos por vendas de
  e-commerce/trending products, vídeos e anúncios por produto, receita,
  views, itens vendidos e razão de receita/visualizações atribuída a
  anúncios.

- Lives: ranking de livestreams por vendas e páginas de detalhe com
  conteúdo, período, produtos, receita, views, itens vendidos, preço
  médio e GPM; o blog orienta analisar picos de tráfego e os produtos
  promovidos durante a live.

- Inteligência: análise de categorias, concentração dos top 3/top 10
  shops, estratégia de vendas por canal/conteúdo, comparação de
  concorrentes e o Kalopilot como assistente de decisão em linguagem
  natural.

## 29.2 Dados, cobertura e confiabilidade

- Claims da página de recursos: 200M+ dados de produtos, 250M+ dados de
  creators, 400M+ dados de vídeos/lives, 1.000 dias de histórico e 3M+
  brands/users. Tratar como vendor-claims, não como cobertura validada.

- O próprio Kalodata declara que coleta dados de canais públicos e
  aplica modelos de IA/processamento; receita transacional e gasto de
  anúncios podem variar dos números reais. A empresa recomenda não usar
  seus dados para acerto de comissão ou avaliação de performance que
  exija alta precisão.

- As páginas públicas separam ‘Sample Data’ de dados reais e mostram
  ‘Log in to view more data’; portanto, o preview prova o modelo de
  dados e a UX conceitual, mas não prova acesso, frescor ou quota da
  conta.

- A estrutura de detalhe é útil para o nosso modelo canônico: janela
  temporal (ontem, 7/30/90/180 dias), país/região, produto, loja,
  creator, vídeo/live, canal de venda, receita, itens, preço médio,
  crescimento e data de coleta.

- A presença de dados de shopping mall, self-operated account e
  affiliate permite decompor origem de receita, mas a definição exata de
  atribuição, cancelamentos, refunds e fuso horário permanece UNKNOWN
  sem documentação autenticada.

## 29.3 Kalopilot e inteligência cross-market

- O Kalopilot é anunciado como assistente de decisão embutido, capaz de
  transformar dados em recomendações sobre competitividade de categoria,
  tendência de produto e escolha de creators.

- Um artigo oficial anuncia integração de dados de TikTok Shop, Amazon e
  Shopee para comparação cross-market; o artigo informa Amazon US e
  Shopee na Indonésia, Tailândia e Vietnã. Registrar como capacidade
  anunciada, pendente de teste autenticado.

- A proposta competitiva central é reduzir pesquisa manual: combinar
  ranking, contexto de mercado, concorrentes, creators e conteúdo em uma
  recomendação acionável. O nosso produto deve adicionar fórmula,
  confidence, freshness, provenance e explicação do porquê.

- O blog também publica uma skill de agente e menciona token próprio;
  não baixar/ativar skill ou solicitar token nesta auditoria. Qualquer
  futura integração deve passar por revisão de segurança, escopo, custo
  e gestão de segredo fora do chat.

## 29.4 Comparação com o que devemos construir

- KalodataAdapter é candidato de arquitetura, condicionado a contrato
  que permita o uso comercial pretendido. O mesmo padrão vale a qualquer
  provider global: adapter só ativa capabilities e data_handling_modes
  contratados.

- Modelar receita por canal: affiliate, self-operated, shopping mall,
  video e live, sem somar métricas que possam se sobrepor; mostrar a
  fórmula e a advertência de estimativa.

- Criar Creator-to-Content-to-Product Graph: creator promove produto em
  vídeo/live, produto pertence a uma loja/categoria, e cada relação
  carrega data, país, canal, revenue, views, items e confiança.

- Usar o padrão ‘sample versus verified’: dados públicos/placeholder
  ficam marcados como demonstração; dados autenticados recebem source,
  freshness, janela, método de coleta e status de validação.

- Superar o Kalopilot com respostas auditáveis: recomendação,
  evidências, alternativas, riscos, perguntas que faltam, cálculo de
  ROI/GMV e botão de confirmação antes de qualquer ação externa.

- Adicionar validação cruzada com TikTok/merchant data permitido e
  intervalos de confiança; nunca usar uma estimativa de terceiro para
  liquidação, pagamento, comissão ou punição de creator.

## 29.5 Bloqueios e decisões de segurança

- Cloudflare bloqueou o navegador de auditoria antes da sessão
  autenticada. Não contornar CAPTCHA, fingerprinting ou verificação
  anti-bot.

- O login realizado no Chrome local do usuário não é compartilhado com o
  navegador de auditoria; não pedir usuário, senha, OTP ou token no
  chat.

- Não clicar em Buy Now, Try It Free, pricing, checkout ou qualquer
  ativação. Preços e limites efetivos ficam pendentes; a página de
  pricing não entregou conteúdo verificável pela coleta pública atual.

- Pendência: confirmar filtros, exports, histórico efetivo, cobertura de
  Brasil, quotas, latência, precisão, permissões e comportamento do
  Kalopilot em conta autenticada, somente com fluxo seguro e autorização
  explícita.

## 29.6 Fontes públicas verificadas

- https://www.kalodata.com/ — descrição oficial, origem dos dados,
  ressalva de precisão, independência em relação ao TikTok e links do
  ecossistema.

- https://www.kalodata.com/ad/en/func/product-feature — produtos,
  categorias, creators, conteúdo, concorrentes e claims de cobertura.

- https://www.kalodata.com/pricing — página oficial de preços; conteúdo
  não foi capturado de forma verificável nesta sessão.

- https://www.kalodata.com/category/detail?id=601152&language=en-US&region=PH
  — estrutura pública de categoria, métricas, canais e bloqueio de dados
  reais.

- https://www.kalodata.com/product/detail?id=1729703411774167540&language=en-US&region=GB
  — estrutura pública de detalhe de produto, preço, janela e conteúdo
  associado.

- https://www.kalodata.com/creator/detail?id=7097569002725770282&language=fr-FR&region=US
  — estrutura pública de detalhe de creator, contato mascarado, tráfego
  e receita por conteúdo.

- https://www.kalodata.com/shop; https://www.kalodata.com/video;
  https://www.kalodata.com/livestream — rankings públicos de lojas,
  vídeos e lives.

- https://www.kalodata.com/blog/tiktok/from-data-to-sales-dominance-how-the-kalo-ecosystem-is-redefining-growth-on-tiktok-shop/;
  https://www.kalodata.com/blog/kalodata/skip-manual-product-research-find-growth-faster-with-kalopilot/
  — Kalopilot e inteligência cross-market anunciados pelo fornecedor.

Histórico de versão: v0.8 incorpora o Kalodata ao mapa de parity+,
documenta a superfície pública, o modelo de dados, o Kalopilot, a
ressalva de precisão, as amostras/placeholder, os guardrails e o
bloqueio por Cloudflare. Nenhum plano, trial, checkout, pagamento,
credencial ou token foi acionado.

*Nota de governança v1.5: as seções 30–34 permanecem como histórico de
evolução visual. A direção ativa é a seção 35, refinada pela seção 36:
Opportunities decision-first; Intelligence/Research high-density;
CRM/Campaigns operation-first. Em conflito, a definição mais recente
prevalece.*

# 30. Histórico de design v0.9 — conteúdo substituído

Direção substituída pela seção 35 e pelos três modos vigentes de tela.
Ver Anexo H; não usar esta seção para implementação.

# 31. Histórico de design v1.0 — conteúdo substituído

Direção substituída pela seção 35. Ver Anexo H; não usar esta seção para
implementação.

# 32. Histórico de design v1.1 — conteúdo substituído

Direção substituída pela seção 35. Ver Anexo H; não usar esta seção para
implementação.

# 33. Histórico de design v1.2 — conteúdo substituído

Direção substituída pela seção 35. Ver Anexo H; não usar esta seção para
implementação.

# 34. Histórico de design v1.3 — conteúdo substituído

Direção substituída pela seção 35. Ver Anexo H; não usar esta seção para
implementação.

# 35. Direção visual e funcional v1.4 — Intelligence-First Workspace

Esta é a única direção visual/funcional normativa. Modos de tela:
Opportunities = decision-first; Intelligence = high-density research;
Creators/CRM/Campaigns = operation-first. As seções 30–34 são apenas
stubs históricos.

**Decisão material v1.4.** A direção visual anterior é substituída para
as superfícies de intelligence e research. O Creator Commerce OS passa a
usar FastMoss e Kalodata como referências visuais principais para
densidade de informação, pesquisa, rankings, filtros, tabelas, gráficos
e exploração analítica. Cruva e Euka continuam como benchmarks
funcionais para creator operations, CRM, outreach, campanhas, automações
e Copilot, mas não definem a linguagem visual dominante do produto.

**Regra congelada:** não será aceito dashboard SaaS genérico. A
aplicação deve ser reconhecível como uma plataforma profissional de
commerce intelligence: alta densidade útil, filtros persistentes,
rankings, tabelas operacionais, séries temporais, cards compactos de
produto/creator/content, comparação rápida e ações contextuais, sem
sacrificar legibilidade.

## 35.1 Hierarquia de benchmarks

| Área                                        | Benchmark principal | Obrigação do Creator Commerce OS                                                                                              |
|---------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------------------------------|
| Estrutura visual de research / intelligence | FastMoss            | Densidade, rankings, filtros, tabelas, monitoring, histórico e navegação por entidades em nível equivalente ou superior.      |
| Pesquisa analítica e leitura de performance | Kalodata            | Pesquisa rápida de produto/creator/shop/video/live, filtros profundos, séries, comparação e contexto suficiente para decisão. |
| Creator operations / CRM / outreach         | Cruva               | Próxima ação clara, estados operacionais, listas, samples, follow-up e fluxo de campanha sem perder contexto.                 |
| Automação / programs / Copilot              | Euka                | Automação acionável, segments, agent workflows, retainers, rights e assistência com limites e provenance explícitos.          |

## 35.2 Layout de referência aprovado

A composição aprovada para as telas de intelligence deve conter, como
padrão, barra lateral modular, seletor de mercado/plataforma, busca
global, faixa de filtros, KPIs compactos, gráfico principal, rankings
laterais, cards de produtos/conteúdo e tabela analítica detalhada. A
mesma linguagem visual deve se propagar para Product, Creator, Shop,
Video, LIVE, Ads, Competitors e Market.

<img src="/mnt/data/creator_commerce_baseline/media/image1.png"
style="width:6.4in;height:4.26667in" />

*Figura 35-1 — direção visual aprovada para Pesquisa de Produtos /
Intelligence Workspace.*

## 35.3 Funcionalidade total — nenhum elemento decorativo

- Busca global deve consultar entidades reais e retornar resultados
  navegáveis; autocomplete, histórico e estados vazios/erro precisam
  funcionar.

- Filtros devem alterar consultas reais, refletir parâmetros na URL ou
  estado persistente quando aplicável, combinar múltiplas dimensões e
  permitir limpar/salvar pesquisa.

- KPIs e gráficos devem ser derivados do mesmo dataset/recorte aplicado
  aos resultados, com janela temporal, moeda, região, fonte, provenance
  e classificação MEASURED / ESTIMATED / INFERRED.

- Rankings precisam suportar ordenação, período, categoria/mercado,
  drill-down e acesso ao detalhe da entidade.

- Tabelas precisam oferecer ordenação, paginação/virtualização, filtros,
  seleção, colunas configuráveis, exportação controlada e ações
  contextuais quando aplicáveis.

- Cards de produto, creator, vídeo, shop e LIVE devem abrir detalhes
  reais e preservar o contexto da pesquisa de origem.

- Favoritos, watchlists, monitoramento e alertas devem persistir no
  backend e gerar eventos auditáveis; não podem existir apenas como
  ícones visuais.

- Comparação deve operar sobre entidades selecionadas e usar métricas
  compatíveis, mesma janela e mesma moeda/região, com tratamento
  explícito de dados ausentes.

- Exportação deve respeitar permissões, plano, limites, filtros ativos e
  proveniência; exportações assíncronas precisam expor status e erro.

- CRM, outreach, samples, campanhas, automações e Copilot devem
  continuar ponta a ponta: cada CTA da intelligence precisa desembocar
  em uma ação real ou explicar por que está indisponível.

- Todos os estados loading, empty, partial, stale, unauthorized,
  rate-limited, failed e degraded devem ser implementados; skeleton ou
  placeholder não conta como funcionalidade concluída.

- Nenhum botão, menu, filtro, aba, gráfico, ranking, CTA ou ícone de
  ação é aceito em produção sem contrato de comportamento, backend/data
  source, permissão, telemetry e teste correspondente.

## 35.4 Contrato de tela funcional

Cada tela nova ou redesenhada deve declarar, antes de ser considerada
pronta:

- Objetivo e decisão que a tela suporta.

- Entidades e fontes de dados utilizadas.

- Query/filter contract e regras de cache/freshness.

- APIs ou jobs necessários para cada widget e ação.

- Permissões, plano/entitlements e limites.

- Estados de loading, empty, partial, stale, error e retry.

- Eventos de analytics/audit gerados por interações relevantes.

- Testes unitários, integration/contract, E2E e visual regression.

- Benchmark equivalente no FastMoss/Kalodata/Cruva/Euka e evidência de
  paridade ou superioridade.

- Production Truth Gate com dados reais/autorizados antes de declarar
  conclusão.

- A versão funcional deve manter o mesmo nível de acabamento visual do
  desenho aprovado; regressão visual entre mockup e implementação é
  defeito e bloqueia aceite.

- Toda entrega de UI deve ser aberta em navegador real antes de ser
  registrada como pronta. O gate mínimo automatizado verifica: ausência
  de erro JavaScript não tratado, conteúdo esperado renderizado (por
  exemplo tabela não vazia quando fixture prevê linhas) e funcionamento
  dos controles críticos.

- Cada release de tela deve gerar captura da **página funcional
  renderizada**, não apenas do desenho, e compará-la com a referência
  aprovada por visual regression ou revisão equivalente.


## 35.5 Definition of Done adicional para UI v1.4

- Um componente visível sem comportamento real é defeito de produto, não
  “pendência de integração”.

- Fixtures são permitidas em desenvolvimento e testes, mas a UI deve
  identificar dados de demonstração; fixtures nunca validam Production
  Truth.

- Cada tela prioritária deve passar por teste E2E do fluxo completo,
  incluindo falha de provedor, dado ausente, permissão insuficiente e
  limite de plano.

- Visual parity é necessária, mas insuficiente: a capability só fecha
  quando o usuário consegue concluir a tarefa real de ponta a ponta.

- O benchmark final deve medir passos, tempo para insight, tempo para
  ação, taxa de erro, cobertura de filtros, completude de estados e
  confiabilidade dos dados.

- Nenhuma regressão para “dashboard genérico” é permitida sem ADR
  explícito e evidência de que melhora o benchmark.

- Dados de demonstração podem usar valores fictícios; o valor absoluto
  não é especificação. Porém, relações, fórmulas, estados e ações
  ensinados pela fixture devem ser coerentes com as regras do produto.
  Quando possível, telas relacionadas devem compartilhar um único fixture
  calculado, evitando inconsistência manual entre mockups e testes.

- Nenhuma tela funcional é aceita somente porque “os controles existem”.
  Ela precisa passar simultaneamente pelo gate de comportamento, pelo gate
  visual e pelo benchmark competitivo aplicável.


## 35.6 Impacto sobre a decisão v1.3

A v1.5 mantém FastMoss/Kalodata como referências principais de
Intelligence/Research e Cruva/Euka como referências de operação. A
interface final tem três modos: Opportunities = decision-first;
Intelligence/Research = high-density; CRM/Campaigns = operation-first.
Nenhum elemento de UI pode ser decorativo; módulos sem cobertura não
aparecem como se fossem utilizáveis e a tela Connections/Coverage
explica disponibilidade, conexão, plano, região e provider.

**Histórico de versão:** v1.4 corrige a distância visual identificada
entre o conceito anterior e os benchmarks de intelligence. Congela
FastMoss e Kalodata como referências visuais principais, preserva
Cruva/Euka como benchmarks operacionais e torna explícita a regra de
funcionalidade total: nenhum elemento de interface pode existir apenas
como decoração ou mock em produção.

## 35.7 Protocolo obrigatório de revisão competitiva de telas

Toda nova tela ou revisão material deve ser avaliada em três dimensões:
**design, funcionalidade e comparação competitiva**.

- Benchmarks obrigatórios quando aplicáveis: FastMoss e Kalodata para
  intelligence/research; Cruva e Euka para creator operations; TikTok
  Seller/Affiliate Center como baseline nativo gratuito.

- A revisão deve declarar explicitamente onde estamos **abaixo, em
  paridade ou superiores**, por capability relevante; não vale “parece
  melhor” sem tarefa comparável.

- Melhorias propostas só entram automaticamente quando já cabem nas
  capacidades e limites deste Documento Mestre. Ideias fora do escopo
  devem ser marcadas como **PROPOSTA NOVA / DECISION REQUIRED** e não
  podem ser incorporadas silenciosamente.

- Toda entrega, de qualquer autor ou agente, passa pelos gates da seção
  35.4 antes de ser registrada como pronta. Nenhum autor pode validar a
  própria entrega apenas por declaração; evidência automatizada e/ou revisão
  independente deve confirmar o gate aplicável.

- Toda sugestão, de qualquer revisor, é insumo e não autoridade. Cada
  sugestão é classificada como: **correção obrigatória**, **melhoria
  competitiva dentro do Master** ou **nova proposta fora do escopo**. O
  Product Owner aprova mudanças materiais.

- Para telas de intelligence, paridade mínima inclui densidade útil,
  thumbnails quando a fonte disponibilizar, filtros persistentes,
  ordenação, paginação/virtualização, tendências por entidade, detalhe
  rico e contexto preservado. Para operation, paridade mínima inclui
  estado, owner/próxima ação, bulk actions e continuidade para outreach,
  samples e campanha.

- A versão funcional não pode ser aceita se estiver visualmente abaixo
  da referência aprovada, mesmo que a lógica funcione. O inverso também
  vale: imagem bonita sem comportamento real não fecha capability.

# 36. Changelog v1.5.4 e pendências vigentes

A v1.5.4 preserva integralmente a baseline funcional da v1.5.3 e corrige
governança de verificação e rastreabilidade jurídica. O foco é garantir
que a regra de qualidade seja aplicada simetricamente a qualquer autor,
que nenhuma entrega seja registrada como pronta sem evidência dos gates
da 35.4 e que fontes de termos sejam atribuídas apenas ao texto/versão
que realmente sustentam.


- v1.5.4: toda entrega, independentemente de autor, passa pelos gates da
  35.4 antes de ser registrada como pronta; sugestões de qualquer revisor
  seguem a classificação da 35.7.

- v1.5.4: o gate mínimo de UI deve existir também como teste executável no
  repositório para superfícies prioritárias, cobrindo erro JavaScript,
  conteúdo esperado renderizado e controles críticos; captura da página
  funcional deve ser preservada como evidência da execução.

- v1.5.4: a seção 9.7 passa a separar versões históricas e atuais dos
  termos. S30 deixa de ser usada como evidência da restrição de
  competir/replicar/recriar sem trecho verificável; S32 registra os
  TikTok Developer Terms globais atuais como corroboração para a
  restrição de profiling/database.

- v1.5.4: o título do índice foi simplificado de “Sumário executivo do
  documento” para “Sumário”.

- v1.5.3: SKU Opportunity fica formalmente definida como superfície
  decision-first dos produtos do próprio merchant, com motivo da
  oportunidade, custo/margem quando disponíveis, estoque, comissão versus
  comparáveis, canal, creators, tendência e próxima ação.

- v1.5.3: estoque e custo passam a governar ações de UI: estoque zerado
  bloqueia ativação; custo ausente não permite margem inventada.

- v1.5.3: faixa de comissão precisa declarar que vem dos comparáveis
  encontrados e, quando disponível, mostrar quantos comparáveis sustentam
  a faixa.

- v1.5.3: cards de prioridade e ações em massa precisam executar recortes
  e regras reais, preservando elegibilidade e contexto.

- v1.5.3: versão funcional deve ser visualmente equivalente ou superior
  ao desenho aprovado; browser smoke test e visual regression passam a
  ser gates explícitos antes de declarar uma tela pronta.

- v1.5.3: fixtures continuam permitidas, mas valores fictícios não são
  especificação; fórmulas, estados e relações precisam ser coerentes e,
  preferencialmente, compartilhados entre telas e testes.

- v1.5.3: revisão competitiva de tela é obrigatória e separa abaixo /
  paridade / superioridade contra FastMoss, Kalodata, Cruva, Euka e
  TikTok nativo quando aplicável. Sugestões adversariais são validadas
  contra o Master antes de entrar.

- Permanecem vigentes as erratas e consolidações da v1.5.2: arquitetura
  alvo versus implementação inicial na seção 13, enum canônico de lucro,
  ruleset v0.1, purpose binding, ADR-000, conectores do Brasil, termos
  TikTok e governança de evidência.

- Pendências vigentes: versão atual dos Terms (P0); parecer jurídico;
  aprovação/documentação logada Affiliate API; termos comerciais dos
  providers; entrevistas; primeiro mercado; primeiro Commerce Connector;
  aceitação/mitigação do risco de plataforma.

# Anexo H — Histórico de especificações substituídas

Este anexo registra somente a existência das versões substituídas; o
conteúdo antigo não é normativo e não deve orientar implementação.

- Blueprint v0.3 (antiga seção 23): absorvido pelas seções canônicas de
  produto, arquitetura, dados, IA, roadmap e gates.

- Design v0.9–v1.3 (antigas seções 30–34): substituídos pela seção 35 e
  pela regra vigente de três modos de tela — Opportunities
  decision-first, Intelligence high-density, CRM/Campaigns
  operation-first.

- Debate Claude × ChatGPT e decisões intermediárias permanecem no
  changelog/rodadas; quando uma rodada posterior altera uma posição,
  prevalece a posterior.