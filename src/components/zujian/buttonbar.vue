<template>
  <div class="button-bar">
   
  <mu-bottom-nav :value.sync="shifts" >
    <mu-bottom-nav-item value="home" title="首页" icon="home" to="/"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="ziyuan" to="/jiaoben" title="资源" icon="group_work"></mu-bottom-nav-item>
    <mu-bottom-nav-item to="/gc" value="gc" title="广场" icon="location_city"></mu-bottom-nav-item>
    <mu-bottom-nav-item value="wd" title="用户" icon="person" to="/wode"></mu-bottom-nav-item>
  </mu-bottom-nav>

  </div>
</template>

<script>
export default {
  name: 'button-bar',
  data () {
    return {
      shifts:this.$store.state.shifts
    }
  },

  methods: {
 
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-bar{
  position: fixed;
  bottom: 0px;
      width: 100%;
}
</style>
