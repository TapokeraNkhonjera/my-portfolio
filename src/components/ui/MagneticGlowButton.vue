<template>
  <div 
    ref="containerRef"
    class="magnetic-btn-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <component
      :is="tag"
      :to="to"
      :href="href"
      :target="target"
      :rel="rel"
      class="magnetic-btn"
      :style="buttonStyle"
    >
      <!-- Glow effect element -->
      <span class="glow-effect" :style="glowStyle"></span>
      
      <!-- Content slot -->
      <span class="btn-content">
        <slot></slot>
      </span>
    </component>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'button'
  },
  to: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: ''
  },
  rel: {
    type: String,
    default: ''
  },
  glowColor: {
    type: String,
    default: 'rgba(0, 255, 174, 0.15)'
  },
  borderColor: {
    type: String,
    default: '#00ffae'
  }
})

const containerRef = ref(null)
const position = ref({ x: 0, y: 0 })
const glowPosition = ref({ x: 0, y: 0 })
const isHovered = ref(false)

const buttonStyle = computed(() => {
  if (!isHovered.value) {
    return {
      transform: 'translate3d(0px, 0px, 0px)',
      borderColor: 'rgba(33, 38, 45, 0.8)'
    }
  }
  return {
    transform: `translate3d(${position.value.x}px, ${position.value.y}px, 0px)`,
    borderColor: props.borderColor,
    boxShadow: `0 0 15px ${props.glowColor}`
  }
})

const glowStyle = computed(() => {
  if (!isHovered.value) {
    return { opacity: 0 }
  }
  return {
    opacity: 1,
    left: `${glowPosition.value.x}px`,
    top: `${glowPosition.value.y}px`,
    background: `radial-gradient(circle 60px at center, ${props.glowColor} 0%, transparent 100%)`
  }
})

function handleMouseMove(event) {
  if (!containerRef.value) return
  
  isHovered.value = true
  const rect = containerRef.value.getBoundingClientRect()
  
  // Calculate relative mouse position inside the container
  const relX = event.clientX - rect.left
  const relY = event.clientY - rect.top
  
  // Magnetic effect range calculation (attraction factor: 0.25)
  const strength = 0.25
  const targetX = (relX - rect.width / 2) * strength
  const targetY = (relY - rect.height / 2) * strength
  
  position.value = { x: targetX, y: targetY }
  
  // Glow coordinates (inside the button context)
  glowPosition.value = { x: relX, y: relY }
}

function handleMouseLeave() {
  isHovered.value = false
  position.value = { x: 0, y: 0 }
}
</script>

<style scoped>
.magnetic-btn-wrapper {
  display: inline-block;
  padding: 0.5rem; /* Extends active hover trigger area */
  cursor: pointer;
}

.magnetic-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(33, 38, 45, 0.8);
  background-color: #111622;
  color: #e6edf3;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), 
              border-color 0.3s ease, 
              box-shadow 0.3s ease;
  user-select: none;
}

.glow-effect {
  position: absolute;
  width: 120px;
  height: 120px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s ease;
}

.btn-content {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
