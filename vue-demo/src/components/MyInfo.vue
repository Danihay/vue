<template>
  <div class="myInfo">
	  <Header1></Header1>
      <div v-if="loginOrReg" class="myInfomation">
      	<div class="slotImg"><img src="../assets/img/headimg.png"/></div>
		<div class="slotContent" @click="delLoginInfo" ><span>注册/登录</span></div>
      </div>
      <div v-else  class="myInfomation">
		<div class="slotImg"><img src="../assets/img/head.png"/></div>
		<div class="slotContent" @click="getLoginInfo"><span>璃若</span></div>
      </div>
	<div  class="cell-div">
		<ul class="cell-div-ul">
			
			<li>
				<div class="slotIcon"><img src="../assets/img/xing.png"/></div>
				<div class="slotTitle"><span>收藏</span></div>
				<div class="slotInfo"><span>10</span></div>	
			</li>
			<li>
				<div class="slotIcon"><img src="../assets/img/zan1.png"/></div>
				<div class="slotTitle"><span>点赞</span></div>
				<div class="slotInfo"><span>12</span></div>	
			</li>
			<li>
				<div class="slotIcon"><img src="../assets/img/gk_text.png"/></div>
				<div class="slotTitle"><span>消息</span></div>
				<div class="slotInfo"><span>28</span></div>	
			</li>
			<li>
				<div class="slotIcon"><img src="../assets/img/say.png"/></div>
				<div class="slotTitle"><span>评论</span></div>
				<div class="slotInfo"><span>91</span></div>	
			</li>
			<li>
				<div class="slotIcon"><img src="../assets/img/my_cz.png"/></div>
				<div class="slotTitle"><span>设置</span></div>
				<div class="slotInfo"><span></span></div>	
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Header1 from './Header.vue'
export default {
  data () {
    return {
      msg: 'Welcome to MyInfo'
    }
  },
  computed:mapGetters([
		'headShow',
        'loginOrReg',
		'footerShow',
		'loading'
  ]),
  components:{
    Header1: Header1
   },
  methods:{
		getLoginInfo(){
			this.$store.dispatch('isLoginOrRegState')
		},
		delLoginInfo(){
			this.$store.dispatch('cancelLoginOrRegState')
		}
	}

}
</script>
<style scoped>
.listSwipe{
	margin-bottom:1rem;
	margin-top:-20px;
}
.cell-div{
	width:100%;
	clear:both;
	background:#fff;
}
.cell-div .cell-div-ul{
	width:6.4rem;
	height:calc( 5rem + 4px );
	margin:0 auto;
	border-bottom:1px #ccc solid;
}
.cell-div .cell-div-ul li{
    width:6rem;
	height:1rem;
	display:flex;
	margin-left:0.2rem;
	border-bottom:1px #ccc solid;
	font-size:0;

}
.cell-div .cell-div-ul li:last-child{
	border:none;

}
 .cell-div-ul li div{
	display:flex;
	justify-content:  flex-start;
	font-size:14px;
}
.myInfo{
	background:#ccc;
}
.myInfomation {
	height:2rem;
	margin-top:-20px;
	display:flex;
	background:rgba(96,55,62,1);	
}
.myInfomation div{
	display:flex;
	justify-content:  center;

}
.myInfomation div span{
	line-height:2rem;
	color:#fff;
	font-size:16px;

}
.slotTitle{
	height:2rem;
}
.slotImg img{
    width:1.2rem;
	height:1.2rem;
	margin:0.4rem;
}
.slotIcon{
	width:1rem;
	height:1rem;
}
.slotIcon img{
	width:0.5rem;
	height:0.5rem;
	margin:0.25rem;
}

.slotTitle{
	width:4rem;
	line-height:1rem;
}
.slotTitle span{
	text-indent:14px;
}
.slotInfo{
	width:1rem;
	height:1rem;
	line-height:1rem;
	color:#ccc;
}
.slotInfo span{
	text-align:right;
}
</style>
