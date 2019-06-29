<template>
  <div class="gly">
    <hew
      :title="lll"
      :kaiguan="!opens"
      :kaiguan2="!kaiguan2"
      :kaiguan3="kaiguan3"
      :icon="icon"
      :pars="toptitle"
      :click="this.qx"
    ></hew>
    <div class="kkse"></div>
    <!-- 查找用户 -->
    <mu-flex v-if="denlu" class="searchs" justify-content="center">
      <div class="sear">
        <mu-text-field solo class="fsdfw" v-model="usernck" placeholder="请输入用户名"></mu-text-field>
      </div>
      <mu-button color="red" @click="chayh">查找用户</mu-button>
    </mu-flex>
    <!-- 公告 -->
    <mu-list v-if="denlu" textline="three-line" style="padding-top:0px">
      <mu-list-item  class="jiwoe">
        <mu-list-item-action style="margin-right:10px">
          <p style="font-size:20px;font-weight:bold;color:red">公告:</p>
        </mu-list-item-action>
        <mu-list-item-content>
          <mu-list-item-title style="font-weight:bold;"><div class="joifwjei">{{this.$store.state.guanligg.title}}</div>  <span class="jiojwei" style="color: rgba(0, 0, 0, .87)">{{this.$store.state.guanligg.times}}</span> </mu-list-item-title>
          <mu-list-item-sub-title>
            <p class="joijwe" style="color: rgba(0, 0, 0, .87)">{{this.$store.state.guanligg.contant}}</p> 
          
          </mu-list-item-sub-title>

 

        </mu-list-item-content>
      </mu-list-item>
      <mu-divider></mu-divider>
      <!-- 管理员工具 -->
      <div class="kpowe">
        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#b388ff" value="assignment_turned_in"></mu-icon>
          <p class="joidw">打卡</p>
        </mu-paper>
        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#ff5722" value="assessment"></mu-icon>
          <p class="joidw">值勤记录</p>
        </mu-paper>

        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#42a5f5" value="photo"></mu-icon>
          <p class="joidw">首页轮播</p>
        </mu-paper>

        
        <mu-paper class="demo-paper dsfsdfe" :z-depth="1" @click="lunbo">
          <mu-icon color="#ab47bc" value="live_tv"></mu-icon>
          <p class="joidw">首页广告</p>
        </mu-paper>


        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#f06292" value="dialpad"></mu-icon>
          <p class="joidw">资源广告</p>
        </mu-paper>


        <mu-paper class="demo-paper dsfsdfe" :z-depth="1"  @click="ddse">
          <mu-icon color="#f44336" value="receipt"></mu-icon>
          <p class="joidw">券数据</p>
        </mu-paper>



        <mu-paper class="demo-paper dsfsdfe" :z-depth="1" @click="fbgg">
          <mu-icon color="#f06292" value="event_available"></mu-icon>
          <p class="joidw">公告</p>
        </mu-paper>


        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#ff9800" value="gamepad"></mu-icon>
          <p class="joidw">有奖竞猜</p>
        </mu-paper>



        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#3f51b5" value="phone_iphone"></mu-icon>
          <p class="joidw">全局设置</p>
        </mu-paper>


        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#009688" value="portrait"></mu-icon>
          <p class="joidw">辞职</p>
        </mu-paper>


        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon color="#2196f3" value="public"></mu-icon>
          <p class="joidw">举报反馈</p>
        </mu-paper>


        <mu-paper class="demo-paper dsfsdfe" :z-depth="1">
          <mu-icon class value="event_note"></mu-icon>
          <p class="joidw">管理手册</p>
        </mu-paper>



      </div>
    </mu-list>
    <!-- 用户显示页 -->
    <div class="jojsw">
      <p>打工吧！魔王大人</p>
    </div>
    <mu-stepper v-if="dg" :active-step="vactiveStep" orientation="vertical">
      <mu-step>
        <mu-step-label>填写信息</mu-step-label>
        <mu-step-content>
          <p>在下方填写对应内容，完成后点击下一步。</p>
          <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
        </mu-step-content>
      </mu-step>
      <mu-step>
        <mu-step-label>仔细阅读下方提示，确认后点击下一步。</mu-step-label>
        <mu-step-content>
          <p>可选任务：拉取成员，10人左右，以18-25单身青年为主。</p>
          <mu-button class="demo-step-button" @click="vhandleNext" color="primary">下一步</mu-button>
          <mu-button flat class="demo-step-button" @click="vhandlePrev1">上一步</mu-button>
        </mu-step-content>
      </mu-step>
      <mu-step>
        <mu-step-label>宣传活动</mu-step-label>
        <mu-step-content>
          <p>多在群里发消息宣传宣传，有事没事多在群里唠唠嗑，确定的话就点击完成拉！</p>
          <mu-button class="demo-step-button" @click="vhandleNextok" color="primary">完成</mu-button>
          <mu-button flat class="demo-step-button" @click="vhandlePrev">上一步</mu-button>
        </mu-step-content>
      </mu-step>
    </mu-stepper>

    <p v-if="vfinished" class="joijwe">都完成啦!你现在已经是一名正式的管理人员了！为表示系统将会每月赠送您300原子！</p>

    <div v-if="dg" class="fromss" v-show="jwioeiq">
      <mu-select :label="Normal" v-model="form.select" full-width>
        <mu-option
          v-for="option,index in options"
          :key="index"
          :label="option.name"
          :value="option.val"
        ></mu-option>
      </mu-select>
    </div>
    <!-- 全屏对话框 -->
    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
      <mu-appbar color="primary" :title="qptit">
        <mu-button slot="left" icon @click="closeFullscreenDialog">
          <mu-icon value="close"></mu-icon>
        </mu-button>
        <mu-button slot="right" flat @click="closeFullscreenDialog">关闭</mu-button>
      </mu-appbar>
      <!-- 公告对话框内容 -->
      <div v-if="gonggao">
        <!-- tap面板 -->

        <mu-tabs
          :value.sync="active2"
          color="white"
          style="color:black"
          indicator-color="black"
          full-width
        >
          <mu-tab>用户公告</mu-tab>
          <mu-tab>管理员公告</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active2 === 0" >
          <!-- 表单 -->

          <mu-list>

            <mu-list-item >
              <mu-text-field class="jdsf" v-model="title" full-width icon="email" placeholder="标题"></mu-text-field>
              <br>
            </mu-list-item>
            <mu-list-item class="jiiwwett">
              <mu-text-field
                v-model="contant"
                placeholder="内容："
                full-width
                multi-line
                :rows="3"
                :rows-max="6"
              ></mu-text-field>
              <br>
            </mu-list-item>

             <mu-button full-width color="primary" @click="yhgg">发布此条</mu-button>
          </mu-list>
        </div>
        <div class="demo-text" v-if="active2 === 1">
          <!-- 表单 -->
               <mu-list>
            <mu-list-item >
              <mu-text-field class="jdsf" v-model="title" full-width icon="email" placeholder="标题"></mu-text-field>
              <br>
            </mu-list-item>
            <mu-list-item class="jiiwwett">
              <mu-text-field
                v-model="contant"
                placeholder="内容："
                full-width
                multi-line
                :rows="3"
                :rows-max="6"
              ></mu-text-field>
              <br>
            </mu-list-item>
              <mu-button full-width color="primary" @click="glygg">发布此条</mu-button>
          </mu-list>

        </div>
