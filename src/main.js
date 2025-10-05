import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // <-- points to src/router/index.js

createApp(App)
  .use(router)
  .mount('#app')
