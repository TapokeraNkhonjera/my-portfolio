<template>
  <section class="testimonials">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">/Testimonials</p>
      <h2 class="headline">Trusted by Clients & Collaborators</h2>
      
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(item, index) in testimonials" :key="index">
          <div class="quote-icon">
            <i class="fas fa-quote-left"></i>
          </div>
          <p class="quote">“{{ item.quote }}”</p>
          <div class="author-info">
            <div class="author-details">
              <span class="author-name">{{ item.author }}</span>
              <span class="author-role">{{ item.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const containerRef = ref(null)
const visible = ref(false)

const testimonials = [
  {
    quote: "Tapokera delivered an incredibly polished developer portal for our team. The attention to detail, clean typography, and snappy navigation exceeded our expectations.",
    author: "Elena Rostova",
    role: "Engineering Manager at DevFlow Solutions"
  },
  {
    quote: "An absolute pleasure to work with. He built our dashboard using Vue and Tailwind CSS, turning complex requirements into an elegant, user-friendly interface.",
    author: "Marcus Vance",
    role: "Product Director at Hearth Studios"
  },
  {
    quote: "Technically outstanding and reliable. He helped optimize our Flutter database queries, improving app responsiveness significantly. Highly recommend for any dev project.",
    author: "Sarah Jenkins",
    role: "CTO at CloudScale Labs"
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { visible.value = entry.isIntersecting },
    { threshold: 0.1 }
  )
  if (containerRef.value) observer.observe(containerRef.value)
})
</script>

<style scoped>
.testimonials {
  background-color: #0a0e14;
  color: #c9d1d9;
  padding: 6rem 2rem;
  font-family: 'JetBrains Mono', monospace;
}

.container {
  max-width: 1280px; /* Widened from 1100px */
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
  text-align: center;
}

.headline {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 3.5rem;
  text-align: center;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.testimonial-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 8px 30px rgba(0, 255, 174, 0.05);
}

.quote-icon {
  color: rgba(0, 255, 174, 0.15);
  font-size: 2rem;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.quote {
  font-style: italic;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #c9d1d9;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid rgba(33, 38, 45, 0.8);
  padding-top: 1.25rem;
}

.author-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.author-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #00ffae;
}

.author-role {
  font-size: 0.75rem;
  color: #8b949e;
}

@media (max-width: 768px) {
  .headline { font-size: 1.6rem; }
  .testimonial-card { padding: 2rem 1.5rem; }
}
</style>
