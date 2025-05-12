<template>
  <section class="header">
    <div class="container" ref="containerRef" :class="{ visible: visible }">
      <p class="label">About Me</p>
      <h1 class="headline">
        I’m Tapokera Nkhonjera — a creative thinker and developer who builds expressive, functional digital experiences.
      </h1>

      <p class="description short">
        Here's how I combine creativity and technology to deliver value across disciplines.
      </p>

      <div class="skill-categories">
        <div
          class="skill-category"
          v-for="(card, index) in skills"
          :key="index"
        >
          <p class="number">{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</p>
          <h2>{{ card.title }}</h2>
          <p>{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const skills = [
  {
    title: "Development",
    text: "I work with JavaScript, TypeScript, and modern frameworks like Vue.js to craft scalable, responsive apps. I blend UX thinking with technical rigor to bring ideas to life."
  },
  {
    title: "Design",
    text: "From UI/UX to brand visuals, I use tools like Adobe Photoshop, Illustrator, and Figma to shape cohesive, high-impact designs across digital media."
  },
  {
    title: "Content",
    text: "I tell stories through video, photography, and editing — blending design instincts with creator tools to make visually compelling media."
  }
];

const containerRef = ref(null);
const visible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      visible.value = entry.isIntersecting;
    },
    { threshold: 0.2 }
  );

  if (containerRef.value) observer.observe(containerRef.value);
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

.header {
  background-color: #ffffff;
  color: #1a1a1a;
  padding: 6rem 2rem;
  font-family: 'Inter', sans-serif;
  text-align: center;
}

.container {
  max-width: 950px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.visible {
  opacity: 1;
  transform: translateY(0);
}

.label {
  font-weight: 600;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #f5332c;
  margin-bottom: 1.5rem;
}

.headline {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.4;
  color: #111;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.05rem;
  color: #444;
  max-width: 700px;
  margin: 0 auto 3rem auto;
  line-height: 1.8;
}

.description.short {
  max-width: 600px;
  margin-top: -1rem;
  margin-bottom: 3rem;
  font-size: 0.95rem;
  color: #666;
}

.skill-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem 4rem;
  justify-content: center;
  align-items: start;
  text-align: center;
  margin-top: 2rem;
}

.skill-category {
  padding: 1rem;
  border-top: 1px solid #ddd;
}

.skill-category .number {
  font-weight: 600;
  font-size: 0.85rem;
  color: #999;
  margin-bottom: 1rem;
  letter-spacing: 1px;
}

.skill-category h2 {
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: #000;
}

.skill-category p {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}

@media (max-width: 480px) {
  .headline {
    font-size: 2rem;
  }

  .description,
  .description.short {
    font-size: 0.95rem;
  }

  .skill-categories {
    gap: 2rem;
  }

  .skill-category p {
    font-size: 0.9rem;
  }
}
</style>
