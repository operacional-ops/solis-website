# 🚀 SOLIS - Website Institucional

Website institucional profissional e sofisticado para SOLIS, uma empresa de tecnologia brasileira que atua no mercado de software empresarial, ERP, cloud computing e transformação digital.

## 📋 Visão Geral

Este projeto é um website completo com 15 seções detalhadas, design de alto impacto inspirado em TOTVS e SAP, totalmente responsivo e com todas as interações e animações profissionais.

### ✨ Características Principais

- ✅ **React 18 + TypeScript** - Desenvolvimento moderno e type-safe
- ✅ **Tailwind CSS** - Styling rápido e responsivo
- ✅ **Framer Motion** - Animações suaves e profissionais
- ✅ **Swiper.js** - Carrosséis responsivos
- ✅ **Vite** - Build rápido e otimizado
- ✅ **Mobile-First** - Totalmente responsivo
- ✅ **Acessível** - WCAG compliant
- ✅ **SEO-Friendly** - Otimizado para buscadores

## 🎯 As 15 Seções

| # | Seção | Descrição |
|---|-------|-----------|
| 1 | Header | Navegação fixa com menus dropdown |
| 2 | Hero | Carrossel com 5 slides |
| 3 | Clientes | Logos em carrossel infinito |
| 4 | Vídeo | Player institucional |
| 5 | Soluções | 3 cards principais |
| 6 | Áreas | Tabs com 6 áreas funcionais |
| 7 | Segmentos | Grid de 8 segmentos |
| 8 | Diferenciais | 4 cards com destaques |
| 9 | Cases | Carrossel de 3 cases |
| 10 | Parceiros | 3 cards de integrações |
| 11 | Recursos | Grid de 4 recursos |
| 12 | Depoimentos | Carrossel com 3 testimonials |
| 13 | CTA | Formulário de contato |
| 14 | Números | Contadores animados |
| 15 | Footer | 5 colunas com links |

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 16+
- npm ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/solis-website.git
cd solis-website

# Instale dependências
npm install
# ou
pnpm install
```

### Desenvolvimento

```bash
# Inicie servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:3000
```

### Build

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
solis-lovable/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Solutions.tsx
│   │   ├── Segments.tsx
│   │   ├── Cases.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Footer.tsx
│   │   └── ui/              # Componentes reutilizáveis
│   ├── pages/               # Páginas
│   ├── styles/              # Estilos globais
│   ├── hooks/               # Custom hooks
│   ├── utils/               # Utilitários
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Assets estáticos
├── docs/                    # Documentação
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Paleta de Cores

```
Primary:    #0066CC (Azul)
Secondary:  #00B8D4 (Ciano)
Success:    #00C853 (Verde)
Gray:       #F5F7FA - #111827
```

### Tipografia

- **Headings**: Poppins
- **Body**: Inter

### Espaçamento

- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

## 📚 Documentação

- **[LOVABLE_GUIDE.md](./LOVABLE_GUIDE.md)** - Guia específico para Lovable
- **[docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)** - Sistema de design completo
- **[docs/COMPONENTS.md](./docs/COMPONENTS.md)** - Documentação de componentes

## 🔧 Configuração

### Variáveis de Ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite com suas configurações:

```
VITE_API_URL=https://seu-backend.com/api
VITE_GOOGLE_ANALYTICS_ID=seu-id
```

## 🚀 Deploy

### Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify

1. Conecte repositório GitHub
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

### Servidor Próprio

```bash
npm run build
# Copie pasta 'dist' para seu servidor
```

## 📱 Responsividade

Breakpoints:
- Mobile: até 480px
- Tablet: 481px - 768px
- Desktop: 769px - 1024px
- Large: 1025px+

## ⚡ Performance

### Otimizações

- ✅ Code splitting automático
- ✅ Lazy loading de componentes
- ✅ Image optimization
- ✅ CSS purging
- ✅ Minificação automática

### Recomendações

- Use WebP para imagens
- Comprima imagens > 100KB
- Implemente caching
- Use CDN para assets

## 🧪 Testes

```bash
# Testar responsividade
npm run dev
# Abra DevTools (F12) e teste em diferentes tamanhos

# Testar performance
npm run build
npm run preview
# Use Lighthouse no DevTools
```

## 🐛 Troubleshooting

### Problema: Componentes não renderizam

**Solução:**
1. Verifique imports
2. Abra console (F12) para erros
3. Limpe cache: `npm cache clean --force`

### Problema: Estilos não aplicam

**Solução:**
1. Verifique classe Tailwind
2. Verifique `tailwind.config.ts`
3. Reinicie servidor

### Problema: Build falha

**Solução:**
1. Delete `node_modules` e `dist`
2. Execute `npm install` novamente
3. Execute `npm run build`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é fornecido como está. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## 📞 Suporte

Para dúvidas ou problemas:

1. Consulte a [documentação](./docs)
2. Abra uma [issue](https://github.com/seu-usuario/solis-website/issues)
3. Verifique o [Lovable Guide](./LOVABLE_GUIDE.md)

## 🎓 Recursos Úteis

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

## 📊 Checklist de Desenvolvimento

- [ ] Clonar repositório
- [ ] Instalar dependências
- [ ] Configurar variáveis de ambiente
- [ ] Iniciar servidor de desenvolvimento
- [ ] Desenvolver componentes
- [ ] Testar responsividade
- [ ] Testar animações
- [ ] Integrar com backend
- [ ] Otimizar performance
- [ ] Build para produção
- [ ] Deploy

## 🎯 Próximos Passos

1. **Customizar Conteúdo** - Edite textos e imagens
2. **Integrar Backend** - Conecte com sua API
3. **Analytics** - Configure Google Analytics
4. **SEO** - Otimize meta tags
5. **Deploy** - Faça deploy em produção

## 📈 Métricas Esperadas

- **Taxa de Conversão**: 2-5%
- **Tempo de Permanência**: 2-3 minutos
- **Taxa de Rejeição**: < 40%
- **Velocidade**: < 2 segundos
- **Mobile Traffic**: 50-70%

---

**Versão**: 1.0  
**Última Atualização**: Fevereiro 2026  
**Status**: ✅ Pronto para Desenvolvimento

Desenvolvido com ❤️ para SOLIS Tecnologia
