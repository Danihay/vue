<template>
  <div>
    <Header1 :title-top="titleMsg"></Header1>
    <swipe-img></swipe-img>
    <tab-card></tab-card>
  </div>
</template>

<script>
import SwipeImg from './SwipeImg.vue'
import Header1 from './Header.vue'
import TabCard from './TabCard.vue'
export default {
  data () {
    return {
      msg: '本周新品',
      titleMsg:'有蘭首页'    
    }
  },
  components:{
    Header1: Header1,
    SwipeImg:SwipeImg,
    TabCard :TabCard 
  },
  methods:{

  }
}
</script>
<style scoped>


</style>

