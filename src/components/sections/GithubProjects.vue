<template>
  <section class="github-projects" id="featured-projects">
    <div class="container">
      <div class="profile-summary" v-if="user">
        <div class="avatar-glow-ring">
          <img :src="user.avatar_url" alt="GitHub Avatar" class="avatar" />
        </div>
        <h2>{{ user.name || user.login }}</h2>
        <p>{{ user.bio }}</p>
        <div class="stats">
          <span><i class="fas fa-user-friends"></i> {{ user.followers }} Followers</span>
          <span><i class="fas fa-user-plus"></i> {{ user.following }} Following</span>
          <span><i class="fas fa-book"></i> {{ user.public_repos }} Repositories</span>
        </div>
      </div>

      <h3 class="section-title">Featured Projects</h3>
      <div class="projects-grid">
        <div v-for="repo in repos" :key="repo.id" class="project-card">
          <div class="project-card-header">
            <i class="fab fa-github repo-icon"></i>
            <h4>{{ repo.name }}</h4>
          </div>
          <p class="project-desc">{{ repo.description }}</p>
          <div class="repo-details">
            <span class="detail-badge lang-badge" v-if="repo.language">
              <span class="dot-indicator" :style="{ backgroundColor: getLangColor(repo.language) }"></span>
              {{ repo.language }}
            </span>
            <span class="detail-badge"><i class="fas fa-star text-star"></i> {{ repo.stargazers_count }}</span>
            <span class="detail-badge"><i class="fas fa-code-branch text-branch"></i> {{ repo.commit_count ?? '–' }} Commits</span>
          </div>
          <div class="card-footer">
            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="view-btn">
              <span>Explore Repo</span>
              <i class="fas fa-arrow-right view-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const repos = ref([])
const user = ref(null)
const username = 'TapokeraNkhonjera'

function getLangColor(lang) {
  const colors = {
    'Vue': '#42b883',
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Dart': '#00b4ab',
    'Flutter': '#02569b',
    'HTML': '#e34f26',
    'CSS': '#563d7c',
    'Python': '#3572A5',
    'C': '#555555'
  }
  return colors[lang] || '#8b949e'
}

onMounted(async () => {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
    ])

    if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error')

    user.value = await userRes.json()
    const repoData = await reposRes.json()
    const filteredRepos = repoData.filter(repo => !repo.fork && repo.description)

    // Limit to top 6 projects for grid beauty
    const enrichedRepos = await Promise.all(
      filteredRepos.slice(0, 6).map(async (repo) => {
        try {
          const commitsRes = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
          )
          const commitCountHeader = commitsRes.headers.get('Link')
          let commitCount = 1

          if (commitCountHeader && commitCountHeader.includes('rel="last"')) {
            const match = commitCountHeader.match(/&page=(\d+)>; rel="last"/)
            if (match && match[1]) {
              commitCount = parseInt(match[1], 10)
            }
          }

          return {
            ...repo,
            commit_count: commitCount
          }
        } catch {
          return {
            ...repo,
            commit_count: null
          }
        }
      })
    )

    repos.value = enrichedRepos
  } catch (err) {
    console.error('Failed to load GitHub data:', err)
  }
})
</script>

<style scoped>
.github-projects {
  background-color: #0a0e14;
  color: #c9d1d9;
  font-family: 'JetBrains Mono', monospace;
  padding: 6rem 2rem;
}

.container {
  max-width: 1280px; /* Expanded from 1000px */
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin-bottom: 3.5rem;
}

.profile-summary {
  text-align: center;
  margin-bottom: 4rem;
}

.avatar-glow-ring {
  display: inline-block;
  position: relative;
  margin-bottom: 1.25rem;
}

.avatar-glow-ring::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 174, 0.4) 0%, transparent 70%);
  filter: blur(8px);
  z-index: 0;
}

.avatar {
  position: relative;
  z-index: 1;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #00ffae;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.avatar:hover {
  transform: scale(1.05) rotate(5deg);
}

.profile-summary h2 {
  font-size: 1.35rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.profile-summary p {
  font-size: 0.9rem;
  color: #8b949e;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
}

.stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  font-size: 0.8rem;
  color: #8b949e;
  margin-top: 1.5rem;
}

.stats i {
  color: #00ffae;
  margin-right: 0.3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: #111622;
  border: 1px solid #21262d;
  border-radius: 1rem;
  padding: 2rem;
  color: #c9d1d9;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(0, 255, 174, 0.4);
  box-shadow: 0 10px 30px rgba(0, 255, 174, 0.05);
}

.project-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.repo-icon {
  color: #8b949e;
  font-size: 1.25rem;
}

.project-card h4 {
  font-size: 1.15rem;
  font-weight: 600;
  color: #00ffae;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.project-desc {
  font-size: 0.85rem;
  color: #8b949e;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;
}

.repo-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.75rem;
  color: #8b949e;
  margin-bottom: 1.5rem;
}

.detail-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background-color: #1b2234;
  border: 1px solid #21262d;
  padding: 0.25rem 0.6rem;
  border-radius: 0.35rem;
}

.dot-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.text-star { color: #ffca28; }
.text-branch { color: #58a6ff; }

.card-footer {
  border-top: 1px solid rgba(33, 38, 45, 0.6);
  padding-top: 1.25rem;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #00ffae;
  text-decoration: none;
  transition: all 0.3s ease;
}

.view-arrow {
  transition: transform 0.2s ease;
}

.view-btn:hover {
  color: #ffffff;
}

.view-btn:hover .view-arrow {
  transform: translateX(4px);
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.6rem;
  }
  .stats {
    gap: 1rem;
  }
  .project-card {
    padding: 1.5rem;
  }
}
</style>
