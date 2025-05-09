<template>
    <section class="header">
      <div class="container">
        <p class="label">About Me</p>
        <h1>
          Hi, I’m Tapokera Nkhonjera — a creative at heart and a developer by craft.
        </h1>
  
        <!-- Introductory description -->
        <p class="description">
          I specialize in JavaScript and mobile development, building smooth, user-focused experiences across web and mobile.
          But I’m more than just a programmer — I’m also a graphic designer and content creator driven by a passion for visual storytelling.
        </p>
  
        <!-- Background and skill categories -->
        <div class="skill-categories">
          <div class="skill-category">
            <h2>Development</h2>
            <p class="description">
              With a deep focus on JavaScript, TypeScript, and modern frameworks like Vue.js, I build seamless, scalable, and dynamic web applications. 
              My work emphasizes user experience and efficient backend solutions, blending creative problem-solving with technical expertise.
            </p>
          </div>
          <div class="skill-category">
            <h2>Design</h2>
            <p class="description">
              I have a keen eye for visual design, with expertise in UI/UX design and tools like Adobe Photoshop, Illustrator, and Indesign. 
              I specialize in creating aesthetically pleasing, user-centered designs that deliver impactful experiences, whether on the web or mobile.
            </p>
          </div>
          <div class="skill-category">
            <h2>Content Creation</h2>
            <p class="description">
              As a content creator, I capture stories through photography, videography, and editing. 
              My creative process combines technical skills with a strong sense of visual storytelling, bringing ideas to life through multimedia content.
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .header {
    background-color: #ffffff;
    color: #1a1a1a;
    padding: 4rem 2rem;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .label {
    color: #f5332c;
    font-weight: bold;
    font-size: 3.2rem;
    margin-bottom: 1rem;
    display: inline-block;
  }
  
  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #111;
  }
  
  .description {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.2rem;
    color: #444;
    text-align: left;
  }
  
  .skill-categories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .skill-category {
    background-color: #f9f9f9; /* Subtle background color for each category */
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .skill-category h2 {
    font-size: 1.5rem;
    color: #f5332c;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 600;
  }
  
  .skill-category p {
    font-size: 1rem;
    color: #333;
  }
  </style>
  av