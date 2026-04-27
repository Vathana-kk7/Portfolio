<template>
  <section class="hero">
    <!-- LEFT -->
    <div class="hero-left">
      <div class="hello-badge">Hello There! <span>👋</span></div>
      <h1 class="hero-title">
        I'm <em class="name">Chhorm Vathana,</em><br>
        Product Designer<br>
        Based in Cambodia.
      </h1>
      <p class="hero-desc">
        I'm an experienced Product Designer with 3+ years in the field,
        collaborating with various companies and startups.
      </p>
      <div class="hero-btns">
        <a href="#" class="btn-primary">
          View My Portfolio
          <span class="play-icon">▶</span>
        </a>
        <a href="#" class="btn-outline">Hire Me</a>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="hero-right">

      <!-- ✅ Small green arrow decoration -->
      <div class="green-arrow">▶</div>

      <div class="hire-circle">
        <svg viewBox="0 0 100 100" class="circle-text-svg">
          <path id="circlePath"
            d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
            fill="none"/>
          <text font-size="10.5" fill="#fff" letter-spacing="2.8">
            <textPath href="#circlePath">HIRE ME • HIRE ME • HIRE ME •</textPath>
          </text>
        </svg>
        <span class="hire-arrow">↗</span>
      </div>

      <div class="orange-blob"></div>

      <img src="/src/assets/images/vathana.jpg" alt="Chhorm Vathana" class="hero-photo" />

      <div class="badge badge-product">
        <span class="badge-dot"></span> Product Designer
      </div>
      <div class="badge badge-ui">
        <span class="badge-dot"></span> UI/UX Designer
      </div>

    </div>
  </section>

  <!-- ✅ Dark green stripe behind marquee -->
  <div class="bottom-section">
    <div class="green-stripe"></div>
    <div class="marquee-bar">
      <div class="marquee-track">
        <span>App Design</span><span class="star">✳</span>
        <span>Website Design</span><span class="star">✳</span>
        <span>Dashboard</span><span class="star">✳</span>
        <span>Wireframing</span><span class="star">✳</span>
        <span>Branding</span><span class="star">✳</span>
        <span>App Design</span><span class="star">✳</span>
        <span>Website Design</span><span class="star">✳</span>
        <span>Dashboard</span><span class="star">✳</span>
        <span>Wireframing</span><span class="star">✳</span>
        <span>Branding</span><span class="star">✳</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@400;500;600&display=swap');

/* ── Layout ── */
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 72px);
  padding: 60px 6vw 40px;
  background: #ffffff;
  overflow: hidden;
  position: relative;
}

/* ── LEFT ── */
.hero-left {
  flex: 1;
  max-width: 500px;
  z-index: 2;
}

.hello-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1.5px dashed #1a3a2a;
  border-radius: 6px;
  padding: 5px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: #1a3a2a;
  margin-bottom: 20px;
  animation: fadeUp 0.5s ease both;
}

.hero-title {
  font-family: 'DM Serif Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  color: #111;
  margin-bottom: 18px;
  animation: fadeUp 0.6s ease 0.1s both;
}

.name {
  color: #f5a623;
  font-style: italic;
}

.hero-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  color: #666;
  line-height: 1.7;
  max-width: 360px;
  margin-bottom: 32px;
  animation: fadeUp 0.6s ease 0.2s both;
}

.hero-btns {
  display: flex;
  gap: 14px;
  align-items: center;
  animation: fadeUp 0.6s ease 0.3s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #1a3a2a;
  color: #fff;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: 999px;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover { background: #0f2418; transform: translateY(-2px); }

.play-icon {
  width: 28px;
  height: 28px;
  background: #f5a623;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: #1a3a2a;
  border: 1.5px solid #1a3a2a;
  padding: 12px 24px;
  border-radius: 999px;
  transition: background 0.2s, color 0.2s;
}
.btn-outline:hover { background: #1a3a2a; color: #fff; }

/* ── RIGHT ── */
.hero-right {
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 500px;
}

/* ✅ Small green triangle arrow — left of photo */
.green-arrow {
  position: absolute;
  left: 8%;
  top: 52%;
  color: #1a3a2a;
  font-size: 1.4rem;
  z-index: 3;
  transform: rotate(0deg);
}

/* ✅ Orange blob — centered, bottom anchored */
.orange-blob {
  position: absolute;
  width: 340px;
  height: 340px;
  background: #f5a623;
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
}

/* ✅ Photo — no clipping, rises above blob */
.hero-photo {
  position: relative;
  z-index: 1;
  height: 460px;
  width: auto;
  object-fit: cover;
  object-position: top;
  filter: drop-shadow(0 10px 30px rgba(0,0,0,0.12));
}

/* ── Badges ── */
.badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: #1a3a2a;
  padding: 10px 18px;
  border-radius: 999px;
  z-index: 3;
  white-space: nowrap;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f5a623;
  flex-shrink: 0;
}

.badge-product { bottom: 22%; left: 2%; }
.badge-ui      { top: 38%;   right: 0%; }

/* ── Hire Circle ── */
.hire-circle {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 88px;
  height: 88px;
  background: #1a3a2a;
  border-radius: 50%;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-text-svg {
  position: absolute;
  width: 88px;
  height: 88px;
  animation: spin 9s linear infinite;
}

.hire-arrow {
  font-size: 1.3rem;
  color: #f5a623;
  z-index: 1;
}

/* ✅ Bottom section: green stripe + yellow marquee stacked */
.bottom-section {
  position: relative;
  width: 100%;
}

.green-stripe {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1a3a2a;
  transform: skewY(-1.2deg);
  transform-origin: bottom left;
  z-index: 0;
}

/* ✅ Marquee sits above the green stripe */
.marquee-bar {
  position: relative;
  z-index: 1;
  background: #f5a623;
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0 -3px 0 #1a3a2a;   /* dark green top border line */
}

.marquee-track {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  animation: marquee 18s linear infinite;
}

.marquee-track span {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a3a2a;
}

.star {
  font-size: 1rem !important;
  color: #1a3a2a !important;
}

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
</style>