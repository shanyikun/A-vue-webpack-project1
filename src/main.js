
import Vue from 'vue'

import Vuex from 'vuex'    //引入vuex模块

import './index.css'

import app from './App.vue'

import VueRouter from 'vue-router'
import router from './router.js'

import VueResource from 'vue-resource'     //引入vue ajax请求 模块

        //mui JS文件
import './lib/mui-master/dist/css/mui.css'           //mui样式文件
import './lib/mui-master/dist/css/icons-extra.css'   //mui图标文件

/*import 'mint-ui/lib/style.css'*/      //无需全局导入
/*import {Header,Swipe, SwipeItem ,Button,Lazyload} from 'mint-ui'       //按需局部导入
Vue.component(Header.name, Header)    //注册组件
Vue.component(Swipe.name, Swipe);     //轮播图
Vue.component(SwipeItem.name, SwipeItem)   //轮播图
Vue.component(Button.name,Button)*/

import MintUi from 'mint-ui'

import VuePreview from 'vue-preview'   //缩略图模块引入

Vue.use(Vuex)          //注册vuex

Vue.use(VuePreview)    //注册缩略图模块

Vue.use(VueRouter)     //注册 vue 路由模块

Vue.use(VueResource)   //注册 vue ajax模块

/*Vue.use(Lazyload) */  //懒加载需要全局引入
Vue.use(MintUi)  //全局引入mint-ui 组件

Vue.http.options.root='http://vue.studyit.io'

var store=new Vuex.Store({    //vuex存储对象
  state: {
    number: 6,
    carnumber: 3
  },
  mutations: {
      add: function(state,step){
        state.number+=step
      },
      sub: function(state,step){
        state.number-=step
      },
      addcar: function(state){
        state.carnumber=state.number
      }
  },
  getters: {
      msg: function(state){
        return `购买商品的数量：${state.number}件<br>
                加入购物车的数量：${state.carnumber}`
      }
  }
})

var vm=new Vue({
  el :'#div',
  render: function(createElement){
    return createElement(app)
  },
  router: router,
  store: store
})
