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
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>