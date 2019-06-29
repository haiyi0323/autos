<template>
  <div class="lqgw">
            <!-- <div class="jdio">
    <h2 class="title">
        大额优惠券
    </h2>
     
  </div> -->
 <headers :title=lll  :kaiguan="!opens" :kaiguan2="kaiguan2" :kaiguan3="!kaiguan3" :icon="icon"></headers>
  <div class="jiioi">

</div>
<mu-list textline="three-line" class="joijwe">
    <!-- <mu-sub-header>今天</mu-sub-header> -->


    <mu-list-item avatar :ripple="false" button class="fsdfw" v-for="item ,index in this.$store.state.qsj">
      <mu-list-item-action>
        <mu-avatar size="50" class="ijiowe">
          <img :src="item.zpic">
        </mu-avatar>
      </mu-list-item-action>


      <mu-list-item-content class="jioiwe">
        <mu-list-item-title class="joiwieore">{{item.title}}</mu-list-item-title>
        <mu-list-item-sub-title class="jiowiehhh">
          <span class="iojoewe"> {{'券后价' + item.quanhou}} </span> 
            <mu-button :href="item.hrefurl"  round class="jiojwef" color="success">领券</mu-button>
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  
   
  </mu-list>




  </div>
</template>

<script>
 import headers from '../quanju/backheader'
 import axios from 'axios'
export default {
   
  name: 'lqgw',
  data () {
    return {
    color:"green",
      lll:"领券购物",
      opens:false,
      kaiguan2:false,
       kaiguan3:false,
       icon:"local_play"
    }
  },
  components:{
      headers
  },
  created() {
      let data = "type=2"
      axios.post("http://localhost/auto/autohou/qsj.php",data)
      .then(res => {
        console.log(res)
        this. $store.state.qsj = res.data.data;
      })
      .catch(err => {
        console.error(err); 
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jdio{
  width: 100%;
  text-align: center;
  background: white;
  padding: 10px 0px;

}
.jdio .title{
  margin: 0px;
}
.jiioi{
  height: 58px;
}
.fsdfw{
    background: white;
    border: 1px solid rgb(240, 240, 240)
}
.joijwe{
    padding: 0px
}
.ijiowe{
  border-radius: 0px;
}
.jiojwef{
  min-width: 40px;
  height: 25px;
  float: right;
  margin-top: 5px;
}
.jiowiehhh{
  line-height: 2.6
}
.jioiwe{
  padding: 15px;
}
.iojoewe{
  color: red;
  font-weight: bold;
}
.joiwieore{
  font-weight: bold;
}
</style>
