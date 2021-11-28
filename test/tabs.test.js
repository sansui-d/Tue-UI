const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.exist
  })
  it('接收 selected 属性', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <t-tabs selected="third">
      <t-tabs-head>
        <t-tabs-item name="first">周一</t-tabs-item>
        <t-tabs-item name="second">周二</t-tabs-item>
        <t-tabs-item name="third">周三</t-tabs-item>
      </t-tabs-head>
      <t-tabs-body>
        <t-tabs-pane name="first">周一相关资讯</t-tabs-pane>
        <t-tabs-pane name="second">周二相关资讯</t-tabs-pane>
        <t-tabs-pane name="third">周三相关资讯</t-tabs-pane>
      </t-tabs-body>
    </t-tabs>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      let x=vm.$el.querySelector(`.tabs-item[date-name="third"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })
  it('可以接收 direction prop',()=>{})
})