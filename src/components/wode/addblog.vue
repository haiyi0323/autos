<template>
  <div class="addblog">
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
            placeholder="作者"
            icon="phone"
          ></mu-text-field>
          <br>
        </mu-list-item>
        <mu-list-item button :ripple="false">
          <mu-text-field   class="jdsf" v-model="title"    full-width    icon="email" placeholder="标题"></mu-text-field>
          <br>
 
        </mu-list-item>
          <mu-list-item button :ripple="false" class="jiiwwett">
               <mu-text-field v-model="contant" placeholder="正文：" full-width  multi-line :rows="3" :rows-max="6"></mu-text-field><br/>
          
        </mu-list-item>
      </mu-list>
      <mu-container>

          <input type="file" id="fengm" v-show="this.$store.state.flase" @change="ss">
        <mu-flex class="jiosew" justify-content="center" align-items="center" @click="fengm">
           <h2>封面</h2> 
        </mu-flex>
      </mu-container>
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
  name: 'addblog',
  data () {
    return {
      color:"green",
      open:false,
      lll:"编辑文章",
      kkk:"发布",
      title:"",
      id: localStorage["id"],
      message:"发布成功",
      antuer:'',
      contant:'',
      opens:false,
      kaiguan2:false,
      kaiguan3:false,
       

    }
  },

  methods: {
      fengm(){
            document.getElementById('fengm').click()
      },

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
      kklsd(){
     var d = new Date();
     var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
      let a  = document.getElementById('fengm').files[0]
      let data = new FormData();
      data.append("pic", a)
      data.append("type", 3)
      data.append("id",this.id);
      data.append("title",this.title)
      data.append("antuer",this.antuer)
      data.append("contant",this.contant)
      data.append("time", str)
      axios.post("http://localhost/auto/autohou/postpic.php",data)
      .then(res => {
        console.log(res)


         var d = new Date();
     var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();

              let data2 = "type=6&userid="+localStorage["id"] +"&oder="+res.data.data.insertId+"&time="+str+"&typeof=2"
          axios.post("http://localhost/auto/autohou/postpic.php",data2)
          .then(res => {
            console.log(res)
               this.open = true;
        setTimeout(() => {
           this.open = false;
           this.$router.push("/wode")
        }, 2000);


            
          })
          .catch(err => {
            console.error(err); 
          })





     

      })
      .catch(err => {
        console.error(err); 
      })

        
      }
  },
  components:{
      headerback,
  }
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
     margin: 20px 0px;
}
.jiosew{
    width: 100%;
    height: 200px;
    border: 1px dashed black;

}
.jiosew .images{
  width: 100%;
}
</style>
