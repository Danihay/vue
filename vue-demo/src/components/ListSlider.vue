<template>
	<div class="listSwipe">
	  	<mt-cell-swipe v-for="(item,index) in arrList"
		  :title="item.name"
		  :to="'/new-detail/teaId'+item.id"
		  :label="item.descp | limitContent"
		  :right="[
		    {
		      content: '编辑',
		      style: { background: 'rgba(96,55,62,1)', color: '#fff' },
		      handler: () => this.$messagebox('delete')
		    }
		  ]">
	  	</mt-cell-swipe>
	</div>
</template>
<script>



export default {
	data(){
		return {
			arrList:[],
		}
	},
	mounted(){
		this.fetchData()
	},
	methods:{
		fetchData(){
			this.$http.get('src/data/dataTeacher.json').then(function(res){
             	this.arrList = res.data.teaPage.list;
         }.bind(this)).catch(function(err){
          console.log(err);
         })
		}
	},
	filters: {  
   		limitContent: function (value) {  
   			if(value.length<24)
   				return value
    		return value.substring(0, 22)+'...';
    }  
  }  
 }
</script>
<style scoped lang="less">
@color:rgba(96,55,62,1);
.mint-cell-text {
    float: left;
}
.listSwipe{
	margin-bottom:1rem;
	margin-top:-20px;
}
</style>