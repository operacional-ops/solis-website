# 📦 Documentação de Componentes - SOLIS Website

## Componentes Principais

### 1. Header

**Localização**: `src/components/Header.tsx`

**Funcionalidades**:
- Navegação fixa com logo
- Menu dropdown para cada seção
- Botões de ação (Fale com Especialista, Área do Cliente)
- Menu mobile responsivo
- Scroll effect (background muda ao scroll)

**Props**:
```tsx
interface HeaderProps {
  logo?: string
  menuItems?: MenuItem[]
  sticky?: boolean
  onMenuClick?: (item: string) => void
}
```

**Uso**:
```tsx
import Header from '@/components/Header'

export default function App() {
  return <Header />
}
```

**Exemplo de Menu Item**:
```tsx
{
  label: 'Soluções',
  href: '/solutions',
  submenu: [
    { label: 'SOLIS Cloud ERP', href: '/solutions/erp' },
    { label: 'SOLIS AI Engine', href: '/solutions/ai' },
    { label: 'SOLIS Data Cloud', href: '/solutions/data' },
  ]
}
```

---

### 2. Hero

**Localização**: `src/components/Hero.tsx`

**Funcionalidades**:
- Carrossel com 5 slides
- Indicadores de navegação
- Setas de navegação
- Scroll down animado
- Autoplay configurável

**Props**:
```tsx
interface HeroProps {
  slides?: SlideData[]
  autoplay?: boolean
  autoplayDelay?: number
  onSlideChange?: (index: number) => void
}

interface SlideData {
  title: string
  subtitle: string
  cta: {
    text: string
    href: string
  }
  background?: string
  gradient?: string
}
```

**Slides Padrão**:
```tsx
const slides = [
  {
    title: 'CONHEÇA O SOLIS AI ENGINE',
    subtitle: 'A primeira plataforma de IA empresarial 100% brasileira',
    cta: { text: 'DESCUBRA O FUTURO', href: '/ai' },
    gradient: 'from-primary-500 to-secondary-500'
  },
  // ... mais slides
]
```

---

### 3. Solutions

**Localização**: `src/components/Solutions.tsx`

**Funcionalidades**:
- 3 cards de soluções principais
- Tabs para áreas funcionais (6 abas)
- Ícones e descrições
- Links para mais informações

**Props**:
```tsx
interface SolutionsProps {
  solutions?: Solution[]
  functionalAreas?: FunctionalArea[]
}

interface Solution {
  id: string
  title: string
  description: string
  icon: string
  href: string
}

interface FunctionalArea {
  id: string
  name: string
  description: string
  features: string[]
}
```

**Áreas Funcionais Padrão**:
1. Gestão Financeira
2. Gestão de Pessoas
3. Supply Chain
4. Vendas & CRM
5. Business Intelligence
6. Manufatura

---

### 4. Segments

**Localização**: `src/components/Segments.tsx`

**Funcionalidades**:
- Grid de 8 segmentos
- Ícones emoji
- Hover effects
- Links para páginas específicas

**Props**:
```tsx
interface SegmentsProps {
  segments?: Segment[]
  columns?: number
  onSegmentClick?: (segment: Segment) => void
}

interface Segment {
  id: string
  name: string
  icon: string
  href: string
}
```

**Segmentos Padrão**:
```tsx
[
  { name: 'Indústria', icon: '🏭' },
  { name: 'Varejo', icon: '🛒' },
  { name: 'Agronegócio', icon: '🌾' },
  { name: 'Serviços', icon: '⚙️' },
  { name: 'Saúde', icon: '⚕️' },
  { name: 'Educação', icon: '📚' },
  { name: 'Logística', icon: '🚚' },
  { name: 'Construção', icon: '🏗️' },
]
```

---

### 5. Cases

**Localização**: `src/components/Cases.tsx`

**Funcionalidades**:
- Carrossel de cases
- 3 cases visíveis por vez
- Navegação por setas
- Informações de segmento e resultado

**Props**:
```tsx
interface CasesProps {
  cases?: CaseData[]
  onCaseClick?: (caseData: CaseData) => void
}

interface CaseData {
  id: string
  company: string
  segment: string
  title: string
  description: string
  result: string
  image?: string
  href: string
}
```

**Exemplo de Case**:
```tsx
{
  company: 'Empresa X',
  segment: 'Indústria Alimentícia',
  title: 'Aumentou produtividade em 35%',
  description: 'Como a Empresa X aumentou a produtividade em 35% e reduziu desperdícios com SOLIS ERP',
  result: 'R$ 5M economizados no primeiro ano',
  href: '/cases/empresa-x'
}
```

---

### 6. Testimonials

**Localização**: `src/components/Testimonials.tsx`

**Funcionalidades**:
- Carrossel de depoimentos
- Avatares de clientes
- Paginação
- Autoplay

**Props**:
```tsx
interface TestimonialsProps {
  testimonials?: Testimonial[]
  autoplay?: boolean
}

interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
  company: string
  avatar?: string
}
```

---

### 7. CTA (Call To Action)

**Localização**: `src/components/CTA.tsx`

