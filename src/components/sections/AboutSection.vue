<template>
  <section class="about-section">
    <!-- Embedded Interactive dots grid behind the whole profile header section -->
    <InteractiveDotsBackground class="dots-bg">
      <div class="container" ref="containerRef" :class="{ visible: visible }">
        
        <!-- Premium Coding Header Terminal Showcase -->
        <div class="terminal-dashboard">
          <div class="terminal-header">
            <div class="terminal-circles">
              <span class="circle red"></span>
              <span class="circle yellow"></span>
              <span class="circle green"></span>
            </div>
            <div class="terminal-title">bash - tapokera@nkhonjera.dev</div>
          </div>
          
          <div class="terminal-content-grid">
            <!-- Left: Avatar with interactive neon green border ring -->
            <div class="avatar-column">
              <div class="avatar-glow-ring">
                <img src="../../assets/Profile.png" alt="Profile photo of Tapokera Nkhonjera" class="profile-img" />
              </div>
              
              <div class="coder-meta">
                <p class="meta-item"><span class="white-text">status:</span> <span class="green-text">"open_to_work"</span></p>
                <p class="meta-item"><span class="white-text">role:</span> <span class="green-text">"Fullstack Dev"</span></p>
                <p class="meta-item"><span class="white-text">loc:</span> <span class="green-text">"Lilongwe, MW"</span></p>
              </div>
            </div>

            <!-- Right: Dynamic Headline description strictly in green and white -->
            <div class="description-column">
              <p class="label">/Profile Log</p>
              <h1 class="headline">
                Crafting <span class="highlight-code">&lt;seamless code&gt;</span>, <span class="highlight-code">bold UI systems</span>, and <span class="highlight-code">compelling products</span>.
              </h1>
              <p class="bio-text">
                I'm Tapokera Nkhonjera — a creative thinker and full-stack software engineer working at the intersection of robust backend architecture and fluid interactive layouts. I turn complex logic into responsive, client-centered digital assets.
              </p>

              <!-- Magnetic Glow Button integration -->
              <div class="action-btn-wrapper">
                <MagneticGlowButton
                  tag="a"
                  href="#featured-projects"
                  glowColor="rgba(0, 255, 174, 0.2)"
                  borderColor="#00ffae"
                >
                  <span>Explore Projects</span>
                  <i class="fas fa-arrow-down"></i>
                </MagneticGlowButton>
              </div>
            </div>
          </div>
        </div>

        <!-- Professional capabilities showcase cards -->
        <div class="capabilities-grid">
          <div
            class="capability-card"
            v-for="(card, index) in capabilities"
            :key="index"
          >
            <div class="card-icon-wrapper">
              <i :class="card.icon"></i>
            </div>
            <span class="card-num">LOG-0{{ index + 1 }}</span>
            <h3>{{ card.title }}</h3>
            <p class="card-text">{{ card.text }}</p>
          </div>
        </div>

      </div>
    </InteractiveDotsBackground>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InteractiveDotsBackground from '../ui/InteractiveDotsBackground.vue'
import MagneticGlowButton from '../ui/MagneticGlowButton.vue'

const capabilities = [
  {
    title: "Engineering",
    icon: "fas fa-laptop-code",
    text: "Building modern, high-performance web applications using Vue.js, React, TypeScript, and Node.js with strict attention to modular component structures and state optimization."
  },
  {
    title: "Product UX/UI",
    icon: "fas fa-palette",
    text: "Translating wireframes and complex user flows into pristine interactive interface prototypes, establishing comprehensive, developer-ready typography and Figma libraries."
  },
  {
    title: "Digital Strategy",
    icon: "fas fa-bullseye",
    text: "Orchestrating technical roadmap solutions, SEO best practices, telemetry analytics setups, and cloud integrations to ensure sustainable product growth and launch velocity."
  }
]

const containerRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = entry.isIntersecting
    },
    { threshold: 0.05 }
  )
  if (containerRef.value) observer.observe(containerRef.value)
})
</script>

<style scoped>
.about-section {
  background-color: #0a0e14;
  color: #c9d1d9;
  font-family: 'JetBrains Mono', monospace;
}

.dots-bg {
  padding: 6rem 2rem;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Premium Coding Terminal Dashboard */
.terminal-dashboard {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  margin-bottom: 5rem;
  transition: border-color 0.3s ease;
}

.terminal-dashboard:hover {
  border-color: rgba(0, 255, 174, 0.3);
}

.terminal-header {
  background-color: #161b22;
  border-bottom: 1px solid #21262d;
  display: flex;
  align-items: center;
  padding: 0.9rem 1.5rem;
  position: relative;
}

.terminal-circles {
  display: flex;
  gap: 0.5rem;
}

.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.circle.red { background-color: #ff7b72; }
.circle.yellow { background-color: #ffca28; }
.circle.green { background-color: #00ffae; }

.terminal-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: #8b949e;
  font-weight: 500;
}

.terminal-content-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  padding: 3.5rem;
  gap: 4rem;
  align-items: center;
}

/* Left avatar column styling */
.avatar-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-right: 1px solid rgba(33, 38, 45, 0.6);
  padding-right: 4rem;
}

.avatar-glow-ring {
  position: relative;
  display: inline-block;
}

.avatar-glow-ring::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  background: radial-gradient(circle, rgba(0, 255, 174, 0.4) 0%, transparent 70%);
  filter: blur(12px);
  z-index: 0;
}

.profile-img {
  position: relative;
  z-index: 1;
  width: 160px;
  height: 160px;
  border-radius: 1rem;
  object-fit: cover;
  border: 2px solid #21262d;
  transition: all 0.3s ease;
}

.profile-img:hover {
  border-color: #00ffae;
  transform: scale(1.02);
}

.coder-meta {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.8rem;
  text-align: left;
}

.meta-item {
  line-height: 1.5;
}

.white-text { color: #ffffff; }
.green-text { color: #00ffae; }

/* Right description column styling */
.description-column {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: #00ffae;
}

.headline {
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.35;
}

.highlight-code { color: #00ffae; font-weight: 600; }

.bio-text {
  font-size: 0.95rem;
  color: #8b949e;
  line-height: 1.7;
}

.action-btn-wrapper {
  margin-top: 1rem;
}

/* Capabilities list styling */
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.capability-card {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  text-align: left;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.capability-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 10px 30px rgba(0, 255, 174, 0.05);
}

.card-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: rgba(0, 255, 174, 0.05);
  border: 1px solid rgba(0, 255, 174, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  color: #00ffae;
  font-size: 1.25rem;
}

.capability-card .card-num {
  position: absolute;
  top: 2.5rem;
  right: 2rem;
  font-size: 0.75rem;
  color: #8b949e;
  font-weight: 600;
}

.capability-card h3 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.capability-card .card-text {
  font-size: 0.85rem;
  color: #8b949e;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .terminal-content-grid {
    grid-template-columns: 1fr;
    padding: 2.5rem;
    gap: 3rem;
  }
  .avatar-column {
    border-right: none;
    border-bottom: 1px dashed rgba(33, 38, 45, 0.6);
    padding-right: 0;
    padding-bottom: 3rem;
  }
  .headline {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .dots-bg { padding: 4rem 1rem; }
  .terminal-content-grid { padding: 1.5rem; }
  .capability-card { padding: 2rem 1.5rem; }
}
</style>
