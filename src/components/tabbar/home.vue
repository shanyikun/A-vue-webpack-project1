<template>
  <div>
    <mt-swipe :auto="0" :speed="1000">    <!--轮播图-->
      <mt-swipe-item>
         <img :src="url1" >
      </mt-swipe-item>
      <mt-swipe-item>
         <img  src="../../images/2.jpg" >
      </mt-swipe-item>
      <mt-swipe-item>
         <img src="../../images/3.jpg" >
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/pictures">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">商品列表</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
        <span class="mui-icon mui-icon-home"></span>
        <div class="mui-media-body">新闻资讯</div></router-link></li>
    </ul>

  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        url1: 'src/images/1.jpg',
        url2: 'src/images/2.jpg',
        url3: 'src/images/3.jpg',
        ss:'hello'
      }
    }
  }
</script>

<style scoped>
  .mint-swipe{
    height:150px;
    background-color: #56ed14;
  }
 .mint-swipe-indicator{
   background:black !important;
   color:black !important;
   opacity: 1 !important;
  }
  .mint-swipe-item.is-active{
    color:red;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .mui-grid-view.mui-grid-9{
    background-color: white;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: unset;
  }
</style>
