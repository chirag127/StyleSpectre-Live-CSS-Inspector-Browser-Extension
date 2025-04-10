
## 🧾 Product Requirements Document (PRD)
**Product Name:** Instant CSS Snagger
**Type:** Browser Extension
**Supported Browsers:** Chrome, Edge, Firefox (Manifest V3)

---

### 1. **Overview**

**Instant CSS Snagger** is a browser extension that allows users to click on any element on a webpage and instantly view and copy its:
- Computed CSS styles
- DOM path (hierarchy)
- HTML structure
- Optional: inline styles or matched CSS rules (source CSS selectors)

This tool helps developers, designers, and QA engineers inspect and extract element styles quickly without needing to open DevTools.

---

### 2. **Goals**

- Let users **click any element** and instantly:
  - See its computed styles
  - Copy its CSS or HTML structure
  - Extract only relevant, non-default styles
- Work seamlessly across Chrome, Edge, and Firefox
- Minimal UI – quick, non-intrusive overlay

---

### 3. **Key Features**

| Feature | Description |
|--------|-------------|
| 🔍 Element Snagger | Click on any element to view its computed styles |
| 📋 Copy to Clipboard | One-click copy of the computed CSS / HTML / DOM path |
| 🧠 Smart Filtering | Ignore default browser styles, include only computed/overridden styles |
| 🧬 DOM Hierarchy Display | Show full selector path (`body > div.main > ul > li`) |
| 🛠️ Minimal UI Overlay | Floating card on click to show details and copy buttons |
| 🖼️ Visual Highlight | Temporary highlight on clicked element |
| ⚙️ Settings (Optional) | Allow toggle for: include inline styles, full DOM path, or HTML structure |

---

### 4. **Non-Goals**

- Not a full DevTools replacement
- No live-editing of styles
- No CSS source map tracing

---

### 5. **User Flow**

1. User clicks the extension icon → "Click any element to extract CSS" appears.
2. User hovers over a webpage element (highlight on hover).
3. User clicks an element:
   - A small overlay appears next to it.
   - Shows:
     - Computed styles (filtered)
     - DOM path
     - Copy buttons
4. User clicks "Copy CSS" or "Copy HTML" to clipboard.
5. Click anywhere else to exit selection mode.

---

### 6. **Technical Requirements**

#### 🔧 Frontend
- Manifest V3 extension
- HTML + CSS + JavaScript
- Popup HTML for toggling selection mode
- Content script to capture clicks and DOM elements

#### 📁 Project Structure
```
extension/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── styles/
│   └── overlay.css
├── icons/
│   └── icon_16.png, icon_48.png, icon_128.png
```

#### 🧩 Browser Support
- Use standard WebExtension APIs to ensure cross-browser compatibility (Chrome, Edge, Firefox)

---

### 7. **Permissions**
```json
"permissions": [
  "activeTab",
  "scripting",
  "clipboardWrite"
],
"host_permissions": [
  "<all_urls>"
]
```

---

### 8. **Edge Cases & Constraints**

- Handle iframes (optional in v1)
- Avoid capturing extension UI or overlays
- Ensure CSS filtering ignores user-agent styles
- Avoid interfering with page interactivity

---

### 9. **Milestones**

| Phase | Tasks |
|-------|-------|
| **MVP (v1)** | Core functionality: element click → CSS / DOM path shown → Copy to clipboard |
| **v1.1** | Filter out inherited or default styles |
| **v1.2** | Add popup UI to toggle extraction mode |
| **v2.0** | Add settings panel, highlight theme customization |

---

### 10. **Success Metrics**

- Time to extract CSS < 2 seconds
- No layout shift or page interference
- >90% success rate in accurately capturing styles
- 5,000+ installs within 3 months (after launch)
