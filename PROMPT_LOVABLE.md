# 🎯 Prompt Completo para o Lovable - SOLIS Website

## Como Usar Este Arquivo

Cole este prompt diretamente no chat do Lovable para gerar o site SOLIS completo de forma automatizada.

---

## PROMPT PRINCIPAL

```
Crie um website institucional completo, profissional e sofisticado para a empresa SOLIS, uma empresa de tecnologia brasileira que atua no mercado de software empresarial, ERP, cloud computing e transformação digital. O site deve competir visualmente com TOTVS e SAP Brasil.

## STACK TÉCNICA
- React 18 + TypeScript
- Tailwind CSS (já configurado em tailwind.config.ts)
- Framer Motion para animações
- Lucide React para ícones
- Vite como bundler

## IDENTIDADE VISUAL

### Paleta de Cores (já definida em tailwind.config.ts)
- Primary: #0066CC (azul principal)
- Primary Dark: #003D7A
- Secondary: #00B8D4 (ciano)
- Success: #00C853 (verde)
- Backgrounds: white, gray-50 (#F5F7FA), gray-950 (#0a0e27)

### Tipografia
- Headings: Poppins (font-heading)
- Body: Inter (font-sans)

## ESTRUTURA DO SITE (15 SEÇÕES)

### 1. HEADER (src/components/Header.tsx) - JÁ CRIADO
- Logo SOLIS (ícone azul + texto)
- Menu desktop com 6 itens e dropdowns
- Botões: "FALE COM ESPECIALISTA" e "ÁREA DO CLIENTE"
- Efeito de scroll (transparente → branco com sombra)
- Menu mobile responsivo

### 2. HERO (src/components/Hero.tsx) - JÁ CRIADO
- Carrossel com 5 slides (dados em src/utils/constants.ts)
- Gradientes escuros únicos por slide
- Badge, título H1, subtítulo, 2 CTAs
- Setas de navegação, indicadores
- Scroll down animado

### 3. CLIENTS CAROUSEL (src/components/ClientsCarousel.tsx) - JÁ CRIADO
- Carrossel infinito via CSS animation
- Logos de 12 empresas fictícias
- Hover effect

### 4. VIDEO SECTION (src/components/VideoSection.tsx) - JÁ CRIADO
- Background escuro (gray-950)
- Grid 2 colunas: texto + player
- Texto institucional + CTA
- Thumbnail com botão play
- Cards flutuantes com stats

### 5. SOLUTIONS (src/components/Solutions.tsx) - JÁ CRIADO
- 3 cards: SOLIS Cloud ERP, SOLIS AI Engine, SOLIS Data Cloud
- Ícones coloridos, descrição, link
- CTA "VER TODAS AS SOLUÇÕES"

### 6. FUNCTIONAL AREAS (src/components/FunctionalAreas.tsx) - JÁ CRIADO
- 6 tabs: Financeira, Pessoas, Supply Chain, Vendas, BI, Manufatura
- Lista de features com checkmarks
- Visual ilustrativo com emoji

### 7. SEGMENTS (src/components/Segments.tsx) - JÁ CRIADO
- Grid 2x4 com 8 segmentos
- Ícones emoji grandes
- Hover com scale e cor

### 8. DIFFERENTIALS (src/components/Differentials.tsx) - JÁ CRIADO
- Background gray-950
- 4 cards: Segurança, Velocidade, Suporte, ROI
- Badges coloridos

### 9. CASES (src/components/Cases.tsx) - JÁ CRIADO
- 3 cards de cases
- Header com gradiente
- Badge de segmento, resultado em verde

### 10. PARTNERS (src/components/Partners.tsx) - JÁ CRIADO
- 3 cards: Tecnologia, Implementação, Seja Parceiro
- Tags de logos

### 11. RESOURCES (src/components/Resources.tsx) - JÁ CRIADO
- 4 cards: Blog, Webinars, E-books, Ajuda
- Ícones emoji, hover effect

### 12. TESTIMONIALS (src/components/Testimonials.tsx) - JÁ CRIADO
- Carrossel com autoplay
- Estrelas, citação, avatar, cargo
- Dots de navegação

### 13. CTA (src/components/CTA.tsx) - JÁ CRIADO
- Background gradiente azul
- Grid 2 colunas: texto + formulário
- Formulário com: nome, empresa, email, telefone, segmento
- Estado de sucesso após envio

### 14. NUMBERS (src/components/Numbers.tsx) - JÁ CRIADO
- Background primary-700
- 4 métricas com contadores animados (IntersectionObserver)
- 15.000+ empresas, 25+ anos, 98% satisfação, 24/7

### 15. FOOTER (src/components/Footer.tsx) - JÁ CRIADO
- Background gray-950
- Logo + tagline + redes sociais
- 4 colunas de links
- Barra inferior com copyright e links legais

## DADOS E CONTEÚDO
Todos os dados estão em src/utils/constants.ts:
- HERO_SLIDES: 5 slides com título, subtítulo, CTAs, gradiente
- CLIENTS: 12 empresas fictícias
- MAIN_SOLUTIONS: 3 soluções principais
- FUNCTIONAL_AREAS: 6 áreas com features
- SEGMENTS: 8 segmentos com ícones
- DIFFERENTIALS: 4 diferenciais
- CASES: 3 cases de sucesso
- PARTNERS: 3 tipos de parceiros
- RESOURCES: 4 recursos
- TESTIMONIALS: 3 depoimentos
- NUMBERS: 4 métricas
- NAV_MENU: Menu completo com submenus
- FOOTER_COLUMNS: 4 colunas do footer

## ESTILOS GLOBAIS
src/styles/globals.css contém:
- Variáveis CSS completas
- Reset CSS
- Classes utilitárias (.container, .section, .btn, .card)
- Animações keyframes
- Customização do scrollbar

## REQUISITOS DE QUALIDADE
1. Responsivo: mobile-first, breakpoints sm/md/lg/xl
2. Animações: fade-up ao scroll com data-aos, hover transitions
3. Performance: lazy loading, transições CSS ao invés de JS
4. Acessibilidade: aria-labels, focus-visible, contraste adequado
5. SEO: meta tags, estrutura semântica, alt texts
6. Código limpo: TypeScript strict, componentes funcionais, hooks

## INSTRUÇÕES ESPECÍFICAS
- Use Tailwind CSS para todos os estilos (não CSS inline)
- Use Framer Motion para animações de entrada mais sofisticadas
- Mantenha a paleta de cores definida (primary-500 = #0066CC)
- Todos os textos em português brasileiro
- CTAs em CAIXA ALTA
- Não use imagens externas (use gradientes e emojis como placeholders)
- O site deve parecer desenvolvido por uma agência profissional, não por IA
```

