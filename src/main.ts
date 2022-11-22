import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import '@/plugins/primevue'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
