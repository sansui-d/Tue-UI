import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'
import Input from './input.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-tabs',Tabs)
Vue.component('t-tabs-head',TabsHead)
Vue.component('t-tabs-body',TabsBody)
Vue.component('t-tabs-item',TabsItem)
Vue.component('t-tabs-pane',TabsPane)
Vue.component('t-input',Input)
Vue.component('t-popover',Popover)
Vue.component('t-collapse',Collapse)
Vue.component('t-collapse-item',CollapseItem)
new Vue({
    el:'#app',
    data:{
        loading:false,
        selected:'1',
        selectedTab:['1']
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