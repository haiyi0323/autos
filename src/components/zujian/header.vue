<template>
  <div class="Header">
 <mu-appbar class="jiwesdasw" style="width: 100%;" color="#f06292
">
  <div  slot="left" @click="open = !open" class="joijiw">
        <mu-avatar >
                  <img :src=" this.$store.state.wodexx.headimg">
       </mu-avatar>
  </div>
    <search ></search>
  <mu-menu slot="right">
     <mu-button icon>
      <mu-icon value="more_vert"></mu-icon>
    </mu-button>
    <mu-list slot="content">
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-content>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item-content>
      </mu-list-item>
    </mu-list>
  </mu-menu>
</mu-appbar>
<div class="jioiwe"></div>

   <mu-drawer :open.sync="open" :docked="docked" width="65%">
    <mu-list class="jiojsd">
        <div class="user" @click="userl">
              <mu-list-item class="dsdf">
      <mu-list-item-action>
                  <mu-avatar size =55 class="jisdoi">
                  <img :src="this.$store.state.wodexx.headimg">
                  </mu-avatar>
      </mu-list-item-action>
      <mu-list-item-content>
        
      </mu-list-item-content>
   <mu-list-item-action>
         <mu-button class="ijiowe" fab  small color="transparent" >
                <mu-icon value="account_balance_wallet"></mu-icon>
         </mu-button>  
   </mu-list-item-action>
              </mu-list-item>

     <mu-list-item class="fdsfwe">
        <mu-list-item-content style="color:white">
              <mu-list-item-title style="margin:3px 0px">{{this.$store.state.wodexx.nickname}}</mu-list-item-title>
              <mu-list-item-sub-title>b比 0 海币 0</mu-list-item-sub-title>
      </mu-list-item-content>
    </mu-list-item>
        </div>




      <mu-list-item button>
        <mu-list-item-title>开通会员</mu-list-item-title>
        <mu-list-item-action>
           <mu-icon value="navigate_next"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
      <mu-divider></mu-divider>



       <mu-flex class="joidfweww" justify-content ="center" align-items="center">
        <div class="joijoiw">
            <p class="sdfs"> 5</p>
            <p> 作品</p>
        </div>
        <div class="joijoiw">
              <p class="sdfs"> 58</p>
              <p> 粉丝</p>
        </div>
        <div class="joijoiw">
                <p class="sdfs"> 12</p>
                <p> 关注</p>
        </div>
      </mu-flex>


    <mu-divider></mu-divider>


      <mu-list-item button>
           <mu-list-item-action>
           <mu-icon value="cloud_download"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>下载管理</mu-list-item-title>
            <mu-list-item-action>
           <mu-icon value="navigate_next"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    
      <mu-list-item  button>
           <mu-list-item-action>
           <mu-icon value="assignment"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>我的订单</mu-list-item-title>
            <mu-list-item-action>
           <mu-icon value="navigate_next"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
        <mu-divider></mu-divider>
           <mu-list-item button>
           <mu-list-item-action>
           <mu-icon value="pets"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>个性主题</mu-list-item-title>
            <mu-list-item-action>
           <mu-icon value="navigate_next"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
         <mu-list-item button @click="gly">
           <mu-list-item-action>
           <mu-icon value="account_balance"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>管理员</mu-list-item-title>
            <mu-list-item-action>
           <mu-icon value="navigate_next"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
        <mu-divider></mu-divider>
          <mu-list-item  button>
               <mu-list-item-action>
           <mu-icon value="highlight_off"></mu-icon>
        </mu-list-item-action>
        <mu-list-item-title>退出登录</mu-list-item-title>
            <mu-list-item-action>
           <mu-icon value="navigate_next"></mu-icon>
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
  </mu-drawer>



  </div>
</template>

<script>
import search from './search'
export default {
  name: 'Header',
  data () {
    return {
          open:false,
        docked: false,
    }
  },
  mounted() {
  
      
  },
  methods: {
      userl(){
        this.$router.push("/wode")
      },
      gly(){
          this.$router.push("/gly")
      }
  },
  components:{
      search,
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{

  background: pink;
  padding-bottom: 10px
}
.jiojsd{
  padding-top: 0px;
}
.dsdf{
  padding: 20px 0px 15px 0px
}
.jisdoi{
  border:  2px solid rgb(255, 255, 255);

}
.ijiowe{
  width: 30px;
  height: 30px;
  border: 2px solid white;
  box-shadow: none;
}
.fdsfwe{
  color: white;
}
.joijoiw{
  width: 33.3333%;
  height: 70px;
  display: inline-block;
  font-size: 14px
}
.joijoiw p{
  margin: 0px;
  text-align: center;
}
.joidfweww{
  font-size: 0px;
}
.sdfs{
  margin-top: 10px  !important;
  font-size: 16px
}
.joijiw{
  padding-left: 10px;
  padding-top: 5px;
}
.jiwesdasw{
  position: fixed;
  top: 0px;
}
.jioiwe{
  height: 55px;
}
</style>
