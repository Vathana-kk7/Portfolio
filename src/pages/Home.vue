<!-- <script setup lang="ts">


</script> -->

<template>
  <section class="hero">
    
    <!-- LEFT -->
    <div class="hero-left">
      <div class="hello-badge" data-aos="fade-up">Hello There! <span>👋</span></div>

      <h1 class="hero-title" data-aos="fade-up">
        I'm 
        <em class="name" >Chhorm Vathana,</em>
        <br>Developer<br>Based in Cambodia.
      </h1>

      <p class="hero-desc" data-aos="fade-up">
        I'm an experienced Developer with 3+ years in the field,
        collaborating with various companies and startups.
      </p>

      <div class="hero-btns" data-aos="fade-up">
        <a href="#" class="btn-primary">
          View My Portfolio
          <span class="play-icon">▶</span>
        </a>
        <a href="#" class="btn-outline">Hire Me</a>
      </div>
    </div>

    <!-- RIGHT (IMAGE) -->
    <div class="hero-right" data-aos="fade-up">
      <div class="hire-circle">
        <svg viewBox="0 0 100 100" class="circle-text-svg">
          <path id="circlePath"
            d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
            fill="none"/>
          <text font-size="10.5" fill="#fff" letter-spacing="2.8">
            <textPath href="#circlePath">HIRE ME • HIRE ME • HIRE ME •</textPath>
          </text>
        </svg>
        <span class="hire-arrow"><MoveUpRight :size="16"  /></span>
      </div>
      <div class="top-skill">
        <MousePointer2 color="#1a3a2a" class="Mouse"/>
        <span class="frontend  ms-4">Frontend Developer</span>
      </div>
       <div class="top-skill1" >
        <MousePointer2 color="#f5a623" class="Mouse"/>
        <span class="frontend1  ms-4">UX/UX Designer</span>
      </div>
      <img class="vathana" src="/src/assets/images/vat2.jpg" alt="Chhorm Vathana">
    </div>
  </section>
  <!-- ✅ Dark green stripe behind marquee -->
  <div class="bottom-section">
    <div class="green-stripe"></div>
    <div class="marquee-bar">
      <div class="marquee-track">
        <span>I'm wepsite Developer</span><span class="star">✳</span>
        <span>Website Design</span><span class="star">✳</span>
        <span>Dashboard</span><span class="star">✳</span>
        <span>Wireframing</span><span class="star">✳</span>
        <span>Branding</span><span class="star">✳</span>
        <span>App Design</span><span class="star">✳</span>
        <span>UX/UI Design</span><span class="star">✳</span>
        <span>Dashboard</span><span class="star">✳</span>
        <span>Wireframing</span><span class="star">✳</span>
        <span>Branding</span><span class="star">✳</span>
      </div>
    </div>
  </div>
  <HomeService/>
</template>
<script setup>
import { MousePointer2, MoveUpRight } from 'lucide-vue-next';
  import AOS from 'aos'
  import 'aos/dist/aos.css'
import HomeService from '../components/sections/HomeService.vue';

AOS.init({
  duration: 1000,
  once: true
})
</script>