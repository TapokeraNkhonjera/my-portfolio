<template>
  <section class="services-section">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">/Services</p>
      <h1 class="headline">
        Crafting seamless digital experiences through design and development.
      </h1>

      <p class="description short">
        Explore the range of services I offer to help bring your ideas to life with creativity and technical expertise.
      </p>

      <div class="skill-categories">
        <div
          class="skill-category"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="card-num-wrapper">
            <span class="number">LOG-0{{ index + 1 }}</span>
            <span class="bar"></span>
          </div>
          <h2>{{ service.title }}</h2>
          <p>{{ service.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const services = [
  {
    title: "UX/UI Design",
    text: "Creating intuitive, user-centered designs that enhance engagement and usability across platforms. Skilled in Figma, Adobe XD, and Sketch."
  },
  {
    title: "Web Development",
    text: "Building responsive, scalable websites using modern technologies like Vue.js, React, and Tailwind CSS that deliver performance and accessibility."
  },
  {
    title: "Mobile App Development",
    text: "Developing cross-platform mobile apps with Flutter and native tools, focusing on smooth user experiences and robust functionality."
  },
  {
    title: "Brand Identity",
    text: "Crafting cohesive visual identities and branding strategies that tell your story and connect with your audience effectively."
  },
  {
    title: "Consulting & Strategy",
    text: "Offering expert guidance on digital product strategy, UX audits, and technology choices to optimize your project’s success."
  }
];

const containerRef = ref(null);
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = entry.isIntersecting;
    },
    { threshold: 0.1 }
  );

  if (containerRef.value) observer.observe(containerRef.value);
});
</script>

<style scoped>
.services-section {
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
  margin-bottom: 1.5rem;
}

.headline {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.description.short {
  font-size: 0.95rem;
  color: #8b949e;
  margin-top: -0.5rem;
  margin-bottom: 4rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  text-align: left;
}

.skill-category {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.skill-category:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 10px 30px rgba(0, 255, 174, 0.05);
}

.card-num-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.skill-category .number {
  font-size: 0.75rem;
  color: #00ffae;
  font-weight: 600;
}

.skill-category .bar {
  flex-grow: 1;
  height: 1px;
  background-color: rgba(33, 38, 45, 0.8);
}

.skill-category h2 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #ffffff;
}

.skill-category p {
  font-size: 0.85rem;
  color: #8b949e;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .headline {
    font-size: 1.6rem;
  }
  .skill-categories {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .skill-category {
    padding: 2rem 1.5rem;
  }
}
</style>
