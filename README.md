# Counter App

A simple counter application built with React Tailwind and TypeScript that demonstrates state management using props (lifting state up).
Users can increment, decrement, or reset the counter.

## 📷 Screenshot

### Initial Screen
![Initial Screen](./src/public/images/counter-initial.png)

### After Click +
![After Increment](./src/public/images/counter-incremented.png)

### After Click -
![After Decrement](./src/public/images/counter-decremented.png)

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
└── 📁src   // Main source directory
    └── 📁components    // Reusable UI components
        └── 📁shared    // Shared components
            ├── Counter.tsx  
        └── 📁ui    // Shadcn UI components 
            ├── button.tsx  
            ├── card.tsx
            ├── form.tsx
            ├── input.tsx
            ├── label.tsx
            ├── select.tsx
    └── 📁hooks   // Custom hooks
    └── 📁lib   // Library functions
        ├── utils.ts    // Utility functions
    └── 📁pages   // Page components
    └── 📁public    // Public assets
        └── 📁images    // Image assets
            ├── logo.svg
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

## ✨ Feature

- Increment & Decrement counter
- Reset button to clear count
- Counter state lifted to parent component
- Tailwind CSS styling

## 🛠️ Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/)