---

## PROMPTS DE REFINAMENTO

Após gerar o site, use estes prompts para refinar:

### Melhorar o Hero
```
Melhore o componente Hero com:
1. Animações de entrada mais sofisticadas com Framer Motion
2. Partículas ou elementos geométricos no background
3. Transição mais suave entre slides
4. Indicadores de slide mais elaborados
```

### Melhorar Animações
```
Adicione animações mais sofisticadas ao site:
1. Stagger animations nos cards (cada card aparece com delay)
2. Parallax suave no hero
3. Hover effects com scale e shadow nos cards
4. Transições de página suaves
```

### Adicionar Seção de Blog
```
Adicione uma seção de blog com:
1. 3 artigos recentes em cards
2. Imagem de capa (gradiente placeholder)
3. Categoria, título, resumo, data
4. CTA para ver todos os artigos
```

### Melhorar o Footer
```
Melhore o footer com:
1. Newsletter signup integrado
2. Mapa de localização placeholder
3. Selos de certificação (ISO, LGPD)
4. Contador de uptime do sistema
```

### Adicionar Página de Contato
```
Crie uma página de contato (/contact) com:
1. Formulário completo com validação
2. Mapa de localização
3. Informações de contato
4. FAQ accordion
```

---

## DICAS DE USO NO LOVABLE

1. **Importe o repositório**: Use "Import from GitHub" com a URL do repositório
2. **Instale dependências**: Execute `npm install` no terminal
3. **Inicie o servidor**: Execute `npm run dev`
4. **Cole o prompt**: Use o prompt principal acima no chat
5. **Refine**: Use os prompts de refinamento para melhorias específicas

---

## ESTRUTURA DE ARQUIVOS ESPERADA

```
src/
├── components/
│   ├── Header.tsx          ✅ Criado
│   ├── Hero.tsx            ✅ Criado
│   ├── ClientsCarousel.tsx ✅ Criado
│   ├── VideoSection.tsx    ✅ Criado
│   ├── Solutions.tsx       ✅ Criado
│   ├── FunctionalAreas.tsx ✅ Criado
│   ├── Segments.tsx        ✅ Criado
│   ├── Differentials.tsx   ✅ Criado
│   ├── Cases.tsx           ✅ Criado
│   ├── Partners.tsx        ✅ Criado
│   ├── Resources.tsx       ✅ Criado
│   ├── Testimonials.tsx    ✅ Criado
│   ├── CTA.tsx             ✅ Criado
│   ├── Numbers.tsx         ✅ Criado
│   └── Footer.tsx          ✅ Criado
├── utils/
│   └── constants.ts        ✅ Criado (todos os dados)
├── styles/
│   └── globals.css         ✅ Criado
├── App.tsx                 ✅ Criado
└── main.tsx                ✅ Criado
```

---

**Versão**: 1.0  
**Última Atualização**: Fevereiro 2026
