<template>
  <div>
    <Navbar />
    <AboutSection />
    <Hero />
    <GithubProjects />
    <Skills />
    <Clients />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>
  
<script setup>
import Navbar from '../components/layout/Navbar.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import Hero from '../components/sections/Hero.vue'
import GithubProjects from '../components/sections/GithubProjects.vue'
import Skills from '../components/sections/Skills.vue'
import Clients from '../components/sections/Clients.vue'
import Services from '../components/sections/Services.vue'
import Contact from '../components/sections/Contact.vue'
import Footer from '../components/layout/Footer.vue'
</script>