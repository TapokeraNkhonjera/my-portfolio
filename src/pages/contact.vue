<template>
  <div>
    <Navbar />
    
    <main class="contact-page">
      <!-- Integrated reactive backdrop pattern -->
      <InteractiveDotsBackground class="contact-dots-bg">
        <div class="container">
          <section class="page-header">
            <p class="label">/Connect</p>
            <h1 class="headline">Establish connection</h1>
            <p class="subtitle">
              Submit a console log query below to pitch your project, ask a question, or request a collaboration.
            </p>
          </section>

          <div class="contact-layout">
            <!-- Terminal Form Simulator -->
            <div class="terminal-container">
              <div class="terminal-bar">
                <div class="terminal-buttons">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="terminal-title">bash - tapokera@nkhonjera.dev</div>
              </div>
              
              <div class="terminal-body">
                <div class="terminal-history">
                  <p class="terminal-line"><span class="prompt">$</span> ssh tapokera@nkhonjera.dev</p>
                  <p class="terminal-response">Welcome to Tapokera's secure contact terminal. Initializing handshake...</p>
                  <p class="terminal-response green-text">[OK] Connection established via TLS_AES_256_GCM_SHA384.</p>
                  <p class="terminal-line"><span class="prompt">$</span> ./send_message.sh</p>
                </div>

                <!-- Terminal Interactive Prompts -->
                <div class="terminal-form">
                  <div class="form-group">
                    <span class="prompt">$ enter name:</span>
                    <input
                      type="text"
                      v-model="formData.name"
                      placeholder="John Doe"
                      class="terminal-input"
                      required
                    />
                  </div>
                  
                  <div class="form-group">
                    <span class="prompt">$ enter email:</span>
                    <input
                      type="email"
                      v-model="formData.email"
                      placeholder="john@example.com"
                      class="terminal-input"
                      required
                    />
                  </div>

                  <div class="form-group">
                    <span class="prompt">$ enter budget:</span>
                    <select v-model="formData.budget" class="terminal-select">
                      <option value="" disabled selected>Select Budget...</option>
                      <option value="under-1k">&lt; $1,000</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="over-5k">$5,000+</option>
                    </select>
                  </div>

                  <div class="form-group text-area-group">
                    <span class="prompt">$ enter details:</span>
                    <textarea
                      v-model="formData.message"
                      placeholder="Describe your project, timeline, and goals..."
                      class="terminal-textarea"
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <!-- Integrated Magnetic Glow Button for terminal actions -->
                  <div class="terminal-actions">
                    <MagneticGlowButton
                      tag="button"
                      @click="submitLog"
                      :disabled="submitting"
                      glowColor="rgba(0, 255, 174, 0.2)"
                      borderColor="#00ffae"
                      class="terminal-glow-btn"
                    >
                      <i class="fas fa-paper-plane"></i>
                      <span>{{ submitting ? 'TRANSMITTING...' : './transmit.bin' }}</span>
                    </MagneticGlowButton>
                  </div>
                </div>

                <div v-if="submissionStatus" class="terminal-response-box" :class="submissionStatus.type">
                  <p>{{ submissionStatus.message }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InteractiveDotsBackground>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'
import InteractiveDotsBackground from '../components/ui/InteractiveDotsBackground.vue'
import MagneticGlowButton from '../components/ui/MagneticGlowButton.vue'

const formData = ref({
  name: '',
  email: '',
  budget: '',
  message: ''
})

const submitting = ref(false)
const submissionStatus = ref(null)

function submitLog() {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submissionStatus.value = {
      type: 'error',
      message: '[ERROR] Missing parameters. Please supply name, email, and message details.'
    }
    return
  }

  submitting.value = true
  submissionStatus.value = null

  // Simulate server submission
  setTimeout(() => {
    submitting.value = false
    submissionStatus.value = {
      type: 'success',
      message: `[SUCCESS] Payload transmitted successfully! Redirecting email query logs to tapotandane@gmail.com.`
    }
    // Reset form fields
    formData.value = {
      name: '',
      email: '',
      budget: '',
      message: ''
    }
  }, 1800)
}
</script>

<style scoped>
.contact-page {
  background-color: #0a0e14;
  color: #c9d1d9;
  font-family: 'JetBrains Mono', monospace;
  min-height: 100vh;
}

.contact-dots-bg {
  padding: 4rem 2rem;
}

.container {
  max-width: 1280px; /* Widened from 900px */
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 3.5rem;
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
  font-size: 2.2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.subtitle {
  font-size: 1rem;
  color: #8b949e;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-layout {
  display: flex;
  justify-content: center;
}

.terminal-container {
  width: 100%;
  max-width: 800px;
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.terminal-container:hover {
  border-color: rgba(0, 255, 174, 0.3);
}

.terminal-bar {
  background-color: #161b22;
  border-bottom: 1px solid #21262d;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  position: relative;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red { background-color: #ff7b72; }
.dot.yellow { background-color: #ffca28; }
.dot.green { background-color: #00ffae; }

.terminal-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: #8b949e;
}

.terminal-body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.terminal-history {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.85rem;
}

.terminal-line {
  color: #ffffff;
}

.prompt {
  color: #00ffae;
  margin-right: 0.5rem;
}

.terminal-response {
  color: #8b949e;
}

.green-text {
  color: #00ffae;
}

.terminal-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 0.5rem;
}

.form-group {
  display: flex;
  align-items: center;
  border-bottom: 1px dashed rgba(33, 38, 45, 0.8);
  padding-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.form-group.text-area-group {
  flex-direction: column;
  align-items: flex-start;
  border-bottom: none;
}

.form-group .prompt {
  font-size: 0.9rem;
  white-space: nowrap;
}

.terminal-input,
.terminal-select,
.terminal-textarea {
  background-color: transparent;
  border: none;
  color: #58a6ff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  flex-grow: 1;
  outline: none;
  min-width: 200px;
}

.terminal-select {
  color: #8b949e;
  cursor: pointer;
}

.terminal-select option {
  background-color: #111622;
  color: #c9d1d9;
}

.terminal-textarea {
  width: 100%;
  background-color: rgba(10, 14, 20, 0.3);
  border: 1px solid #21262d;
  border-radius: 0.5rem;
  padding: 0.75rem;
  color: #58a6ff;
  margin-top: 0.5rem;
  resize: vertical;
}

.terminal-textarea:focus {
  border-color: rgba(0, 255, 174, 0.4);
}

.terminal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

:deep(.terminal-glow-btn:disabled) {
  opacity: 0.6;
  pointer-events: none;
}

.terminal-response-box {
  margin-top: 1rem;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.85rem;
  border: 1px solid;
}

.terminal-response-box.success {
  background-color: rgba(0, 255, 174, 0.05);
  border-color: rgba(0, 255, 174, 0.2);
  color: #00ffae;
}

.terminal-response-box.error {
  background-color: rgba(255, 123, 114, 0.05);
  border-color: rgba(255, 123, 114, 0.2);
  color: #ff7b72;
}

@media (max-width: 768px) {
  .headline { font-size: 1.8rem; }
  .terminal-body { padding: 1.5rem; }
  .form-group { flex-direction: column; align-items: flex-start; }
}

@media (max-width: 480px) {
  .contact-dots-bg { padding: 4rem 1rem; }
  :deep(.terminal-glow-btn) { width: 100%; }
  :deep(.terminal-glow-btn .magnetic-btn) { width: 100%; justify-content: center; }
}
</style>
