<template>
  <div class="backheader">
<mu-appbar style="width: 100%;" color="primary">
  <mu-button  icon slot="left" @click="back">
    <mu-icon v-if="kaiguan" value="keyboard_backspace"></mu-icon>
  </mu-button>
{{title}}

  <mu-button v-if="kaiguan2"flat slot="right"  @click="this.click" :to="this.resgn" tag="a">{{pars}}</mu-button>

   <mu-button v-if="kaiguan3" tag="a" icon flat slot="right"  :to="this.resgn2" >
        <mu-icon :value="this.icon"></mu-icon>
   </mu-button>
</mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'backheader',
  data () {
    return {
        
    }
  },
  props:["title","pars","resgn","kaiguan","kaiguan2","kaiguan3","icon","resgn2","click"],
  methods: {
      back(){
          this.$router.go(-1)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.backheader{
    text-align: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 88888;
}
</style>
