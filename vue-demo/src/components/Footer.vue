<template>
	<div class="foot-btn" v-if="footerShow">
		<ul>
	    	<router-link class="home" to="/home" tag='li'>
	    		<a href="javascript:;">首页</a>
	    	</router-link>
	    	<router-link class="news" to='/news' tag='li'>
	    		<a href="javascript:;">消息</a>
	    	</router-link>
	    	<router-link class="my" to="/user-info" tag='li'>
	    		<a href="javascript:;">我的</a>
	    	</router-link>
	    </ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
		msg:'abf'
    }
  },
  computed:mapGetters([
		'headShow',
        'loginOrReg',
		'footerShow',
		'loading'
  ]),
}
</script>
<style scoped>
.foot-btn{
	width:100%;
 	position:fixed;
 	left:0; 
 	bottom:0; 
 	background:#fff;
 	border-top:1px solid #9e9a95;
}
.foot-btn>ul{
	width:100%;
	height:1rem;
}
.foot-btn>ul li{
	width:2.1rem;
	height:1rem;


}
.foot-btn>ul .router-link-active a{
	width:2.2rem;
	color:rgba(96,55,62,1);
}

.foot-btn>ul li a{
	color:#ccc;
	font-size:10px;
}
</style>