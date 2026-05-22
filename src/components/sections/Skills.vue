<template>
  <section class="skills-section">
    <div class="container">
      <p class="label">/Skills & Tech</p>
      <h2 class="headline">My Tech Stack</h2>
      <p class="description">
        I use a selected set of modern frameworks, libraries, and languages to build performant and engaging digital products.
      </p>

      <div class="categories-grid">
        <div v-for="category in skillCategories" :key="category.title" class="category-card">
          <div class="category-header">
            <div class="category-icon-wrapper">
              <i :class="category.icon"></i>
            </div>
            <h3>{{ category.title }}</h3>
          </div>
          <div class="skills-list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-badge" :style="{ '--skill-color': skill.color }">
              <img
                v-if="skill.svgUrl"
                :src="skill.svgUrl"
                :alt="skill.name"
                class="skill-icon-img"
                loading="lazy"
              />
              <i v-else :class="skill.icon + ' skill-icon-fa'"></i>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skillCategories = [
  {
    title: "Frontend & Web",
    icon: "fas fa-code",
    skills: [
      { name: 'Vue.js & Vite', icon: 'fab fa-vuejs', color: '#42b883', svgUrl: 'https://cdn.simpleicons.org/vue.js' },
      { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031', svgUrl: 'https://cdn.simpleicons.org/angular' },
      { name: 'HTML5 & CSS3', icon: 'fab fa-html5', color: '#e34f26', svgUrl: 'https://cdn.simpleicons.org/html5' },
      { name: 'Modern CSS & Sass', icon: 'fab fa-css3-alt', color: '#1572b6', svgUrl: 'https://cdn.simpleicons.org/css3' }
    ]
  },
  {
    title: "Mobile & Core",
    icon: "fas fa-mobile-alt",
    skills: [
      { name: 'Flutter', color: '#02569b', svgUrl: 'https://cdn.simpleicons.org/flutter' },
      { name: 'React Native', icon: 'fab fa-react', color: '#61dafb', svgUrl: 'https://cdn.simpleicons.org/react' },
      { name: 'C Language', color: '#a8b9cc', svgUrl: 'https://cdn.simpleicons.org/c' }
    ]
  },
  {
    title: "Backend & Databases",
    icon: "fas fa-server",
    skills: [
      { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933', svgUrl: 'https://cdn.simpleicons.org/node.js' },
      { name: 'Django', color: '#092e20', svgUrl: 'https://cdn.simpleicons.org/django' },
      { name: 'PHP', icon: 'fab fa-php', color: '#777bb4', svgUrl: 'https://cdn.simpleicons.org/php' },
      { name: 'MySQL', color: '#4479a1', svgUrl: 'https://cdn.simpleicons.org/mysql' },
      { name: 'SQLite', color: '#003b57', svgUrl: 'https://cdn.simpleicons.org/sqlite' },
      { name: 'Firebase', color: '#ffca28', svgUrl: 'https://cdn.simpleicons.org/firebase' }
    ]
  }
]
</script>

<style scoped>
.skills-section {
  background-color: #0a0e14;
  padding: 6rem 2rem;
  font-family: 'JetBrains Mono', monospace;
}

.container {
  max-width: 1280px; /* Widened from 1100px */
  margin: 0 auto;
  text-align: center;
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
  color: #ffffff;
  margin-bottom: 1rem;
}

.description {
  font-size: 0.95rem;
  color: #8b949e;
  max-width: 650px;
  margin: 0 auto 4rem auto;
  line-height: 1.6;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  text-align: left;
}

.category-card {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2.5rem 2rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.category-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 10px 30px rgba(0, 255, 174, 0.05);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  border-bottom: 1px solid rgba(33, 38, 45, 0.8);
  padding-bottom: 1rem;
}

.category-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 255, 174, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 255, 174, 0.2);
}

.category-icon-wrapper i {
  color: #00ffae;
  font-size: 1.2rem;
}

.category-header h3 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #1b2234;
  border: 1px solid #21262d;
  padding: 0.5rem 0.9rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  color: #c9d1d9;
  transition: all 0.3s ease;
  user-select: none;
}

.skill-badge:hover {
  border-color: var(--skill-color);
  background-color: rgba(27, 34, 52, 0.6);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.skill-icon-img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.skill-icon-fa {
  font-size: 1rem;
  color: var(--skill-color);
}

.skill-name {
  font-weight: 500;
}

@media (max-width: 480px) {
  .headline {
    font-size: 1.6rem;
  }
  .description {
    font-size: 0.85rem;
    margin-bottom: 2.5rem;
  }
  .categories-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .category-card {
    padding: 1.5rem;
  }
}
</style>
