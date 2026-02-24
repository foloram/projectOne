# projectOne - CSR vs SSR Demo

A demonstration project comparing Client-Side Rendering (CSR) and Server-Side Rendering (SSR) approaches.

## Project Structure

```

├── csr.html          # Client-Side Rendering example
├── ssr.html          # Server-Side Rendering example
├── main.js           # JavaScript for dynamic content rendering
├── style.css         # Shared styles
├── client.png        # CSR diagram
├── client (1).png    # SSR diagram
└── README.md

```

## How to Run

### Option 1: Using Node.js and http-server

1. Install http-server globally (if not already installed):

   ```powershell
   npm install -g http-server
   ```

2. Start the server:

   ```powershell
   http-server -p 5500
   ```

3. Open your browser and visit:
   - **CSR Demo**: `http://127.0.0.1:5500/rendering/csr.html`
   - **SSR Demo**: `http://127.0.0.1:5500/rendering/ssr.html`

### Option 2: Using Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `csr.html` or `ssr.html` in the rendering folder
3. Select "Open with Live Server"
4. Your default browser will open automatically

## Features

- **Client-Side Rendering (CSR)**: Content is rendered in the browser using JavaScript
- **Server-Side Rendering (SSR)**: Content is pre-rendered on the server
- Visual comparison diagrams showing the differences between CSR and SSR
- Interactive navigation between rendering examples

## Requirements

- A web browser (Chrome, Firefox, Safari, Edge, etc.)
- Node.js with http-server, or VS Code with Live Server extension

## Browser Support

Works with all modern browsers that support ES6 JavaScript and CSS.

## Notes

- The project uses vanilla JavaScript with no external dependencies
- All files are served with standard HTTP
- Images must be present for diagrams to display correctly

## Repository

https://github.com/foloram/projectOne

## Analysis

This project compares Server-Side Rendering (SSR) and Client-Side Rendering (CSR) by implementing the same webpage using two different rendering approaches.

## Performance

In the SSR version, all main content is included in the initial HTML. This allows the browser to display content immediately, resulting in a faster time to first visible content and better perceived loading speed.

In the CSR version, the HTML initially contains only an empty container. The browser must load and execute JavaScript before rendering the content. This delays the first visible content and may make the page feel slower.

CSR also fully depends on JavaScript execution. If JavaScript is slow, blocked, or fails, the content will not appear.

## SEO

In SSR, all important content is available in the initial HTML. Search engines can easily crawl and index the page because the content is directly accessible.

In CSR, the initial HTML does not contain the main content. Search engines must execute JavaScript to access it, which may reduce SEO effectiveness or delay indexing.

Metadata such as the page title is immediately visible in SSR, while CSR may require additional handling to ensure proper metadata visibility.

## User Experience

SSR provides immediate visible content when the page loads, improving the overall user experience.

CSR may show a blank screen until JavaScript finishes rendering the content.

SSR works even if JavaScript is disabled or fails, while CSR completely depends on JavaScript. If JavaScript fails or loads slowly, the page may appear empty or broken.
