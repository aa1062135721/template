import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from '@/utils/Api.js'
import '@/components/index.js'

// 引入自适应
import './utils/rem'

// 引入样式初始化
import '@/assets/style.scss'

Vue.prototype.Api = Api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
