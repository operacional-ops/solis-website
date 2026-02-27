# 🎨 Guia de Desenvolvimento no Lovable - SOLIS Website

## 📋 Visão Geral

Este guia fornece instruções específicas para desenvolver o website SOLIS no Lovable (Cursor Pro). O projeto está estruturado com React + TypeScript + Tailwind CSS para máxima produtividade.

## 🚀 Início Rápido

### 1. Importar Projeto no Lovable

1. Abra [Lovable.dev](https://lovable.dev)
2. Clique em "New Project"
3. Selecione "Import from GitHub"
4. Cole a URL do repositório: `https://github.com/seu-usuario/solis-website`
5. Clique em "Import"

### 2. Estrutura do Projeto

```
solis-lovable/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Solutions.tsx
│   │   ├── Segments.tsx
│   │   ├── Cases.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── pages/               # Páginas principais
│   │   ├── Home.tsx
│   │   ├── Solutions.tsx
│   │   ├── Cases.tsx
│   │   └── Contact.tsx
│   ├── styles/              # Estilos globais
│   │   └── globals.css
│   ├── hooks/               # Custom React hooks
│   │   ├── useScroll.ts
│   │   ├── useAnimation.ts
│   │   └── useForm.ts
│   ├── utils/               # Funções utilitárias
│   │   ├── constants.ts
│   │   ├── api.ts
│   │   └── helpers.ts
│   ├── App.tsx              # Componente raiz
│   └── main.tsx             # Ponto de entrada
├── public/                  # Assets estáticos
│   ├── images/
│   ├── icons/
│   └── fonts/
├── docs/                    # Documentação
│   ├── DESIGN_SYSTEM.md
│   ├── COMPONENTS.md
│   ├── API_INTEGRATION.md
│   └── DEPLOYMENT.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── postcss.config.js
```

### 3. Instalar Dependências

No Lovable, execute no terminal:

```bash
npm install
```

Ou se preferir usar pnpm:

```bash
pnpm install
```

### 4. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🎨 Arquitetura de Componentes

### Componentes Principais

#### Header.tsx
- Navegação fixa
- Menu dropdown
- Botões de ação
- Menu mobile responsivo

**Uso:**
```tsx
import Header from '@/components/Header'

export default function App() {
  return <Header />
}
```

#### Hero.tsx
- Carrossel com 5 slides
- Indicadores de navegação
- Scroll down animado
- Gradientes dinâmicos

**Props:**
```tsx
interface HeroProps {
  slides?: SlideData[]
  autoplay?: boolean
  duration?: number
}
```

#### Solutions.tsx
- Grid de 3 soluções principais
- Cards com ícones
- Tabs para áreas funcionais
- Animações ao scroll

#### Segments.tsx
- Grid de 8 segmentos
- Hover effects
- Ícones emoji
- Links para páginas específicas

#### Cases.tsx
- Carrossel de cases
- 3 cases visíveis
- Navegação por setas
- Informações de segmento

#### Testimonials.tsx
- Carrossel de depoimentos
- Avatares de clientes
- Paginação
- Autoplay

#### CTA.tsx
- Formulário de contato
- Validação em tempo real
- Integração com backend
- Mensagens de sucesso/erro

#### Footer.tsx
- 5 colunas de conteúdo
- Links de redes sociais
- Links legais
- Informações de contato

## 🎯 Desenvolvimento de Componentes

### Criar Novo Componente

1. Crie arquivo em `src/components/NomeComponente.tsx`
2. Use template abaixo:

```tsx
import React from 'react'
import { motion } from 'framer-motion'

interface NomeComponenteProps {
  title?: string
  // ... outras props
}

export default function NomeComponente({
  title = 'Padrão',
}: NomeComponenteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <h2 className="text-4xl font-bold text-gray-900">
        {title}
      </h2>
    </motion.div>
  )
}
```

### Usar Tailwind CSS

```tsx
<div className="flex items-center justify-between gap-lg bg-gray-50 p-xl rounded-lg shadow-md hover:shadow-lg transition-shadow">
  <h3 className="text-2xl font-heading font-bold text-primary-500">
    Título
  </h3>
  <button className="px-lg py-sm bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
    Ação
  </button>
</div>
```

### Usar Animações com Framer Motion

```tsx
import { motion } from 'framer-motion'

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      Conteúdo animado
    </motion.div>
  )
}
```

## 📱 Responsividade

Use breakpoints do Tailwind:

```tsx
<div className="
  grid 
  grid-cols-1 
  md:grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4
  gap-lg
">
  {/* Cards */}
</div>
```

Breakpoints disponíveis:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 Sistema de Design

### Cores

Use as cores definidas em `tailwind.config.ts`:

```tsx
// Primária
className="text-primary-500 bg-primary-50 border-primary-200"

// Secundária
className="text-secondary-500 bg-secondary-50"

// Sucesso
className="text-success-500 bg-success-50"

// Cinza
className="text-gray-600 bg-gray-100"
```

### Tipografia

```tsx
// Headings
<h1 className="text-5xl font-heading font-bold">H1</h1>
<h2 className="text-4xl font-heading font-bold">H2</h2>
<h3 className="text-3xl font-heading font-bold">H3</h3>

// Body
<p className="text-base text-gray-600">Parágrafo</p>
<span className="text-sm text-gray-500">Pequeno</span>
```

### Espaçamento

Use as variáveis definidas:
- `xs`: 8px
- `sm`: 16px
- `md`: 24px
- `lg`: 32px
- `xl`: 48px
- `2xl`: 64px

```tsx
<div className="p-lg m-md gap-xl">
  {/* Conteúdo */}
</div>
```

## 🔌 Integração com Backend

### Configurar API

1. Edite `.env.local`:
```
VITE_API_URL=https://seu-backend.com/api
```

2. Use em componentes:
```tsx
import { apiClient } from '@/utils/api'

async function fetchCases() {
  const data = await apiClient.get('/cases')
  return data
}
```

### Formulário de Contato

```tsx
async function handleSubmit(formData) {
  try {
    const response = await apiClient.post('/contact', formData)
    showSuccessMessage('Obrigado! Em breve entraremos em contato.')
  } catch (error) {
    showErrorMessage('Erro ao enviar formulário.')
  }
}
```

## 📊 Animações e Interações

### Scroll Animations

Use a biblioteca AOS integrada:

```tsx
import AOS from 'aos'

useEffect(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  })
}, [])

// No JSX:
<div data-aos="fade-up" data-aos-delay="100">
  Conteúdo animado
</div>
```

### Carrosséis com Swiper

```tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      loop
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
    </Swiper>
  )
}
```

## 🧪 Testar Componentes

### Testar Responsividade

No DevTools do navegador:
1. Pressione `F12`
2. Clique no ícone de dispositivo
3. Selecione diferentes tamanhos de tela

### Testar Animações

1. Abra DevTools
2. Vá para Performance
3. Registre e analise

## 🚀 Build e Deploy

### Build para Produção

```bash
npm run build
```

Arquivos gerados em `dist/`

### Deploy no Vercel

1. Conecte repositório GitHub ao Vercel
2. Configure variáveis de ambiente
3. Deploy automático em cada push

### Deploy no Netlify

1. Conecte repositório GitHub
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

## 📚 Recursos Úteis

- [Lovable Documentation](https://lovable.dev/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper.js](https://swiperjs.com/)
- [Lucide Icons](https://lucide.dev)

## 🐛 Troubleshooting

### Problema: Componentes não renderizam

**Solução:**
1. Verifique imports
2. Verifique console para erros
3. Limpe cache: `npm cache clean --force`

### Problema: Estilos não aplicam

**Solução:**
1. Verifique classe Tailwind
2. Verifique `tailwind.config.ts`
3. Reinicie servidor de dev

### Problema: Carrosséis lentos

**Solução:**
1. Reduza duração das animações
2. Use `lazy` loading em imagens
3. Otimize imagens

## 📝 Checklist de Desenvolvimento

- [ ] Importar projeto no Lovable
- [ ] Instalar dependências
- [ ] Configurar variáveis de ambiente
- [ ] Desenvolver componentes
- [ ] Testar responsividade
- [ ] Testar animações
- [ ] Integrar com backend
- [ ] Testar formulários
- [ ] Otimizar performance
- [ ] Build para produção
- [ ] Deploy

## 🎓 Próximos Passos

1. **Customizar Conteúdo**: Edite textos e imagens
2. **Integrar Backend**: Conecte com API
3. **Analytics**: Configure Google Analytics
4. **SEO**: Otimize meta tags
5. **Deploy**: Faça deploy em produção

---

**Versão**: 1.0  
**Última Atualização**: Fevereiro 2026  
**Status**: Pronto para Desenvolvimento no Lovable
