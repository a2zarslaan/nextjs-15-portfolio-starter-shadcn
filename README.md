# Next.js 15 Portfolio Starter with shadcn/ui

A modern, professional Next.js 15 portfolio starter template built with React 19, TypeScript 5, Tailwind CSS 4, and shadcn/ui components. This template provides a complete portfolio foundation with interactive components, data management, and professional styling.

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](LICENSE) [![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org) [![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black)](https://nextjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.10-blue)](https://tailwindcss.com/) [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-green)](https://ui.shadcn.com/)

## ✨ Key Features

### 🎨 Modern Design & Performance
- **Professional Layout** with dark/light mode and smooth animations
- **Fully Responsive** mobile-first design optimized for all devices
- **High Performance** with only essential components (16 vs 100+ components)
- **Interactive Elements** including cursor glow effects and animated timelines

### 🚀 Developer Experience
- **Easy Setup** with interactive configuration script
- **Type Safe** with comprehensive TypeScript interfaces
- **Hot Reload** with Turbopack for fast development
- **Code Quality** with ESLint 9, Prettier 3, and automated formatting

### 📊 Complete Portfolio System
- **About Page** with interactive timeline and skills showcase
- **Projects Page** with portfolio project displays
- **Work Page** with professional experience and case studies
- **Blog Page** with content management and categories
- **Fun Page** with personal projects and hobbies
- **Contact Page** with form integration

### 🛠️ Advanced Features
- **Data Management** with centralized configuration system
- **Professional Examples** for different developer roles
- **Bundle Analysis** for performance optimization
- **Docker Support** with Node.js and Bun configurations
- **API Routes** for dynamic content generation

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.3.4** with App Router and React 19.1.0
- **TypeScript 5.8.3** with strict configurations
- **Tailwind CSS 4.1.10** with CSS variables
- **shadcn/ui** components (New York style, streamlined)

### UI & Styling
- **Theme System** - next-themes with meta color management
- **Icons** - Phosphor Icons (primary) + React Icons
- **Animation** - Motion 12.19.2 (Framer Motion)
- **Charts** - Recharts 2.15.4 for data visualization
- **Forms** - React Hook Form with Zod validation

### Developer Tools
- **ESLint 9** with comprehensive rules
- **Prettier 3** with import and Tailwind class sorting
- **Bundle Analyzer** for webpack analysis
- **Docker** support with Alpine images
- **Vercel Analytics** integration

## 🚀 Quick Start

### Prerequisites
- Node.js 20.18.0+ or Bun 1.2.17+
- Git

### 1. Clone and Install
```bash
git clone https://github.com/a2zarslaan/nextjs-15-portfolio-starter-shadcn.git
cd nextjs-15-portfolio-starter-shadcn
npm install
```

### 2. Interactive Setup
```bash
npm run setup
```

The setup script guides you through:
- Personal information (name, title, bio)
- Contact details (email, location, social links)
- Professional experience and skills
- Project portfolio data
- Professional examples for different roles

### 3. Start Development
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with integrated content
│   ├── about/             # About page with interactive timeline
│   ├── contact/           # Contact form and information
│   ├── projects/          # Portfolio projects showcase
│   ├── work/              # Professional experience
│   ├── blog/              # Blog posts and content
│   ├── fun/               # Personal projects and hobbies
│   ├── examples/          # Professional portfolio examples
│   │   ├── frontend-developer/     # Frontend developer template
│   │   ├── fullstack-developer/    # Full-stack developer template
│   │   └── ui-ux-designer/         # UI/UX designer template
│   ├── api/placeholder/   # Dynamic placeholder image generation
│   └── layout.tsx         # Root layout with navigation
├── components/
│   ├── layout/            # Layout components
│   │   ├── container.tsx        # Responsive container
│   │   ├── footer.tsx          # Site footer
│   │   ├── loading-bar.tsx     # Page transition loading
│   │   ├── navigation-bar.tsx   # Main navigation
│   │   ├── theme-switch.tsx    # Theme switching
│   │   └── index.ts           # Barrel exports
│   ├── ui/               # UI components and demos
│   └── cursor-glow.tsx   # Interactive cursor effects
├── lib/                  # Data management and utilities
│   ├── site-data.ts      # Core site configuration
│   ├── work-data.ts      # Professional experience data
│   ├── blog-data.ts      # Blog posts and content
│   ├── fun-data.ts       # Personal projects data
│   ├── ui-constants.ts   # UI text and constants
│   └── placeholder-utils.ts # Placeholder utilities
├── registry/new-york-v4/ui/ # 16 essential UI components
├── hooks/                # Custom React hooks
│   ├── use-site-data.ts       # Site data management
│   ├── use-intersection-observer.ts # Animations
│   └── use-meta-color.ts      # Theme meta colors
├── docs/                 # Documentation
├── examples/             # Professional portfolio templates
└── scripts/              # Setup and build scripts
```

## 🎨 Customization

### Content Configuration
All content is centralized in structured data files:

1. **`src/lib/site-data.ts`** - Core site configuration and personal information
2. **`src/lib/work-data.ts`** - Professional experience, skills, and case studies
3. **`src/lib/blog-data.ts`** - Blog posts, categories, and content management
4. **`src/lib/fun-data.ts`** - Personal projects, hobbies, and goals
5. **`src/lib/ui-constants.ts`** - UI text, descriptions, and call-to-actions

Template files are provided for easy customization:
- **`src/lib/site-data.template.ts`** - Template for site configuration
- **`src/lib/ui-constants.template.ts`** - Template for UI constants

### Theme Configuration
Customize colors in `src/app/globals.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --primary: 240 5.9% 10%;
  /* ... more CSS variables */
}
```

### Adding Components
If you need additional shadcn/ui components:
```bash
npx shadcn@latest add alert-dialog
npx shadcn@latest add calendar
npx shadcn@latest add form
```

### Professional Examples
The template includes complete professional portfolios in `examples/`:
- **Frontend Developer** - React/JavaScript focused
- **Full-stack Developer** - Complete stack development
- **UI/UX Designer** - Design-focused with case studies

Each example includes:
- Customized data configurations
- Professional page layouts
- Role-specific content structure
- Industry-relevant project showcases

## 🧩 Available Components

### Essential Components (16 included)
**Core**: Badge, Button, Card, Input, Label, Separator, Textarea  
**Advanced**: Accordion, Dialog, Dropdown Menu, Progress, Table, Tabs  
**Specialized**: Carousel, Chart, Toast (Sonner)

**Interactive Features**: Cursor glow effects, animated timelines, hover animations, theme switching

**Removed Components** (add back if needed): Alert Dialog, Avatar, Calendar, Checkbox, Command, Form, Hover Card, Navigation Menu, Popover, Select, Sidebar, Skeleton, Slider, Switch, Toggle, Tooltip, and 100+ demo components.

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server with Turbopack |
| `build` | Build for production |
| `start` | Start production server |
| `lint` | Run ESLint |
| `lint:fix` | Fix ESLint issues automatically |
| `format` | Format code with Prettier |
| `setup` | Interactive portfolio setup with examples |

## 🐳 Docker Support

### Node.js Docker
```bash
docker build . -t nextjs-portfolio-starter-shadcn
docker run -p 3000:3000 nextjs-portfolio-starter-shadcn
```

### Bun Docker
```bash
docker build . -t nextjs-portfolio-starter-shadcn -f Dockerfile.bun
docker run -p 3000:3000 nextjs-portfolio-starter-shadcn
```

## 📊 Bundle Analysis

Enable bundle analysis:
```bash
BUNDLE_ANALYZER_ENABLED=true npm run build
```

## 🎯 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The template works with any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Ensure Node.js 20.18.0+ is available

## 🛠️ Configuration Files

- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint configuration
- `prettier.config.js` - Prettier configuration
- `next.config.js` - Next.js configuration with bundle analyzer

## 🔧 ESLint & Prettier Setup

### ESLint Plugins
- `@eslint/js` - Core ESLint rules
- `typescript-eslint` - TypeScript support
- `eslint-plugin-react` - React specific rules
- `@next/eslint-plugin-next` - Next.js specific rules
- `eslint-config-prettier` - Prettier compatibility
- `eslint-plugin-import` - Import/export validation
- `eslint-plugin-promise` - Promise best practices

### Prettier Plugins
- `@trivago/prettier-plugin-sort-imports` - Import sorting
- `prettier-plugin-tailwindcss` - Tailwind class sorting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://radix-ui.com/) - Primitive components
- [Phosphor Icons](https://phosphoricons.com/) - Icon library
- [React Hook Form](https://react-hook-form.com/) - Form library
- [Zod](https://zod.dev/) - Schema validation
- [Recharts](https://recharts.org/) - Chart library

## 📞 Support

If you need help:
- Check the [documentation](docs/)
- Review the [examples](examples/)
- Open an [issue](https://github.com/your-username/nextjs-15-portfolio-starter-shadcn/issues)
- Join [community discussions](https://github.com/your-username/nextjs-15-portfolio-starter-shadcn/discussions)

---

**Happy coding!** 🎉
