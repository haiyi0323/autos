<template>
  <div class="resong">
      <headers :title="lll" :pars="kkk" :resgn="pl":kaiguan="!opens":kaiguan2="!kaiguan2" :kaiguan3="kaiguan3"></headers>
     <!--  -->
     <mu-flex tag="div" wrap justify-content="center" wrap ="wrap">
        <mu-text-field  v-model="username" full-width label="请输入账号" label-float help-text="用户名为6-12长度的字符" icon="account_circle"></mu-text-field>


          <mu-text-field v-model="password" full-width  label="设置密码" label-float help-text="请输入密码" icon="locked" ></mu-text-field><br/>

          <mu-button style="width:80%;margin-top:20px" full-width ripple color="primary" @click="send">注册</mu-button>
     </mu-flex>



     <mu-snackbar :color="red" :open.sync="openSimple">
    <mu-icon left :value="icon"></mu-icon>
    {{lll}}
    <mu-button flat slot="action" color="#fff" @click="openSimple = false">Close</mu-button>
  </mu-snackbar>
    
  </div>
</template>

<script>
import axios from 'axios'
import headers from '../quanju/backheader'
export default {
    
  name: 'resong',
  data () {
    return {
          lll:"注册",
      kkk:"登录",
      pl:"/logn",
      username:"",
      password:"",
      openSimple:false,
      red:"red",
      icon:"menu",
      timeout:2000,
      opens:false,
      kaiguan2:false,
      kaiguan3:false,
    }
  },
  components:{
      headers,
  },methods: {
      
      send(){
        axios.get("http://localhost/auto/autohou/resgin.php",{
        params:{
            username:this.username,
            password:this.password,
            sin:sins(),

        }
        })
        .then(res => {
            console.log(res)
            this.openSimple = true
            this.ffdsfsd()
        })
        .catch(err => {
            console.error(err); 
        })
      },
         ffdsfsd() {
                setTimeout(() => {
                    this.openSimple =false
                }, this.timeout);
            }
  },
}

function sins() {
    var arr =[];
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (let i = 0; i < 15; i++) {
      let at = str.charAt(parseInt(Math.random()*(61-0) + 0))
      arr.push(at );
      var jiis = arr.join('')
    }
    return jiis
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resong{
  padding: 50px 0px;
}
</style>
