<template>
  <div>
    <div class="page-swipe">
       <mt-swipe :auto="3000">
        <mt-swipe-item :class="{slide1:true}"><div><img src="../assets/images/l1.jpg"/></div></mt-swipe-item>
        <mt-swipe-item :class="{slide2:true}"><div><img src="../assets/images/l2.jpg"/></div></mt-swipe-item>
        <mt-swipe-item :class="{slide3:true}"><div><img src="../assets/images/l3.jpg"/></div></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  data () {
    return {
      msg: '本周新品'
     
    }
  },
  methods:{
    open(){
      Indicator.open('加载中...');
      setTimeout(()=>{
        Indicator.close();
      },2000);
    }
  }
}
</script>
<style scoped>
div{
    margin:0 auto;
    padding:0;
}
.titleImg{
    margin-top:-20px;
    width:100%;
    height: 1rem;
    line-height:1rem;
    text-algin:center;
    color:#222;
  

}
.page-swipe{
    margin-top:-20px;
}
.page-swipe .mint-swipe {
    height:4rem;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
.page-swipe img{
    width:100%;
    height:4rem;

}
.page-swipe .mint-swipe-item {
}
.page-swipe .slide1 {
    background-color: #fff;
    color: #fff;
}
.page-swipe .slide2 {
    background-color: #fff;
    color: #000;
}
.page-swipe .slide3 {
    background-color: #fff;
    color: #fff;
}
.page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
.page-swipe .mint-swipe-indicator{
    background: rgba(96,55,62,.8);
}
.mint-swipe-indicator .is-active{
  

}

</style>

