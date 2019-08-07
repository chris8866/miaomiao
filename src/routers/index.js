import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path : '/*',
      redirect : '/movie'  // 当路由匹配不正确或路由不存在时，跳转到movie页面
    }
  ]
})
