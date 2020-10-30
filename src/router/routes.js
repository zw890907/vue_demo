import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '*',
    redirect: {
      path: '/'
    }
  }
]

export default routes
