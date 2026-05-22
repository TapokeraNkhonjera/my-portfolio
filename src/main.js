import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.min.css';

const faLink = document.createElement('link');
faLink.rel = 'stylesheet';
faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
faLink.crossOrigin = 'anonymous';
document.head.appendChild(faLink);

const app = createApp(App)
app.use(router)
app.mount('#app')