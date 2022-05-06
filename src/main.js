import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from '@/utils/Api.js'
import '@/components/index.js'

// 引入样式初始化
import '@/assets/style.scss'

Vue.prototype.Api = Api

let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJhdWQiOiIiLCJpYXQiOjE2NTA0MTg1NTgsIm5iZiI6IiIsImV4cCI6MTk2MTQ1ODU1OCwidXNlcl9pZCI6MTAsInRva2VuIjoiNDRkOGE3ODFhZTgwZmM0NGZkNGM4YjQxY2EyZTQzZTVhODQ2YWM2ZiJ9.ROe-9MWN489t-dQbae0F8nI455KwpD7boLoon6T4QZc'
localStorage.setItem('token', token)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
