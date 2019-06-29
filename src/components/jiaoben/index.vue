<template>
  <div class="jiaoben">


   <mu-appbar class="fdfsdf" style="width: 100%; z-index:8888" color="primary">
  <mu-button icon slot="left">
    <mu-icon value="menu"></mu-icon>
  </mu-button>
    Atomahc
  <mu-button flat slot="right">
          <mu-icon value="archive"></mu-icon>
  </mu-button>

  <mu-button flat slot="right">

    <mu-icon value="add"></mu-icon>
  </mu-button>
</mu-appbar>
<!--  -->

<mu-container class="fdsfds">
  <mu-tabs :value.sync="active2" color="white" indicator-color="black" full-width>
    <mu-tab class="fsdfdsr">精选</mu-tab>
    <mu-tab class="fsdfdsr" @click="xrfl">分区</mu-tab>
  
  </mu-tabs>
  <div class="demo-text" v-if="active2 === 0">
     <mu-sub-header class="joiweg">猜你喜欢</mu-sub-header>
  <mu-grid-list class="gridlist-inline-demo" :cols="2" style="margin:0px;">


  <div class= "jjsdfw" v-for="tile, index in list" :key="index">
    <img :src="tile" >
       <mu-list-item-title class="jioweggr">软件</mu-list-item-title>
  </div>
</mu-grid-list>
    <!--  -->
     <mu-sub-header  class="joiweg">最新上线</mu-sub-header>
  <mu-grid-list class="gridlist-inline-demo" :cols="2" style="margin:0px;">


  <div class= "jjsdfw" v-for="tile, index in list" :key="index">
    <img :src="tile" >
   <mu-list-item-title class="jioweggr">软件</mu-list-item-title>
  </div>
</mu-grid-list>
<!-- 好软畅玩 -->

   <mu-sub-header  class="joiweg">好软畅玩</mu-sub-header>
      <mu-list textline="three-line" class="joijwe">
    <!-- <mu-sub-header>今天</mu-sub-header> -->
    <mu-list-item avatar :ripple="false" button class="fsdfw">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/logo.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>这个周末一起吃饭么?</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">Myron Liu -</span> 周末要来你这里出差，要不要一起吃个饭呀，实在编不下去了,哈哈哈哈哈哈
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button class="fsdfw">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/logo.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>Alex Qin</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">看电影啊</span><br/>
          我们去看电影，最近有部烂片上映，又有吐槽的了
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button class="fsdfw">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/logo.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>LOL</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
          周末一起 LOL
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
    <mu-divider></mu-divider>
    <mu-list-item avatar :ripple="false" button class="fsdfw">
      <mu-list-item-action>
        <mu-avatar>
          <img src="../../assets/logo.png">
        </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        <mu-list-item-title>LOL</mu-list-item-title>
        <mu-list-item-sub-title>
          <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/>
          实在编不下去，这就是个demo
        </mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
  </mu-list>
    
    
  </div>
  <div class="demo-text" v-if="active2 === 1">

      <mu-grid-list class="gridlist-demo"  style="margin: 0px">
       
        <mu-flex align-items="center" class="fdsdsf" v-for="tile, index in this.$store.state.fl" :key="index" >
          <router-link class="d-flex flex-row justify-content-start align-items-center " :to="tile.router" tag="div">
          <img :src="tile.image" class="koosde">
          <p class="kkosdf" >{{tile.name}}
                  <mu-icon class="jisjdf" value="chevron_right"></mu-icon>
          </p>
         </router-link>
        </mu-flex>
      </mu-grid-list>
  </div>
 
</mu-container>




      <bottoms></bottoms>

  </div>
</template>

<script>
import bottoms from '../zujian/buttonbar'
import axios from 'axios'
import breakfast from '../../assets/images/carousel1.jpg'
export default {
  name: 'jiaoben',
  data () {
    return {
  active2: 0,
  shifts:"ziyuan",
   list: [
      breakfast,breakfast,breakfast,breakfast,breakfast
   ]
    }
  },
  created() {
      this.$store.state.shifts = this.shifts
  },
  components:{
    bottoms
  },
  methods: {
    xrfl :function () {

      let data ="type=0"
      axios.post("http://localhost/auto/autohou/fl.php",data)
      .then(res => {
        console.log(res)

        this.$store.state.fl = res.data.data
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
  .fdfsdf{
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .fdsfds{
      padding: 56px 0px;
    
  }
  .fsdfdsr{
color: black;
height: 40px;
  }
  .demo-text{
    min-height: 500px;
box-sizing: border-box;

  }
  .koosde{
    width: 30%;
  }
  .kkosdf{
    width: 70%;
    display:inline-block;
  }
  .fdsdsf{
    display: inline-block;
    width: 50%;
    padding: 15px;
    background: white;
    border: 1px solid rgb(240, 240, 240);
    box-sizing: border-box;
  }
  .kkosdf{
    margin-left: 10px;
    font-size: 16px
  }
  .gridlist-demo{
    border-top: 1px solid  rgb(241, 241, 241);
    box-sizing: border-box;
  }
  .jisjdf{
    float: right;
  }
  .gridlist-inline-demo {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background: white;
  padding: 10px;
    margin-bottom: 10px !important;

}
.jjsdfw{

  margin: 5px;
  max-width: 25%;
  min-width: 25%;
}
.jjsdfw img {
  width: 100%;
  vertical-align: top;
}
.jioweggr{
  margin-top: 10px
}
.joiweg{
  background: white;
  border-bottom: 1px solid rgb(221, 221, 221);
  color: black;

}
.fsdfw{
  background: white;
}
.joijwe{
  padding: 0px;
}
</style>
