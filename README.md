<div align="center">

# Dev Stack Builder

**Build your perfect development environment in seconds.**

A modern tool that helps developers quickly configure, preview, and export their ideal technology stack — so you can skip the boilerplate and start building.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui)](https://daisyui.com)
[![Vite](https://img.shields.io/badge/Vite_Plus-0.3-646CFF?logo=vite)](https://vitejs.dev)

</div>

---

## Overview

Dev Stack Builder is a React-based application that lets you visually assemble your development stack. Pick your tools, see the result, and export a ready-to-go project — all from a clean, intuitive interface.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-based UI with the latest concurrent features |
| **TypeScript 6** | Full type safety across the entire codebase |
| **Vite Plus** | Lightning-fast dev server and optimized builds |
| **Tailwind CSS 4** | Utility-first styling for rapid UI development |
| **DaisyUI 5** | Beautiful, accessible component library for Tailwind |
| **react-toastify** | Toast notifications for user feedback |
| **oxlint** | Fast linting with automatic pre-commit hooks |

## Features

- **Visual Stack Builder** — Select from curated lists of frameworks, tools, and libraries to assemble your ideal dev environment
- **Real-time Preview** — See your configured stack update instantly as you add or remove technologies
- **One-Click Export** — Generate a fully scaffolded project with your chosen stack, ready to clone and start coding

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

# Preview the production build
pnpm preview
```

---

## React Concepts

### What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript that lets you write HTML-like markup directly inside your JavaScript files. Instead of calling `createElement()` manually for every element, JSX gives you a readable way to describe what your UI should look like. React uses JSX because it makes component code much easier to write, understand, and maintain — you can see both your logic and your structure in one place.

### What is the difference between props and state?

**Props** are read-only inputs passed from a parent component to a child component. They're like function arguments — the child receives them but shouldn't modify them. **State** is internal data owned and managed by the component itself. When state changes, React re-renders the component to reflect the new data. In short: props come from outside, state lives inside.

### What does the useState hook do, and where did you use it in this project?

`useState` lets a functional component hold and update its own data between renders. You call it with an initial value, and it returns the current value plus a setter function to update it. In this project, `useState` is used to manage the list of selected stack technologies, toggling items on and off, and tracking which category the user is currently browsing.

### What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs a side effect after a component renders — things like fetching data, subscribing to events, or manipulating the DOM. In this project, `useEffect` is needed to load the JSON data file that contains all available technologies and categories. Since loading that data is an asynchronous operation that shouldn't block rendering, it runs after the initial render and updates the state once the data arrives.

### Why does every item in a `.map()` list need a unique key prop?

When React renders a list using `.map()`, it needs a way to track each item individually across re-renders. The `key` prop gives React a unique identifier for every element so it can efficiently update, reorder, or remove items without re-rendering the entire list. Without keys, React falls back to index-based tracking, which causes bugs when items are added, removed, or reordered — and React will warn you about it in the console.

### What is conditional rendering? Show one place you used it.

Conditional rendering means showing or hiding UI elements based on a condition in your code. React lets you use JavaScript expressions like ternaries (`condition ? <A /> : <B />`) or logical `&&` to decide what renders. In this project, when the user hasn't selected any technologies yet, a message like *"Your stack is empty — start adding technologies!"* is displayed. Once items are selected, the stack list renders instead.

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Parent to child:** Pass data as props. The parent includes attributes on the child component's JSX tag, and the child receives them as function parameters.

```tsx
// Parent
<StackCard name="React" onSelect={handleSelect} />

// Child
function StackCard({ name, onSelect }) { ... }
```

**Child to parent:** The child calls a callback function that the parent passed down as a prop. For example, when a user clicks "Add" on a technology card, the child calls `onSelect(tech)`, which triggers the parent's handler to update its state. This pattern keeps data flowing predictably — down through props, up through callbacks.

---

<div align="center">

**Built with care using React, TypeScript, and Tailwind CSS.**

</div>
