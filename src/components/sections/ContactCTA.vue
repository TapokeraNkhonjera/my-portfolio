<template>
  <section class="contact-cta">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">/Get in Touch</p>
      <h2 class="headline">Ready to start your next project?</h2>
      <p class="description short">
        Let’s discuss how we can bring your vision to life. Whether it’s a website, web app, custom backend, or design system, I’m here to help.
      </p>
      <!-- Magnetic Glow Button integration -->
      <MagneticGlowButton
        tag="button"
        @click="goToContact"
        glowColor="rgba(0, 255, 174, 0.2)"
        borderColor="#00ffae"
        class="cta-glow-btn"
      >
        <span>Contact Me</span>
        <i class="fas fa-chevron-right arrow-icon"></i>
      </MagneticGlowButton>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import MagneticGlowButton from '../ui/MagneticGlowButton.vue'

const containerRef = ref(null)
const visible = ref(false)
const router = useRouter()

function goToContact() {
  router.push('/contact')
}

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { visible.value = entry.isIntersecting },
    { threshold: 0.1 }
  )
  if (containerRef.value) observer.observe(containerRef.value)
})
</script>

<style scoped>
.contact-cta {
  background-color: #0a0e14;
  color: #c9d1d9;
  padding: 6rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
  border-top: 1px solid rgba(33, 38, 45, 0.4);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: #111622;
  border: 1px solid #21262d;
  padding: 4rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.description.short {
  font-size: 0.95rem;
  color: #8b949e;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.arrow-icon {
  font-size: 0.85rem;
  transition: transform 0.2s ease;
}

:deep(.cta-glow-btn:hover .arrow-icon) {
  transform: translateX(3px);
}

@media (max-width: 768px) {
  .headline { font-size: 1.6rem; }
  .description.short { font-size: 0.85rem; }
  .container { padding: 3rem 1.5rem; }
}

@media (max-width: 480px) {
  :deep(.cta-glow-btn) { width: 100%; }
  :deep(.cta-glow-btn .magnetic-btn) { width: 100%; justify-content: center; }
}
</style>
