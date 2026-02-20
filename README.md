# VSL Manufacturing Landing Page

A modern, responsive landing page built with React, Vite, and Tailwind CSS, featuring smooth animations and a component-based architecture compatible with popular UI libraries.

## 🚀 Tech Stack

- **React 19** - Latest React for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **clsx & tailwind-merge** - Dynamic class name management

## 📦 Compatible UI Libraries

This project is structured to work seamlessly with:

- **Aceternity UI** - Modern UI components
- **Motion Primitives** - Animation components
- **React Bits** - Reusable React components

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   └── index.js     # Button, Card, and other base components
│   ├── Header.jsx       # Navigation header with mobile menu
│   ├── Hero.jsx         # Main hero section with CTA
│   ├── Features.jsx     # Features/services grid
│   ├── Footer.jsx       # Footer with links and contact info
│   └── index.js         # Component exports
├── lib/
│   └── utils.js         # Utility functions (cn helper)
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎨 Components Overview

### Header

- Responsive navigation with mobile hamburger menu
- Smooth animations on mount
- Fixed position with backdrop blur effect

### Hero Section

- Eye-catching gradient backgrounds
- Animated statistics counter
- Call-to-action buttons with hover effects
- Responsive typography

### Features Section

- Grid layout with animated cards
- Icon integration with Lucide React
- Hover effects and smooth transitions

### Footer

- Multi-column layout with company information
- Social media icons and contact information
- Responsive design

## 📱 Ready for UI Libraries

The project structure is optimized for integration with:

- Aceternity UI components
- Motion Primitives animations
- React Bits components

All components use the `cn()` utility for easy class name management and are built with composition patterns that work well with these libraries.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
