# StyleSpectre: Live CSS Inspector


![Build Status](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/actions/workflows/ci.yml/badge.svg?style=flat-square)
 
![GitHub License](https://img.shields.io/github/license/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension?style=flat-square&color=blue)
 
![Tech Stack](https://img.shields.io/badge/tech-TypeScript%20%7C%20Vite-blueviolet?style=flat-square)
 
![Linter](https://img.shields.io/badge/lint-Biome-orange?style=flat-square)
 
![GitHub Stars](https://img.shields.io/github/stars/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension?style=flat-square&label=Star)
 [
![Star this Repo](https://img.shields.io/badge/star%20this%20repo-%E2%98%85-yellow?style=flat-square)
](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/stargazers)

**StyleSpectre** is a developer-focused browser extension to instantly inspect, copy, and analyze computed CSS styles, DOM paths, and HTML of any webpage element. It streamlines your entire frontend workflow by providing a powerful, floating devtool right in your viewport.


![StyleSpectre UI Preview](https://raw.githubusercontent.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/main/.github/assets/preview.gif)


---

## Table of Contents

- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🤖 AI Agent Directives](#-ai-agent-directives)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [💻 Development Workflow](#-development-workflow)
  - [Available Scripts](#available-scripts)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Key Features

- **Live Element Inspection:** Hover over any element to see its computed CSS properties in real-time.
- **One-Click Copy:** Instantly copy CSS rules, selectors, or full HTML structures to your clipboard.
- **DOM Path Analysis:** Clearly view and copy the full DOM selector path for precise targeting.
- **Floating UI:** A non-intrusive, draggable interface that stays out of your way.
- **Cross-Browser Support:** Built with the WebExtensions API for compatibility with Chrome, Firefox, and Edge.
- **High Performance:** Optimized with Vite for a lightweight and fast developer experience.

---

## 🏗️ Architecture

The project follows a standard, modular structure for browser extension development, ensuring separation of concerns between different parts of the extension.

sh
. StyleSpectre-Live-CSS-Inspector-Browser-Extension/
├── .github/                # GitHub Actions, issue templates, etc.
├── public/                 # Static assets (icons, manifest.json)
└── src/
    ├── background/         # Background service worker scripts
    ├── content-scripts/    # Scripts injected into web pages
    ├── options/            # Options page components (if any)
    └── popup/              # Main popup UI (React/Svelte/Vue components)
        ├── components/
        └── Popup.tsx


---

## 🤖 AI Agent Directives

<details>
<summary><strong>Expand for AI Development Protocol (2026 Standard)</strong></summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat this `README.md` as the **Single Source of Truth (SSOT)**.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)

**Directives:** This repository, `StyleSpectre-Live-CSS-Inspector-Browser-Extension`, is a high-performance developer tool. Adhere to the following Apex Toolchain.

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript)**
    *   **Stack:** This project leverages **TypeScript 6.x (Strict Mode)** for type safety and maintainability. The build system is powered by **Vite 7** (utilizing the high-speed **Rolldown** bundler). Cross-browser compatibility is managed by **WXT (WebExtensions Cross-browser Toolkit)**.
    *   **Linting & Formatting:** All code is strictly enforced by **Biome** for unparalleled speed in formatting, linting, and import sorting. A pre-commit hook must run `biome check --apply`.
    *   **Testing:** Unit and component tests are written with **Vitest**. End-to-end and browser interaction tests are handled by **Playwright** to ensure robust functionality across Chrome, Firefox, and WebKit.
    *   **Architecture:** The UI components (e.g., the popup inspector) adhere to **Feature-Sliced Design (FSD)** principles for maximum scalability and decoupling. Core logic is isolated from the view layer.

*   **SECONDARY SCENARIO A: DATA / SCRIPTS / AI (Python) - *Not applicable for this project.***
*   **SECONDARY SCENARIO B: SYSTEMS / PERFORMANCE (Rust) - *Not applicable for this project.***

---

## 4. CORE PRINCIPLES & VERIFICATION COMMANDS

*   **SOLID:** Ensure all components and services adhere to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
*   **DRY (Don't Repeat Yourself):** Abstract reusable logic into shared utilities and hooks.
*   **YAGNI (You Ain't Gonna Need It):** Avoid implementing premature optimizations or features not explicitly required.
*   **Verification:** Before any commit, run the following commands locally:
    *   `npm run lint` - Check for code quality and style issues.
    *   `npm run test` - Execute all unit and integration tests.
    *   `npm run build` - Confirm the extension builds without errors.

</details>

---

## 🚀 Getting Started

Follow these instructions to set up the development environment on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or later)
- [pnpm](https://pnpm.io/) (recommended package manager)

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension.git
    cd StyleSpectre-Live-CSS-Inspector-Browser-Extension
    

2.  **Install dependencies:**
    bash
    pnpm install
    

---

## 💻 Development Workflow

1.  **Start the development server:**
    bash
    pnpm run dev
    
    This command starts the Vite development server with Hot Module Replacement (HMR) and generates an unpacked extension in the `dist/` directory.

2.  **Load the unpacked extension in your browser:**
    -   **Chrome/Edge:** Go to `chrome://extensions`, enable "Developer mode", click "Load unpacked", and select the `dist` folder.
    -   **Firefox:** Go to `about:debugging`, click "This Firefox", click "Load Temporary Add-on", and select the `dist/manifest.json` file.

### Available Scripts

| Script          | Description                                               |
| --------------- | --------------------------------------------------------- |
| `pnpm dev`      | Starts the dev server and builds for development.         |
| `pnpm build`    | Builds the extension for production into the `dist` folder. |
| `pnpm package`  | Builds and packages the extension into a `.zip` file.     |
| `pnpm test`     | Runs all unit tests using Vitest.                         |
| `pnpm lint`     | Lints and formats the entire codebase with Biome.         |

---

## 🤝 Contributing

Contributions are welcome! Please read the [**CONTRIBUTING.md**](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/blob/main/.github/CONTRIBUTING.md) for guidelines on how to submit pull requests, report issues, and suggest features.

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [**LICENSE**](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/blob/main/LICENSE) file for details.
