// ==================== DADOS DO SITE SOLIS ====================

// Slides do Hero
export const HERO_SLIDES = [
  {
    id: 1,
    badge: '🤖 Inteligência Artificial',
    title: 'CONHEÇA O SOLIS AI ENGINE',
    subtitle: 'A primeira plataforma de IA empresarial 100% brasileira, desenvolvida para transformar dados em decisões estratégicas em tempo real.',
    cta: { text: 'DESCUBRA O FUTURO', href: '/ai' },
    ctaSecondary: { text: 'ASSISTA AO VÍDEO', href: '#video' },
    gradient: 'from-[#0a0e27] via-[#0d1b4b] to-[#0066CC]',
  },
  {
    id: 2,
    badge: '🎯 SOLIS Summit 2026',
    title: 'SOLIS SUMMIT 2026',
    subtitle: 'O maior encontro de inovação e tecnologia empresarial do Brasil. De 15 a 17 de maio em São Paulo.',
    cta: { text: 'GARANTA SUA INSCRIÇÃO', href: '/summit' },
    ctaSecondary: { text: 'VER PROGRAMAÇÃO', href: '/summit/agenda' },
    gradient: 'from-[#1a0a2e] via-[#2d1b69] to-[#6c3fc5]',
  },
  {
    id: 3,
    badge: '☁️ Cloud ERP',
    title: 'ERP NA NUVEM QUE IMPULSIONA SEU CRESCIMENTO',
    subtitle: 'Gestão integrada, inteligente e escalável para empresas que não param de evoluir.',
    cta: { text: 'CONHEÇA NOSSAS SOLUÇÕES', href: '/solutions' },
    ctaSecondary: { text: 'FALE COM CONSULTOR', href: '/contact' },
    gradient: 'from-[#003D7A] via-[#0052A3] to-[#0066CC]',
  },
  {
    id: 4,
    badge: '🔄 Transformação Digital',
    title: 'TRANSFORMAÇÃO DIGITAL SEM COMPLICAÇÃO',
    subtitle: 'Migre para a nuvem com segurança, agilidade e o suporte de quem entende do seu negócio.',
    cta: { text: 'FALE COM UM CONSULTOR', href: '/contact' },
    ctaSecondary: { text: 'VER CASES', href: '/cases' },
    gradient: 'from-[#004d40] via-[#00695c] to-[#00897b]',
  },
  {
    id: 5,
    badge: '🏆 15.000+ Clientes',
    title: 'MAIS DE 15.000 EMPRESAS CONFIAM NA SOLIS',
    subtitle: 'Conheça histórias reais de transformação e crescimento com nossas soluções.',
    cta: { text: 'VEJA OS CASES', href: '/cases' },
    ctaSecondary: { text: 'CONHEÇA A SOLIS', href: '/about' },
    gradient: 'from-[#1a0a00] via-[#4a2800] to-[#e65100]',
  },
]

// Clientes
export const CLIENTS = [
  'EMPRESA A', 'EMPRESA B', 'EMPRESA C', 'EMPRESA D',
  'EMPRESA E', 'EMPRESA F', 'EMPRESA G', 'EMPRESA H',
  'EMPRESA I', 'EMPRESA J', 'EMPRESA K', 'EMPRESA L',
]

// Soluções Principais
export const MAIN_SOLUTIONS = [
  {
    id: 'erp',
    icon: '☁️',
    title: 'SOLIS Cloud ERP',
    description: 'Gestão empresarial completa na nuvem. Integre financeiro, vendas, compras, estoque, produção e muito mais em uma única plataforma inteligente e escalável.',
    href: '/solutions/erp',
    cta: 'Explorar ERP',
    color: '#0066CC',
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'SOLIS AI Engine',
    description: 'Inteligência artificial embarcada em todos os processos. Previsões precisas, automações inteligentes e insights estratégicos para decisões mais rápidas e assertivas.',
    href: '/solutions/ai',
    cta: 'Conhecer IA',
    color: '#6c3fc5',
  },
  {
    id: 'data',
    icon: '📊',
    title: 'SOLIS Data Cloud',
    description: 'Centralize, organize e analise todos os dados da sua empresa. Data warehouse moderno com governança, segurança e analytics avançado em tempo real.',
    href: '/solutions/data',
    cta: 'Ver Data Cloud',
    color: '#00B8D4',
  },
]

