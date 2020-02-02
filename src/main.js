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

//定义v-focus 的全局指令，自动聚焦  input 元素
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
      // 聚焦元素
      el.focus()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
