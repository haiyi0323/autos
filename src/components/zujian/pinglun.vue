<template>
  <div class="pinglun">
        <mu-flex class="jijs">
            <p class="pl">
                评论：
            </p>
      <mu-text-field v-model="input"></mu-text-field>
        <mu-button flat  class="jisosd">
            <mu-icon value="send"></mu-icon>
        </mu-button>
        </mu-flex>
  </div>
</template>

<script>
export default {
  name: 'pinglun',
  data () {
    return {
            input:""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jijs{
    height: 50px;
    background: white;
    position: fixed;
    bottom: 0px ;
    width: 100%;
    padding: 0px 10px;
}
.jiose{

    height: 50px !important;
}
.pl{
    display: inline-block;

}
.jisosd{
   min-width: 30px;
   height: 100%;
    position: absolute;
    right: 0px;
}

</style>