// Áreas Funcionais
export const FUNCTIONAL_AREAS = [
  {
    id: 'financial',
    name: 'Gestão Financeira',
    features: [
      'Planejamento financeiro inteligente',
      'Controle de fluxo de caixa',
      'Conciliação bancária automatizada',
      'Compliance fiscal e tributário',
      'Gestão de despesas e viagens',
    ],
  },
  {
    id: 'people',
    name: 'Gestão de Pessoas',
    features: [
      'Folha de pagamento automatizada',
      'Recrutamento e seleção',
      'Gestão de performance',
      'Treinamento e desenvolvimento',
      'Benefícios e remuneração',
    ],
  },
  {
    id: 'supply',
    name: 'Supply Chain',
    features: [
      'Gestão de estoque inteligente',
      'Planejamento de demanda',
      'Logística e distribuição',
      'Gestão de fornecedores',
      'Rastreabilidade completa',
    ],
  },
  {
    id: 'sales',
    name: 'Vendas & CRM',
    features: [
      'Pipeline de vendas visual',
      'Automação de marketing',
      'Gestão de clientes 360°',
      'Previsão de vendas com IA',
      'Integração omnichannel',
    ],
  },
  {
    id: 'bi',
    name: 'Business Intelligence',
    features: [
      'Dashboards em tempo real',
      'Relatórios personalizados',
      'Analytics preditivo',
      'KPIs automatizados',
      'Visualização de dados avançada',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufatura',
    features: [
      'Planejamento da produção',
      'Controle de qualidade',
      'Gestão de manutenção',
      'Rastreabilidade de lotes',
      'Integração com IoT',
    ],
  },
]

// Segmentos
export const SEGMENTS = [
  { id: 'industry', name: 'Indústria', icon: '🏭', href: '/segments/industry' },
  { id: 'retail', name: 'Varejo', icon: '🛒', href: '/segments/retail' },
  { id: 'agro', name: 'Agronegócio', icon: '🌾', href: '/segments/agro' },
  { id: 'services', name: 'Serviços', icon: '⚙️', href: '/segments/services' },
  { id: 'health', name: 'Saúde', icon: '⚕️', href: '/segments/health' },
  { id: 'education', name: 'Educação', icon: '📚', href: '/segments/education' },
  { id: 'logistics', name: 'Logística', icon: '🚚', href: '/segments/logistics' },
  { id: 'construction', name: 'Construção', icon: '🏗️', href: '/segments/construction' },
]

// Diferenciais
export const DIFFERENTIALS = [
  {
    id: 'security',
    icon: '🛡️',
    title: 'SEGURANÇA CERTIFICADA',
    description: 'ISO 27001, LGPD compliant e infraestrutura em datacenters tier 3 no Brasil',
    badge: 'ISO 27001',
  },
  {
    id: 'speed',
    icon: '🚀',
    title: 'IMPLEMENTAÇÃO RÁPIDA',
    description: 'Go-live em até 90 dias com metodologia ágil e time dedicado',
    badge: 'Até 90 dias',
  },
  {
    id: 'support',
    icon: '🎧',
    title: 'SUPORTE 24/7',
    description: 'Atendimento em português, equipe especializada e SLA garantido',
    badge: '24/7',
  },
  {
    id: 'roi',
    icon: '📈',
    title: 'ROI COMPROVADO',
    description: 'Redução média de 40% em custos operacionais no primeiro ano',
    badge: '40% redução',
  },
]

// Cases de Sucesso
export const CASES = [
  {
    id: 'empresa-x',
    company: 'EMPRESA X',
    segment: 'Indústria Alimentícia',
    title: 'Como a Empresa X aumentou a produtividade em 35% e reduziu desperdícios com SOLIS ERP',
    result: 'R$ 5M economizados',
    href: '/cases/empresa-x',
  },
  {
    id: 'empresa-y',
    company: 'EMPRESA Y',
    segment: 'Varejo',
    title: 'Empresa Y integrou 150 lojas e triplicou vendas online com SOLIS Omnichannel',
    result: '3x crescimento em vendas',
    href: '/cases/empresa-y',
  },
  {
    id: 'empresa-z',
    company: 'EMPRESA Z',
    segment: 'Logística',
    title: 'Empresa Z otimizou rotas e economizou R$ 2M por ano com SOLIS Supply Chain',
    result: 'R$ 2M economizados/ano',
    href: '/cases/empresa-z',
  },
]

// Parceiros
export const PARTNERS = [
  {
    id: 'tech',
    title: 'PARCEIROS DE TECNOLOGIA',
    description: 'Integrações nativas com as principais plataformas do mercado',
    logos: ['AWS', 'Azure', 'Google Cloud', 'Salesforce'],
    cta: { text: 'Ver integrações', href: '/partners/tech' },
  },
  {
    id: 'implementation',
    title: 'PARCEIROS DE IMPLEMENTAÇÃO',
    description: 'Rede de consultores certificados em todo o Brasil',
    logos: ['Consultoria A', 'Consultoria B', 'Consultoria C'],
    cta: { text: 'Encontre um parceiro', href: '/partners/implementation' },
  },
  {
    id: 'become',
    title: 'SEJA UM PARCEIRO',
    description: 'Faça parte do ecossistema SOLIS e expanda seus negócios',
    logos: ['Oportunidades', 'Crescimento', 'Sucesso'],
    cta: { text: 'Programa de parceiros', href: '/partners/program' },
  },
]

// Recursos
export const RESOURCES = [
  {
    id: 'blog',
    icon: '📝',
    title: 'BLOG',
    description: 'Últimas tendências em tecnologia empresarial',
    href: '/blog',
    type: 'blog' as const,
  },
  {
    id: 'webinars',
    icon: '🎥',
    title: 'WEBINARS',
    description: 'Eventos online gratuitos com especialistas',
    href: '/webinars',
    type: 'webinar' as const,
  },
  {
    id: 'ebooks',
    icon: '📚',
    title: 'E-BOOKS',
    description: 'Guias completos para sua transformação digital',
    href: '/ebooks',
    type: 'ebook' as const,
  },
  {
    id: 'help',
    icon: '❓',
    title: 'CENTRAL DE AJUDA',
    description: 'Documentação, tutoriais e suporte',
    href: '/help',
    type: 'help' as const,
  },
]

// Depoimentos
export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'A SOLIS transformou completamente nossa operação. A implementação foi rápida e o suporte é excepcional. Hoje temos visibilidade total do negócio.',
    author: 'João Silva',
    position: 'Diretor Executivo',
    company: 'Empresa X - Indústria',
    avatar: '👤',
  },
  {
    id: 2,
    quote: 'Migramos para a nuvem com a SOLIS e os resultados superaram expectativas. Reduzimos custos e ganhamos agilidade para crescer.',
    author: 'Maria Santos',
    position: 'Gerente de TI',
    company: 'Empresa Y - Varejo',
    avatar: '👤',
  },
  {
    id: 3,
    quote: 'A IA do SOLIS nos ajuda a tomar decisões mais inteligentes. Os insights preditivos mudaram nossa forma de planejar.',
    author: 'Carlos Oliveira',
    position: 'CFO',
    company: 'Empresa Z - Logística',
    avatar: '👤',
  },
]

