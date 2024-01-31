import './assets/main.css'

import { createApp } from 'vue'
import App from './views/App.vue'
import Widget from './views/Widget.vue'
import Chart from './views/Chart.vue'

createApp(Chart).mount('#chart')
createApp(Widget).mount('#widget')
createApp(App).mount('#app')

