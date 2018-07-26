<template>

  <div id="goodsList">
    <div class="item" @click="goodsinfo">   <!--导航式路由-->
      <img src="../../images/1.jpg" alt="">
      <p>商品描述</p>
      <div class="info">
        <p class="price">
          <span>原价：99</span>
          <span>现价：88</span>
        </p>
        <p class="sale">
          <span>热卖中</span>
          <span>剩余3件</span>
        </p>
      </div>
    </div>

    <div class="item">
      <img src="../../images/1.jpg" alt="">
      <p>商品描述</p>
      <div class="info">
        <p class="price">
          <span>原价：99</span>
          <span>现价：88</span>
        </p>
        <p class="sale">
          <span>热卖中</span>
          <span>剩余3件</span>
        </p>
      </div>
    </div>

    <div class="item">
      <img src="../../images/1.jpg" alt="">
      <p>商品描述</p>
      <div class="info">
        <p class="price">
          <span>原价：99</span>
          <span>现价：88</span>
        </p>
        <p class="sale">
          <span>热卖中</span>
          <span>剩余3件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data: function(){
    return{
      ballFlag: false
    }
  },
  methods: {
    goodsinfo: function(){    //导航式路由
      this.$router.push({path: '/home/goodsinfo',query:{id: 123,name:"shanyikun"}})
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
  #goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 5px;
  }
  .item{
    width: 49%;
    border: solid gray 2px;
    margin: 3px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info{
    background-color: #eeeeee;
    margin: 4px;
  }
  .price{
    font-size: 12px;
    color:cornflowerblue;
  }
  .sale{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
  }


/*  .v-enter,.v-leave-to{
    opacity: 0;
    transform: translate(200px,100px)
  }
  .v-enter-active, .v-leave-active{
    transition: all 1s ease
  }*/


</style>
