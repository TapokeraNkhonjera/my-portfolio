<template>
  <section class="hero-section-wrapper">
    <InteractiveDotsBackground class="hero-dots-bg">
      <div class="hero-container">
        <div class="hero-grid">
          <!-- Left: MacBook/Web UI Mockup -->
          <div class="mockup-container">
            <div class="mockup-frame">
              <div class="frame-bar">
                <span class="circle red"></span>
                <span class="circle yellow"></span>
                <span class="circle green"></span>
                <span class="address-bar">https://hearthstudios.com</span>
              </div>
              <img
                src="../../assets/hearth_studio_mockup1.png"
                alt="Hearth Studios Website Mockup"
                class="mockup-img"
              />
            </div>
          </div>

          <!-- Right: Description Content -->
          <div class="hero-content">
            <div class="tag-badge">
              <i class="fas fa-star badge-icon"></i>
              <span>Featured Client Project</span>
            </div>
            <h1 class="title">Hearth Studios Website</h1>
            <p class="description">
              A modern, earthy interior design website crafted with Vue, Vite, Tailwind, and PostCSS — designed to be clean, responsive, and emotionally resonant. Explore the interface, layout, and animations live in the demo version.
            </p>
            
            <div class="actions">
              <!-- Reusable Magnetic Glow Button -->
              <MagneticGlowButton 
                tag="a" 
                href="https://hearthstudios.com" 
                target="_blank" 
                rel="noopener noreferrer"
                glowColor="rgba(0, 255, 174, 0.2)"
                borderColor="#00ffae"
              >
                <span>View Live Demo</span>
                <i class="fas fa-external-link-alt"></i>
              </MagneticGlowButton>
            </div>
          </div>
        </div>
      </div>
    </InteractiveDotsBackground>
  </section>
</template>

<script setup>
import InteractiveDotsBackground from '../ui/InteractiveDotsBackground.vue'
import MagneticGlowButton from '../ui/MagneticGlowButton.vue'
</script>

<style scoped>
.hero-section-wrapper {
  margin: 4rem auto;
  max-width: 1280px; /* Widened from 1100px */
  width: 95%;
  border-radius: 1.5rem;
  border: 1px solid #21262d;
  background-color: #111622;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: border-color 0.3s ease;
}

.hero-section-wrapper:hover {
  border-color: rgba(0, 255, 174, 0.3);
}

.hero-dots-bg {
  padding: 6rem 3rem;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  align-items: center;
  gap: 4rem;
}

.mockup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.mockup-frame {
  background-color: #161b22;
  border: 1px solid #30363d;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 520px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  transform: rotateY(-3deg) rotateX(1deg);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.mockup-frame:hover {
  transform: rotateY(0deg) rotateX(0deg) scale(1.02);
}

.frame-bar {
  background-color: #0d1117;
  border-bottom: 1px solid #21262d;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  gap: 0.4rem;
}

.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.circle.red { background-color: #ff7b72; }
.circle.yellow { background-color: #ffca28; }
.circle.green { background-color: #00ffae; }

.address-bar {
  flex-grow: 1;
  background-color: #161b22;
  border: 1px solid #21262d;
  border-radius: 0.25rem;
  color: #8b949e;
  font-size: 0.65rem;
  text-align: center;
  padding: 0.15rem 0;
  margin-left: 1rem;
  font-family: monospace;
}

.mockup-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.tag-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0, 255, 174, 0.08);
  border: 1px solid rgba(0, 255, 174, 0.2);
  padding: 0.35rem 0.85rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  color: #00ffae;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.badge-icon {
  font-size: 0.7rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
}

.description {
  font-size: 0.95rem;
  color: #c9d1d9;
  line-height: 1.7;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

@media (max-width: 900px) {
  .hero-dots-bg {
    padding: 4rem 1.5rem;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .mockup-frame {
    transform: none;
    max-width: 100%;
  }
  .mockup-frame:hover {
    transform: scale(1.01);
  }
  .title {
    font-size: 2rem;
  }
}
</style>
