<template>
  <div>
    <Navbar />
    <ServicesHeader /> 
    <ServicePlan />        
    <Testimonials />    
    <ContactCTA />      
    <Footer />
  </div>
</template>
  
<script setup>
import Navbar from '../components/layout/Navbar.vue'
import ServicesHeader from '../components/sections/ServicesHeader.vue'
import ServicePlan from '../components/sections/ServicePlan.vue'
import Testimonials from '../components/sections/Testimonials.vue'
import ContactCTA from '../components/sections/ContactCTA.vue'
import Footer from '../components/layout/Footer.vue'
</script>