// Números
export const NUMBERS = [
  { id: 1, value: 15000, label: 'Empresas atendidas', suffix: '+', prefix: '' },
  { id: 2, value: 25, label: 'Anos de experiência', suffix: '+', prefix: '' },
  { id: 3, value: 98, label: '% Satisfação dos clientes', suffix: '%', prefix: '' },
  { id: 4, value: '24/7', label: 'Suporte disponível', suffix: '', prefix: '' },
]

// Menu de Navegação
export const NAV_MENU = [
  {
    label: 'Soluções',
    href: '/solutions',
    submenu: [
      { label: 'SOLIS Cloud ERP', href: '/solutions/erp' },
      { label: 'SOLIS AI Engine', href: '/solutions/ai' },
      { label: 'SOLIS Data Cloud', href: '/solutions/data' },
      { label: 'SOLIS CRM', href: '/solutions/crm' },
      { label: 'SOLIS HCM', href: '/solutions/hcm' },
      { label: 'SOLIS Supply Chain', href: '/solutions/supply' },
      { label: 'Ver todas →', href: '/solutions' },
    ],
  },
  {
    label: 'Segmentos',
    href: '/segments',
    submenu: [
      { label: 'Indústria', href: '/segments/industry' },
      { label: 'Varejo', href: '/segments/retail' },
      { label: 'Agronegócio', href: '/segments/agro' },
      { label: 'Serviços', href: '/segments/services' },
      { label: 'Saúde', href: '/segments/health' },
      { label: 'Educação', href: '/segments/education' },
      { label: 'Logística', href: '/segments/logistics' },
      { label: 'Construção', href: '/segments/construction' },
    ],
  },
  {
    label: 'Plataforma',
    href: '/platform',
    submenu: [
      { label: 'Visão Geral', href: '/platform' },
      { label: 'Integrações', href: '/platform/integrations' },
      { label: 'Segurança', href: '/platform/security' },
      { label: 'Infraestrutura', href: '/platform/infrastructure' },
    ],
  },
  {
    label: 'Clientes',
    href: '/clients',
    submenu: [
      { label: 'Cases de Sucesso', href: '/cases' },
      { label: 'Depoimentos', href: '/testimonials' },
      { label: 'Área do Cliente', href: '/client-area' },
    ],
  },
  {
    label: 'Recursos',
    href: '/resources',
    submenu: [
      { label: 'Blog', href: '/blog' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'E-books', href: '/ebooks' },
      { label: 'Central de Ajuda', href: '/help' },
    ],
  },
  {
    label: 'Empresa',
    href: '/about',
    submenu: [
      { label: 'Sobre a SOLIS', href: '/about' },
      { label: 'Carreiras', href: '/careers' },
      { label: 'Imprensa', href: '/press' },
      { label: 'Parceiros', href: '/partners' },
      { label: 'Contato', href: '/contact' },
    ],
  },
]

