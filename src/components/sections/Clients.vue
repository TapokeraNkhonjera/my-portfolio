<template>
  <section class="clients-ticker-section">
    <div class="container">
      <p class="ticker-title">COLLABORATED WITH</p>
      
      <div class="ticker-wrapper">
        <div class="ticker-track">
          <!-- Double items for infinite scrolling illusion -->
          <div v-for="client in clientsList" :key="client.id" class="ticker-item">
            <div class="client-logo-card">
              <i :class="client.icon + ' client-icon'"></i>
              <span class="client-name">{{ client.name }}</span>
            </div>
          </div>
          <div v-for="client in clientsList" :key="'dup-' + client.id" class="ticker-item">
            <div class="client-logo-card">
              <i :class="client.icon + ' client-icon'"></i>
              <span class="client-name">{{ client.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const clientsList = [
  { id: 1, name: 'Hearth Studios', icon: 'fas fa-home' },
  { id: 2, name: 'DevFlow SaaS', icon: 'fas fa-terminal' },
  { id: 3, name: 'CloudScale Labs', icon: 'fas fa-cloud' },
  { id: 4, name: 'EcoSphere App', icon: 'fas fa-leaf' },
  { id: 5, name: 'LogiCore Systems', icon: 'fas fa-network-wired' }
]
</script>

<style scoped>
.clients-ticker-section {
  background-color: #0a0e14;
  padding: 3.5rem 0;
  border-top: 1px solid rgba(33, 38, 45, 0.5);
  border-bottom: 1px solid rgba(33, 38, 45, 0.5);
  font-family: 'JetBrains Mono', monospace;
  overflow: hidden;
}

.container {
  max-width: 1280px; /* Widened from 1100px */
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.ticker-title {
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: #8b949e;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.ticker-wrapper {
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* Blur fades for screen edges */
.ticker-wrapper::before,
.ticker-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.ticker-wrapper::before {
  left: 0;
  background: linear-gradient(to right, #0a0e14 0%, transparent 100%);
}

.ticker-wrapper::after {
  right: 0;
  background: linear-gradient(to left, #0a0e14 0%, transparent 100%);
}

.ticker-track {
  display: flex;
  width: max-content;
  gap: 2.5rem;
  animation: scroll 25s linear infinite;
}

.ticker-track:hover {
  animation-play-state: paused;
}

.ticker-item {
  flex-shrink: 0;
}

.client-logo-card {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #111622;
  border: 1px solid #21262d;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  user-select: none;
  cursor: default;
}

.client-logo-card:hover {
  border-color: #00ffae;
  box-shadow: 0 0 12px rgba(0, 255, 174, 0.1);
  transform: translateY(-1px);
}

.client-icon {
  color: #8b949e;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.client-logo-card:hover .client-icon {
  color: #00ffae;
}

.client-name {
  color: #8b949e;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.client-logo-card:hover .client-name {
  color: #ffffff;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 1.25rem));
  }
}

@media (max-width: 480px) {
  .ticker-track {
    gap: 1rem;
    animation-duration: 18s;
  }
  .client-logo-card {
    padding: 0.6rem 1rem;
    gap: 0.5rem;
  }
}
</style>
