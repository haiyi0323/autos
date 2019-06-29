<template>
  <div class="jiaobenqu">
      <bottoms :title=lll :pars="kkk"  :resgn2 ="routers" :icon="icon"  color="red" :kaiguan="!opens" :kaiguan2="kaiguan2" :kaiguan3="!kaiguan3"></bottoms>
      <div class="lkdi"></div>
<!--  -->
<mu-tabs :value.sync="active2" color="white" style="color:rgb(99, 99, 99)" indicator-color="yellow" full-width>
    <mu-tab>最新发布</mu-tab>
    <mu-tab>时下热门</mu-tab>
 
  </mu-tabs>
  <div class="demo-text" v-if="active2 === 0">
    
 <mu-list>
          <mu-list-item class="jios" v-for="items ,index in this.$store.state.jiaobenqub" :to="'/jbxq?id='+items.id"  >
               <mu-list-item-action @click="col">
        <mu-avatar class="imgkkk" >
          <img :src="items.app_logo">
        </mu-avatar>
      </mu-list-item-action>
            <mu-list-item-content @click="col">
              <mu-list-item-title class="titlef">  {{items.app_nick}}</mu-list-item-title>
                <mu-list-item-sub-title style="margin-top:5px">
          <span style="color: rgba(0, 0, 0, .87);font-size: 14px;">下载：{{items.dow}}</span>
     <span style="color: rgba(0, 0, 0, .87);font-size: 14px;">收藏：{{items.shou}}</span>
  <span style="color: rgba(0, 0, 0, .87);font-size: 14px;">评论：{{items.pin}}</span>
        </mu-list-item-sub-title>

            </mu-list-item-content>

            <mu-list-item-action >
        <!-- <mu-list-item-after-text>6 hr</mu-list-item-after-text> -->
         <mu-button color="success" class="dow">下载</mu-button>
      </mu-list-item-action>


          </mu-list-item >
     
          </mu-list>
  </div>
  <div class="demo-text" v-if="active2 === 1">
   
  </div>
 






      
  </div>
</template>

<script>
import bottoms from '../quanju/backheader'
import axios from 'axios'
export default {
  name: 'jiaobenqu',
  data () {
    return {
      color:"green",
      open:false,
      lll:"脚本专区",
      kkk:"发布",
      title:"",
      opens:false,
      kaiguan2:false,
       kaiguan3:false,
       routers:"/file",
       icon:"backup",
        active2: 0
    }
  },
  components:{
    bottoms

  },
  methods: {
      col(){
          console.log(location.search);
            
      },
      
    

  },
  computed: {
      
  },
  created() {
      let data = "type=2"
      axios.post("http://localhost/auto/autohou/file.php",data)
      .then(res => {
          console.log(res)
          this.$store.state.jiaobenqub = res.data.data;
      })
      .catch(err => {
          console.error(err); 
      })
  },
  updated() {
       
  },
}
</script>

<style scoped>
.lkdi{
    height: 50px;
}
.jios{
    background: white;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(187, 187, 187, 0.712);
}
.imgkkk{
    border-radius: 5px;
    width: 50px !important;
     height: 50px !important;
     margin-right: 12px;
     overflow: hidden;

}
.imgkkk img{
  border-radius: 0px;
}
.titlef{
    font-size: 18px;
    font-weight: bold;
}
.dow{
    min-width: 50px;
    height: 30px;
}
.demo-text {

  background: #fff;
}
.mu-tab-active{
  color:black;
}
</style>
