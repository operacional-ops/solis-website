# 🎨 Design System - SOLIS Website

## Paleta de Cores

### Cores Primárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Primary 500 | #0066CC | rgb(0, 102, 204) | Botões, links, destaques |
| Primary 600 | #0052A3 | rgb(0, 82, 163) | Hover states |
| Primary 700 | #003D7A | rgb(0, 61, 122) | Textos principais |

### Cores Secundárias

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Secondary 500 | #00B8D4 | rgb(0, 184, 212) | Acentos, efeitos |
| Secondary 600 | #00ACC1 | rgb(0, 172, 193) | Hover states |

### Cores de Sucesso

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| Success 500 | #00C853 | rgb(0, 200, 83) | Confirmação, sucesso |
| Success 600 | #43A047 | rgb(67, 160, 71) | Hover states |

### Cores Neutras

| Nome | Hex | RGB | Uso |
|------|-----|-----|-----|
| White | #FFFFFF | rgb(255, 255, 255) | Fundo principal |
| Gray 50 | #F9FAFB | rgb(249, 250, 251) | Backgrounds leves |
| Gray 100 | #F3F4F6 | rgb(243, 244, 246) | Backgrounds |
| Gray 150 | #F5F7FA | rgb(245, 247, 250) | Backgrounds secundários |
| Gray 200 | #E5E7EB | rgb(229, 231, 235) | Borders leves |
| Gray 600 | #4B5563 | rgb(75, 85, 99) | Textos secundários |
| Gray 900 | #111827 | rgb(17, 24, 39) | Textos principais |
| Black | #1A1A1A | rgb(26, 26, 26) | Textos escuros |

## Tipografia

### Fontes

- **Principal**: Inter (Google Fonts)
- **Headings**: Poppins (Google Fonts)

### Tamanhos

| Escala | Desktop | Mobile | Line Height | Weight |
|--------|---------|--------|-------------|--------|
| H1 | 48px | 32px | 56px | 700 |
| H2 | 40px | 28px | 48px | 700 |
| H3 | 32px | 24px | 40px | 700 |
| H4 | 24px | 20px | 32px | 700 |
| Body | 16px | 16px | 24px | 400 |
| Small | 14px | 14px | 20px | 400 |
| Tiny | 12px | 12px | 16px | 400 |

### Pesos

- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700

## Espaçamento

| Escala | Valor |
|--------|-------|
| XS | 8px |
| SM | 16px |
| MD | 24px |
| LG | 32px |
| XL | 48px |
| 2XL | 64px |

## Componentes

### Botões

#### Primário
- **Background**: Primary 500
- **Text**: White
- **Padding**: 12px 32px
- **Border Radius**: 6px
- **Hover**: Primary 600 com elevação

#### Secundário
- **Background**: Transparent
- **Border**: 2px Primary 500
- **Text**: Primary 500
- **Padding**: 12px 32px
- **Border Radius**: 6px
- **Hover**: Primary 50 background

#### Terciário
- **Background**: Transparent
- **Text**: Primary 500
- **Border**: None
- **Underline**: Animado no hover

### Cards

- **Background**: White
- **Border Radius**: 12px
- **Shadow**: 0 4px 12px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Hover**: Elevação aumentada, shadow-lg

### Inputs

- **Background**: White
- **Border**: 1px Gray 200
- **Padding**: 14px 16px
- **Border Radius**: 6px
- **Focus**: Border Primary 500

### Badges

- **Background**: Primary 50
- **Text**: Primary 500
- **Padding**: 8px 12px
- **Border Radius**: 4px

## Sombras

| Nível | CSS |
|-------|-----|
| SM | 0 2px 4px rgba(0, 0, 0, 0.05) |
| MD | 0 4px 12px rgba(0, 0, 0, 0.1) |
| LG | 0 12px 24px rgba(0, 0, 0, 0.15) |
| XL | 0 20px 40px rgba(0, 0, 0, 0.2) |

## Border Radius

| Escala | Valor |
|--------|-------|
| XS | 4px |
| SM | 6px |
| MD | 8px |
| LG | 12px |
| XL | 16px |
| Full | 9999px |

