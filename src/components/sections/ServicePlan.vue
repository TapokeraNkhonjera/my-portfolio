<template>
  <section class="plans">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">/Services & Pricing</p>
      <h2 class="headline">Transparent pricing tailored to your needs</h2>
      <p class="description short">
        Whether you're starting small or scaling up, there's a service package that fits your vision and budget. Custom packages are also available.
      </p>

      <div class="plan-grid">
        <div 
          class="plan-card" 
          v-for="(plan, index) in servicePlans" 
          :key="index"
          :class="{ 'featured-plan': plan.featured }"
        >
          <div v-if="plan.featured" class="featured-badge">MOST POPULAR</div>
          
          <div class="plan-header">
            <span class="plan-num">PLAN-0{{ index + 1 }}</span>
            <div class="plan-icon-wrapper">
              <i :class="plan.icon"></i>
            </div>
            <h3 class="plan-title">{{ plan.title }}</h3>
          </div>
          
          <p class="plan-description">{{ plan.description }}</p>
          
          <div class="plan-features">
            <ul>
              <li v-for="feature in plan.features" :key="feature">
                <i class="fas fa-check-circle check-icon"></i> <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <div class="plan-footer">
            <p class="price-label">Starting at</p>
            <p class="plan-price">{{ plan.price }}</p>
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

const servicePlans = [
  {
    title: "UX/UI Design",
    icon: "fas fa-palette",
    description: "Wireframes, high-fidelity prototypes, and complete design systems ready for developers.",
    price: "$500",
    features: [
      "User research & persona maps",
      "Interactive Figma prototypes",
      "Developer style guides",
      "Up to 3 revisions cycles"
    ]
  },
  {
    title: "Web Development",
    icon: "fas fa-code",
    description: "Fully responsive, optimized web applications built with Vue, React, or static assets.",
    price: "$1,000",
    featured: true,
    features: [
      "Custom Vue/Vite or React app",
      "Responsive layout & Tailwind styling",
      "SEO best practices",
      "1 month post-launch support"
    ]
  },
  {
    title: "Mobile Apps",
    icon: "fas fa-mobile-alt",
    description: "Cross-platform mobile applications with database and custom API integrations.",
    price: "$1,500",
    features: [
      "Flutter cross-platform app",
      "SQLite/Firebase integration",
      "API connections",
      "App store deployment help"
    ]
  },
  {
    title: "Brand Identity",
    icon: "fas fa-bezier-curve",
    description: "Logo designs, fonts, branding guidelines, and visual resources for your business.",
    price: "$400",
    features: [
      "Vector logos (SVG/PDF)",
      "Typography & color assets",
      "Brand guidelines book",
      "Social media asset package"
    ]
  },
  {
    title: "Tech Consulting",
    icon: "fas fa-lightbulb",
    description: "UX auditing, architecture planning, and tech stack choices for your project launch.",
    price: "$80/hr",
    features: [
      "UX/UI audit report",
      "Architecture planning docs",
      "Performance optimization tips",
      "1-on-1 session consultations"
    ]
  }
]

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
.plans {
  background-color: #0a0e14;
  color: #c9d1d9;
  padding: 6rem 2rem;
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
  margin-bottom: 1rem;
}

.headline {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.description.short {
  font-size: 0.95rem;
  color: #8b949e;
  margin-bottom: 4rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.plan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
  text-align: left;
}

.plan-card {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.plan-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 10px 30px rgba(0, 255, 174, 0.05);
}

.featured-plan {
  border-color: #00ffae;
  box-shadow: 0 4px 30px rgba(0, 255, 174, 0.08);
}

.featured-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: #00ffae;
  color: #0a0e14;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 0.25rem;
  letter-spacing: 1px;
}

.plan-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.plan-num {
  font-size: 0.7rem;
  color: #8b949e;
  font-weight: 600;
}

.plan-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: rgba(0, 255, 174, 0.05);
  border: 1px solid rgba(0, 255, 174, 0.2);
  border-radius: 0.5rem;
  color: #00ffae;
  font-size: 1.15rem;
}

.featured-plan .plan-icon-wrapper {
  background-color: rgba(0, 255, 174, 0.1);
  border-color: #00ffae;
}

.plan-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
}

.plan-description {
  font-size: 0.85rem;
  color: #8b949e;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  min-height: 50px;
}

.plan-features {
  border-top: 1px solid rgba(33, 38, 45, 0.8);
  padding-top: 1.5rem;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.plan-features ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #c9d1d9;
  line-height: 1.4;
}

.check-icon {
  color: #00ffae;
  margin-top: 0.15rem;
  font-size: 0.85rem;
}

.plan-footer {
  border-top: 1px solid rgba(33, 38, 45, 0.8);
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.price-label {
  font-size: 0.75rem;
  color: #8b949e;
}

.plan-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00ffae;
}

@media (max-width: 768px) {
  .headline {
    font-size: 1.6rem;
  }
  .description.short {
    font-size: 0.85rem;
  }
}
</style>