</div>
      <!-- 轮播设置 -->
      <div class="lunvs" v-if="lunbosz">
          <!-- 首页轮播设置 -->
         <mu-dialog title="更改连接" width="360" :open.sync="openSimple">
            <mu-text-field v-model="lunbourl1" label="下方添加你的连接"></mu-text-field>
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确定</mu-button>
  </mu-dialog>

    <mu-dialog title="更改连接" width="360" :open.sync="openSimple1">
              <mu-text-field v-model="lunbourl2" label="下方添加你的连接"></mu-text-field>
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确定</mu-button>
  </mu-dialog>

    <mu-dialog title="更改连接" width="360" :open.sync="openSimple2">
            <mu-text-field v-model="lunbourl3" label="下方添加你的连接"></mu-text-field>
    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">确定</mu-button>
  </mu-dialog>

          
  <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
    <div slot="header">第一屏</div>
      <!-- 选择图片 -->

        <mu-container>

          <input type="file" id="fengm" v-show="this.$store.state.flase" @change="ss">
        <mu-flex class="jiosew" justify-content="center" align-items="center" @click="fengm">
           <img class="jiwoew" :src="this.zygglb[0].imgurl" alt="">
        </mu-flex>
          <mu-button full-width color="primary" class="fwertw" @click="openherf">附加链接</mu-button>
      </mu-container>

   <mu-button color="blue" slot="action" @click="uplun">更新</mu-button>
  </mu-expansion-panel>
  <mu-expansion-panel :expand="panel === 'panel2'" @change="toggle('panel2')">
    <div slot="header">第二屏</div>
           <mu-container>

          <input type="file" id="fengm2" v-show="this.$store.state.flase" @change="ss2">
        <mu-flex class="jiosew2" justify-content="center" align-items="center" @click="fengm2">
           <img class="jiwoew" :src="this.zygglb[1].imgurl" alt="">
        </mu-flex>
          <mu-button full-width color="primary" class="fwertw" @click="openherf2">附加链接</mu-button>
      </mu-container>


      <mu-button color="blue" slot="action"  @click="uplun2">更新</mu-button>
  </mu-expansion-panel>
  <mu-expansion-panel :expand="panel === 'panel3'" @change="toggle('panel3')">
    <div slot="header">第三屏</div>

 <mu-container>

          <input type="file" id="fengm3" v-show="this.$store.state.flase" @change="ss3">
        <mu-flex class="jiosew3" justify-content="center" align-items="center" @click="fengm3">
           <img class="jiwoew" :src="this.zygglb[2].imgurl" alt="">
        </mu-flex>
          <mu-button full-width color="primary" class="fwertw" @click="openherf3">附加链接</mu-button>
      </mu-container>

   <mu-button color="blue" slot="action"  @click="uplun3">更新</mu-button>
  </mu-expansion-panel>


      </div>

    </mu-dialog>
  </div>
