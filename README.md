# Falak Sher - Portfolio

A modern, responsive portfolio website showcasing my work as a Full-Stack Web & Mobile App Developer.

## 🚀 Live Demo

[View Live Portfolio](https://falak-portfolio.vercel.app)

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Shadcn/ui
- **Icons**: Lucide React, React Icons
- **Deployment**: Vercel

## 📱 Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Modern UI**: Clean, professional design with smooth transitions
- **Project Showcase**: Interactive project cards with live demos
- **Skills Section**: Comprehensive tech stack display
- **Contact Integration**: Direct email and WhatsApp contact
- **SEO Optimized**: Meta tags and Open Graph support

## 🚀 Deployment on Vercel

This project is configured for easy deployment on Vercel:

### Automatic Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite framework
4. Deploy with zero configuration

### Manual Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Build Configuration
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **Node Version**: 18.x (recommended)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   └── Skills.tsx      # Skills section
├── assets/             # Images and static files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## 🎨 Customization

### Adding New Projects
1. Add project images to `src/assets/`
2. Update the `mobileProjects` or `webProjects` arrays in `src/components/Projects.tsx`
3. Include project details: title, description, image, tech stack

### Updating Personal Information
- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Contact Info**: `src/components/Contact.tsx`

### Styling
- **Global Styles**: `src/index.css`
- **Component Styles**: Tailwind classes in component files
- **Theme**: Configure in `tailwind.config.ts`

## 🔧 Development

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📧 Contact

- **Email**: fa03014521927@gmail.com
- **GitHub**: [falak-sher-sher](https://github.com/falak-sher-sher)
- **WhatsApp**: +92 301 4521927
- **Location**: Lahore, Pakistan

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Falak Sher