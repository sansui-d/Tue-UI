<template>
  <div class="wrapper">
    <div>
      <t-button>默认按钮</t-button>
      <t-button type="primary">主要按钮</t-button>
      <t-button type="success">成功按钮</t-button>
      <t-button type="danger">危险按钮</t-button>
    </div>
  </div>
</template>
<script>
import Button from '../../../src/button'

export default {
  components: {'t-button': Button},
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>