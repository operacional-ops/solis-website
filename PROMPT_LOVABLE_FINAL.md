# PROMPT PARA O LOVABLE — SITE INSTITUCIONAL SOLIS

> Cole o bloco abaixo diretamente no chat do Lovable para gerar o site completo.

---

```
Crie um website institucional completo, sofisticado e profissional para a empresa SOLIS — uma empresa de tecnologia brasileira que atua nos mercados de ERP, cloud computing, inteligência artificial e transformação digital. O site deve competir visualmente com TOTVS (totvs.com) e SAP Brasil (sap.com/brazil), transmitindo credibilidade, modernidade e autoridade de mercado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STACK TÉCNICA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- React 18 + TypeScript (strict mode)
- Tailwind CSS para todos os estilos
- Framer Motion para animações de entrada e transições
- Lucide React para ícones
- Vite como bundler
- Componentes funcionais com hooks

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
IDENTIDADE VISUAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PALETA DE CORES:
- Azul Primário:    #0066CC  (botões, links, destaques)
- Azul Escuro:      #003D7A  (hover, textos de destaque)
- Ciano:            #00B8D4  (acentos, gradientes secundários)
- Verde Sucesso:    #00C853  (badges, confirmações, resultados)
- Fundo Principal:  #FFFFFF
- Fundo Secundário: #F5F7FA
- Fundo Escuro:     #0a0e27  (seções de contraste)
- Texto Principal:  #111827
- Texto Secundário: #4B5563
- Bordas:           #E5E7EB

TIPOGRAFIA:
- Headings: Poppins (700, 800) — importar do Google Fonts
- Body: Inter (400, 500, 600) — importar do Google Fonts
- H1: 48–56px | H2: 36–40px | H3: 24–28px | Body: 16px

LOGO SOLIS:
- Ícone: quadrado azul (#0066CC) com bordas arredondadas contendo a letra "S" em branco, bold
- Texto: "SOLIS" em Poppins 800, cor #0066CC
- Tagline: "Tecnologia empresarial que transforma negócios"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 1 — HEADER (fixo, com efeito de scroll)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Posição: fixed, z-index alto, largura total
- Estado inicial (topo da página): fundo transparente, textos brancos
- Estado após scroll (>50px): fundo branco com sombra suave, textos escuros
- Transição suave entre os dois estados (300ms)

LOGO: à esquerda — ícone azul + "SOLIS" em Poppins bold

MENU DESKTOP (centro): 6 itens com dropdown ao hover
  • Soluções → SOLIS Cloud ERP | SOLIS AI Engine | SOLIS Data Cloud | SOLIS CRM | SOLIS HCM | SOLIS Supply Chain | Ver todas →
  • Segmentos → Indústria | Varejo | Agronegócio | Serviços | Saúde | Educação | Logística | Construção
  • Plataforma → Visão Geral | Integrações | Segurança | Infraestrutura
  • Clientes → Cases de Sucesso | Depoimentos | Área do Cliente
  • Recursos → Blog | Webinars | E-books | Central de Ajuda
  • Empresa → Sobre a SOLIS | Carreiras | Imprensa | Parceiros | Contato

Dropdown: fundo branco, sombra xl, border-radius 12px, itens com hover azul suave

BOTÕES (direita):
  • "FALE COM ESPECIALISTA" — outline (border branco no topo, border azul após scroll)
  • "ÁREA DO CLIENTE" — sólido azul (#0066CC)

MOBILE: hamburguer menu, drawer lateral ou dropdown com todos os links e botões

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 2 — HERO (carrossel com 5 slides)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Altura: 100vh (tela cheia)
- Carrossel automático (5s por slide) com transição fade ou slide suave
- Cada slide tem gradiente escuro único como fundo

SLIDE 1 — IA Empresarial
  Gradiente: linear-gradient(135deg, #0a0e27 0%, #0d1b4b 60%, #0066CC 100%)
  Badge: "🤖 Inteligência Artificial"
  Título: CONHEÇA O SOLIS AI ENGINE
  Subtítulo: A primeira plataforma de IA empresarial 100% brasileira, desenvolvida para transformar dados em decisões estratégicas em tempo real.
  CTA 1 (sólido branco): DESCUBRA O FUTURO
  CTA 2 (outline branco): ASSISTA AO VÍDEO

SLIDE 2 — Evento
  Gradiente: linear-gradient(135deg, #1a0a2e 0%, #2d1b69 60%, #6c3fc5 100%)
  Badge: "🎯 SOLIS Summit 2026"
  Título: SOLIS SUMMIT 2026
  Subtítulo: O maior encontro de inovação e tecnologia empresarial do Brasil. De 15 a 17 de maio em São Paulo.
  CTA 1: GARANTA SUA INSCRIÇÃO
  CTA 2: VER PROGRAMAÇÃO

SLIDE 3 — Cloud ERP
  Gradiente: linear-gradient(135deg, #003D7A 0%, #0052A3 50%, #0066CC 100%)
  Badge: "☁️ Cloud ERP"
  Título: ERP NA NUVEM QUE IMPULSIONA SEU CRESCIMENTO
  Subtítulo: Gestão integrada, inteligente e escalável para empresas que não param de evoluir.
  CTA 1: CONHEÇA NOSSAS SOLUÇÕES
  CTA 2: FALE COM CONSULTOR

SLIDE 4 — Transformação Digital
  Gradiente: linear-gradient(135deg, #004d40 0%, #00695c 50%, #00897b 100%)
  Badge: "🔄 Transformação Digital"
  Título: TRANSFORMAÇÃO DIGITAL SEM COMPLICAÇÃO
  Subtítulo: Migre para a nuvem com segurança, agilidade e o suporte de quem entende do seu negócio.
  CTA 1: FALE COM UM CONSULTOR
  CTA 2: VER CASES

SLIDE 5 — Clientes
  Gradiente: linear-gradient(135deg, #1a0a00 0%, #4a2800 50%, #e65100 100%)
  Badge: "🏆 15.000+ Clientes"
  Título: MAIS DE 15.000 EMPRESAS CONFIAM NA SOLIS
  Subtítulo: Conheça histórias reais de transformação e crescimento com nossas soluções.
  CTA 1: VEJA OS CASES
  CTA 2: CONHEÇA A SOLIS

ELEMENTOS DO CARROSSEL:
  - Setas de navegação: círculos semi-transparentes (backdrop-blur), esquerda e direita
  - Indicadores: bolinhas na base, ativa = pill alongada branca
  - Seta "scroll down" animada (bounce) na base central

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 3 — LOGOS DE CLIENTES (carrossel infinito)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo branco, padding vertical 48px
- Título centralizado: "Empresas que lideram seus mercados escolhem a SOLIS" (texto pequeno, cinza, uppercase)
- Carrossel infinito horizontal via CSS animation (scroll contínuo, sem parar)
- 12 logos fictícios: GRUPO ALPHA | BETA CORP | DELTA S.A. | GAMMA TECH | EPSILON | ZETA GROUP | ETA INDÚSTRIAS | THETA VAREJO | IOTA SAÚDE | KAPPA AGRO | LAMBDA LOG | MU CONSTRUÇÕES
- Cada logo: retângulo cinza claro com texto, hover muda para azul claro

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 4 — VÍDEO INSTITUCIONAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #0a0e27 (quase preto)
- Layout: 2 colunas (texto esquerda + player direita)
- Texto (esquerda):
    Badge: "Tecnologia Brasileira"
    Título: TECNOLOGIA BRASILEIRA QUE TRANSFORMA NEGÓCIOS
    Parágrafo 1: A SOLIS nasceu da visão de democratizar a tecnologia empresarial no Brasil. Hoje, somos referência em inovação, conectando milhares de empresas à transformação digital com soluções inteligentes, seguras e desenvolvidas para a realidade brasileira.
    Parágrafo 2: Estamos presentes em todos os estados do país, atendendo desde startups até grandes corporações com gestão, IA, analytics e cloud computing.
    CTA: CONHEÇA NOSSA HISTÓRIA (botão azul)
- Player (direita):
    Thumbnail com gradiente azul para ciano, aspect-ratio 16:9
    Botão play centralizado (círculo branco semi-transparente com ícone play)
    Card flutuante inferior-esquerdo: "15.000+" / "Empresas atendidas" (fundo branco)
    Card flutuante superior-direito: "25+" / "Anos de mercado" (fundo azul, texto branco)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 5 — SOLUÇÕES PRINCIPAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo branco, padding vertical 96px
- Badge: "Plataforma Completa"
- Título: PLATAFORMA COMPLETA PARA TODA SUA OPERAÇÃO
- Subtítulo: Soluções integradas que conectam pessoas, processos e dados em um ecossistema inteligente
- Grid de 3 cards (1 coluna mobile, 3 desktop):

  CARD 1 — SOLIS Cloud ERP
    Ícone: ☁️ em fundo azul claro (#0066CC15)
    Título: SOLIS Cloud ERP
    Descrição: Gestão empresarial completa na nuvem. Integre financeiro, vendas, compras, estoque, produção e muito mais em uma única plataforma inteligente e escalável.
    Link: "Explorar ERP →" (azul)

  CARD 2 — SOLIS AI Engine
    Ícone: 🤖 em fundo roxo claro
    Título: SOLIS AI Engine
    Descrição: Inteligência artificial embarcada em todos os processos. Previsões precisas, automações inteligentes e insights estratégicos para decisões mais rápidas e assertivas.
    Link: "Conhecer IA →" (roxo)

  CARD 3 — SOLIS Data Cloud
    Ícone: 📊 em fundo ciano claro
    Título: SOLIS Data Cloud
    Descrição: Centralize, organize e analise todos os dados da sua empresa. Data warehouse moderno com governança, segurança e analytics avançado em tempo real.
    Link: "Ver Data Cloud →" (ciano)

- Cards: border cinza, hover com border azul + sombra xl + translateY(-4px)
- CTA abaixo: "VER TODAS AS SOLUÇÕES" (outline azul)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 6 — ÁREAS FUNCIONAIS (tabs interativas)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #F5F7FA
- Badge: "Funcionalidades"
- Título: TECNOLOGIA PARA CADA ÁREA DO SEU NEGÓCIO
- 6 tabs em pills: Gestão Financeira | Gestão de Pessoas | Supply Chain | Vendas & CRM | Business Intelligence | Manufatura
- Tab ativa: fundo azul (#0066CC), texto branco, sombra
- Tab inativa: fundo branco, border cinza, hover azul suave
- Conteúdo (card branco com 2 colunas):
    Esquerda: título da área + lista de 5 features com checkmark azul + botão "Saiba mais"
    Direita: fundo gradiente azul claro, emoji grande centralizado + nome da área

  GESTÃO FINANCEIRA:
    Features: Planejamento financeiro inteligente | Controle de fluxo de caixa | Conciliação bancária automatizada | Compliance fiscal e tributário | Gestão de despesas e viagens
    Emoji: 💰

  GESTÃO DE PESSOAS:
    Features: Folha de pagamento automatizada | Recrutamento e seleção | Gestão de performance | Treinamento e desenvolvimento | Benefícios e remuneração
    Emoji: 👥

  SUPPLY CHAIN:
    Features: Gestão de estoque inteligente | Planejamento de demanda | Logística e distribuição | Gestão de fornecedores | Rastreabilidade completa
    Emoji: 📦

  VENDAS & CRM:
    Features: Pipeline de vendas visual | Automação de marketing | Gestão de clientes 360° | Previsão de vendas com IA | Integração omnichannel
    Emoji: 📈

  BUSINESS INTELLIGENCE:
    Features: Dashboards em tempo real | Relatórios personalizados | Analytics preditivo | KPIs automatizados | Visualização de dados avançada
    Emoji: 📊

  MANUFATURA:
    Features: Planejamento da produção | Controle de qualidade | Gestão de manutenção | Rastreabilidade de lotes | Integração com IoT
    Emoji: 🏭

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 7 — SEGMENTOS ATENDIDOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo branco
- Badge: "Segmentos"
- Título: SOLUÇÕES ESPECIALIZADAS PARA SEU SEGMENTO
- Subtítulo: Expertise vertical com funcionalidades específicas para os desafios do seu mercado
- Grid 4x2 (mobile: 2x4):
    🏭 Indústria | 🛒 Varejo | 🌾 Agronegócio | ⚙️ Serviços
    ⚕️ Saúde | 📚 Educação | 🚚 Logística | 🏗️ Construção
- Cada card: fundo cinza claro, emoji grande, nome, hover = border azul + fundo azul claro + emoji scale(1.1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 8 — DIFERENCIAIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #0a0e27 (escuro)
- Badge: "Nossos Diferenciais" (branco/10)
- Título: POR QUE ESCOLHER A SOLIS? (texto branco)
- Grid 4 cards (1 col mobile, 2 tablet, 4 desktop):

  CARD 1 — Segurança Certificada
    Ícone: 🛡️
    Badge: "ISO 27001"
    Título: SEGURANÇA CERTIFICADA
    Descrição: ISO 27001, LGPD compliant e infraestrutura em datacenters tier 3 no Brasil

  CARD 2 — Implementação Rápida
    Ícone: 🚀
    Badge: "Até 90 dias"
    Título: IMPLEMENTAÇÃO RÁPIDA
    Descrição: Go-live em até 90 dias com metodologia ágil e time dedicado

  CARD 3 — Suporte 24/7
    Ícone: 🎧
    Badge: "24/7"
    Título: SUPORTE 24/7
    Descrição: Atendimento em português, equipe especializada e SLA garantido

  CARD 4 — ROI Comprovado
    Ícone: 📈
    Badge: "40% redução"
    Título: ROI COMPROVADO
    Descrição: Redução média de 40% em custos operacionais no primeiro ano

- Cards: fundo branco/5, border branco/10, hover fundo branco/10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 9 — CASES DE SUCESSO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #F5F7FA
- Badge: "Cases de Sucesso"
- Título: HISTÓRIAS DE TRANSFORMAÇÃO
- Subtítulo: Veja como empresas de diferentes segmentos alcançaram resultados extraordinários com a SOLIS
- Grid de 3 cards:

  CASE 1
    Header: gradiente azul → ciano, texto "GRUPO ALPHA"
    Segmento badge: "Indústria Alimentícia"
    Título: Como o Grupo Alpha aumentou a produtividade em 35% e reduziu desperdícios com SOLIS ERP
    Resultado (verde): ✅ R$ 5M economizados no primeiro ano
    Link: "Ler case completo →"

  CASE 2
    Header: gradiente roxo, texto "BETA VAREJO"
    Segmento badge: "Varejo"
    Título: Beta Varejo integrou 150 lojas e triplicou vendas online com SOLIS Omnichannel
    Resultado: ✅ 3x crescimento em vendas digitais
    Link: "Ler case completo →"

  CASE 3
    Header: gradiente verde escuro, texto "DELTA LOG"
    Segmento badge: "Logística"
    Título: Delta Log otimizou rotas e economizou R$ 2M por ano com SOLIS Supply Chain
    Resultado: ✅ R$ 2M economizados por ano
    Link: "Ler case completo →"

- Cards: fundo branco, border cinza, hover border azul + sombra xl
- CTA abaixo: "VER TODOS OS CASES" (outline azul)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 10 — ECOSSISTEMA DE PARCEIROS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo branco
- Badge: "Ecossistema"
- Título: CRESÇA COM NOSSO ECOSSISTEMA
- Grid de 3 cards (fundo cinza claro):

  PARCEIROS DE TECNOLOGIA
    Descrição: Integrações nativas com as principais plataformas do mercado
    Tags: AWS | Azure | Google Cloud | Salesforce | Oracle | SAP
    Link: "Ver integrações →"

  PARCEIROS DE IMPLEMENTAÇÃO
    Descrição: Rede de 500+ consultores certificados em todo o Brasil
    Tags: Consultoria Alpha | Beta Tech | Gamma Solutions
    Link: "Encontre um parceiro →"

  SEJA UM PARCEIRO
    Descrição: Faça parte do ecossistema SOLIS e expanda seus negócios com nossa rede
    Tags: Oportunidades | Crescimento | Suporte
    Link: "Programa de parceiros →"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 11 — RECURSOS E CONTEÚDO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #F5F7FA
- Badge: "Conteúdo"
- Título: CONHECIMENTO QUE TRANSFORMA
- Grid 4 cards (hover com sombra xl e translateY):

  📝 BLOG — Últimas tendências em tecnologia empresarial → "Acessar blog"
  🎥 WEBINARS — Eventos online gratuitos com especialistas → "Inscrever-se"
  📚 E-BOOKS — Guias completos para sua transformação digital → "Baixar grátis"
  ❓ CENTRAL DE AJUDA — Documentação, tutoriais e suporte → "Acessar central"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 12 — DEPOIMENTOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo branco, max-width 800px centralizado
- Badge: "Depoimentos"
- Título: O QUE NOSSOS CLIENTES DIZEM
- Carrossel com autoplay (5s), 1 depoimento por vez
- Cada depoimento:
    5 estrelas amarelas
    Citação em itálico (texto grande, cinza escuro)
    Avatar (círculo azul claro com emoji 👤)
    Nome em bold, cargo em cinza, empresa em azul
- Dots de navegação na base

  DEPOIMENTO 1
    Citação: "A SOLIS transformou completamente nossa operação. A implementação foi rápida e o suporte é excepcional. Hoje temos visibilidade total do negócio em tempo real."
    Autor: João Silva — Diretor Executivo — Grupo Alpha · Indústria

  DEPOIMENTO 2
    Citação: "Migramos para a nuvem com a SOLIS e os resultados superaram todas as expectativas. Reduzimos custos em 38% e ganhamos agilidade para crescer com segurança."
    Autor: Maria Santos — Gerente de TI — Beta Varejo · Varejo

  DEPOIMENTO 3
    Citação: "A IA do SOLIS nos ajuda a tomar decisões mais inteligentes. Os insights preditivos mudaram completamente nossa forma de planejar e executar a operação."
    Autor: Carlos Oliveira — CFO — Delta Log · Logística

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 13 — CTA PRINCIPAL (formulário)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: gradiente linear de #003D7A para #0066CC para #00B8D4
- Layout: 2 colunas (texto esquerda + formulário direita)

TEXTO (esquerda, branco):
  Título: PRONTO PARA TRANSFORMAR SEU NEGÓCIO?
  Subtítulo: Fale com nossos especialistas e descubra como a SOLIS pode impulsionar seus resultados
  Lista de benefícios (ícone ✅ verde):
    ✅ Consultoria gratuita com especialista
    ✅ Demo personalizada para seu segmento
    ✅ Proposta sem compromisso em 24h
    ✅ Implementação em até 90 dias

FORMULÁRIO (direita, card branco com sombra 2xl):
  Título do card: "Fale com um especialista"
  Campos:
    Nome completo* (input text)
    Empresa* (input text)
    E-mail corporativo* (input email, placeholder: seu@empresa.com.br)
    Telefone* (input tel, placeholder: (11) 99999-9999)
    Segmento* (select): Indústria | Varejo | Agronegócio | Serviços | Saúde | Educação | Logística | Construção
  Botão: "QUERO FALAR COM UM ESPECIALISTA" (azul, largura total, bold)
  Rodapé: "Ao enviar, você concorda com nossa Política de Privacidade" (texto xs cinza)
  Após envio: mostrar estado de sucesso com emoji 🎉 e mensagem "Obrigado! Em breve entraremos em contato."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 14 — NÚMEROS DA SOLIS (contadores animados)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #0066CC (azul sólido)
- Título: SOLIS EM NÚMEROS (branco)
- Grid 4 colunas (2x2 mobile):
    15.000+ / Empresas atendidas
    25+ / Anos de experiência
    98% / Satisfação dos clientes
    24/7 / Suporte disponível
- Contadores animam do zero ao valor final quando a seção entra no viewport (IntersectionObserver)
- Números grandes (56–64px), Poppins bold, branco
- Labels menores, branco/60

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEÇÃO 15 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Fundo: #0a0e27
- Grid 5 colunas (1 col mobile, 2 tablet, 5 desktop):

  COLUNA 1 — Marca
    Logo SOLIS (ícone + texto branco)
    Tagline: "Tecnologia empresarial que transforma negócios" (branco/50)
    Redes sociais (ícones em círculos branco/10, hover azul):
      LinkedIn | Instagram | YouTube | Facebook | X (Twitter)

  COLUNA 2 — Soluções
    SOLIS Cloud ERP | SOLIS AI Engine | SOLIS Data Cloud | SOLIS CRM | SOLIS HCM | SOLIS Supply Chain | Ver todas

  COLUNA 3 — Segmentos
    Indústria | Varejo | Agronegócio | Serviços | Saúde | Educação | Logística | Construção

  COLUNA 4 — Empresa
    Sobre a SOLIS | Carreiras | Imprensa | Blog | Cases de sucesso | Parceiros | Contato

  COLUNA 5 — Suporte
    Central de Ajuda | Documentação | Status do sistema | Área do cliente | Fale conosco
    WhatsApp: (11) 98765-4321

- Linha divisória branco/10
- Barra inferior: copyright + links legais (Política de Privacidade | Termos de Uso | LGPD | Cookies)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMAÇÕES E INTERAÇÕES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Usar Framer Motion com whileInView para animar elementos ao entrar no viewport
- Stagger: cards aparecem em sequência (delay de 100ms entre cada)
- Hover em cards: translateY(-4px) + sombra maior (300ms ease)
- Hover em botões: translateY(-2px) + sombra colorida
- Hover em links do menu: cor azul com transição 200ms
- Scroll do header: transição suave entre transparente e branco (300ms)
- Carrossel hero: fade crossfade entre slides (1000ms)
- Carrossel clientes: scroll CSS infinito e contínuo
- Contadores: animação de 0 ao valor final em 2000ms com easing
- Seta scroll down: animação bounce infinita (translateY 0 → 10px → 0)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSIVIDADE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Mobile-first: começar com layout de 1 coluna
- sm (640px): ajustes de padding e tipografia
- md (768px): 2 colunas em grids, menu tablet
- lg (1024px): 3–4 colunas, layout completo desktop
- xl (1280px): container max-width 1280px centralizado
- Container: max-w-7xl mx-auto px-4 (mobile) px-6 (md) px-8 (lg)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACESSIBILIDADE E SEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- aria-label em todos os botões sem texto visível
- alt text descritivo em todas as imagens
- focus-visible com outline azul em todos os elementos interativos
- Estrutura semântica: header, main, section, nav, footer, h1-h6 em ordem
- Meta tags: title, description, og:title, og:description, og:type
- lang="pt-BR" no html

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUALIDADE DO CÓDIGO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- TypeScript strict: sem any, interfaces para todas as props
- Componentes funcionais com hooks (useState, useEffect, useRef, useCallback)
- Dados separados em arquivo constants.ts (sem hardcode nos componentes)
- Tailwind CSS para 100% dos estilos (sem CSS inline ou styled-components)
- Nenhuma imagem externa: usar gradientes CSS e emojis como placeholders
- Comentários em português explicando seções complexas
- Código limpo, legível e bem organizado
```

