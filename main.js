const app = document.getElementById("app");

app.innerHTML = `
<h1>Server-Side vs Client-Side Rendering</h1>
<h2>Client-Side Rendering (CSR)</h2>
<p>
  This is a sample webpage demonstrating different rendering approaches.
  The content is the same, but the way it is loaded differs between
  server-side and client-side rendering.
</p>

<div class="container">
  <div class="container-child">
    <p>
      Click the button below to navigate to another page or website.
      It allows you to switch between different sites easily.
    </p>
    <a href="/ssr.html" class="button">Click me</a>
  </div>

  <div class="images-wrapper">
    <figure class="image-box">
      <img src="/client (1).png" alt="Server-side rendering" />
      <figcaption>Server-Side Rendering</figcaption>
    </figure>

    <figure class="image-box">
      <img src="/client.png" alt="Client-side rendering" />
      <figcaption>Client-Side Rendering</figcaption>
    </figure>
  </div>
</div>
`;
