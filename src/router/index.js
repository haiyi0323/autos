import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/components/index'
import wode from '../components/wode/content.vue'
import logn from '../components/wode/login.vue'
import resong from '../components/wode/resong.vue'
import info from '../components/info/myinfo.vue'
import gc from '../components/guangchang/guangchang.vue'
import mesg from '../components/guangchang/mesg.vue'
import jiaoben from '../components/jiaoben/index.vue'
import addblog from '../components/wode/addblog.vue'
import file from '../components/jiaoben/file.vue'
import jb from '../components/jiaoben/jiaobenqu.vue'
import jbxq from '../components/jiaoben/xiangqing.vue'
import lqgw from '../components/zujian/lqgw.vue'
import gly from '../components/zujian/gly.vue'
import userlist from '../components/quanju/userlist.vue'
import qsj from '../components/zujian/qsj.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/logn',
      name: 'logn',
      component: logn
    },
    {
      path: '/resong',
      name: 'resong',
      component: resong
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/gc',
      name: 'gc',
      component: gc
    },
    {
      path: '/mesg',
      name: 'mesg',
      component: mesg
    },
     {
      path: '/jiaoben',
      name: 'jiaoben',
      component: jiaoben
    },
    {
      path: '/addblog',
      name: 'addblog',
      component: addblog
    },
    {
      path: '/file',
      name: 'file',
      component: file
    } , {
      path: '/jb',
      name: 'jb',
      component: jb
    } , {
      path: '/jbxq',
      name: 'jbxq',
      component: jbxq
    }
    , {
      path: '/lqgw',
      name: 'lqgw',
      component: lqgw
    } , {
      path: '/gly',
      name: 'gly',
      component: gly
    }, {
      path: '/userlist',
      name: 'userlist',
      component: userlist
    },
    {
      path: '/qsj',
      name: 'qsj',
      component: qsj
    }
  ],
  mode:"history"
})
