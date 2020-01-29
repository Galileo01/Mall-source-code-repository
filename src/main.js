import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false

//在原型上 挂载 事件总线对象
Vue.prototype.$bus=new Vue();

//安装toast 插件
Vue.use(toast);
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
