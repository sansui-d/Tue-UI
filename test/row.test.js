const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接收 gutter 属性', (done)=>{
    Vue.component('t-row',Row)
    Vue.component('t-col',Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <t-row gutter="20">
        <t-col span="12"></t-col>
        <t-col span="12"></t-col>
      </t-row>
      `
    const vm = new Vue({
      el:div
    })
    setTimeout(()=>{
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginRight).to.equal('-10px')
      expect(getComputedStyle(row).marginLeft).to.equal('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.equal('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 align 属性',()=>{
    const div= document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData:{align:'left'}
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
    div.remove()
    vm.$destroy()
  })

})