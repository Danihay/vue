<template>
<div class="myTab">
	<mt-navbar v-model="selected">
	  <mt-tab-item id="1">推荐</mt-tab-item>
	  <mt-tab-item id="2">爆款</mt-tab-item>
	  <mt-tab-item id="3">新品</mt-tab-item>
	</mt-navbar>

	<!-- tab-container -->
	<mt-tab-container v-model="selected" >
	 <mt-tab-container-item id="1" >
	    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="2">
	    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
	  </mt-tab-container-item>
	  <mt-tab-container-item id="3" >
	    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
	  </mt-tab-container-item>
	</mt-tab-container>
</div>
</template>
<script>
export default {
  data () {
    return {
      msg: '本周新品',
      selected:'1'
     
    }
  }
}
</script>
<style scoped>
div{
	border:none;
}
.myTab{
	margin-bottom:1rem;
}
.mint-navbar .mint-tab-item-label{
	color:#888;
}
.mint-navbar .mint-tab-item.is-selected{
	color:#E9CD4C;
	font-size:16px;
	font-weight:bold;
}
ul{
	width:100%;
	border:none;
}
</style>