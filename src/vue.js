import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
Vue.component('Tbutton',Button)
Vue.component('Ticon',Icon)
new Vue({
    el:'#app',
})