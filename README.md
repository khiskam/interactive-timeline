# Interactive Timeline

An interactive, animated timeline component built with React, GSAP, and Rsbuild. It features a circular timeline wheel and a synchronized content carousel.

## Features

- **Interactive Timeline Wheel**: A circular navigation wheel to select different time periods.
- **Synchronized Carousel**: Content slides that update based on the selected timeline period, powered by [Splide.js](https://splidejs.com/).
- **Smooth Animations**: High-performance animations using [GSAP](https://gsap.com/).
- **Fast Builds**: Powered by [Rsbuild](https://rsbuild.dev/) for lightning-fast development and production builds.
- **Robust Testing**: Unit testing with `@testing-library/react` and E2E testing with Playwright.
- **Styling**: CSS Modules with Stylelint for scoped, maintainable styles.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Rsbuild
- **Language**: TypeScript
- **Animations**: GSAP
- **Carousel**: Splide
- **Code Quality**: ESLint, Stylelint, Knip

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (recommended)

### Installation

1. Clone the repository:

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```
   pnpm run dev
   ```
   The application will open automatically in your default browser.

## Available Scripts

- `pnpm run dev` - Start the development server with auto-reload.
- `pnpm build` - Build the application for production.
- `pnpm preview` - Preview the production build locally.
- `pnpm lint` - Run ESLint to check code quality.
- `pnpm stylelint` - Run Stylelint for CSS files.
- `pnpm type:check` - Run TypeScript type checking.
- `pnpm knip` - Find unused files, dependencies, and exports.
- `pnpm test:unit` - Run unit tests.
- `pnpm test:e2e` - Run end-to-end tests with Playwright.

