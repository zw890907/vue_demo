import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入rem.js配置
import rem from './utils/rem'
// 引入全局混入内容
import mixins from './mixins'
// 引入element-ui组件库及样式
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// 引入基础样式
import './assets/styles/base.less'
// 引入主题色样式
import './assets/styles/theme.scss'

// 使用element-ui组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

// 使用rem
rem(document, window)

// 使用全局混入内容
Vue.mixin(mixins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