**Funcionalidades**:
- Formulário de contato
- Validação em tempo real
- Dropdown de segmentos
- Integração com backend
- Mensagens de sucesso/erro

**Props**:
```tsx
interface CTAProps {
  title?: string
  subtitle?: string
  segments?: string[]
  onSubmit?: (formData: FormData) => Promise<void>
}

interface FormData {
  name: string
  email: string
  phone: string
  segment: string
  message?: string
}
```

---

### 8. Footer

**Localização**: `src/components/Footer.tsx`

**Funcionalidades**:
- 5 colunas de conteúdo
- Links de redes sociais
- Links legais (Privacidade, LGPD)
- Informações de contato
- Newsletter signup

**Props**:
```tsx
interface FooterProps {
  columns?: FooterColumn[]
  socialLinks?: SocialLink[]
  contact?: ContactInfo
}

interface FooterColumn {
  title: string
  links: Link[]
}

interface SocialLink {
  platform: 'linkedin' | 'facebook' | 'twitter' | 'instagram'
  url: string
}
```

---

### 9. Differentials

**Localização**: `src/components/Differentials.tsx`

**Funcionalidades**:
- 4 cards de diferenciais
- Ícones com badges
- Descrições e destaques
- Hover effects

**Props**:
```tsx
interface DifferentialsProps {
  differentials?: Differential[]
}

interface Differential {
  id: string
  icon: string
  title: string
  description: string
  badge?: string
}
```

**Diferenciais Padrão**:
1. Segurança Certificada (ISO 27001, LGPD)
2. Implementação Rápida (90 dias)
3. Suporte 24/7 (Português)
4. ROI Comprovado (40% redução)

---

### 10. Partners

**Localização**: `src/components/Partners.tsx`

**Funcionalidades**:
- 3 cards de parceiros
- Logos de integrações
- Descrições e CTAs
- Links para mais informações

**Props**:
```tsx
interface PartnersProps {
  partners?: Partner[]
}

interface Partner {
  id: string
  title: string
  description: string
  logos: Logo[]
  cta: {
    text: string
    href: string
  }
}
```

---

### 11. Resources

**Localização**: `src/components/Resources.tsx`

**Funcionalidades**:
- Grid de 4 recursos
- Ícones e títulos
- Descrições
- Links para recursos

**Props**:
```tsx
interface ResourcesProps {
  resources?: Resource[]
}

interface Resource {
  id: string
  icon: string
  title: string
  description: string
  href: string
  type: 'blog' | 'webinar' | 'ebook' | 'help'
}
```

**Recursos Padrão**:
1. Blog - Últimas tendências
2. Webinars - Eventos online
3. E-books - Guias completos
4. Central de Ajuda - Documentação

---

### 12. Numbers

**Localização**: `src/components/Numbers.tsx`

**Funcionalidades**:
- Contadores animados
- 4 métricas principais
- Animação ao scroll
- Formatação de números

**Props**:
```tsx
interface NumbersProps {
  numbers?: NumberMetric[]
}

interface NumberMetric {
  id: string
  value: number | string
  label: string
  suffix?: string
  prefix?: string
}
```

**Métricas Padrão**:
- 15.000+ Empresas atendidas
- 25+ Anos de experiência
- 98% Satisfação dos clientes
- 24/7 Suporte disponível

---

## Componentes Reutilizáveis

### Button

```tsx
import Button from '@/components/ui/Button'

<Button variant="primary" size="lg">
  Clique aqui
</Button>
```

**Variantes**: primary, secondary, tertiary, danger
**Tamanhos**: sm, md, lg

### Card

```tsx
import Card from '@/components/ui/Card'

<Card>
  <Card.Header>Título</Card.Header>
  <Card.Body>Conteúdo</Card.Body>
  <Card.Footer>Rodapé</Card.Footer>
</Card>
```

### Input

```tsx
import Input from '@/components/ui/Input'

<Input 
  type="email"
  placeholder="seu@email.com"
  label="Email"
  error={error}
/>
```

### Badge

```tsx
import Badge from '@/components/ui/Badge'

<Badge variant="primary">Novo</Badge>
```

### Icon

```tsx
import Icon from '@/components/ui/Icon'

<Icon name="heart" size="lg" className="text-primary-500" />
```

---

## Hooks Customizados

### useScroll

Detecta posição de scroll:

```tsx
import { useScroll } from '@/hooks/useScroll'

const { scrollY, isScrolled } = useScroll()
```

### useAnimation

Controla animações:

```tsx
import { useAnimation } from '@/hooks/useAnimation'

const { animate, controls } = useAnimation()
```

### useForm

Gerencia estado de formulário:

```tsx
import { useForm } from '@/hooks/useForm'

const { values, errors, handleChange, handleSubmit } = useForm({
  initialValues: { name: '', email: '' },
  onSubmit: (values) => console.log(values)
})
```

---

## Padrões de Uso

### Responsividade

```tsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  gap-lg
">
  {/* Items */}
</div>
```

### Animações

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Conteúdo
</motion.div>
```

### Condicionalidade

```tsx
{isLoading ? (
  <Skeleton />
) : (
  <Component data={data} />
)}
```

---

**Versão**: 1.0  
**Última Atualização**: Fevereiro 2026
