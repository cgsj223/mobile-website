// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueRouter from "vue-router"
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(vueRouter)

//状态管理
const store=new Vuex.Store({
  state:{
    viewedPages:0
  },
  mutations:{
    increaseViewedPages:function(state){
      state.viewedPages++
    },
    decreaseViewedPages:function(state){
      state.viewedPages--
    }
  }
})


import Content from "./components/content/content.vue"
import Index from "./components/index/index.vue"

//路由
const routes=[
  {
    path:'/m/my_content/:type',
    component:Content
  },
  {
    path:'/m',
    component:Index
  }
]
const router=new vueRouter({
  mode:'history',
  routes
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
