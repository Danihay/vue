
<template>
  <div id="app">
    <router-view></router-view>
    <Footer1></Footer1>
  </div>
</template>

<script>
import Footer1 from './components/Footer.vue'
export default {
  components:{
    Footer1: Footer1
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
