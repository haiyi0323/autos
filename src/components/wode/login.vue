<template>

  <div class="login">
   
   <headers :title=lll :pars="kkk" :resgn="pl" color="red" :kaiguan="!opens" :kaiguan2="!kaiguan2" :kaiguan3="kaiguan3"></headers>


  <mu-text-field v-model="value13" label="UserName" full-width label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field><br/>
  <mu-text-field v-model="value14" full-width  label="Password" label-float help-text="请输入密码" icon="locked"></mu-text-field><br/>
  <mu-flex justify-content="center" align-items="center">
    <mu-button style="width:80%;margin-top:20px" full-width ripple color="primary" @click="send">登录</mu-button>
   
  </mu-flex>


    <mu-snackbar :color="color" :open.sync="open">
    <mu-icon left :value="icon"></mu-icon>
    {{message}}
    <mu-button flat slot="action" color="#fff" @click="open = false">关闭</mu-button>
  </mu-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
import headers from '../quanju/backheader'

export default {
  name: 'login',
  data () {
    return {
      value13:"",
      value14:"",
      lll:"登录",
      kkk:"注册",
      pl:"/resong",
      color:"#",
      open:false,
      timeout:2000,
      message:"",
      icon:"",
      opens:false,
      kaiguan2:false,
       kaiguan3:false,
    }
  },
  methods: {
      send(){
   
        axios.get("http://localhost/auto/autohou/login.php",{
       params: {
        username : this.value13,
        password: this.value14
    }
        } )
        .then(res => {
          console.log(res.data.data);
          
            if (res.data.data.length > 0) {
              let jjj =  Date.now()
             var iiis =  res.data.data[0]
             localStorage['id'] = iiis.signature;


              axios.get( "http://localhost/auto/autohou/otherlogin.php",
              {
                 params: {
                  type:0,
                  id:localStorage["id"],
                  time:jjj +10000000,
                }
              })
              .then(res => {
                console.log(res.data)
              })
            

             this.open = true;
               this.message = "登录成功";
              this.color ="#00c853"
              this.icon = "check"      
               this.typeout("/")
              //  跳转到首页

            }else{
              this.open = true;
              this.message = "用户名或密码错误";
              this.color ="red"
              this.icon = "error"
                   this.typeout()
             
              
            }
          
        })
        .catch(err => {
          console.error(err); 
        })
        
      },
      typeout( lujing){
        setTimeout(() => {
          this.open = false;
          this.$router.push(lujing)
        }, this.timeout);
      }
      
     
  },
  components:{
    headers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  text-align: center;
  padding: 50px 0px;
}
</style>
