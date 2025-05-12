<template>
  <header class="navbar" role="banner">
    <!-- Top Contact Bar -->
    <div class="navbar-top">
      <span class="email">tapotandane@gmail.com</span>
      <div class="buttons">
        <button @click="copyEmail" aria-label="Copy email address to clipboard">Copy</button>
        <button aria-label="Download CV">CV</button>
      </div>
    </div>

    <!-- Navigation Links -->
    <transition name="fade-slide" appear>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
      </nav>
    </transition>

    <!-- Profile + Projects -->
    <transition name="fade-slide" appear>
      <div class="profile-projects" ref="profileRef" :class="{ visible: visible }">
        <section class="profile-info" aria-labelledby="tagline">
          <img src="../assets/Profile.jpg" alt="Profile photo of the developer" class="profile-img" />
          <div class="tagline">
            <h1 id="tagline">
              Crafting <span class="highlight">seamless code</span>, <span class="highlight">bold visuals</span>, and
              <span class="highlight">compelling stories</span> — all in one digital experience.
            </h1>
            <button class="latest-shots" aria-label="View portfolio">View My Work</button>
          </div>
        </section>
      </div>
    </transition>

    <!-- Social Icons -->
    <div class="socials" aria-label="Social media links">
      <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="#" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.visible = entry.isIntersecting;
      },
      { threshold: 0.3 }
    );
    observer.observe(this.$refs.profileRef);
  },
  methods: {
    copyEmail() {
      navigator.clipboard.writeText("tapotandane@gmail.com");
      alert("Email copied!");
    }
  }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600;800&display=swap');

.navbar {
  font-family: 'Inter', sans-serif;
  padding: 2rem;
  border-radius: 2rem;
  margin: 2rem;
  color: #1c1c1c;
  transition: background-position 0.3s ease-out;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
}

.navbar-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 0.95rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.buttons button {
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  position: relative;
  overflow: hidden;
  outline: none;
}

.buttons button:focus,
.latest-shots:focus {
  outline: 2px solid #f5332c;
  outline-offset: 2px;
}

.buttons button::before,
.latest-shots::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.2);
  transform: skewX(-20deg);
  transition: left 0.5s ease;
}

.buttons button:hover::before,
.latest-shots:hover::before {
  left: 100%;
}

.nav-links {
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  font-size: 1rem;
}

.nav-links a {
  color: #1c1c1c;
  text-decoration: none;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #f5332c;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.profile-projects {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
  flex-wrap: wrap;
  text-align: center;
}

.profile-projects.visible {
  opacity: 1;
  transform: translateY(0);
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 1.2rem;
  object-fit: cover;
  margin-bottom: 1rem;
}

.tagline h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 700px;
}

.highlight {
  font-weight: 800;
  color: #f5332c;
}

.latest-shots {
  margin-top: 1.5rem;
  padding: 0.6rem 1.4rem;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.latest-shots:hover {
  background-color: #f5332c;
}

.socials {
  margin-top: 2.5rem;
  font-size: 1.2rem;
  color: #ccc;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.socials a {
  color: inherit;
  transition: color 0.3s ease;
}

.socials a:hover {
  color: #f5332c;
}

/* Transition animation */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Layout Breakpoints */

@media (max-width: 1024px) {
  .navbar {
    margin: 1rem;
    padding: 1.5rem;
  }

  .nav-links {
    gap: 2rem;
  }

  .tagline h1 {
    font-size: 1.5rem;
    max-width: 90%;
  }

  .profile-img {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .navbar-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .buttons {
    justify-content: flex-start;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .tagline h1 {
    font-size: 1.3rem;
  }

  .latest-shots {
    width: 100%;
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 1rem;
    margin: 1rem;
  }

  .tagline h1 {
    font-size: 1.1rem;
  }

  .profile-img {
    width: 80px;
    height: 80px;
  }

  .socials {
    gap: 1rem;
    font-size: 1rem;
  }
}
</style>
