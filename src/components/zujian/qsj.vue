<template>
  <div class="qsj">
        <back 
      :title="lll"
      :kaiguan="!opens"
      :kaiguan2="!kaiguan2"
      :kaiguan3="kaiguan3"
      :icon="icon"
     >
      </back>
    <div class="imgkkk"></div>
        <mu-flex class="fdsfwe" wrap="wrap" justify-content= "center" >
                <input v-show="this.$store.state.flase" type="file"  id="zpic" @change="ss">
                <mu-flex class="imgk" justify-content= "center" align-items="center" @click="addpic">
                    添加主图
                </mu-flex>
                 <mu-text-field v-model="qsjs" multi-line :rows="12"  placeholder="填入信息"></mu-text-field><br/>
                    <mu-button full-width color="primary" @click="jiequax">添加</mu-button>
        </mu-flex>

 <mu-snackbar :color="color" :open.sync="open">
    <mu-icon left :value="icon"></mu-icon>
    {{message}}
    <mu-button flat slot="action" color="#fff" @click="open = false">关闭</mu-button>
  </mu-snackbar>


  </div>
</template>

<script>
import back from "../quanju/backheader";
import axios from "axios";
export default {
  name: 'qsj',
  data () {
    return {
      color: "green",
      lll: "添加优惠券",
      opens: false,
      open:false,
      icon:"phone",
      message:'',
      kaiguan2: false,
      kaiguan3: false,
      icon: "local_play",
      qsjs:"",
    //   截取后的数据
      qtitle:"",
      yj:"",
      xj:"",
      qurl:"",



    }
  },
  components:{
      back
  },
  methods: {
      jiequax(){
        let title = this.qsjs.split("【包邮】")
      
            // title[0]是标题
            this.qtitle = title[0];
       let title1 = title[1].split("【券后价】")
           let zsj = title1[0].split("【在售价】")[1]
        //    zsj是在售价
            this.yj = zsj
    
        let title2 = title1[1].split("【下单链接】")
            // title2[0] 是券后价
        
            this.xj = title2[0]

            let url = title2[1].split("-----------------")
           // url[0] 是链接
              this.qurl = url[0];



        let data = new FormData();
        data.append("pic",document.getElementById('zpic').files[0]),
        data.append("all",this.qsjs)
        data.append("title",this.qtitle)
        data.append("yj",this.yj)
        data.append("xj",this.xj)
        data.append ("qurl",this.qurl)
        data.append("type",1)
        data.append("time",dfdsf())

        axios.post("http://localhost/auto/autohou/qsj.php",data)
        .then(res => {
            console.log(res)
            this.open = true;
            this.message = "添加成功"
            setTimeout(() => {
                this.open = false
                    this.message = ""
                location.reload()
            }, 2000);

        })
        .catch(err => {
            console.error(err); 
        })


      },
         

        addpic(){
            document.getElementById("zpic").click();
        },
    // 渲染图片
         ss(){
        let pic =  document.getElementById('zpic').files[0]
          console.log(pic);
          
       // FileRender类  渲染类
      var reader = new FileReader();
      reader.readAsDataURL(pic)
     reader.onload = function(){
      var fdsfe = document.querySelector('.imgk')
      console.log(fdsfe);
      var img = new Image;
      img.className = "images"
      img.src = this.result
      fdsfe.innerHTML=''
      fdsfe.appendChild(img)
      document.getElementsByClassName("images")[0].style.width = "100%"
    
    
 
    
     
   }
      },


  },
}

function dfdsf() {
      let d = new Date();
      return  d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+d.getHours()+"时"+d.getMinutes()+"分";
     
     
}
</script>


<style scoped>
.imgkkk{
    height: 55px;
}
.imgk{
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
    border:  1px double gray;
}
.fdsfwe{
    padding: 20px;
}
</style>
