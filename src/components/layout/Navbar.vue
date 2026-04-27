<template>
  <div class="navbar-wrapper" data-aos="fade-right">
    <nav class="navbar-pill">
      <!-- Logo -->
      <div class="logo">
        <span class="logo-icon">V</span>
        <router-link class="logo-name" to="/">Chhorm Vathana<span class="dot">.</span></router-link>
      </div>

      <!-- Links -->
      <ul class="nav-links">
        <li><router-link to="/"         class="nav-link">Home</router-link></li>
        <li><router-link to="/about"    class="nav-link">About</router-link></li>
        <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
        <li><router-link to="/skill"    class="nav-link">Skill</router-link></li>
        <li><router-link to="/contact"  class="nav-link">Contact</router-link></li>
      </ul>

      <!-- CTA -->
      <router-link to="/contact" class="cta-btn">Contact Me</router-link>
    </nav>
  </div>
</template>
<script setup>
  import AOS from 'aos'
  import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true
})
</script>