</template>

<script>
import hew from "../quanju/backheader";
import axios from "axios";
export default {
  name: "gly",
  data() {
    return {
      dg: false,
      color: "green",
      lll: "管理页",
      opens: false,
      kaiguan2: false,
      kaiguan3: false,
      icon: "local_play",
      toptitle: "权限",
      denlu: false,
      guanli: false,
      vactiveStep: 0,
      options: [
        { name: "评论管理员", val: 2 },
        { name: "广场管理员", val: 3 },
        { name: "举报管理员", val: 4 },
        { name: "违规发布管理员", val: 5 }
      ],
      form: {
        select: ""
      },
      Normal: "选择岗位",
      jwioeiq: "true",
      usernck: "",
      openFullscreen: false,
      openSimple: false,
      openSimple1:false,
      openSimple2:false,
      active2: 0,
      //
      color: "green",
      open: false,
      title: "",
      id: localStorage["id"],
      message: "发布成功",
      contant: "",
      // 
      gonggao:false,
      lunbosz: false,
      panel: '',
      qptit:"",
      zygglb:"",
      lunbourl1:"",
      lunbourl2:"",
      lunbourl3:"",
     

    };
  },
  components: {
    hew
  },
  created() {
    if (localStorage["id"]) {
      let data = "type=2" + "&id=" + localStorage["id"];
      axios
        .post("http://localhost/auto/autohou/updatainfo.php", data)
        .then(res => {
          console.log(res.data.data[0]);
          if (
            res.data.data[0].guanli == 0 ||
            res.data.data[0].guanli == 3 ||
            res.data.data[0].guanli == 4 ||
            res.data.data[0].guanli == 5 ||
            res.data.data[0].guanli == 2
          ) {
            this.denlu = true;
            this.dg = false;
            // 获取一条公告信息
            let data ="type=2"
            axios.post("http://localhost/auto/autohou/gonggao.php",data)
            .then(res => {
          
              this.$store.state.guanligg = res.data.data[0];
            })
            .catch(err => {
              console.error(err); 
            })


          } else if (res.data.data[0].guanli == 1) {
            this.dg = true;
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      this.weident = true;
    }
  },
  methods: {
    qx() {},
// 查人
    chayh() {
      let data = "type=4&usersnick=" + this.usernck;
      axios
        .post("http://localhost/auto/autohou/updatainfo.php", data)
        .then(res => {
          console.log(res);
          this.$store.state.usernicks = res.data.data;
          this.$router.push("/userlist");
        })
        .catch(err => {
          console.error(err);
        });
    },
    vhandleNext() {
      this.vactiveStep++;
      this.jwioeiq = false;
    },
    // 申请管理员
    vhandleNextok() {
      let data = "type=8&id=" + localStorage["id"] + "&gh=" + this.form.select;
      axios
        .post("http://localhost/auto/autohou/updatainfo.php", data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });

      this.vactiveStep++;
    },
    vhandlePrev() {
      this.vactiveStep--;
    },
    vhandlePrev1() {
      this.vactiveStep--;
      this.jwioeiq = true;
    },
    vreset() {
      this.vactiveStep = 0;
    },
    // 开启发布公告页
    fbgg() {
      this.openFullscreen = true;
      this.gonggao = true;
      this.qptit = "新增公告"
    },
    // 关闭对话框
    closeFullscreenDialog() {
         this.openFullscreen = false;
         this.gonggao = false;
         this.lunbosz = false;
         this.qptit = "";
         this.zygglb="";
     
    },
  // 发布用户公告
    yhgg(){
      let d = new Date();
      let a = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+d.getHours()+"时"+d.getMinutes()+"分";
     
      let data ="type=1&title="+this.title+"&contant="+this.contant+"&types=1&time="+a+"&id="+this.id
          axios.post("http://localhost/auto/autohou/gonggao.php",data)
          .then(res => {
            console.log(res)


          })
          .catch(err => {
            console.error(err); 
          })
    },
      // 发布管理员公告
    glygg(){
        let d = new Date();
      let a = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+d.getHours()+"时"+d.getMinutes()+"分";
     
      let data ="type=1&title="+this.title+"&contant="+this.contant+"&types=2&time="+a+"&id="+this.id
          axios.post("http://localhost/auto/autohou/gonggao.php",data)
          .then(res => {
            console.log(res)


          })
          .catch(err => {
            console.error(err); 
          })
    },
// 轮播相关---------------------------------
lunbo(){
    this.openFullscreen = true;
    this.qptit = "首页广告"
    this.lunbosz = true;
    // 查轮播数据
    let data="type=1"
    axios.post("http://localhost/auto/autohou/lunbo.php",data)
    .then(res => {
      console.log(res)
        this.zygglb = res.data.data;
        this.lunbourl1 = this.zygglb[0].hrefurl
        this.lunbourl2 = this.zygglb[1].hrefurl
        this.lunbourl3 = this.zygglb[2].hrefurl
    })
    .catch(err => {
      console.error(err); 
    })
},
// 手风琴
  toggle (panel) {
      this.panel = panel === this.panel ? '' : panel;
        
    },
    // 添加图片

       fengm(){
            document.getElementById('fengm').click()
      },
       fengm2(){
            document.getElementById('fengm2').click()
      },
       fengm3(){
            document.getElementById('fengm3').click()
      },
    

// 发送更新

uplun(){
  let newform = new FormData();
  newform.append("pic",document.getElementById("fengm").files[0])
  newform.append("type",4)
  newform.append("hrefurl",this.lunbourl1)
  // 
  axios.post("http://localhost/auto/autohou/lunbo.php",newform)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err); 
  })
},
uplun2(){
  let newform = new FormData();
  newform.append("pic",document.getElementById("fengm2").files[0])
  newform.append("type",2)
  newform.append("hrefurl",this.lunbourl2)
   // 
  axios.post("http://localhost/auto/autohou/lunbo.php",newform)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err); 
  })
},
uplun3(){
  let newform = new FormData();
  newform.append("pic",document.getElementById("fengm3").files[0])
  newform.append("type",3)
  newform.append("hrefurl",this.lunbourl3)
   // 
  axios.post("http://localhost/auto/autohou/lunbo.php",newform)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err); 
  })
},

  // 资源加载

 ss(){
        let pic =  document.getElementById('fengm').files[0]
          console.log(pic);
          
       // FileRender类  渲染类
  var reader = new FileReader();
  reader.readAsDataURL(pic)
     reader.onload = function(){
  var fdsfe = document.querySelector('.jiosew')
      console.log(fdsfe);
      var img = new Image;
      img.className = "images"
      img.src = this.result
      fdsfe.innerHTML=''
      fdsfe.appendChild(img)
      document.getElementsByClassName("images")[0].style.width = "100%"
      document.getElementsByClassName('jiosew')[0].style.border = "none"
    
 
    
     
   }
      },
      ss2(){
        let pic =  document.getElementById('fengm2').files[0]
          console.log(pic);
          
       // FileRender类  渲染类
  var reader = new FileReader();
  reader.readAsDataURL(pic)
     reader.onload = function(){
  var fdsfe = document.querySelector('.jiosew2')
      console.log(fdsfe);
      var img = new Image;
      img.className = "images2"
      img.src = this.result
      fdsfe.innerHTML=''
      fdsfe.appendChild(img)
      document.getElementsByClassName("images2")[0].style.width = "100%"

     
   }
      },
       ss3(){
        let pic =  document.getElementById('fengm3').files[0]
          console.log(pic);
          
       // FileRender类  渲染类
  var reader = new FileReader();
  reader.readAsDataURL(pic)
     reader.onload = function(){
  var fdsfe = document.querySelector('.jiosew3')
      console.log(fdsfe);
      var img = new Image;
      img.className = "images3"
      img.src = this.result
      fdsfe.innerHTML=''
      fdsfe.appendChild(img)
      document.getElementsByClassName("images3")[0].style.width = "100%"

   }
      },
      // 关闭连接框
        closeSimpleDialog () {
      this.openSimple = false;
    },
    // 打开连接框
    openherf(){
       this.openSimple = true;
    },
     openherf2(){
       this.openSimple1 = true;
    },
     openherf3(){
       this.openSimple2 = true;
    }