---

## PROMPTS DE REFINAMENTO (use após gerar o site)

### Para melhorar as animações:
```
Melhore as animações do site com Framer Motion:
1. Adicione stagger animation nos cards de Soluções, Segmentos e Diferenciais (cada card aparece com 100ms de delay)
2. No Hero, adicione um efeito parallax suave no texto ao mover o mouse
3. Adicione um efeito de "reveal" nos títulos das seções (texto aparece da esquerda para a direita)
4. Nos números da seção 14, adicione um efeito de "pulse" quando o contador terminar
```

### Para melhorar o Hero:
```
Melhore o componente Hero:
1. Adicione elementos geométricos decorativos no background (círculos e linhas com opacity 0.05)
2. Crie uma barra de progresso fina na base do slide mostrando o tempo até o próximo slide
3. Adicione um efeito de "ken burns" suave no background (zoom lento)
4. Melhore os indicadores de slide para mostrar o número do slide atual e total
```

### Para melhorar o formulário CTA:
```
Melhore o formulário da seção CTA:
1. Adicione validação em tempo real com mensagens de erro inline
2. Adicione máscara no campo de telefone (formato brasileiro)
3. Adicione um indicador de progresso do formulário
4. Adicione um campo de "número de funcionários" com opções: 1-50 | 51-200 | 201-1000 | 1000+
```

### Para adicionar micro-interações:
```
Adicione micro-interações sofisticadas:
1. Botões com efeito ripple ao clicar
2. Cards com efeito de brilho (shimmer) ao hover
3. Links do footer com underline animado ao hover
4. Ícones das redes sociais com efeito de rotação suave ao hover
5. Badge da seção com animação de entrada (scale de 0.8 para 1)
```

### Para adicionar uma seção de Blog:
```
Adicione uma seção de Blog entre Recursos e Depoimentos:
- Fundo branco
- Badge: "Blog"
- Título: ÚLTIMAS TENDÊNCIAS EM TECNOLOGIA
- 3 cards de artigos:
  Card 1: "Como a IA está revolucionando a gestão financeira empresarial" | Categoria: IA | 5 min leitura | 20 Fev 2026
  Card 2: "ERP na nuvem: guia completo para migração sem riscos" | Categoria: Cloud | 8 min leitura | 15 Fev 2026
  Card 3: "LGPD 2026: o que mudou e como se adequar" | Categoria: Compliance | 6 min leitura | 10 Fev 2026
- Cada card: header com gradiente colorido, categoria badge, título, tempo de leitura, data, link
- CTA: "VER TODOS OS ARTIGOS"
```
