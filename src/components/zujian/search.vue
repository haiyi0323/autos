<template> 
  <div class="search">
  <mu-text-field v-model="value1" type="text" placeholder="搜索一下吧！" icon="search" color="white" class="jijiiw" full-width	solo ></mu-text-field>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
        value1:"",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jijiiw{
    color: white;
    
}
</style>
