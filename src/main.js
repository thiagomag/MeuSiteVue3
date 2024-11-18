import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css';
import "@/css/video.css";
import router from './router';

createApp(App).use(router).mount('#app')
