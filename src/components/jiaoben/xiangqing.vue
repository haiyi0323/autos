<template>
  <div class="xiangqing">
  <bottoms  :pars="kkk"   :icon="icon"  color="red" :kaiguan="!opens" :kaiguan2="kaiguan2" :kaiguan3="!kaiguan3"></bottoms>
    <div class="mksdk"></div>
    <!--  -->
 
  <div class="jiosie">
    <mu-flex class="jisodf" justify-content = center>
       <div class="imgk">
           <img :src="this.$store.state.jbxq.app_logo">
      </div>
    </mu-flex>
    <mu-flex justify-content = center>
         <h3 style="margin:10px 0px;">{{this.$store.state.jbxq.app_nick}}</h3>
    </mu-flex>
     <mu-flex justify-content = center>
         <p style="margin: 0px;">
           {{this.$store.state.jbxq.shou}}收藏 
            {{this.$store.state.jbxq.pin}}评论  
            {{this.$store.state.jbxq.dow}}下载</p>
    </mu-flex>
     <mu-flex justify-content = center>
       <a :href="this.$store.state.jbxq.app_file" :download="this.$store.state.jbxq.app_nick">
            <mu-button class="buttow" color="primary">下载</mu-button>
       </a>
 
  <mu-button class="buttow" color="secondary">收藏</mu-button>
  <mu-button class="buttow" color="success">捐赠</mu-button>
    </mu-flex>
      </div>
    <!--  -->
        <mu-list>
    <mu-list-item  avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img :src=" this.$store.state.antuer.headimg">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
      <mu-list-item-title>开发者:{{this.$store.state.jbxq.antuer}}</mu-list-item-title>
   
        </mu-list-item-content>
      <mu-list-item-action>
        <mu-icon value="chevron_right"></mu-icon>
      </mu-list-item-action>
      
    </mu-list-item>
<!--  -->

    <mu-grid-list class="gridlist-inline-demo" :cols="2">
  <div class= "jjsdfw" v-for="tile, index in this.$store.state.lunbo" :key="index">
    <img :src="tile" >
  </div>
</mu-grid-list>
<!--  -->
      <mu-sub-header>相关信息</mu-sub-header>
  <mu-list-item class="dfjsdii" avatar button :ripple="false">

       <mu-list-item-action>
             <mu-icon value="adb"></mu-icon>
           </mu-list-item-action>
             <mu-list-item-content>
      <mu-list-item-title>
        当前版本 ： {{this.$store.state.jbxq.app_ver}}
      </mu-list-item-title>
   
        </mu-list-item-content>
        
              
      </mu-list-item>
        <mu-list-item class="dfjsdii" avatar button :ripple="false">

       <mu-list-item-action>
             <mu-icon value="restore"></mu-icon>
           </mu-list-item-action>
             <mu-list-item-content>
      <mu-list-item-title>
        最后更新时间 ： {{this.$store.state.jbxq.times}}
      </mu-list-item-title>
   
        </mu-list-item-content>
        
              
      </mu-list-item>
        <mu-list-item class="dfjsdii" avatar button :ripple="false">

       <mu-list-item-action>
             <mu-icon value="recent_actors"></mu-icon>
           </mu-list-item-action>
             <mu-list-item-content>
      <mu-list-item-title>
        作者联系方式 ： {{this.$store.state.jbxq.app_phone}}
      </mu-list-item-title>
   
        </mu-list-item-content>
        
              
      </mu-list-item>
       <mu-sub-header>说明文档</mu-sub-header>
       <mu-flex class="dfjsdi jjiodsf" avatar button :ripple="false">

      
    
     <p style="margin:0px">
      {{this.$store.state.jbxq.app_rm}}
   
   </p>
        
              
      </mu-flex>

  </mu-list>
  <mu-flex>
      <div class="fullw">
               <mu-list style="border-bottom :1px solid gainsboro;padding-bottom:0px">
    <mu-list-item  avatar button :ripple="false">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/logo.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
      <mu-list-item-title>小红</mu-list-item-title>
        <mu-list-item-sub-title>2019-5-21</mu-list-item-sub-title>
        </mu-list-item-content>
  
      
    </mu-list-item>

     <mu-list-item  avatar button :ripple="false">
     
      <mu-list-item-content class="dfsfsdf jjiodsf">
        <p>
             材料图标是令人愉快的，精美的符号，用于常见操作和项目。在桌面上下载以在Android，iOS和Web的数字产品中使用它们。
             </p>
      </mu-list-item-content>

    </mu-list-item>

<mu-flex class="fdsfsd" justify-content = "center">
           <mu-button  flat > 
      <mu-icon value="favorite_border" color="#bdbdbd"></mu-icon>
     </mu-button>

     <mu-button  flat >
      <mu-icon value="star_border" color="#bdbdbd"></mu-icon>
      </mu-button>
   
        <mu-button  flat >
      <mu-icon value="share" color="#bdbdbd"></mu-icon>
     </mu-button>
      </mu-flex>

               </mu-list>
      </div>
      

  </mu-flex>

  


  <div class="mksdk"></div>
  <pinglun></pinglun>
</div>

</template>

<script>
import bottoms from '../quanju/backheader'
import pinglun from '../zujian/pinglun'
import axios from 'axios'
export default {
  name: 'xiangqing',
  data () {
    return {
      color:"green",
      open:false,
      kkk:"发布",
      title:"",
      opens:false,
      kaiguan2:false,
      kaiguan3:false,
      icon:"more_vert",
      lunbo:[],

    }
  }
  ,components:{
    bottoms,
    pinglun
  },
  mounted() {
    let idarr = location.search.split("=");
    let id = idarr[1];
    console.log(id);
    let data ="type=3&id="+id
    axios.post("http://localhost/auto/autohou/file.php",data)
    .then(res => {
      console.log(res.data.data[0])
       
        this.$store.state.lunbo.push(res.data.data[0].img1)
        this.$store.state.lunbo.push(res.data.data[0].img2)
        this.$store.state.lunbo.push(res.data.data[0].img3)
        this.$store.state.lunbo.push(res.data.data[0].img4)
        this.$store.state.lunbo.push(res.data.data[0].img5)

      this.$store.state.jbxq = res.data.data[0]
      let data2 ="type=2&id="+res.data.data[0].userid
      axios.post("http://localhost/auto/autohou/updatainfo.php",data2)
      .then(res => {
        console.log(res.data.data[0])
         this.$store.state.antuer = res.data.data[0];

   
      })
      .catch(err => {
        console.error(err); 
      })
    })
    .catch(err => {
      console.error(err); 
    })
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mksdk{
  height: 50px;
}
.full{
  width: 100%;
}
.imgk{
  width: 60px;
  height: 60px;
  border-radius: 5px;
}
.imgk img {
  width: 100%
}
.jisodf{
  padding: 30px 0px 0px 0px;
}
.jiosie{
  border-bottom: 1px solid rgb(199, 199, 199);
  padding-bottom: 20px;
  background: white;
}
.dfjsdi{
   border-bottom: 1px solid rgb(199, 199, 199);
}
.buttow{
  margin:  5px;
}
.dfjsdii{
  height: 40px;
  font-size: 0.8rem;
}
.jjiodsf{
  padding: 20px 15px;
  text-indent: 2rem;
}
.gridlist-inline-demo {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
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
.fullw{
  width: 100%;
  border-bottom: 1px solid gainsboro;

}
.fdsfsd{
  background: white;
  margin: 20px 0px 0px 0px;

}
</style>
