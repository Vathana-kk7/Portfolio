<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['updateText'])

const texts = ["Chhorm Vathana"]

const displayText = ref("")
const index = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

const typingSpeed = 100
const deletingSpeed = 80
const pauseDuration = 1200

function typeEffect() {
  const current = texts[index.value]

  if (!isDeleting.value) {
    displayText.value = current.substring(0, charIndex.value++)
    if (charIndex.value > current.length) {
      isDeleting.value = true
      setTimeout(typeEffect, pauseDuration)
      return
    }
  } else {
    displayText.value = current.substring(0, charIndex.value--)
    if (charIndex.value === 0) {
      isDeleting.value = false
      index.value = (index.value + 1) % texts.length
    }
  }

  emit('updateText', displayText.value)

  setTimeout(typeEffect, isDeleting.value ? deletingSpeed : typingSpeed)
}

onMounted(typeEffect)
</script>

<template>
  <div class="type-wrapper">
    <span class="text">{{ displayText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<style scoped>
.type-wrapper {
  display: flex;
  align-items: center;
  
  gap: 6px;
  font-size: 25px;
  font-weight: bold;
}

/* Gradient text */
.text {
  background: linear-gradient(135deg, oklch(78% .18 75), oklch(70% .22 320));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  font: bold;
  margin-left: 40px;
}

/* Cursor */
.cursor {
  color: oklch(78% .18 75);
  animation: blink 0.8s infinite;
  font-weight: bold;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>