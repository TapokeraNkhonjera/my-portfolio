<template>
  <section class="header">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">/Services</p>
      <h1 class="headline">
        Crafting seamless digital experiences through design and development.
      </h1>

      <p class="description short">
        Explore the range of services I offer to help bring your ideas to life with creativity and technical expertise.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
.header {
  background-color: #0a0e14;
  color: #c9d1d9;
  padding: 6rem 2rem 3rem;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;
}

.container {
  max-width: 1280px; /* Widened from 950px */
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
  margin-bottom: 1.5rem;
}

.headline {
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.description.short {
  font-size: 1rem;
  color: #8b949e;
  margin-top: -0.5rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .headline {
    font-size: 1.6rem;
  }
  .description.short {
    font-size: 0.9rem;
  }
}
</style>
