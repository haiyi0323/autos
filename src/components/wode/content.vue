<template>
  <div class="wodecontent">

<label  for="backgr" class="jisodf" @click="background">
 <img class="jijoidf" src="../../assets/images/carousel1.jpg" alt="">

      <input v-show="show" type="file" id="backgr" @change="chooses">
   <mu-flex class="flex-wrapper  fdsfdsfs" justify-content="center" >
     <router-link  :to= "this.tiao" tag="a">
 <mu-avatar :size="size" >
      <img :src="img">
    </mu-avatar>
   </router-link>
    </mu-flex>

 
   <mu-flex class="flex-wrapper fdsfdsfs1" justify-content="center"><h3 class="ioiwed">{{info.nickname}}</h3></mu-flex>

 <div class="flex-wrapper fdsfdsfs2" >
    <router-link  :to= "this.tiao" tag="a" style=" color :white">
   <p class="ioiwed">{{"性别："+info.sex}}</p> 
    <p class="ioiwed sdfsdfr"> {{"简介："+info.jianjie}}</p>
      </router-link>
   </div>
 <div class="flex-wrapper fdsfdsfs3" >
    <router-link  :to= "this.tiao" tag="a" style=" color :white">
   <p class="ioiwed2">{{"LV："+info.dj}}</p> 
    <p class="ioiwed2 "> {{"粉丝："+info.fans}}</p>
        </router-link>
   </div>


  <mu-button icon  class="jijsdifw" @click="back">
          <mu-icon value="keyboard_backspace"></mu-icon>
        </mu-button>
  </mu-button>
</label>





<!--  -->
  <mu-tabs :value.sync="active3" class="jiosdf" style="height:45px" center color="pink" full-width>
    <mu-tab>
      <mu-icon value="photo" ripple></mu-icon>

      

    </mu-tab>
    <mu-tab  @click="postblog()">
      <mu-icon value="subtitles" ripple></mu-icon>

    </mu-tab>
    <mu-tab>
      <mu-icon value="dashboard" ripple></mu-icon>

    </mu-tab>
  </mu-tabs>
 
  <div class="demo-text dfsdfgr" v-if="active3 === 0">

   
        <mu-button class="jjijs" fab color="teal" @click="addpic">
            <mu-icon value="add"></mu-icon>
            </mu-button>

               <input type="file" id="addpic" v-show="false" @change="postit">

        <mu-paper class="jisdofrr" v-for="tile, index in list" :key="index">
               <!-- 隐藏id -->
           <span v-show="false" >{{tile.id}}</span>
           <img class="imgsa" :src="tile.pic">
           

              
                 <!-- 赞和收藏 -->

                 <div class="lliew">
                   <mu-button flat color="white" class="zana" @click="zan()">
                 
                 <mu-icon  value="thumb_up"></mu-icon>
           <div class="kkowe">
              {{tile.zan}}
           </div>
                
         
                   
                   </mu-button>
                    <mu-button flat color="white" class="zana" @click="shoucang()">
                  <mu-icon  value="grade"></mu-icon>
                      <div class="kkowe">
                  {{tile.star}}
                      </div>
                    </mu-button>
                 </div>
        </mu-paper>

        <div class="imgkkk"></div>

   

  </div>
  <div class="demo-text" v-if="active3 === 1">

      <mu-grid-list class="gridlist-demo">
        <mu-button class="jjijs" fab color="teal" @click="addblog">
            <mu-icon value="add"></mu-icon>
             </mu-button>

               
        <mu-paper  class="fjiwewr" v-for="tile, index in blog" :key="index">
          <img :src="tile.plid" >
          <div class="cont">
                <p class="titles"><div style=" width:55%; display:inline-block; padding-left:10px; font-size:24px;overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap">{{tile.title}}</div> <span class="aut">{{"作者："+tile.antuer}}</span> </p>
          </div>


          <div class="jioaas">
 <mu-button class="margn" slot="action" icon >
            <mu-icon value="star_border"></mu-icon>
            
          </mu-button>
             <div class="margn sdfssd">
            {{tile.star}}
                </div>
         <mu-button class="margn" slot="action" icon>
            <mu-icon value="favorite_border"></mu-icon>
             
          </mu-button>
            <div class="margn  sdfssd">
            {{tile.shoucang}}
               </div>

            <mu-button class="margn" slot="action" icon>
            <mu-icon value="chat_bubble_outline"></mu-icon>
          
  

          </mu-button>
            <div class="margn sdfssd">
          {{tile.pinglun}}

            </div>
            <div class="data">
              {{"时间："+tile.times}}
            </div>
          </div>
         
            
           
        </mu-paper>
      </mu-grid-list>

       
  </div>
  <div class="demo-text" v-if="active3 === 2">
    
  </div>


  <!--  -->
      <fottere></fottere>
  </div>
