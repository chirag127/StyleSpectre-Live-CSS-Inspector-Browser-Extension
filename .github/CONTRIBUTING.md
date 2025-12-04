# Contributing to StyleSpectre-Live-CSS-Inspector-Browser-Extension

Welcome to the StyleSpectre community! We appreciate your interest in contributing to this project. To ensure a smooth and productive development process for everyone, please adhere to the following guidelines.

## 1. Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. Please review the [CONTRIBUTING.md](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/blob/main/.github/CODE_OF_CONDUCT.md) to understand the expected behavior.

## 2. How to Contribute

We welcome contributions in the form of bug reports, feature requests, code enhancements, and documentation improvements.

### 2.1 Reporting Bugs

1.  **Search First:** Before filing a bug report, please search the existing [Issues](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/issues) to see if the issue has already been reported.
2.  **Clear Title:** Provide a concise and descriptive title.
3.  **Detailed Description:** Include the following:
    *   **Environment:** Browser version (e.g., Chrome 120, Firefox 118), Operating System.
    *   **Steps to Reproduce:** A step-by-step guide to reproduce the bug.
    *   **Expected Behavior:** What you expected to happen.
    *   **Actual Behavior:** What actually happened.
    *   **Screenshots/Videos:** If applicable, provide visual aids.
4.  **Use the Bug Report Template:** Please use the provided [Bug Report Issue Template](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/issues/new?assignees=&labels=bug&template=bug_report.md&title=).

### 2.2 Suggesting Enhancements or Features

1.  **Search First:** Check if the feature request has already been suggested.
2.  **Provide a Clear Rationale:** Explain why the feature is needed and how it would benefit users.
3.  **Describe the Feature:** Outline the desired functionality.
4.  **Use the Feature Request Template:** If available, use the [Feature Request Issue Template](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=).

### 2.3 Submitting Code Changes (Pull Requests)

1.  **Fork the Repository:** Create your own fork of the repository.
2.  **Create a New Branch:** Branch off from `main` for your feature or bug fix (e.g., `feature/my-new-feature`, `fix/bug-description`).
3.  **Install Dependencies:** Navigate to the project root and run `npm install`.
4.  **Make Your Changes:** Implement your code changes.
5.  **Lint and Format:** Ensure your code adheres to the project's coding standards. Run `npm run lint` and `npm run format`.
6.  **Test Your Changes:** Write new tests or update existing ones to cover your changes. Run `npm test` to ensure all tests pass.
7.  **Commit Your Changes:** Use clear and concise commit messages. Follow the Conventional Commits specification if possible.
8.  **Push to Your Fork:** Push your branch to your fork on GitHub.
9.  **Open a Pull Request:** Submit a pull request from your branch to the `main` branch of the `chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension` repository.
10. **Describe Your Changes:** Provide a clear description of your pull request, including the problem it solves and the approach taken. Link to any relevant issues.

## 3. Development Setup

Follow these steps to set up the development environment:

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension.git
    cd StyleSpectre-Live-CSS-Inspector-Browser-Extension
    
2.  **Install Node.js:** Ensure you have Node.js (version 18.x or later recommended) and npm installed.
3.  **Install Dependencies:**
    bash
    npm install
    
4.  **Run Development Server (for browser extensions, this typically involves loading the extension in your browser):
    bash
    npm run dev
    
    *Refer to the `package.json` scripts for specific build commands (e.g., `build` for production, `dev` for development).

## 4. Testing

Automated tests are crucial for maintaining code quality. Please ensure your contributions pass all existing tests and include new tests for any new functionality or bug fixes.

*   **Unit/Integration Tests:** Run `npm test`.
*   **Linting/Formatting:** Run `npm run lint` and `npm run format`.

## 5. Architectural Principles

This project adheres to the following architectural principles:

*   **SOLID Principles:** Adherence to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
*   **DRY (Don't Repeat Yourself):** Avoid code duplication.
*   **YAGNI (You Aren't Gonna Need It):** Implement only what is necessary now.
*   **Feature-Sliced Design (FSD):** For frontend/extension projects, aim for clear separation of concerns into features, entities, and presentation layers.

## 6. AI Agent Directives

This project is managed by the Apex Technical Authority. All contributions must align with the directives specified in the `AGENTS.md` file.

**Key Directives Summary:**

*   **Stack:** TypeScript (Strict), Vite 7 (Rolldown), Tauri v2.x (Native), WXT (Extensions).
*   **Lint/Test:** Biome (Speed) + Vitest (Unit) + Playwright (E2E).
*   **Architecture:** Feature-Sliced Design (FSD).
*   **Build Tools:** Vite for bundling and development server.
*   **Frameworks:** WXT (Web Extension Toolkit) for cross-browser compatibility.
*   **State Management:** Signals (Standardized).

Future AI agents will use the `AGENTS.md` file as their primary directive. Ensure your code and documentation are clear and maintainable.

## 7. Questions

If you have any questions about contributing, please open an issue or reach out on [Discussions](https://github.com/chirag127/StyleSpectre-Live-CSS-Inspector-Browser-Extension/discussions).

Thank you for contributing to StyleSpectre!
