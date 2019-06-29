<template>
  <div class="myinfo">
    <mu-paper :z-depth="1" class="demo-list-wrap">
      <mu-appbar class="dfdsf" color="purple">
        <mu-button icon slot="left" @click="back">
          <mu-icon value="keyboard_backspace"></mu-icon>
        </mu-button>我的信息
            <mu-button icon slot="right" @click="sendfile">
          <mu-icon value="unarchive"></mu-icon>
        </mu-button>
      </mu-appbar>
      <mu-list class="jidsffw" textline="two-line">
          <label for="jjjiww" >
        <mu-list-item avatar button :ripple="true">
          <!-- 头 -->
          <mu-list-item-action>
            <mu-avatar size="60">
              <img src="../../assets/logo.png">
            </mu-avatar>
          </mu-list-item-action>
          <!-- 标题 -->
          <mu-list-item-title class="tr">设置头像</mu-list-item-title>
          <!-- 尾部 -->
              <input v-show="show" @change="chooses()" type="file" id="jjjiww">
           
        </mu-list-item>
            </label>
      </mu-list>
      <mu-divider></mu-divider>
      <mu-list>
        <mu-sub-header>个人信息</mu-sub-header>
        <mu-list-item button :ripple="false" @click="events = !events">
          <mu-list-item-title>
            <mu-radio v-model="radio" value="男" label="男"></mu-radio>
            <mu-radio v-model="radio" value="女" label="女"></mu-radio>
          </mu-list-item-title>
          <mu-list-item-title class="tr">性别</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="calls = !calls">
          <mu-text-field
            class="jdsf"
            v-model="value11"
            full-width
            type="number"
            placeholder="电话号码"
            icon="phone"
          ></mu-text-field>
          <br>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="calls = !calls">
          <mu-text-field   class="jdsf" v-model="value5" suffix="@gmail.com"      full-width    icon="email" placeholder="邮箱"></mu-text-field>
          <br>
 
        </mu-list-item>
          <mu-list-item button :ripple="false" @click="calls = !calls">
                <mu-text-field v-model="value9"  full-width placeholder="简介" multi-line :rows="3"    icon="contact_mail":rows-max="6"  class="jdsf"></mu-text-field><br/>
          
        </mu-list-item>
      </mu-list>
      <mu-list>
        <mu-sub-header>like</mu-sub-header>
        <mu-list-item button :ripple="false" @click="notifications = !notifications">
          <mu-list-item-action>
            <mu-checkbox v-model="notifications" readonly></mu-checkbox>
          </mu-list-item-action>
          <mu-list-item-title>开发</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="sounds = !sounds">
          <mu-list-item-action>
            <mu-checkbox v-model="sounds" readonly></mu-checkbox>
          </mu-list-item-action>
          <mu-list-item-title>懒人</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false" @click="videoSounds = !videoSounds">
          <mu-list-item-action>
            <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
          </mu-list-item-action>
          <mu-list-item-title>乐天</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-paper>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: "myinfo",
  data() {
    return {
      events: false,
      calls: false,
      messages: false,
      notifications: false,
      sounds: false,
      videoSounds: false,
      radio: "",
      value1: "",
      value9:"",
      value5:"",
      value11:"",
      show:false,
    };
  },
  methods: {
      back(){
          this.$router.go(-1)
      },

  chooses(){
    let formdata = new FormData();
      var pic =window.pic = document.getElementById("jjjiww").files[0];
      console.log(pic);

       // FileRender类  渲染类
  var reader = new FileReader();
  reader.readAsDataURL(pic)
   console.log(reader)

     reader.onload = function(){
  var fdsfe = document.querySelector('label[for="jjjiww"] .mu-avatar-inner')
      console.log(fdsfe);
      
       fdsfe.innerText = ""
    var img = document.createElement('img');
    img.className = "girjogior"
    img.src = this.result
    fdsfe.appendChild(img)
     
   }
    
  },
  sendfile(){

      // console.log(  
      //   pic,
      // this.radio,
      // this.value1,
      // this.value9,
      // this.value5,
      // this.value11,
      // );
 
      let formdatas = new FormData()
      formdatas.append("type",0)
      formdatas.append("headimage",pic)
      formdatas.append("sex",this.radio,)
      formdatas.append("phone",this.value11)
      formdatas.append("email",this.value5)
      formdatas.append("jianjie",this.value9)
      formdatas.append("id",localStorage["id"])

      axios.post("http://localhost/auto/autohou/updatainfo.php",formdatas)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err); 
      })
      
  }

  },
};






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
</style>
