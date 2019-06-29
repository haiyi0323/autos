<template>
  <div class="file">
   <headerback :title=lll :pars="kkk" :click="kklsd"  color="red" :kaiguan="!opens" :kaiguan2="!kaiguan2" :kaiguan3="kaiguan3"></headerback>
 <!-- <div>
    this is the news page.the transform param is {{this.$route.params.userId}}
  </div> -->


      <mu-divider></mu-divider>
      <mu-list>
        <mu-sub-header>个人信息</mu-sub-header>
       
        <mu-list-item button :ripple="false">
          <mu-text-field
            class="jdsf"
            v-model="antuer"
            full-width
            type="text"
            placeholder="开发者"
            icon="person"
          ></mu-text-field>
          <br>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-text-field   class="jdsf" v-model="app_nick"    full-width    icon="layers" placeholder="作品名"></mu-text-field>
          <br>
 
        </mu-list-item>

         <mu-list-item button :ripple="false">
          <mu-text-field   class="jdsf" v-model="app_name"    full-width    icon="android" placeholder="包名"></mu-text-field>
          <br>
 
        </mu-list-item>
         <mu-list-item button :ripple="false">
          <mu-text-field   class="jdsf" v-model="app_versions"    full-width    icon="present_to_all" placeholder="版本"></mu-text-field>
          <br>
 
        </mu-list-item>
         <mu-list-item button :ripple="false">
          <mu-text-field   class="jdsf" v-model="app_phone"    full-width    icon="phone_iphone" placeholder="联系方式"></mu-text-field>
          <br>
 
        </mu-list-item>

      <mu-list-item>
      <mu-radio v-model="radio" class="fdfsd" value="jiaoben" label="脚本辅助"></mu-radio>
     <mu-radio v-model="radio" class="fdfsd" value="shiyong" label="实用软件"></mu-radio>
        </mu-list-item>



          <mu-list-item button :ripple="false" class="jiiwwett">
               <mu-text-field v-model="app_rm" placeholder="说明文档：" full-width  multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
          
        </mu-list-item>
        <mu-list-item class="jdiofsf">

          <input type="file" id="fengm" v-show="this.$store.state.flase" @change="ss">
          <input type="file" id="filesl" v-show="this.$store.state.flase" @change='bh'>

     <mu-button color="secondary" class="jiosew"  @click="fengm">
      <mu-icon left value="photo"></mu-icon>
            上传图标
    </mu-button>

  <mu-button color="secondary" class="jiosew"  @click="filesl">
      <mu-icon left value="extension"></mu-icon>
            选择文件
    </mu-button>
        
      </mu-list-item>

      <mu-list-item >
        <mu-flex class="jiooa" tag="div" align-items="center" justify-content="center">
            <mu-icon value="photo"></mu-icon>
        </mu-flex>

      </mu-list-item>
              <mu-flex wrap ="wrap" style="width:100%;padding:20px;" justify-content="center">
              <input type="file" id="img1" v-show="this.$store.state.flase" @change="bh">
               <input type="file" id="img2" v-show="this.$store.state.flase" @change="bh">
                <input type="file" id="img3" v-show="this.$store.state.flase" @change="bh">
                 <input type="file" id="img4" v-show="this.$store.state.flase" @change="bh">
                  <input type="file" id="img5" v-show="this.$store.state.flase" @change="bh">

     <mu-button color="secondary" class="jiosew1"  @click="img1">
      <mu-icon left value="photo"></mu-icon>
            选择宣传图1
    </mu-button>
<mu-button color="secondary" class="jiosew1"  @click="img2">
      <mu-icon left value="photo"></mu-icon>
            选择宣传图2
    </mu-button>
    <mu-button color="secondary" class="jiosew1"  @click="img3">
      <mu-icon left value="photo"></mu-icon>
            选择宣传图3
    </mu-button>
    <mu-button color="secondary" class="jiosew1"  @click="img4">
      <mu-icon left value="photo"></mu-icon>
            选择宣传图4
    </mu-button>
    <mu-button color="secondary" class="jiosew1"  @click="img5">
      <mu-icon left value="photo"></mu-icon>
            选择宣传图5
    </mu-button>

        </mu-flex>
      
      </mu-list>