// Footer Links
export const FOOTER_COLUMNS = [
  {
    title: 'Soluções',
    links: [
      { label: 'SOLIS Cloud ERP', href: '/solutions/erp' },
      { label: 'SOLIS AI Engine', href: '/solutions/ai' },
      { label: 'SOLIS Data Cloud', href: '/solutions/data' },
      { label: 'SOLIS CRM', href: '/solutions/crm' },
      { label: 'SOLIS HCM', href: '/solutions/hcm' },
      { label: 'SOLIS Supply Chain', href: '/solutions/supply' },
      { label: 'Ver todas', href: '/solutions' },
    ],
  },
  {
    title: 'Segmentos',
    links: [
      { label: 'Indústria', href: '/segments/industry' },
      { label: 'Varejo', href: '/segments/retail' },
      { label: 'Agronegócio', href: '/segments/agro' },
      { label: 'Serviços', href: '/segments/services' },
      { label: 'Saúde', href: '/segments/health' },
      { label: 'Educação', href: '/segments/education' },
      { label: 'Logística', href: '/segments/logistics' },
      { label: 'Construção', href: '/segments/construction' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre a SOLIS', href: '/about' },
      { label: 'Carreiras', href: '/careers' },
      { label: 'Imprensa', href: '/press' },
      { label: 'Blog', href: '/blog' },
      { label: 'Cases de sucesso', href: '/cases' },
      { label: 'Parceiros', href: '/partners' },
      { label: 'Contato', href: '/contact' },
    ],
  },
  {
    title: 'Suporte',
    links: [
      { label: 'Central de Ajuda', href: '/help' },
      { label: 'Documentação', href: '/docs' },
      { label: 'Status do sistema', href: '/status' },
      { label: 'Área do cliente', href: '/client-area' },
      { label: 'Fale conosco', href: '/contact' },
    ],
  },
]
