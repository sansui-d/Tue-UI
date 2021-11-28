<template>
  <div class="wrapper">
    <div>
      <t-button icon="setting">设置</t-button>
      <t-button type="primary" iconPosition="right" icon="download">加载中</t-button>
      <t-button :loading="loading1" type="success">加载中</t-button>
      <t-button :loading="loading2" @click="loading2=!loading2" type="danger">点击加载</t-button>
    </div>
  </div>
</template>
<script>
import Button from '../../../src/button'

export default {
  components: {'t-button': Button},
  data() {
    return {
      loading1: true,
      loading2: false
    }
  }
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>