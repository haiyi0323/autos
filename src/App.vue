<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import index from './components/index'

export default {
  name: 'App',
  components:{
    index
  }
}
</script>

<style scoped> 
.demo-color-btn {
  margin: 8px;
}
#app{
  position: relative;
}
</style>
