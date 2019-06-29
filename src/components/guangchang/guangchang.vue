<template>
  <div class="guangchang">
     <headers :kaiguan="open" :title="lll" :kaiguan2="kaiguan2" kaiguan3="!kaiguan3" :icon="icon" :resgn2="resgn2"></headers>
    <!-- 卡片 -->
    <div class="kkoiss"></div>



    <div class="kkksd" v-for="item ,index in this.$store.state.gclist">
<mu-card style="width: 100%;  margin: 0 auto;">
  <mu-card-header v-if="item.title" :title="item.antuer" :sub-title="item.timess">
    <mu-avatar slot="avatar">
      <img :src="item.headimg">
    </mu-avatar>
  </mu-card-header>

   <mu-card-header v-else :title="item.nickname" :sub-title="item.timedata">
    <mu-avatar slot="avatar">
      <img :src="item.headimg">
    </mu-avatar>
  </mu-card-header>


  <mu-card-media  v-if="item.title">
    <img :src="item.plid">
  </mu-card-media>
  <mu-card-title  v-if="item.title" :title="item.title" :sub-title="item.contect"></mu-card-title>
   <mu-card-title  v-else :title=" '亲爱的'+item.nickname +'已签到'"  ></mu-card-title>
  <mu-card-text>

  </mu-card-text>
  <mu-card-actions>
    <mu-button flat>点赞</mu-button>
    <mu-button flat>收藏</mu-button>
    <mu-button flat>留言</mu-button>
  </mu-card-actions>
</mu-card>

    </div>

<!--  -->

 <mu-button class="jjijs" fab color="teal"  small @click="zhanshi">
    <mu-icon value="add"></mu-icon>
  </mu-button>
  <div v-show="error" class="trant">
 <mu-flex class="jjijs1 trant" v-show="error" @click="qiandao">
     <p class="fdsfwr">签到</p> 
 <mu-button  fab color="teal" :color="color1" small >
    <mu-icon value="create"></mu-icon>
  </mu-button>
 
  </mu-flex>

  <mu-flex class="jjijs2 trant" align-items="center" v-show="error" @click="sdfsda">
     <p class="fdsfwr">报告</p> 
  <mu-button  fab color="teal" :color="color2" small >
    <mu-icon value="dvr"></mu-icon>
  </mu-button>
  </mu-flex>
 
  <mu-flex  class="jjijs3 trant" align-items="center" v-show="error">
      <p class="fdsfwr">日志</p>  
 <mu-button fab color="teal" :color="color3" small >
    <mu-icon value="assignment"></mu-icon>
  </mu-button>
  </mu-flex>
  
  <mu-flex class="jjijs4 trant" align-items="center" v-show="error" @click="file">
    <p class="fdsfwr">文件</p> 
   <mu-button  fab color="teal" :color="color4" small >
    <mu-icon value="folder_open"></mu-icon>
  </mu-button>
  </mu-flex >
  </div>
 
  
    <div class="kkoiss"></div>
      <butter></butter>
  </div>
</template>

<script>
import butter from '../zujian/buttonbar'
import headers from '../quanju/backheader'
import axios from 'axios'

var allpath = [];
function bianli(arr) {
  for (let i = 0; i < arr.length; i++) {
    var allpath = [];
     let newarr =[];
      let obj={};

      if (arr[i].types == 1) {
        console.log("是签到");
          // 获取用户信息
      let data5 ="type=11&id="+arr[i].userid
       axios.post("http://localhost/auto/autohou/postpic.php",data5)
      .then(res => {
        allpath.push(res.data.data[0])
      })
      .catch(err => {
        console.error(err); 
      })
        
    } else if (arr[i].types == 2) {
      
     
      console.log("是blog");
//  获取博客信息
      let data4 ="type=8&oder="+arr[i].oder
      axios.post("http://localhost/auto/autohou/postpic.php",data4)
      .then(res => {
      
        newarr.push(res.data.data[0])
     
      })
      .catch(err => {
        console.error(err); 
      })
   // 获取用户信息
      let data5 ="type=9&id="+arr[i].userid
       axios.post("http://localhost/auto/autohou/postpic.php",data5)
      .then(res => {
       
        newarr.push(res.data.data[0])
       //渲染
       obj = Object.assign(newarr[0],newarr[1]);
      //  合并对象
      console.log(obj);
      
      //  插入

            allpath.push(obj)

      })
      .catch(err => {
        console.error(err); 
      })

    }
 
  }

  console.log(allpath);
  
  vm.$store.commit("gclistpush",allpath)
    

}



export default {

  name: 'guangchang',
  data () {
    return {
        error:false,
        color1:"#ff80ab",
        color2:"#4fc3f7",
        color3:"#ffb74d",
        color4:"#7e57c2",

        open:false,
        lll:"广场",
        icon:"message",
        kaiguan2:false,
        kaiguan3:false,
        resgn2:"/mseg",
        gclist:"",
        shifts:"gc"
   
    }
  },
 created() {
      this.$store.state.shifts = this.shifts
  },
  mounted() {

      var data = "type=7"
    axios.post("http://localhost/auto/autohou/postpic.php",data)
    .then(res => {
      console.log(res)
        bianli(res.data.data)
    })
    .catch(err => {
      console.error(err); 
    })
  },
  computed: {
    
  },
  components:{
      butter,
      headers,
  },
  methods: {
    zhanshi(){
        if (  this.error == false) {
          this.error = true
      }else{
        this.error = false
      }
      
    },

    file(){
        this.$router.push("/file")
    },
    sdfsda(){
      this.$router.push("/addblog")
      
    },
    qiandao(){

     var d = new Date();
     var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      let data ="id="+localStorage["id"]+"&type=10&types=1&times="+str
      axios.post("http://localhost/auto/autohou/postpic.php",data)
      .then(res => {
        console.log(res)
        



      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .kkksd{
    padding: 70px 0px;
} */
.jjijs{
  position: fixed;
  bottom: 70px;
  right: 20px;
}
.jjijs1{
    position: fixed;
  bottom: 120px;
  right: 20px;
  
}
.jjijs2{
    position: fixed;
  bottom: 170px;
  right: 20px;
}
.jjijs3{
    position: fixed;
  bottom: 220px;
  right: 20px;
}
.jjijs4{
  position: fixed;
  bottom: 270px;
  right: 20px;
}
.fdsfwr{
  margin: 0px 20px;
  color: rgb(0, 0, 0);
}
.trant{
  transition-duration: 3s;
/*     以下三值为默认值，稍后会详细介绍 */
    transition-property: all;
    transition-timing-function: ease;
    transition-delay: 0s;
}
.kkoiss{
  height: 50px;
}
</style>
