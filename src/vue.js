import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-tabs',Tabs)
Vue.component('t-tabs-head',TabsHead)
Vue.component('t-tabs-body',TabsBody)
Vue.component('t-tabs-item',TabsItem)
Vue.component('t-tabs-pane',TabsPane)
new Vue({
    el:'#app',
    data:{
        loading:false,
        selected:'1'
    }
})

//单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
}