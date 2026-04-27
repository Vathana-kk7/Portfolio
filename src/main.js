import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
createApp(App).use(router).mount('#app')
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/Navbar.css'
import './assets/styles/Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()