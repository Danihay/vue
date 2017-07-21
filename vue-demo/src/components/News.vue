<template>
  <div class="news">
    <Header1></Header1>
    <div>
    <list-slider></list-slider>
    </div>
  </div>
</template>

<script>
import ListSlider from './ListSlider.vue'
import Header1 from './Header.vue'
export default {
  name: 'news',
  data () {
    return {
      msg: 'Welcome to News'
    }
  },
  components:{
    Header1: Header1,
    ListSlider:ListSlider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
