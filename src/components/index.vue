<template>
  <div id="index">
   <Header></Header>
    <luobuo></luobuo>

    <div class="sdwewe">
        <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="wc" color="pink"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">魔法匹配</p>    
             
          </mu-flex>
        </div>
        <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="photo" color="green"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">壁纸党</p>    
           
          </mu-flex>
        </div>
         <div class="jodisw" @click="lqgw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="shopping_cart" color="yellow"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">领券购物</p>    
         
          </mu-flex>
        </div>
         <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="import_contacts" color="pink"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">Get 技能</p>    
     
          </mu-flex>
        </div>
         <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="toys" color="orange"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">有奖竞猜</p>    
     
          </mu-flex>
        </div>
         <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="home" color="blue"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">上首页</p>    
     
          </mu-flex>
        </div>
         <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="mail" color="deepPurple500"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">最新公告</p>    
     
          </mu-flex>
        </div>
         <div class="jodisw">
          <mu-flex class="dsjiowi" align-items="center" justify-content="center" wrap="wrap">
              <mu-icon value="attach_money" color="#1de9b6"></mu-icon>
               <p class="oiowee" style="margin:0px 5px">悬赏部</p>    
     
          </mu-flex>
        </div>

    </div>


      <!--  -->
  <mu-carousel transition="fade" class="jioiwje" hide-indicators = "ture" hide-controls="ture">
  <mu-carousel-item class="iiowsse">
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item class="iiowsse">
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item class="iiowsse">
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item class="iiowsse">
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
<!--  -->

<mu-grid-list class="gridlist-inline-demo" style="margin:0px" :cols="2">
  <div class= "jjsdfw" v-for="tile, index in gglist" :key="index">
    <img :src="tile.imgurl" >
  </div>
</mu-grid-list>


    <div class="joijods"></div>

    <buttonbar></buttonbar>
  </div>
</template>

<script>
    import Header from './zujian/header.vue'
    import buttonbar from './zujian/buttonbar.vue'
    import luobuo from './zujian/lunbuo.vue'
    import axios from "axios"



import carouselImg1 from '../assets/images/carousel2.35ee0e24 (1).jpg';
import carouselImg2 from '../assets/images/carousel2.35ee0e24 (1).jpg';
import carouselImg3 from '../assets/images/carousel2.35ee0e24 (1).jpg';
import carouselImg4 from '../assets/images/carousel2.35ee0e24 (1).jpg';
export default {
  name: 'index',
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4,
      gglist:"",
    }
  },
  components:{
      Header,
      buttonbar,

      luobuo
   
  },
  created() {
    // 查询广告位
     let data = "type=1"
      axios.post("http://localhost/auto/autohou/lunbo.php",data)
      .then(res => {
        console.log(res)
        this.gglist = res.data.data
      })
      .catch(err => {
        console.error(err); 
      })
  },
  mounted() {
  console.log(localStorage["id"]);
    if (localStorage["id"]) {
      // 获取用户信息
        axios.get("http://localhost/auto/autohou/otherlogin.php",{
          params:{
            type: 1,
            id:localStorage["id"],
           
          }
        })
        .then(res => {
          console.log(res.data.data[0])
          this.$store.state.wodexx = res.data.data [0]
          let nowdate = Date.now()
          if (nowdate > res.data.data[0].times) {
              localStorage.clear();
          }
        })
        .catch(err => {
          console.error(err); 
        })



    }




  },
  beforeCreate() {
    
      this.$store.state.shifts = "home"

  },
  methods: {
   lqgw(){
     this.$router.push("/lqgw")
   }
   
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
.jodisw{
  width: 25%;
  padding: 15px;
  display: inline-block;
  box-sizing: border-box;
   font-size: 20px;
   background: white;
}
.sdwewe{
  font-size: 0px;
}
.jisoi{
  position: absolute;
  right: 0px;
}
.dsjiowi{
  position: relative;
}
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
  height: 50px;
}
.jioiwje{
  height: 100px;
  margin: 15px 0px;
}
.iiowsse img{
  width: 100%;
}
.jjsdfw{
  border: 1px solid gainsboro;
  margin: 5px;
  max-width: 70%;
  min-width: 60%;
}
.jjsdfw img {
  width: 100%;
}
.gridlist-inline-demo {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
.joijods{
  height: 50px;
}
.oiowee{
  font-size: 12px;
  margin-top: 7px !important;
  width: 100%;
  text-align: center
}
</style>
