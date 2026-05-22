<template>
  <section class="contact-section" id="contact">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">/Get in Touch</p>
      <h2 class="headline">Let's build something exceptional together</h2>
      <p class="description">
        Whether you have an upcoming project, a freelance inquiry, or just want to chat about code and design, feel free to drop me a message.
      </p>
      <div class="buttons">
        <!-- Reusable Magnetic Glow Buttons for contacts -->
        <MagneticGlowButton
          tag="a"
          href="mailto:tapotandane@gmail.com"
          glowColor="rgba(0, 255, 174, 0.2)"
          borderColor="#00ffae"
          class="contact-glow-btn"
        >
          <i class="fas fa-envelope"></i>
          <span>Email Me</span>
        </MagneticGlowButton>

        <MagneticGlowButton
          tag="a"
          href="https://linkedin.com/in/tapokera-nkhonjera"
          target="_blank"
          rel="noopener noreferrer"
          glowColor="rgba(88, 166, 255, 0.2)"
          borderColor="#58a6ff"
          class="contact-glow-btn"
        >
          <i class="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </MagneticGlowButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MagneticGlowButton from '../ui/MagneticGlowButton.vue'

const containerRef = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = entry.isIntersecting
    },
    { threshold: 0.1 }
  )

  if (containerRef.value) observer.observe(containerRef.value)
})
</script>

<style scoped>
.contact-section {
  background-color: #0a0e14;
  color: #c9d1d9;
  padding: 6rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
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

.label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  color: #00ffae;
  margin-bottom: 1rem;
}

.headline {
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.description {
  font-size: 0.95rem;
  color: #8b949e;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media (max-width: 480px) {
  .headline {
    font-size: 1.6rem;
  }
  .description {
    font-size: 0.85rem;
  }
  .buttons {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  :deep(.contact-glow-btn .magnetic-btn) {
    width: 100%;
    justify-content: center;
  }
}
</style>