</template>

<script>
import fottere from '../zujian/buttonbar'
import axios from 'axios'

// 


import breakfast from '../../assets/images/carousel1.jpg';
import burger from '../../assets/images/carousel1.jpg';
import camera from '../../assets/images/carousel1.jpg';
import hats from '../../assets/images/carousel1.jpg';
import honey from '../../assets/images/carousel1.jpg';
import morning from '../../assets/images/carousel1.jpg';
import vegetables from '../../assets/images/carousel1.jpg';
import waterPlant from '../../assets/images/carousel1.jpg';
export default {
  name: 'wodecontent',
  data () {
    return {
         changed:false,
         false:this.$store.state.false,
         size:70,
         active3: 0,
         pl:"/resong",
         show:false,
         list: this.$store.state.list,
         blog:this.$store.state.blog,
         tiao:"/logn",
         img:this.$store.state.img,
         name:"请登录",
         info:'',
         shifts:"wd"
    }
  },
  components:{
    fottere,

  },

  created() {
      if ( localStorage['id']) {
          this.tiao ="/info"  
      
          let data ="type=2"+"&id="+localStorage['id']
          axios.post("http://localhost/auto/autohou/updatainfo.php",data)
          .then(res => {
            console.log(res.data.data[0])
                this.img =res.data.data[0].headimg
               
                 this.info = res.data.data[0];
              this.updatalist()

          })
          .catch(err => {
            console.error(err); 
          })
       
        


      }

      this.$store.state.shifts = this.shifts
  },

  updated() {

  
    if (this.changed) {
      let data1 = "type=2"+"&id="+localStorage['id']
        axios.post("http://localhost/auto/autohou/postpic.php",data1)
        .then(res => {
          console.log(res.data.data)
          this.list = res.data.data
          this.changed = false
        })
        .catch(err => {
          console.error(err); 
        })

    }
      
     
  
      
  },
  methods: {


    addblog(){
        this.$router.push({ name: 'addblog', params: { userId: localStorage["id"] }})
    },
    background(){
        document.getElementsByClassName("jisodf")[0]
    },
    chooses(){
    let formdata = new FormData();
      var pic =window.pic = document.getElementById("backgr").files[0];
      console.log(pic);

       // FileRender类  渲染类
  var reader = new FileReader();
  reader.readAsDataURL(pic)
   console.log(reader)

     reader.onload = function(){
  var fdsfe = document.querySelector('label[for="backgr"]')
      console.log(fdsfe);
      
    
 
    
     
   }
    
  },
  postblog(){
    let data = "type=5"+"&id="+localStorage['id']
    axios.post("http://localhost/auto/autohou/postpic.php",data)
    .then(res => {


      console.log(res)
      this.blog = res.data.data
    })
    .catch(err => {
      console.error(err); 
    })
  },
  addpic:function() {
      document.getElementById("addpic").click()
      // console.log("ooo");
      
  },
  postit (){

        this.changed = true;
      let a = document.getElementById("addpic").files[0];
      console.log(a);
      
      let data = new FormData();
      data.append("pic", a)
      data.append("type", 1)
      data.append("id",localStorage["id"]);
      axios.post("http://localhost/auto/autohou/postpic.php",data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err); 
      })

      this.updatalist()

  },back(){
    this.$router.go(-1)
  },
  zan(){
        console.log(this);
      // let data2 =  "type=2"+"&id="+localStorage['id'] +"picid =" +
      // axios.post("http://localhost/auto/autohou/postpic.php",data2)
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.error(err); 
      // })
  },
  shoucang(){

  },
   updatalist: function () {
        let data1 = "type=2"+"&id="+localStorage['id']
        axios.post("http://localhost/auto/autohou/postpic.php",data1)
        .then(res => {
          console.log(res.data.data)
          this.list = res.data.data
        })
        .catch(err => {
          console.error(err); 
        })
    }
  },

  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.jisodf{
  overflow: hidden;
  height: 208px;
  box-sizing: border-box;
  display: block;
  position: relative;
}
.jisodf .jijoidf{
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  filter: blur(10px);
}
.demo-text{
  padding: 10px;
  height: 530px;
  overflow: auto;
}
.wodecontent{
  background: white;
}
.flex-wrapper{
  z-index: 888;
}
.fdsfdsfs{
 position: absolute;
  top: 25px;
  left: calc(50% - 35px);
}
.fdsfdsfs1{
  width: 100px;
 position: absolute;
   top: 100px;
  left: calc(50% - 50px);
  color: white;
}
.fdsfdsfs2{
  width: 100%;
 position: absolute;
   top: 120px;
   padding: 0px 15px;
  color: white;
}

