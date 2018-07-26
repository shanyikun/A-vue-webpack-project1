
import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'

import homenews from './components/home/news.vue'
import newsinfo1 from  './components/newsinfo/newsinfo1.vue'

import pictures from './components/home/pictures.vue'
import pictureinfo from './components/pictureinfo/pictureinfo.vue'

import goodsList from './components/home/goodsList.vue'
import goodsinfo from './components/goodsinfo/goodsinfo.vue'

var router=new VueRouter({
  routes:[
   /* {path: '/', redirect: '/home'},*/
    {path: '/home', component: home},
    {path: '/member', component: member},
    {path: '/shopcar', component: shopcar},
    {path: '/search', component: search},
    {path: '/home/news', component: homenews},
    {path: '/home/newsinfo/:id', component: newsinfo1},
    {path: '/home/pictures',component: pictures},
    {path: '/home/pictureinfo/:id', component: pictureinfo},
    {path: '/home/goodsList', component: goodsList},
    {path: '/home/goodsinfo', component: goodsinfo, name: 'goodsinfo'}
  ],
  linkActiveClass: 'mui-active'
})

export default router
