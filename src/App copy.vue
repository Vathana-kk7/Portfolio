<script setup>
const features = [
  { title: 'Fast', desc: 'Built for performance from the ground up.' },
  { title: 'Simple', desc: 'Clean and readable code structure.' },
  { title: 'Scalable', desc: 'Grows with your project needs.' },
]
</script>

<template>
  <div class="wrapper">
    <!-- background -->
    <div class="bg-blobs">
      <div class="blob blob-purple" />
      <div class="blob blob-orange" />
      <div class="blob blob-green" />
    </div>

    <!-- content -->
    <h1 class="title">Welcome to my project</h1>

    <div class="card">
      <p class="subtitle">This is a simple Vue.js project.</p>

      <div class="features">
        <div
          v-for="f in features"
          :key="f.title"
          class="feature-item"
        >
          <h2 class="feature-title">{{ f.title }}</h2>
          <p class="feature-desc">{{ f.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  background-color: oklch(8% 0.02 270);
  min-height: 100vh;
  padding: 40px;
  font-family: sans-serif;
  overflow: hidden;
}

/* ── blobs ── */
.bg-blobs {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: float 12s ease-in-out infinite alternate;
}

/* purple */
.blob-purple {
  width: 450px;
  height: 450px;
  top: -120px;
  left: -80px;
  background: radial-gradient(circle,
    oklch(55% 0.28 310) 0%,
    transparent 70%
  );
}

/* orange */
.blob-orange {
  width: 500px;
  height: 500px;
  top: -120px;
  right: -120px;
  background: radial-gradient(circle,
    oklch(70% 0.2 45 / 0.6) 0%,
    transparent 70%
  );
  animation-delay: 2s;
}

/* green */
.blob-green {
  width: 420px;
  height: 420px;
  bottom: -80px;
  left: 30%;
  background: radial-gradient(circle,
    oklch(60% 0.16 150 / 0.6) 0%,
    transparent 70%
  );
  animation-delay: 4s;
}

/* animation */
@keyframes float {
  from {
    transform: translateY(0px) scale(1);
  }
  to {
    transform: translateY(40px) scale(1.1);
  }
}

/* ── content ── */
.title {
  position: relative;
  z-index: 1;
  color: oklch(92% 0.01 270);
  font-size: 2.2rem;
  margin-bottom: 24px;
  background: linear-gradient(to right, #fff, #aaa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card {
  position: relative;
  z-index: 1;
  background-color: oklch(14% 0.025 270 / 0.5);
  backdrop-filter: blur(16px);
  border: 1px solid oklch(30% 0.04 270 / 0.6);
  padding: 28px;
  border-radius: 14px;
  width: 100%;
  max-width: 1000px;
  min-height: 300px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}

.subtitle {
  color: oklch(65% 0.015 270);
  margin-bottom: 28px;
  font-size: 1.05rem;
}

/* features */
.features {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.feature-item {
  flex: 1;
  min-width: 250px;
  background-color: oklch(10% 0.02 270 / 0.7);
  border: 1px solid oklch(28% 0.03 270 / 0.5);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-6px);
  border-color: oklch(60% 0.2 270);
}

/* text */
.feature-title {
  color: oklch(80% 0.18 270);
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.feature-desc {
  color: oklch(85% 0.01 270);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* ── responsive ── */
@media (max-width: 768px) {
  .wrapper {
    padding: 20px;
  }

  .title {
    font-size: 1.6rem;
  }
}
</style>