.fdsfdsfs3{

 position: absolute;
   top: 20px;
   right: 20px;

  color: white ;
}
.jijsdifw{
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 888;
  color: white;
}
.mu-avatar  {
  border: 3px solid rgba(255, 255, 255, 0.822);
}
.demo-text{
  padding: 0px;
}
.jisdofrr{
  width: 50%;
  display: inline-block;
  font-size: 0px;
  padding: 0px;
  margin:0px;
  vertical-align: top;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.jisdofrr img{
height: 100%;
}
.mu-grid-tile-titlebar{
  background-color: transparent !important;
  height: 10px;
}
.jjijs{
  position: fixed;
  bottom: 70px;
  right: 20px;
  z-index: 8955;
}
.fjiwewr{
  border-bottom: 1px solid rgb(121, 121, 121);
}
.fjiwewr img{
 width: 100%;
}
.gridlist-demo{
  margin:  0px !important
}
.lliew{
  background: rgba(0, 0, 0, 0.452);
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  vertical-align: bottom;
}
.zana{
  vertical-align: bottom;
  height: 100%;
}
.imgsa{
  width: 100%;
}
.kkowe{
  margin-left: 6px
}
.dfsdfgr{
  min-height: 600px;
}
.margn{
  margin-left: 5px;
  display: inline-block;
}
.sdfssd{
  height: 100%;
  vertical-align: top;
  font-size: 20px;
  line-height: 50px;
}
.jioaas{
  width: 100%;
  height: 50px;
  position: relative;
}
.titles{
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  padding: 0px 15px
}
.aut{
  font-size: 14px;
  float: right;
  color: gray;
  margin-right: 10px
}
.data{
  display: inline-block;
  position: absolute;
  right: 15px;
  bottom: 8px;
  font-size: 16px;
  color: gray;
}
.ioiwed{
  margin: 0px;
}
.ioiwed2{
  margin: 0px;
  font-size: 16px
}
.sdfsdfr{
  height: 60px;
 overflow: hidden;
-webkit-line-clamp: 3; 
-webkit-box-orient: vertical;
display: -webkit-box;
}
.imgkkk{
  height: 65px;
}
</style>
