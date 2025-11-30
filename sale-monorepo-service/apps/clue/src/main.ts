import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {compArr,compRegistFunc} from '@lj/components'
const app = createApp(App)
compRegistFunc(app,compArr)
app.use(createPinia())
app.use(router)

app.mount('#app')
