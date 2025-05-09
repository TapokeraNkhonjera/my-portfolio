<template>
    <section class="skills">
      <h2>My Skills</h2>
  
      <div v-for="(group, groupName) in categorizedSkills" :key="groupName" class="skill-category">
        <h3>{{ groupName }}</h3>
        <div class="skills-grid">
          <div
            v-for="skill in group"
            :key="skill.name"
            class="skill-item"
            @mouseover="startAnimation(skill)"
            @mouseleave="resetAnimation(skill)"
          >
            <i :class="skill.icon" class="skill-icon"></i>
  
            <div class="skill-details">
              <div class="skill-name">{{ skill.name }}</div>
              <transition name="fade">
                <div v-if="skill.hovered" class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{ width: skill.currentLevel + '%' }"
                  ></div>
                </div>
              </transition>
              <transition name="fade">
                <small v-if="skill.hovered">{{ skill.currentLevel }}%</small>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const categorizedSkills = reactive({
    Development: [
      { name: 'JavaScript', icon: 'fab fa-js', level: 85 },
      { name: 'TypeScript', icon: 'fab fa-js-square', level: 70 },
      { name: 'Vue.js', icon: 'fab fa-vuejs', level: 80 },
      { name: 'Node.js', icon: 'fab fa-node-js', level: 70 },
      { name: 'Python', icon: 'fab fa-python', level: 75 },
      { name: 'HTML5', icon: 'fab fa-html5', level: 90 },
      { name: 'CSS3', icon: 'fab fa-css3-alt', level: 85 },
      { name: 'RESTful APIs', icon: 'fas fa-plug', level: 80 },
      { name: 'Responsive Design', icon: 'fas fa-mobile-alt', level: 85 },
    ],
    Design: [
      { name: 'UI/UX Design', icon: 'fas fa-paint-brush', level: 75 },
      { name: 'Adobe Photoshop', icon: 'fas fa-image', level: 60 },
      { name: 'Adobe Illustrator', icon: 'fas fa-pen-nib', level: 65 },
      { name: 'Adobe XD', icon: 'fas fa-vector-square', level: 50 },
    ],
    'Content Creation': [
      { name: 'Videography & Editing', icon: 'fas fa-video', level: 70 },
      { name: 'Photography', icon: 'fas fa-camera', level: 65 },
      { name: 'Storyboarding', icon: 'fas fa-columns', level: 60 },
    ],
  })
  
  // Initialize extra properties for animation
  Object.values(categorizedSkills).forEach(group => {
    group.forEach(skill => {
      skill.hovered = false
      skill.currentLevel = 0
    })
  })
  
  const startAnimation = (skill) => {
    skill.hovered = true
    skill.currentLevel = 0
    let step = 0
    const interval = setInterval(() => {
      if (step < skill.level) {
        skill.currentLevel += 1
        step += 1
      } else {
        clearInterval(interval)
      }
    }, 10)
  }
  
  const resetAnimation = (skill) => {
    skill.hovered = false
    skill.currentLevel = 0
  }
  </script>
  
  <style scoped>
  .skills {
    padding: 2rem;
    background-color: #fff;
  }
  
  .skills h2 {
    text-align: center;
    margin-bottom: 2.5rem;
  }
  
  .skill-category {
    margin-bottom: 3rem;
  }
  
  .skill-category h3 {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 1rem;
    border-left: 4px solid #f5332c;
    padding-left: 0.75rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
  
  .skill-item {
    position: relative;
    background: #f5f5f5;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    text-align: center;
    transition: background 0.3s ease;
  }
  
  .skill-icon {
    font-size: 2.5rem;
    color: #4b4b4b;
  }
  
  .skill-details {
    margin-top: 1rem;
  }
  
  .skill-name {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .progress-bar {
    background: #ddd;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }
  
  .progress-fill {
    background-color: #f5332c;
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  