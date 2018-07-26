<template>
  <div>
    <h3>{{ information }}</h3>
    <mycomment></mycomment>
  </div>
</template>

<script>
import mycomment from '../comments.vue'

import newsinfos from '../../newsinfos.json'

export default {
  data: function(){
    return {
      information: ''
    }
  },
  components: {
    mycomment: mycomment
  },
  created: function(){
    this.information=newsinfos.newsinfos[this.$route.params.id-1].message
  }
}
</script>

<style>

</style>
