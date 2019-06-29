<template>
  <div class="userlist">
        <hew :title=lll  :kaiguan="!opens" :kaiguan2="!kaiguan2" :kaiguan3="kaiguan3" :icon="icon" :pars="title" ></hew>
        <div class="josjd"></div>



        <div class="dfsdf">
            <!--  列表-->


              <mu-expansion-panel v-for="item,index in this.$store.state.usernicks">
    <div slot="header">
        <mu-flex align-items="center">
        <mu-avatar :size="size">
      <img :src="item.headimg">
    </mu-avatar>
            <div class="ljoiwe">{{item.nickname}}</div>
            <div class="ljoiwe1">{{item.signature}}</div>
        </mu-flex>
    </div>
        <div class="default">
            <mu-button  slot="action"flat color="primary" @click="feng($event)">封号/解封</mu-button>
            <mu-button slot="action" flat color="primary">评论处理</mu-button>
            <mu-button  slot="action"flat color="primary" @click="zuopin($event)">作品处理</mu-button>
          
        </div>


    <mu-dialog title="天降正义" width="360" :open.sync="openSimple">
        <p>{{usllid}}</p>
 <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="600000" label="10分钟"></mu-radio>
    <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="259200000" label="3天"></mu-radio>
    <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="1296000000" label="15天"></mu-radio>     
     <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="31536000000" label="1年"></mu-radio>    
       <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="315360000000" label="永久"></mu-radio>  
        <mu-radio v-model="labelPosition" style="margin-right: 16px;" value="0" label="解封"></mu-radio>  
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">立即判刑</mu-button>
  </mu-dialog>
  </mu-expansion-panel>


        </div>

         <mu-snackbar :color="color" :open.sync="open">
    <mu-icon left :value="icon"></mu-icon>
    {{message}}
    <mu-button flat slot="action" color="#fff" @click="open = false">关闭</mu-button>
  </mu-snackbar>



   <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
    <mu-appbar color="primary" :title=" this.usllname +'的作品'">
      <mu-button slot="left" icon @click="closeFullscreenDialog">
        <mu-icon value="close"></mu-icon>
      </mu-button>
      <mu-button slot="right" flat  @click="closeFullscreenDialog">
        Done
      </mu-button>
    </mu-appbar>
    <div style="padding: 24px;">
    <mu-expansion-panel v-for="item,index in zpj">
    <div slot="header">
         <mu-flex align-items="center">
        <mu-avatar :size="size">
      <img :src="item.app_logo">
    </mu-avatar>
            <div class="ljoiwe">{{item.app_nick}}</div>
               <div class="ljoiwe1">{{item.id}}</div>
        </mu-flex>
           
    </div>
      <mu-button  flat color="primary" >过审</mu-button>
            <mu-button  flat color="primary" >下架</mu-button>
            <mu-button  flat color="primary">涨粉</mu-button>
            <mu-button  flat color="primary" >广告位</mu-button>
   
    
  </mu-expansion-panel>

    </div>
  </mu-dialog>


  </div>
</template>

<script>
import hew from '../quanju/backheader'
import axios from 'axios'
export default {
  name: 'userlist',
  data () {
    return {
     color:"green",
      lll:"管理页",
      opens:false,
      kaiguan2:false,
       kaiguan3:false,
       icon:"local_play",
       title:"权限",
       openSimple:false,
       openFullscreen:false,
       labelPosition:"",
       usllid:'',
       usllname:'',
       message:'',
       open:false,
       icon:"",
       zpj:"",
       size:"40"
    }
  },
  components:{
      hew
  },
  methods: {
      feng(e){
            this.openSimple = true
            this.usllid = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText


           console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText);
            
      },
      closeSimpleDialog(){
          let a = Date.now();
          let data ="type=7&times="+(Number(a) + Number(this.labelPosition))+"&id="+this.usllid
          axios.post("http://localhost/auto/autohou/updatainfo.php",data)
          .then(res => {
              console.log(res)


                this.open = true;
                this.message ="安心しなさい制裁した"
                this.icon = "check"
                setTimeout(() => {
                      this.open = false;
                      this.message =""
                         this.icon = ""
                }, 2000);
          })
          .catch(err => {
              console.error(err); 
          })
        this.openSimple = false;

      },
      zuopin(e){
      this.openFullscreen = true;
      this.usllname = document.getElementsByClassName('ljoiwe')[0].innerText
      this.usllid = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.lastElementChild.innerText

      let data ="type=9&id="+this.usllid
      axios.post("http://localhost/auto/autohou/file.php",data)
      .then(res => {
          console.log(res)
          this.zpj= res.data.data
      })
      .catch(err => {
          console.error(err); 
      })

      },

    closeFullscreenDialog () {
      this.openFullscreen = false;
    }
  },
}
</script>


<style scoped>
.josjd{
    height: 57px;
}
.dfsdf{
    width: 100%;
    padding: 20px;
}
.ljoiwe{
    margin-left: 10px;
}
.ljoiwe1{
    margin-left: 10px;
}
</style>
