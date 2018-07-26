<template>
  <div id="root">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item',item.id===1?'mui-active':'']" v-for="item in items" :key="item.id"
              data-wid="tab-top-subpage-1.html" @click.prevent="getNewPictureList(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>

    </div>

    <ul>
      <router-link v-for="item in pictureList" :key="item.id" tag="li" :to="'/home/pictureinfo/'+item.id">     <!--使用懒加载技术-->
        <img v-lazy="item.url">
      </router-link>
    </ul>

  </div>
</template>

<script>
  import mui from '../../lib/mui-master/dist/js/mui.min.js'

  import slider from '../../database/picture_silder.json'  //导入slider数据

  import pictureList1 from '../../database/picture_list1.json'  //默认图片列表
  import pictureList2 from '../../database/picture_list2.json'
  import pictureList3 from '../../database/picture_list3.json'

  export default {
    data: function(){
      return {
        items: [],
        pictureList: []
      }
    },
    created: function(){
      this.getSlider()
      this.getPictureList()
    },
    methods: {
      getSlider: function(){
        this.items=slider.sliders
      },
      getPictureList: function(){
        this.pictureList=pictureList1.pictures
      },
      getNewPictureList: function(id){
        switch(parseInt(id)){
          case 1: this.pictureList=pictureList1.pictures
                  break
          case 2: this.pictureList=pictureList2.pictures
                  break
          case 3: this.pictureList=pictureList3.pictures
                  break
        }
      }
    },
    mounted: function(){
      mui('.mui-scroll-wrapper').scroll({    //初始化滚动条
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      })
    }
  }
</script>

<style scoped>
  #root{
    margin-left:10px;
    margin-right: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    z-index: -1;
  }
  .mui-slider{
    z-index:0;
  }
*{
  touch-action: pan-y;
}

img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
img{
  width:100%;
  vertical-align: middle;
}
  li{
    list-style: none;
    padding-left: 0px;
    background-color: darkgray;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  ul{
    margin-left:0px;
    padding-left:0px;
  }
  </style>
