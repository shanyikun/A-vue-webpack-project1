<template>
  <div>

 <!--   <div>  &lt;!&ndash;缩略图实现，利用vue-preview&ndash;&gt;
      <img class="preview-img" v-for="(item, index) in list"
        :src="item.src" height="100"  @click="$preview.open(index, list)" :key="item.src">
    </div>-->

    <vue-preview :slides="list" @close="handleClose"></vue-preview>

    <h1>图片详情页--第{{id}}张图片</h1>
  </div>
</template>

<script>
import thumb from '../../database/thumb.json'

export default {
  data: function(){
    return {
      id: this.$route.params.id,
      list: []
    }
  },
  methods: {
    getThumb: function(){
      this.list=thumb.thumb
    }
  },
  created: function(){
    this.getThumb()
  },
  mounted: function(){   //设置缩略图样式
    var imgs=document.getElementsByTagName('img')
    var figures=document.getElementsByTagName('figure')
    var div=document.getElementsByClassName('my-gallery')[0]
    Array.prototype.forEach.apply(imgs,[function(item){
      item.style.width= '100px'
      item.style.height= '100px'
    }])

    Array.prototype.forEach.apply(figures, [function(item){
      item.style.margin= '0px 0px 0px 2px'
      item.style.display= 'inline'
    }])

  }
}
</script>

<style scoped>

img {
border: 0;
width: 100px;
/* display: inline; */
}

</style>