<!--  -->
      <mu-snackbar :color="color" :open.sync="open">
    <mu-icon left :value="message"></mu-icon>
    {{message}}
    <mu-button flat slot="action" color="#fff" @click="open = false">关闭</mu-button>
  </mu-snackbar>

  </div>
</template>

<script>

 import headerback from '../quanju/backheader'
    import axios from 'axios'
export default {
  name: 'file',
  data () {
    return {
   color:"green",
      open:false,
      lll:"发布作品",
      kkk:"上线",
      opens:false,
      kaiguan2:false,
    kaiguan3:false,
     app_nick:'', antuer:'', app_versions:'', app_phone:'', app_rm:'',  app_name:"",
       id: localStorage["id"],
       message:"发布成功",
       jiaobbb:'1',
       shiyong:'2',
        radio: '',
    }
  } , components:{
      headerback,
  },methods: {
        fengm(){
            document.getElementById('fengm').click()
      },
             img1(){
            document.getElementById('img1').click()
      },
          img2(){
            document.getElementById('img2').click()
      },
          img3(){
            document.getElementById('img3').click()
      },
          img4(){
            document.getElementById('img4').click()
      },
          img5(){
            document.getElementById('img5').click()
      },




        filesl(){
            document.getElementById('filesl').click()
        },
      ss(){
        let pic =  document.getElementById('fengm').files[0]
          console.log(pic);
          
       // FileRender类  渲染类
  var reader = new FileReader();
  reader.readAsDataURL(pic)
     reader.onload = function(){
  var fdsfe = document.querySelector('.jiooa')
      var img = new Image;
      img.className = "images"
      img.src = this.result
      fdsfe.innerHTML=''
      fdsfe.appendChild(img)
       document.getElementsByClassName("images")[0].style.width = "100%"
          document.getElementsByClassName('jiooa')[0].style.border = "none"
    
 
    
     
   }
      },

      bh(){
            this.open = true;
            this.message = "选择成功"
            setTimeout(() => {
                this.open = false;
            this.message = "发布成功" 
            }, 2000);
      },

      kklsd(){
     var d = new Date();
     var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      let a  = document.getElementById('fengm').files[0]
      let b  = document.getElementById('filesl').files[0]
      // 
      let img1 = document.getElementById("img1").files[0]
      let img2 = document.getElementById("img2").files[0]
      let img3 = document.getElementById("img3").files[0]
      let img4 = document.getElementById("img4").files[0]
      let img5 = document.getElementById("img5").files[0]

      let data = new FormData();
      data.append("pic", a)
      data.append("file", b)
      data.append("img1",img1)
      data.append("img2",img2)
      data.append("img3",img3)
      data.append("img4",img4)
      data.append("img5",img5)
      data.append("type",1)
      data.append("id",this.id);
      data.append("antuer",this.antuer);
      data.append("typeof",this.radio);
      data.append("app_name",this.app_name)
      data.append("app_nick",this.app_nick)
      data.append("app_versions",this.app_versions)
      data.append("app_phone",this.app_phone)
      data.append("app_rm",this.app_rm)
      data.append("time", str)

      axios.post("http://localhost/auto/autohou/file.php",data)
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


<style scoped>
.fr {
  float: right;
}
.tr {
  text-align: right;
}
.jdsf {
  margin: 0px;
}
.mu-input {
  position: inherit;
}
.mu-list li{
    padding: 10px 8px
}
.dfdsf{
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%
}
.jidsffw{
  margin: 50px 0px 0px 0px
}
.jiiwwett{
   margin: 50px 0px;
}
.mu-list li{
     margin: 5px 0px;
}
.jiosew{
    margin: 20px
}
.jiosew .images{
  width: 100%;
}
.jiooa{
    display: inline-block;
    width: 100px;
    height: 100px;
    border: dashed 2px rgb(167, 167, 167);
    color: rgb(134, 134, 134);
    margin: 20px;
}
.jdiofsf{
    padding-top: 20px;
        padding-top: 20px;
        width: 100%;
}
.select-control-row{
  padding: 8px 0;
}
.select-control-group {
  margin: 16px 0;
}
.fdfsd{
    margin-right: 10px
}
.jiosew1{
  display: block;
  margin: 5px
}
</style>
