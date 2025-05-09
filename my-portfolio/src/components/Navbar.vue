<template>
    <header class="navbar">
      <div class="navbar-top">
        <span class="email">tapotandane@gmail.com</span>
        <div class="buttons">
          <button @click="copyEmail">Copy</button>
          <button>CV</button>
        </div>
      </div>
  
      <nav class="nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
      </nav>
  
      <div class="profile-projects">
        <div class="profile-info">
          <img src="../assets/Profile.jpg" alt="Profile" class="profile-img" />
          <div class="tagline">
            <h1>
              Crafting <strong>seamless code</strong>, <strong>bold visuals</strong>, and
              <strong>compelling stories</strong> — all in one digital experience.
            </h1>
            <button class="latest-shots">View My Work</button>
          </div>
        </div>
  
        <div class="project-grid">
          <img v-for="n in 5" :key="n" :src="`https://via.placeholder.com/150?text=Project+${n}`" :alt="`Project ${n}`" />
        </div>
      </div>
  
      <div class="socials">
        <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="#" target="_blank"><i class="fab fa-dribbble"></i></a>
        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Navbar",
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
    background-color: #f8f8f8;
    border-radius: 2rem;
    margin: 2rem;
    color: #1a1a1a;
  }
  
  .navbar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 0.95rem;
  }
  
  .buttons button {
    margin-left: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: 1rem;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
  }
  
  .nav-links {
    margin: 1.5rem 0;
    font-weight: 600;
    display: flex;
    justify-content: center;
    gap: 6rem;
    font-size: 1rem;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #1a1a1a;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #555;
  }
  
  .profile-projects {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }
  
  .profile-info {
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
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
    line-height: 1.4;
    max-width: 400px;
  }
  
  .tagline strong {
    font-weight: 800;
  }
  
  .latest-shots {
    margin-top: 1rem;
    padding: 0.6rem 1.4rem;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.3s ease;
    font-size: 0.9rem;
}

.latest-shots:hover{

    background-color: #f5332c;
    color: white;

  }
  
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
    align-items: center;
  }
  
  .project-grid img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .project-grid img:hover {
    transform: scale(1.05);
  }
  
  .socials {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #888;
    text-align: center;
    display: flex;
    justify-content: left;
    gap: 1.5rem;
  }
  
  .socials a {
    color: inherit;
    transition: color 0.3s ease;
  }
  
  .socials a:hover {
    color: #444;
  }
  
  @media (max-width: 768px) {
    .profile-projects {
      grid-template-columns: 1fr;
      text-align: center;
    }
  
    .profile-info {
      align-items: center;
    }
  
    .tagline h1 {
      max-width: 100%;
    }
  
    .project-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
  }
  </style>
  