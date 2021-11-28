<template>
  <div style="margin-top: 10px">
    <div>
      <t-tabs :selected="selected1">
        <t-tabs-head>
          <t-tabs-item name="1">标题一</t-tabs-item>
          <t-tabs-item name="2">标题二</t-tabs-item>
        </t-tabs-head>
        <t-tabs-body>
          <t-tabs-pane name="1">内容1</t-tabs-pane>
          <t-tabs-pane name="2">内容2</t-tabs-pane>
        </t-tabs-body>
      </t-tabs>
    </div>

    <div style="margin-top: 20px">
      <t-tabs :selected="selected2">
        <t-tabs-head>
          <t-tabs-item name="1">标题一</t-tabs-item>
          <t-tabs-item disabled name="2">标题二</t-tabs-item>
          <t-tabs-item name="3">标题三</t-tabs-item>
        </t-tabs-head>
        <t-tabs-body>
          <t-tabs-pane name="1">内容1</t-tabs-pane>
          <t-tabs-pane name="2">内容2</t-tabs-pane>
          <t-tabs-pane name="3">内容3</t-tabs-pane>
        </t-tabs-body>
      </t-tabs>
    </div>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'

export default {
  data() {
    return {
      selected1: '1',
      selected2: '1'
    }
  },
  components: {
    't-tabs': Tabs,
    't-tabs-head': TabsHead,
    't-tabs-body': TabsBody,
    't-tabs-item': TabsItem,
    't-tabs-pane': TabsPane,
  }
}
</script>