# projectOne - CSR vs SSR Demo

A demonstration project comparing Client-Side Rendering (CSR) and Server-Side Rendering (SSR) approaches.

## Project Structure

```
rendering/
├── csr.html          # Client-Side Rendering example
├── ssr.html          # Server-Side Rendering example
├── main.js           # JavaScript for dynamic content rendering
├── style.css         # Shared styles
├── client.png        # CSR diagram
├── client (1).png    # SSR diagram
└── README.md

```

## How to Run

### Option 1: Using Python's Built-in HTTP Server

1. Navigate to the rendering directory:

   ```powershell
   cd D:\projectOne\rendering
   ```

2. Start the HTTP server:

   ```powershell
   python -m http.server 8000
   ```

3. Open your browser and visit:
   - **CSR Demo**: `http://localhost:8000/csr.html`
   - **SSR Demo**: `http://localhost:8000/ssr.html`

### Option 2: Using Node.js and http-server

1. Install http-server globally (if not already installed):

   ```powershell
   npm install -g http-server
   ```

2. Navigate to the rendering directory:

   ```powershell
   cd D:\projectOne\rendering
   ```

3. Start the server:

   ```powershell
   http-server -p 8000
   ```

4. Open your browser and visit:
   - **CSR Demo**: `http://localhost:8000/csr.html`
   - **SSR Demo**: `http://localhost:8000/ssr.html`

### Option 3: Using Live Server (VS Code Extension)

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
- Optional: Python 3.x, Node.js, or VS Code with Live Server extension

## Browser Support

Works with all modern browsers that support ES6 JavaScript and CSS.

## Notes

- The project uses vanilla JavaScript with no external dependencies
- All files are served with standard HTTP
- Images must be present for diagrams to display correctly
