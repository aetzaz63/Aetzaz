# Project Structure Documentation

## Overview
This is a personal portfolio website for Muhammad Aetzaz Ashraf, built with Next.js 13, React, TypeScript, and Tailwind CSS.

---

## Folder Structure

```
Portfolio-Muhammad-Aetzaz-Ashraf/
├── app/                          # Next.js 13 App Directory
├── components/                   # React Components
├── hooks/                        # Custom React Hooks (empty now)
├── lib/                          # Utility Functions
├── public/                       # Static Assets (images)
├── node_modules/                 # Dependencies (auto-generated)
└── Configuration Files
```

---

## Detailed File & Folder Explanation

### `/app` - Next.js Application Directory
The core of the Next.js 13 application using the App Router.

**Files:**
- `page.tsx` - Main homepage component that assembles all sections
- `layout.tsx` - Root layout defining metadata, fonts, and HTML structure
- `globals.css` - Global CSS including Tailwind directives and theme variables

**Purpose:** Defines routes, layouts, and global styles for the application.

---

### `/components` - React Components
All reusable React components organized by function.

#### `/components/layout/`
Layout components that structure the page.

- `Navigation.tsx` - Top navigation bar with:
  - Smooth scroll navigation
  - Mobile hamburger menu
  - Dark/light theme toggle
  - Responsive design
  - Logo/brand name (Aetzaz)

- `Footer.tsx` - Bottom footer with:
  - Social media links (Instagram, GitHub, LinkedIn, Medium)
  - Copyright information
  - Responsive layout

**Purpose:** Provides consistent layout structure across the site.

---

#### `/components/sections/`
Main content sections of the portfolio.

- `Hero.tsx` - Landing section featuring:
  - Profile picture
  - Name and title
  - Brief introduction
  - "Get In Touch" CTA button
  - Fixed sidebar with social links (desktop only)
  - Animated background gradients

- `About.tsx` - About section containing:
  - Professional summary
  - Educational background (FAST-NUCES)
  - Experience duration
  - Specialization areas
  - Location information
  - Download Resume button
  - Hire Me button

- `Experience.tsx` - Work experience section with:
  - Job title and company
  - Employment dates
  - Location (onsite/remote)
  - Key responsibilities and achievements
  - Icons for visual appeal

- `Projects.tsx` - Projects showcase featuring:
  - Project cards with images
  - Filterable tabs (All, n8n Automation, Web Development, DevOps)
  - Project descriptions
  - Technology badges
  - Link to GitHub for more projects

- `Skills.tsx` - Technical skills section showing:
  - Categorized skill sets (Languages, Web Tech, Automation, DevOps)
  - Technology badges
  - Expertise cards (n8n, Full-Stack, AI Integration)
  - Additional expertise section

- `Contact.tsx` - Contact information section with:
  - Address cards
  - Phone numbers
  - Email address
  - Social media links
  - Hover effects and animations

**Purpose:** Each section represents a distinct part of the portfolio story.

---

#### `/components/ui/`
Reusable UI components (based on shadcn/ui).

**Active Components:**
- `button.tsx` - Customizable button component with variants
- `card.tsx` - Card components (Card, CardHeader, CardTitle, CardContent)
- `badge.tsx` - Small badge components for tags/labels
- `label.tsx` - Form label component
- `dialog.tsx` - Modal dialog component
- `toggle.tsx` - Toggle switch component

**Purpose:** Provides consistent, accessible UI primitives.

---

### `/lib` - Utilities
Utility functions and helpers.

- `utils.ts` - Contains the `cn()` function for merging Tailwind classes

**Purpose:** Centralized utility functions.

---

### `/public` - Static Assets
Static files served directly by Next.js.

**Images:**
- `Aetzaz.png` - Profile picture (Hero section)
- `image1.png` - Project placeholder image (currently used for all projects)
- `image2.png` - Additional image (unused, available for future use)
- `image3.png` - Additional image (unused, available for future use)
- `image4.png` - Additional image (unused, available for future use)
- `image5.png` - Additional image (unused, available for future use)

