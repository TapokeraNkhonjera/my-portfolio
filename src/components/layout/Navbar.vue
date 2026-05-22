<template>
  <header class="navbar" role="banner">
    <div class="navbar-container">
      <!-- Logo / Brand Link -->
      <router-link to="/" class="brand-logo" aria-label="Tapokera Nkhonjera Home">
        <span class="bracket">&lt;</span>
        <span class="logo-text">TAPOKERA.DEV</span>
        <span class="bracket">/&gt;</span>
      </router-link>

      <!-- Navigation Links -->
      <nav class="nav-links" aria-label="Primary navigation">
        <router-link to="/" class="nav-item" active-class="active-link">Home</router-link>
        <router-link to="/services" class="nav-item" active-class="active-link">Services</router-link>
        <router-link to="/clients" class="nav-item" active-class="active-link">Clients</router-link>
        <router-link to="/contact" class="nav-item" active-class="active-link">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  font-family: 'JetBrains Mono', monospace;
  padding: 1.25rem 2rem;
  background-color: rgba(10, 14, 20, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(33, 38, 45, 0.6);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-logo {
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  letter-spacing: 0.5px;
  transition: opacity 0.3s ease;
}

.brand-logo:hover {
  opacity: 0.9;
}

.bracket {
  color: #00ffae;
  font-weight: 800;
  transition: transform 0.3s ease;
}

.brand-logo:hover .bracket:first-child {
  transform: translateX(-2px);
}

.brand-logo:hover .bracket:last-child {
  transform: translateX(2px);
}

.logo-text {
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 0.75rem; /* Clean button alignment spacing */
  align-items: center;
}

.nav-item {
  text-decoration: none;
  color: #8b949e;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

/* Beautiful capsule hover glow matching the website's dark neon aesthetic */
.nav-item:hover,
.active-link {
  color: #00ffae;
  background-color: rgba(0, 255, 174, 0.04);
  border-color: rgba(0, 255, 174, 0.25);
  box-shadow: 0 0 12px rgba(0, 255, 174, 0.05);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1.25rem 1.5rem;
  }
  .navbar-container {
    flex-direction: column;
    gap: 1rem;
  }
  .nav-links {
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
  }
  .nav-item {
    padding: 0.4rem 1rem;
    font-size: 0.85rem;
  }
}
</style>