,ddse(){
  this.$router.push("/qsj")
  
}

  },
  computed: {
    vfinished() {
      return this.vactiveStep > 2;
    }
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kkse {
  height: 57px;
}
.searchs {
  width: 100%;
  padding: 10px;
  background: rgb(255, 167, 34);
}
.fsdfw {
  border: none;
  width: 100%;
  padding: 0px;
  margin: 0px;
  min-height: 0px;
}
.fsdfw:focus {
  border: none;
  outline: none;
}
.sear {
  display: inline-block;
  width: 65%;
  padding: 5px 10px;
  background: white;
  border: 1px solid black;
  border-radius: 20px;
  margin-right: 10px;
}
.dsfsdfe {
  width: 25%;
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 0px;
}
.kpowe {
  font-size: 0px;
}
.joidw {
  font-size: 16px;
  margin: 0px;
  margin-top: 5px;
}
.jiwoe {
  background: white;
}

.demo-vsteper-container {
  max-width: 380px;
  max-height: 400px;
  margin: auto;
}

.demo-step-content {
  margin: 0 16px;
}

.demo-step-button {
  margin-top: 12px;
  margin-right: 12px;
}
.jojsw {
  width: 100%;
  text-align: center;
  font-size: 18px;
}
.joijwe {
  padding: 20px;
  text-indent: 2rem;
}
.fromss {
  padding: 20px;
}
.mu-tab-active {
  color: black;
}
.jdsf {
  margin: 0px;
}
.jiiwwett{
   margin: 50px 0px;
}
.demo-text{
  padding: 10px;
}
.joijwe{
  text-indent: 0rem;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.jiojwei{
  font-weight: lighter;
  font-size: 12px;
  color: rgb(255, 6, 6) !important;
  float: right;
}
.joifwjei{
  display: inline-block;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal;

}
.jiosew{
    width: 100%;


}
.jiosew2{
    width: 100%;


}
.jiosew3{
    width: 100%;


}
.fwertw{
  margin-top: 10px;
}
.jiwoew{
  width: 100%;
}

</style>
