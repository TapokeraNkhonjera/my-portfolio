<template>
  <div>
    <Navbar />
    
    <main class="clients-page">
      <div class="container">
        <!-- Page Header -->
        <section class="page-header">
          <p class="label">/Clients & Case Studies</p>
          <h1 class="headline">Building products that solve real problems</h1>
          <p class="subtitle">
            A review of selected commercial collaborations, developer velocity, and products launched with client partners.
          </p>
        </section>

        <!-- Stats Section featuring CommitChart -->
        <section class="stats-section">
          <div class="stats-header">
            <i class="fas fa-chart-bar stats-icon"></i>
            <h3>Developer Velocity Log</h3>
            <p>Monthly commits pushed to client repositories in 2025/2026</p>
          </div>
          <div class="chart-container">
            <CommitChart :chartData="chartData" :chartOptions="chartOptions" />
          </div>
        </section>

        <!-- Projects Showcase Grid -->
        <section class="case-studies">
          <h3 class="section-title">Client Collaborations</h3>
          
          <div class="cases-grid">
            <div v-for="(project, index) in clientProjects" :key="index" class="case-card">
              <div class="card-status">
                <span class="status-badge" :class="project.status.toLowerCase()">
                  {{ project.status }}
                </span>
                <span class="case-num">CASE-{{ index + 1 < 10 ? '0' + (index + 1) : index + 1 }}</span>
              </div>
              <h4 class="project-title">{{ project.name }}</h4>
              <p class="project-client"><i class="fas fa-briefcase"></i> Partner: {{ project.client }}</p>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="tech-stack-badges">
                <span v-for="tech in project.tags" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/layout/Navbar.vue'
import CommitChart from '../components/ui/CommitChart.vue'
import Footer from '../components/layout/Footer.vue'

const clientProjects = [
  {
    name: "Hearth Studios Website",
    client: "Hearth Interior Design Studios",
    description: "An elegant, interactive portfolio and booking interface designed for interior designers. Handled full stack design, responsive Vue elements, and Tailwind layouts.",
    status: "Completed",
    tags: ["Vue.js", "Tailwind", "PostCSS", "Vite"]
  },
  {
    name: "DevFlow SaaS Portal",
    client: "DevFlow Solutions Inc.",
    description: "Built the primary front-end administration interface and telemetry charting dashboard for a cloud server logging engine. Implemented rich analytics filters.",
    status: "Production",
    tags: ["Vue.js", "Chart.js", "TypeScript", "REST APIs"]
  },
  {
    name: "CloudScale Mobile Dashboard",
    client: "CloudScale Labs",
    description: "Developed a cross-platform telemetry monitoring tool using Flutter. Includes offline-first databases, push alert logs, and system status indicators.",
    status: "Active",
    tags: ["Flutter", "Dart", "SQLite", "Firebase"]
  }
]

// CommitChart properties
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Commits per Month',
      backgroundColor: 'rgba(0, 255, 174, 0.85)',
      hoverBackgroundColor: '#00ffae',
      borderColor: '#00ffae',
      borderWidth: 1,
      borderRadius: 4,
      data: [65, 85, 110, 95, 130, 115, 150, 135, 170, 195, 180, 210]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: '#111622',
      titleColor: '#00ffae',
      bodyColor: '#c9d1d9',
      borderColor: '#21262d',
      borderWidth: 1,
      titleFont: { family: 'JetBrains Mono' },
      bodyFont: { family: 'JetBrains Mono' }
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(33, 38, 45, 0.3)'
      },
      ticks: {
        color: '#8b949e',
        font: {
          family: 'JetBrains Mono',
          size: 10
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(33, 38, 45, 0.3)'
      },
      ticks: {
        color: '#8b949e',
        font: {
          family: 'JetBrains Mono',
          size: 10
        }
      }
    }
  }
}
</script>

<style scoped>
.clients-page {
  background-color: #0a0e14;
  color: #c9d1d9;
  padding: 4rem 2rem;
  font-family: 'JetBrains Mono', monospace;
  min-height: 100vh;
}

.container {
  max-width: 1280px; /* Widened from 1100px */
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
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
  margin-bottom: 1.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #8b949e;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.stats-section {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2.5rem;
  margin-bottom: 5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.stats-header {
  margin-bottom: 2rem;
  text-align: left;
}

.stats-icon {
  color: #00ffae;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.stats-header h3 {
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.stats-header p {
  font-size: 0.8rem;
  color: #8b949e;
}

.chart-container {
  height: 250px;
  position: relative;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2.5rem;
  text-align: center;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.case-card {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.case-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 8px 30px rgba(0, 255, 174, 0.05);
}

.card-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.status-badge {
  font-size: 0.7rem;
  padding: 0.25rem 0.6rem;
  border-radius: 2rem;
  font-weight: 600;
  border: 1px solid transparent;
}

.status-badge.completed {
  background-color: rgba(0, 255, 174, 0.1);
  color: #00ffae;
  border-color: rgba(0, 255, 174, 0.2);
}

.status-badge.production {
  background-color: rgba(88, 166, 255, 0.1);
  color: #58a6ff;
  border-color: rgba(88, 166, 255, 0.2);
}

.status-badge.active {
  background-color: rgba(255, 123, 114, 0.1);
  color: #ff7b72;
  border-color: rgba(255, 123, 114, 0.2);
}

.case-num {
  font-size: 0.75rem;
  color: #8b949e;
  font-weight: 500;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.project-client {
  font-size: 0.8rem;
  color: #8b949e;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-client i {
  color: #00ffae;
}

.project-description {
  font-size: 0.85rem;
  color: #8b949e;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.tech-stack-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background-color: #1b2234;
  border: 1px solid #21262d;
  color: #8b949e;
  padding: 0.25rem 0.6rem;
  border-radius: 0.35rem;
  font-size: 0.7rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .headline { font-size: 1.8rem; }
  .stats-section { padding: 1.5rem; }
  .cases-grid { grid-template-columns: 1fr; }
}
</style>
