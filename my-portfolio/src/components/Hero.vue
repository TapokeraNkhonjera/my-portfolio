<template>
    <section class="hero">
      <div class="hero-content">
        <p class="demo-highlight">Featured Demo Project</p>
        <h1 class="demo-title">Hearth Studios Website</h1>
        <p class="demo-description">
          A modern, earthy interior design website crafted with Vue, Vite, Tailwind, and PostCSS — designed to be clean, responsive, and emotionally resonant. Explore the interface, layout, and interactions live in the demo version.
        </p>
        <a href="https://your-demo-link.com" target="_blank" class="demo-btn">View Live Demo</a>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 1.5rem;
    background-color: #ffffff;
    color: #0f0f0f;
  }
  
  .hero-content {
    max-width: 720px;
  }
  
  .demo-highlight {
    color: #f5332c;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  
  .demo-title {
    font-size: 2rem;
    font-weight: bold;
    color: #0f0f0f;
    margin-bottom: 1rem;
  }
  
  .demo-description {
    font-size: 1.125rem;
    color: #0f0f0f;
    margin-bottom: 2rem;
  }
  
  .demo-btn {
    display: inline-block;
    background-color: #f5332c;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    font-weight: 600;
    transition: background 0.3s ease;
    text-decoration: none;
  }
  
  .demo-btn:hover {
    background-color: #000000;
  }
  </style>
  