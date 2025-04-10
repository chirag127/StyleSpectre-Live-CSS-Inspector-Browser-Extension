# Instant CSS Snagger

A browser extension that allows you to click on any element on a webpage and instantly view and copy its:

-   Computed CSS styles
-   DOM path (hierarchy)
-   HTML structure

## Features

-   🔍 **Element Snagger**: Click on any element to view its computed styles
-   📋 **Copy to Clipboard**: One-click copy of the computed CSS, HTML, or DOM path
-   🧠 **Smart Filtering**: Ignore default browser styles, include only computed/overridden styles
-   🧬 **DOM Hierarchy Display**: Show full selector path (`body > div.main > ul > li`)
-   🛠️ **Minimal UI Overlay**: Floating card on click to show details and copy buttons
-   🖼️ **Visual Highlight**: Temporary highlight on clicked element

## Installation

### Chrome / Edge

1. Download the latest release from the [Releases](https://github.com/chirag127/instant-css-snagger/releases) page
2. Unzip the file
3. Open Chrome/Edge and go to `chrome://extensions` or `edge://extensions`
4. Enable "Developer mode"
5. Click "Load unpacked" and select the unzipped folder

### Firefox

1. Download the latest release from the [Releases](https://github.com/chirag127/instant-css-snagger/releases) page
2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on" and select the zip file

## Usage

1. Click the extension icon in your browser toolbar
2. Toggle the switch to activate element selection mode
3. Hover over elements on the page to see them highlighted
4. Click on an element to view its:
    - Computed CSS styles (filtered to show only relevant styles)
    - DOM path
    - HTML structure
5. Use the copy buttons to copy the information to your clipboard
6. Click elsewhere or press ESC to exit selection mode

## Development

### Prerequisites

-   Node.js and npm

### Setup

1. Clone the repository

    ```
    git clone https://github.com/chirag127/instant-css-snagger.git
    cd instant-css-snagger
    ```

2. Install dependencies
    ```
    npm install
    ```

### Building

```
npm run build
```

This will create a `dist` folder with the extension files.

### Packaging

```
npm run zip
```

This will create a zip file of the extension for distribution.

## Browser Compatibility

-   ✅ Chrome (Manifest V3)
-   ✅ Edge (Manifest V3)
-   ✅ Firefox (Manifest V3)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
