
<template>
  <div >
    <div>
     	<mt-header fixed :title="titleTop">
  	  <router-link :to="'/'+linkBack" slot="left">
  	    <mt-button :icon="leftIcon" @click="hinderClick()"></mt-button>
  	  </router-link>
  	  <mt-button icon="more" slot="right"@click="sheetClick()"></mt-button>
  	</mt-header>
    </div>
    <div>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bgColor:true,
      title:'有蘭',
      sheetVisible:false,
      actions:[{
        name:'微信分享',
        method :''
        },{
        name:'QQ分享',
        method :''
        },{
        name:'微博分享',
        method :''
        }
      ]
    }
  },
  props:{
    titleTop:{
        type: String,
        default: '有蘭',
    },
    leftIcon:{
        type: String,
        default: 'search',
    },
    linkBack:{
        type: String,
        default: 'home',
    }
  },
  mounted(){
    this.initData();
  },
  computed:mapGetters([
    'headShow',
    'loginOrReg',
    'footerShow',
    'loading'
  ]),
  methods:{
    hinderClick(){
      this.$emit('showbox');
    },
    initData(){
      const path =this.$route.path;
      if(path.indexOf('teaId')>-1){
        console.log("aaa");
        this.$store.dispatch('hideFooter')
      }else{
        console.log("bbb");
        this.$store.dispatch('showFooter')
      }
    },
    sheetClick(){
     this.sheetVisible = !this.sheetVisible;
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@color:rgba(96,55,62,1);
.mint-header{
	background: @color;
}
</style>
