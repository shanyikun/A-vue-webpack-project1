<template>
<div>
  <div>
    <h1> 商品详情</h1>
  </div>

  <transition @before-enter="beforeenter"
              @enter="enter"
              @after-enter="afterenter">   <!--购物车小球实验-->
    <div class="ball" v-show="ballFlag"></div>
  </transition>

  <div class="mui-numbox">     <!--数字输入框  有BUG，不能进行双向绑定，需要手动设置单击事件增减-->
    <button class="mui-btn mui-btn-numbox-minus" @click="testsub" type="button">-</button>
    <input class="mui-input-numbox" type="text" ref="numbox"  v-model="$store.state.number">
    <button class="mui-btn mui-btn-numbox-plus" @click="testadd" type="button">+</button>
  </div>
  <p v-html="$store.getters.msg">
    <!--getters属性相当于过滤器和computed属性的结合，依赖数据发生改变就会重新执行函数-->
  </p>
  <hr>
  <button @click="ball" id="shopcarbutton">加入购物车</button>

</div>
</template>

<script>
import mui from '../../lib/mui-master/dist/js/mui.min.js'   //局部引入mui.js   局部变量，其他组件不可用

export default{
  data:function(){
    return {
      ballFlag: false
    }
  },
  methods:{
    ball: function(){
      this.ballFlag=!this.ballFlag
    },
    testsub: function(){
      this.$store.commit('sub',3)
    },
    testadd: function(){
      this.$store.commit('add',3)
    },
    testchange: function(){

    },
    beforeenter: function(el){
      el.style.transform="translate(0,0)"
    },
    enter: function(el, done){
      var ballposition=this.$refs.numbox.getBoundingClientRect()   //解决位置问题
      var badgeposition=document.getElementById('badge').getBoundingClientRect()
      var xdistance=badgeposition.left-ballposition.left
      var ydistance=badgeposition.top-ballposition.top

      el.offsetWidth
      el.style.transform=`translate(${xdistance}px,${ydistance}px)`   //ES6模板字符串
      el.style.transition="all 1s cubic-bezier(.2,-0.5,.38,.92)"
      done()
      setTimeout(()=>{this.$store.commit('addcar')},1000)
    },
    afterenter: function(el){
      this.ballFlag=!this.ballFlag
    }
  },
/*  mounted: function(){    //初始化数字框 动态载入时需要
    mui('.mui-numbox').numbox()
  }*/
}
</script>

<style scoped>

  .ball{
    position: absolute;
    top:88px;
    left: 45px;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    z-index: 20;
  }

  #shopcarbutton{
    position: absolute;
    right: 60px;
    bottom: 60px;
  }
</style>
