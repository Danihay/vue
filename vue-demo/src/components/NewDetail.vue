<template>
  <div>
   <Header1 :title-top="titleMsg" :left-icon="titleIcon" :link-back="linkbacks" @showbox="closeOrTran"></Header1>
   <swipe-img></swipe-img>
   <p>{{msg}}</p>
  </div>
</template>

<script>
import SwipeImg from './SwipeImg.vue'
import Header1 from './Header.vue'
export default {
  data () {
    return {
      msg: '本周新品',
      titleMsg:'讲师详情',
      titleIcon:'back',
      linkbacks:'news'
    }
  },
  components:{
    Header1: Header1,
    SwipeImg:SwipeImg

  },
  mounted(){
    const ids =this.$route.params.id;
  //  console.log(this.$route);
    this.fetchData(ids)
  },
  watch:{
    '$route' (to, from) {
        alert(to);
        console.log("from111"+from)
      },
    deep: true
  },
  methods:{
    fetchData(ids){
      this.$http.get('src/data/dataTeacher.json').then(function(res){
              const obj = res.data.teaPage.list;
              obj.forEach((item,val)=>{
                if(item.id == ids){
                  this.msg=item.descp;
                }

            })
         }.bind(this)).catch(function(err){
          console.log(err);
         })
    },
    closeOrTran() {
       // this.$emit('showbox'); //触发showbox方法，'the msg'为向父组件传递的数据
       console.log("-aaaaa")
    }
  }
}
</script>
<style scoped>


</style>
