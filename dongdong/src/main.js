// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'
//import axios from 'axios'
import 'lib-flexible'

Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
      headflage: true,
      //userflage: true,
      //loginflage: false,
      footflage: true
  },
  mutations: {
      //头部隐藏
      // headhide(state,flage) {
      //     state.headflage = flage;
      // },
      //底部隐藏
      // foothide(state,flage) {
      //     state.footflage = flage;
      // }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
