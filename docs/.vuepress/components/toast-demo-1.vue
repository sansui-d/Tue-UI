<template>
  <div style="padding-top: 16px;">
    <div>
      <t-button @click="$toast('这是上方的内容')">上方弹出</t-button>
      <t-button @click="$toast('这是中间的内容', {position:'middle'})">中间弹出</t-button>
      <t-button @click="$toast('这是下方的内容', {position:'bottom'})">下方弹出</t-button>
    </div>
  </div>
</template>
<style>
.ice-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}

</style>
<script>
import plugin from '../../../src/plugin'
import TButton from '../../../src/button'
import Vue from 'vue'

Vue.use(plugin)

export default {
  components: {TButton},
}
</script>