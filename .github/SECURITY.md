# Security Policy for StyleSpectre-Live-CSS-Inspector-Browser-Extension

This document outlines the security policy for the `StyleSpectre-Live-CSS-Inspector-Browser-Extension`, emphasizing our commitment to protecting users and maintaining a high standard of code integrity, consistent with the **Apex Technical Authority** mandate.

## 1. Commitment to Security

As a project maintained under the **Apex Technical Authority** framework, we adhere to **Zero-Defect, High-Velocity, Future-Proof** principles. Security is treated as a first-class citizen, integrated throughout the development lifecycle using **2026 industry best practices**.

## 2. Supported Versions

We actively support the current stable version of the extension and the two preceding major versions. Security patches for older versions are addressed on a best-effort basis, but immediate fixes will prioritize the latest release.

| Version | Status | Supported Until |
| :--- | :--- | :--- |
| Latest Stable | Maintained | Ongoing |
| N-1 | Maintenance | Ongoing |

## 3. Reporting a Security Vulnerability

We encourage responsible disclosure of security vulnerabilities. Please adhere to the following procedure to ensure prompt and secure resolution.

### 3.1. Confidential Disclosure

**DO NOT** report security vulnerabilities publicly (e.g., in GitHub Issues or Discussions). To ensure maximum security and adherence to the **Apex Philosophy**, all reports must be submitted privately via email.

**Security Contact Email:** `security@chirag127.dev` (Placeholder for demonstration - use a real, secure address in production).

### 3.2. Required Information

When reporting, please include the following details to expedite triage and remediation:

1.  **Project Affected:** `StyleSpectre-Live-CSS-Inspector-Browser-Extension`
2.  **Vulnerability Type:** (e.g., XSS, CSP Bypass, Manifest Misconfiguration, Supply Chain Risk).
3.  **Proof of Concept (PoC):** Detailed, step-by-step instructions to reproduce the issue.
4.  **Affected Component(s):** Specific files, functions, or browser APIs involved.
5.  **Severity Assessment:** Your assessment of the potential impact (Low, Medium, High, Critical).

## 4. Our Remediation Process

Upon receiving a confidential report, our process adheres to the following strict timeline:

1.  **Triage (Within 24 Hours):** The security team acknowledges receipt and verifies the vulnerability.
2.  **Fix Development (T+7 Days Max):** A dedicated patch branch is created. All development follows the **Modular Monolith/FSD** principles to isolate the fix and prevent regression.
3.  **Testing & Verification (T+3 Days):** The fix is rigorously tested using **Vitest** (Unit) and **Playwright** (E2E) within the `.github/workflows/ci.yml` pipeline, ensuring zero defect tolerance.
4.  **Disclosure & Release:** Once verified, the patch is merged, and a new version is released. Public disclosure follows the patch release, adhering to responsible disclosure timelines.

## 5. Security Best Practices (Extension Stack)

This repository enforces the following standards to minimize attack surface:

*   **TypeScript Strictness:** All code is written in TypeScript with the highest level of strictness enabled to catch type errors pre-compile.
*   **Dependency Auditing:** Dependencies are scanned regularly via the CI pipeline using the latest auditing tools compatible with the **Vite 7 / TypeScript 6.x** stack.
*   **Content Security Policy (CSP):** The extension's manifest is configured with the strictest feasible CSP to mitigate injection attacks.
*   **DOM Manipulation:** All dynamic content insertion is sanitized using modern browser APIs (e.g., `textContent` over `innerHTML` where possible) to prevent Cross-Site Scripting (XSS).

For general guidelines on contributing securely, please refer to the **`.github/CONTRIBUTING.md`** file.

***

*This security policy is governed by the Apex Directives: Zero-Defect, High-Velocity, Future-Proof.*