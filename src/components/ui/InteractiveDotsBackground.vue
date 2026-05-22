<template>
  <div ref="containerRef" class="dots-background-container" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <canvas ref="canvasRef" class="dots-canvas"></canvas>
    <!-- Background overlay gradient to blend content -->
    <div class="glow-layer" :style="glowStyle"></div>
    <div class="overlay-layer"></div>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const containerRef = ref(null)
const canvasRef = ref(null)
const mouse = ref({ x: -1000, y: -1000 })
const isHovered = ref(false)

let ctx = null
let animationFrameId = null
let dots = []
const dotSpacing = 32 // Spacing in pixels between dots
const defaultRadius = 1.2
const hoverRadius = 40 // Radius of influence around mouse pointer

const glowStyle = computed(() => {
  if (!isHovered.value) {
    return { opacity: 0 }
  }
  return {
    opacity: 1,
    left: `${mouse.value.x}px`,
    top: `${mouse.value.y}px`
  }
})

function handleMouseMove(event) {
  if (!containerRef.value) return
  isHovered.value = true
  const rect = containerRef.value.getBoundingClientRect()
  mouse.value = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

function handleMouseLeave() {
  isHovered.value = false
  mouse.value = { x: -1000, y: -1000 }
}

function initDots(width, height) {
  dots = []
  const cols = Math.floor(width / dotSpacing) + 2
  const rows = Math.floor(height / dotSpacing) + 2
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({
        x: c * dotSpacing,
        y: r * dotSpacing
      })
    }
  }
}

function draw() {
  if (!ctx || !canvasRef.value) return
  
  const width = canvasRef.value.width
  const height = canvasRef.value.height
  
  ctx.clearRect(0, 0, width, height)
  
  ctx.fillStyle = 'rgba(139, 148, 158, 0.15)' // Muted default dot color
  
  for (let i = 0; i < dots.length; i++) {
    const dot = dots[i]
    
    // Calculate distance to mouse pointer
    const dx = dot.x - mouse.value.x
    const dy = dot.y - mouse.value.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    
    if (dist < hoverRadius) {
      // Dots inside influence glow green and scale up
      const factor = (hoverRadius - dist) / hoverRadius // 0 to 1
      const size = defaultRadius + factor * 2.2
      const alpha = 0.15 + factor * 0.8
      
      ctx.fillStyle = `rgba(0, 255, 174, ${alpha})`
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
      ctx.fill()
    } else {
      // Normal muted dot
      ctx.fillStyle = 'rgba(139, 148, 158, 0.15)'
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, defaultRadius, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  
  animationFrameId = requestAnimationFrame(draw)
}

function handleResize() {
  if (!canvasRef.value || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  
  canvasRef.value.width = rect.width
  canvasRef.value.height = rect.height
  
  initDots(rect.width, rect.height)
}

onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d')
    handleResize()
    window.addEventListener('resize', handleResize)
    draw()
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
.dots-background-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.dots-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.glow-layer {
  position: absolute;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle 150px at center, rgba(0, 255, 174, 0.05) 0%, transparent 100%);
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.5s ease;
}

.overlay-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 30%, #0a0e14 100%);
  pointer-events: none;
  z-index: 1;
}

/* Ensure child content sits above interactive canvas background */
:deep(*) {
  position: relative;
  z-index: 2;
}
</style>