## Animações

### Transições

- **Padrão**: 0.3s ease
- **Rápida**: 0.15s ease
- **Lenta**: 0.8s ease-out

### Easing Functions

- **ease-in-out**: Suave entrada e saída
- **ease-out**: Saída suave
- **ease-in**: Entrada suave
- **linear**: Linear

### Animações Predefinidas

| Nome | Duração | Descrição |
|------|---------|-----------|
| fade-in | 0.8s | Fade in com slide up |
| slide-in | 0.3s | Slide in da esquerda |
| bounce-soft | 2s | Bounce suave infinito |
| scale-up | 0.3s | Scale de 0.9 para 1 |

## Breakpoints

| Dispositivo | Min Width | Max Width |
|-------------|-----------|-----------|
| Mobile | 0 | 480px |
| Tablet | 481px | 768px |
| Desktop | 769px | 1024px |
| Large Desktop | 1025px | ∞ |

## Ícones

Usar biblioteca **Lucide React**:

```tsx
import { Heart, Star, Users } from 'lucide-react'

<Heart size={24} className="text-primary-500" />
```

Ícones recomendados:
- `Heart` - Favoritos
- `Star` - Avaliação
- `Users` - Equipe
- `Zap` - Velocidade
- `Shield` - Segurança
- `TrendingUp` - Crescimento
- `Globe` - Global
- `Lock` - Privacidade

## Gradientes

### Gradiente Hero Principal
```css
background: linear-gradient(135deg, #0066CC 0%, #00B8D4 100%);
```

### Gradiente CTA
```css
background: linear-gradient(90deg, #0066CC 0%, #003D7A 100%);
```

### Gradiente Sucesso
```css
background: linear-gradient(135deg, #00C853 0%, #0066CC 100%);
```

## Acessibilidade

### Contraste de Cores

Mínimo recomendado: 4.5:1 para texto

| Combinação | Contraste | Status |
|------------|-----------|--------|
| Primary 500 + White | 5.2:1 | ✅ |
| Gray 600 + White | 7.8:1 | ✅ |
| Gray 600 + Gray 50 | 4.8:1 | ✅ |

### Focus States

- **Outline**: 2px solid Primary 500
- **Offset**: 2px
- **Color**: Primary 500

## Responsive Design

### Mobile First

Começar com estilos mobile e adicionar media queries para telas maiores.

```tsx
// Mobile
<div className="text-sm p-sm">

// Tablet e acima
<div className="text-sm md:text-base md:p-md">

// Desktop e acima
<div className="text-sm md:text-base lg:text-lg lg:p-lg">
```

### Imagens Responsivas

```tsx
<img 
  src="image.jpg" 
  alt="Descrição"
  className="w-full h-auto object-cover"
  loading="lazy"
/>
```

## Performance

### Otimizações

- Lazy loading em imagens
- Minificação de CSS/JS
- Compressão de assets
- Caching do navegador

### Recomendações

- Usar WebP para imagens
- Comprimir imagens > 100KB
- Limitar animações em mobile
- Usar CSS transforms ao invés de left/top

## Padrões de Layout

### Container

```tsx
<div className="max-w-7xl mx-auto px-md">
  {/* Conteúdo */}
</div>
```

### Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
  {/* Items */}
</div>
```

### Flex

```tsx
<div className="flex items-center justify-between gap-md">
  {/* Items */}
</div>
```

## Componentes Comuns

### Section

```tsx
<section className="py-2xl bg-gray-50">
  <div className="container">
    <h2 className="text-4xl font-heading font-bold mb-lg">
      Título
    </h2>
    {/* Conteúdo */}
  </div>
</section>
```

### Card

```tsx
<div className="bg-white p-lg rounded-lg shadow-md hover:shadow-lg transition-shadow">
  {/* Conteúdo */}
</div>
```

### Button

```tsx
<button className="px-lg py-sm bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
  Ação
</button>
```

---

**Versão**: 1.0  
**Última Atualização**: Fevereiro 2026
