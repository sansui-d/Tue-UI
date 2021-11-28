import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import Input from './input'
import Col from './col'
import Row from './row'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from './plugin.js'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-input', Input)
Vue.component('t-row',Row)
Vue.component('t-col',Col)
Vue.component('t-layout',Layout)
Vue.component('t-header',Header)
Vue.component('t-sider',Sider)
Vue.component('t-content',Content)
Vue.component('t-footer',Footer)
Vue.component('t-toast',Toast)
Vue.use(plugin)
Vue.component('t-tabs',Tabs)
Vue.component('t-tabs-head',TabsHead)
Vue.component('t-tabs-body',TabsBody)
Vue.component('t-tabs-item',TabsItem)
Vue.component('t-tabs-pane',TabsPane)
Vue.component('t-popover',Popover)
Vue.component('t-collapse',Collapse)
Vue.component('t-collapse-item',CollapseItem)

new Vue({
  el: '#app',
  data: {
    selectedTab:['1'],
    selected:'1'
  },
  methods:{
    yyy(){
      console.log('yyy')
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast(`你的智商为${parseInt(Math.random() * 100)}`,{
        position,
        closeButton: {
          text:'知道了',
          callback(toast){
            toast.log()
          }
        }
      })
    }
  }
})