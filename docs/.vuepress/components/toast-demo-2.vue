<template>
  <div style="padding-top: 16px;">
    <div>
      <t-button @click="onClickButton">上方弹出</t-button>
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
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script>