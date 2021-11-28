<template>
  <div class="wrapper">
    <div>
      <t-collapse :selected.sync="selectedTab" single>
        <t-collapse-item title="标题1" name="1">内容111111111111</t-collapse-item>
        <t-collapse-item title="标题2" name="2">内容222222222222</t-collapse-item>
        <t-collapse-item title="标题3" name="3">内容333333333333</t-collapse-item>
      </t-collapse>
    </div>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
  components: {
    't-collapse': Collapse,
    't-collapse-item': CollapseItem
  }
}
</script>
<style scoped>
.wrapper{
  margin-top: 10px;
}
</style>