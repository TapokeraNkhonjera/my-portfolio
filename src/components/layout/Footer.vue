<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Left side info and contact CTAs -->
      <div class="footer-left">
        <p class="copyright">© 2026 Tapokera Nkhonjera. All rights reserved.</p>
        <div class="status-indicator">
          <span class="pulse-dot"></span>
          <span class="status-text">System Status: Operational</span>
        </div>
      </div>

      <!-- Center: Magnetic Buttons for Email and CV -->
      <div class="footer-center">
        <div class="footer-actions">
          <MagneticGlowButton
            tag="button"
            @click="copyEmail"
            glowColor="rgba(0, 255, 174, 0.2)"
            borderColor="#00ffae"
            class="footer-glow-btn"
          >
            <i class="fas fa-copy"></i>
            <span>tapotandane@gmail.com</span>
          </MagneticGlowButton>

          <MagneticGlowButton
            tag="a"
            href="#"
            download
            glowColor="rgba(88, 166, 255, 0.2)"
            borderColor="#58a6ff"
            class="footer-glow-btn"
          >
            <i class="fas fa-file-pdf"></i>
            <span>Download CV</span>
          </MagneticGlowButton>
        </div>
      </div>

      <!-- Right side socials -->
      <div class="footer-right">
        <div class="socials">
          <a href="https://github.com/TapokeraNkhonjera" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="https://linkedin.com/in/tapokera-nkhonjera" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="https://dribbble.com/tapokera" target="_blank" rel="noopener noreferrer" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
        </div>
      </div>
    </div>

    <!-- Custom Notification Toast inside the global footer wrapper -->
    <transition name="toast-fade">
      <div v-if="copied" class="toast-notification">
        <i class="fas fa-check-circle"></i> Email copied to clipboard!
      </div>
    </transition>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import MagneticGlowButton from '../ui/MagneticGlowButton.vue'

const copied = ref(false)

function copyEmail() {
  navigator.clipboard.writeText("tapotandane@gmail.com")
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}
</script>

<style scoped>
.footer {
  background-color: #0b0e14;
  color: #8b949e;
  padding: 4rem 2rem;
  border-top: 1px solid #21262d;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  flex: 1;
  min-width: 250px;
}

.copyright {
  font-size: 0.85rem;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #58a6ff;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #00ffae;
  border-radius: 50%;
  box-shadow: 0 0 8px #00ffae;
  animation: pulse 2s infinite;
}

.footer-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  min-width: 300px;
}

.footer-actions {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  min-width: 200px;
}

.socials {
  display: flex;
  gap: 1.5rem;
}

.socials a {
  color: #8b949e;
  font-size: 1.3rem;
  transition: color 0.3s ease, transform 0.2s ease;
}

.socials a:hover {
  color: #00ffae;
  transform: translateY(-2px);
}

/* Toast styling */
.toast-notification {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #161b22;
  color: #00ffae;
  border: 1px solid #00ffae;
  box-shadow: 0 8px 24px rgba(0, 255, 174, 0.15);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  z-index: 9999;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.4s ease;
}

.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 255, 174, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(0, 255, 174, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 255, 174, 0);
  }
}

@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
  }
  .footer-left, .footer-center, .footer-right {
    flex: none;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
}
</style>
