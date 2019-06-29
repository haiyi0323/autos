// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import theme from 'muse-ui/lib/theme';
import axios from 'axios'
import {store} from '../src/store/store'
// 引入字体
import 'typeface-roboto'
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.config.productionTip = false
Vue.use(MuseUI)
Vue.prototype.$ajax = axios
// 自定义主题
theme.add('teal', {
  primary: '#009688',
  secondary: '#ff4081',
  success: '#4caf50',
  warning: '#ffeb3b',
}, 'light');
// 使用主题
theme.use('teal');

/* eslint-disable no-new */
 var vm = window.vm=new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
