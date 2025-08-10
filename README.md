# Profile Card

A responsive profile card component built using React, Tailwind CSS, and ShadCN UI. It displays a user’s avatar, name, description, and social media links with dynamic icons.

## 📷 Screenshot

### Dekstop Mode
![Dekstop Mode](./docs/images/dekstop-mode.png)

### Mobile Mode
![Mobile Mode](./docs/images/mobile-mode.png)

## 🚀 Getting Started

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To build the project:

```bash
bun run build
```

To run for production:

```bash
bun start
```

This project was created using `bun init` in bun v1.2.19. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

---

## Project Structure

```ts
└── 📁docs // documentation directory
    └── 📁images
            ├── dekstop-mode.png
            ├── mobile-mode.png
└── 📁src   // Main source directory
    └── 📁components    // Reusable UI components
        └── 📁shared    // Shared components
            ├── index.ts
            ├── ProfileCard.tsx
        └── 📁ui    // Shadcn UI components 
            ├── avatar.tsx  
            ├── button.tsx  
            ├── card.tsx
            ├── form.tsx
            ├── index.ts
            ├── input.tsx
            ├── label.tsx
            ├── select.tsx
        └── 📁data  // Data user profile
            ├── index.ts
            ├── profile.ts
        └── 📁interfaces // Interface for data user profile
            ├── index.ts
            ├── profile-card.interface.ts
    └── 📁hooks   // Custom hooks
    └── 📁lib   // Library functions
        ├── utils.ts    // Utility functions
    └── 📁pages   // Page components
    └── 📁public    // Public assets
        └── 📁images    // Image assets
            ├── logo.svg
            ├── profile-picture.jpg
            ├── react.svg
        └── 📁styles    // CSS Styles directory
            ├── globals.css
        ├── index.html    // Main HTML file
    └── 📁routes    // Application routes
    └── 📁stores    // Global state management (Zustand)
    └── 📁types   // TypeScript type definitions
    ├── APITester.tsx   // API testing component
    ├── App.tsx   // Main application component
    ├── index.ts    // Entry point for the application
    ├── main.tsx    // Main entry file for the React application
├── .env    // Environment variables
├── .gitignore    // Git ignore file
├── build.ts    // Build script
├── bun-env.d.ts    // Type definitions for Bun environment
├── bun.lock    // Bun lock file
├── bunfig.toml   // Bun configuration file
├── components.json   // Shadcn Components configuration
├── package.json    // Project configuration
├── README.md   // Project documentation
└── tsconfig.json   // TypeScript configuration
```

## ✨ Features

- 🧩 **Reusable Profile Card Component** — Display a user's avatar, name, bio, and social media links.
- 🎨 **Built with Tailwind CSS** — Easy to customize and responsive out of the box.
- 🧱 **Modular Structure** — Organized using `interfaces/` and `components/ui` for scalability.
- 📱 **Responsive** — Optimized for mobile and desktop views.
- 🛠️ **Type-Safe with TypeScript** — Ensures reliable and predictable code.
- ⚡ **Powered by shadcn/ui** — Uses prebuilt accessible UI components (e.g., Avatar, Button).
- 🔧 **Dynamic Social Icons** — Supports different social platforms via dynamic icons.



## 🛠️ Built With

- [React](https://reactjs.org/) — Frontend library for building UI
- [TypeScript](https://www.typescriptlang.org/) — Strongly typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.dev/) — Prebuilt accessible UI components
- [Lucide Icons](https://lucide.dev/) — Open source icon set
- [bun](https://bun.sh/) — All-in-one JavaScript runtime
