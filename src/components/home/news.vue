<template>
  <div>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="route+item.id">
          <img class="mui-media-object mui-pull-left" src="../../images/4.jpg">
          <div class="mui-media-body">
            <h4>第{{item.id}}条新闻：{{item.title}}</h4>
            <p class='mui-ellipsis'><span>发表时间：{{time | timeform}}</span><span>点击次数{{item.click}}</span></p>
          </div>
        </router-link>
      </li>
    </ul>

    <mt-button type="danger" size='large' @click="getMore" class="button"  plain>加载更多</mt-button>

  </div>
</template>
<script>
  import {Toast} from 'mint-ui'

  import newslist from '../../database/message.json'

  export default {
    data: function(){
      return {
        newslist: [],
        time: new Date(),
        times: 0,
        route: '/home/newsinfo/',
        begin: 0,
        end: 0,
        submittimes: 0    //
      }
    },
    created:function(){
      this.getnewslist()
    },
    methods: {
      getnewslist:  function(){
        if(newslist.status===0){
          this.newslist=this.newslist.concat(newslist.body.message.slice(this.times*10, (this.times+1)*10))
          this.times++
          this.begin=this.times*10
          this.end=this.times*10+10
        }
        else{
          Toast('获取数据失败！')
        }
      },
      getMore: function(){
        if(newslist.body.message.length>this.times*10){
          this.newslist=this.newslist.concat(newslist.body.message.slice(this.begin, this.end))
          this.times++
          this.begin=this.times*10+this.submittimes
          this.end=this.times*10+10+this.submittimes
        }
        else{
          Toast('没有更多数据了')
        }

      }
    },
    filters: {
      timeform: function(time){
        return time.toLocaleDateString()
      }
    }
  }
</script>

<style scoped>
div{
  background-color:white;
}
.mui-media-body .mui-ellipsis{
    color:#0039FF;
    font-size:10px;
    margin: 0px;
    padding: 0px;
  }
  .mui-media-body{
    font-size: 14px;
    padding: 0px;
  }
  img{
    width:42px;
    height: 42px;
    padding-right:0px;
  }

.mui-media-body .mui-ellipsis{
  display:flex;    /*flex布局*/
  justify-content: space-between;
}

.button{
  margin-top: 5px;
  margin-bottom: 5px;
}

.button:hover{
  background-color: #02C1ED;
}
</style>