**Purpose:** Images referenced with `/filename.png` in the code are served from this folder.

---

### Configuration Files (Root Level)

- **`package.json`** - Project dependencies and scripts
  - Dependencies: React, Next.js, Tailwind, shadcn/ui components
  - Scripts: `dev`, `build`, `start`, `lint`, `typecheck`

- **`tsconfig.json`** - TypeScript configuration
  - Compiler options
  - Path aliases (`@/*` points to root)
  - Includes/excludes

- **`tailwind.config.ts`** - Tailwind CSS configuration
  - Theme extensions (colors, animations)
  - Dark mode settings
  - Custom design tokens

- **`next.config.js`** - Next.js configuration
  - `output: 'export'` - Enables static site export
  - Image optimization settings
  - ESLint settings

- **`postcss.config.js`** - PostCSS configuration
  - Tailwind CSS plugin
  - Autoprefixer

- **`components.json`** - shadcn/ui configuration
  - Component style settings
  - Path aliases
  - CSS variables settings

- **`.eslintrc.json`** - ESLint configuration
  - Extends Next.js core web vitals rules

- **`.gitignore`** - Git ignore rules
  - node_modules, build files, etc.

- **`README.md`** - Project documentation

---

## How the Application Works

### 1. Entry Point
`app/layout.tsx` sets up the HTML structure and applies global styles.

### 2. Main Page
`app/page.tsx` assembles all section components in order:
```
Navigation → Hero → About → Experience → Projects → Skills → Contact → Footer
```

### 3. Routing
- Uses Next.js 13 App Router
- Single page application with smooth scroll navigation
- No separate routes (all sections on one page)

### 4. Styling
- Tailwind CSS for utility-first styling
- Dark mode support with `dark:` prefixes
- Custom color scheme defined in `globals.css`
- Responsive design with mobile-first approach

### 5. Interactivity
- Smooth scroll navigation between sections
- Theme toggle (dark/light mode)
- Mobile hamburger menu
- Hover effects and animations
- Tab filtering in Projects section

### 6. Static Export
- Configured with `output: 'export'` in `next.config.js`
- Generates static HTML/CSS/JS files
- Can be deployed to any static hosting (Vercel, Netlify, GitHub Pages)

---

## Key Features

1. **Responsive Design** - Works on mobile, tablet, and desktop
2. **Dark Mode** - Toggle between light and dark themes
3. **Smooth Animations** - Hover effects, transitions, and scroll animations
4. **SEO Optimized** - Proper metadata and semantic HTML
5. **Type Safe** - Full TypeScript coverage
6. **Performance** - Static site generation for fast loading
7. **Accessible** - Following web accessibility standards

---

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript types
```

---

## Customization Guide

### Changing Images
1. Replace images in `/public/` folder
2. Update references in component files:
   - Profile: `components/sections/Hero.tsx` (line 53)
   - Projects: `components/sections/Projects.tsx` (image property in project objects)

### Updating Content
- **Personal Info**: Edit `components/sections/About.tsx`
- **Projects**: Edit the `allProjects` array in `components/sections/Projects.tsx`
- **Skills**: Edit skill arrays in `components/sections/Skills.tsx`
- **Experience**: Edit `experiences` array in `components/sections/Experience.tsx`
- **Contact Info**: Edit `components/sections/Contact.tsx`

### Changing Colors
Edit CSS variables in `app/globals.css` under `:root` and `.dark` selectors.

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/layout/Navigation.tsx`

---

## Technology Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

---

## Notes

- All images must be in `/public/` folder
- Image paths in code should start with `/` (e.g., `/Aetzaz.png`)
- The project uses static export, so no server-side features
- Dark mode state is managed in Navigation component
- Smooth scroll is implemented using native browser API
