<template>
  <div style="padding-top: 16px;">

    <t-popover position="left">
      <t-button>左边弹出</t-button>
      <template slot="content">
        <strong style="color: #F1453D">加粗的提示</strong>
      </template>
    </t-popover>
    <t-popover>
      <t-button>上方弹出</t-button>
      <template slot="content">
        <a href="https://github.com/sansui-d/Tue-UI">这是个a链接</a>
      </template>
    </t-popover>
    <t-popover position="bottom">
      <t-button>下方弹出</t-button>
      <template slot="content">
        普通文本内容
      </template>
    </t-popover>
    <t-popover position="right">
      <t-button>右边弹出</t-button>
      <template slot="content">
        普通文本内容
      </template>
    </t-popover>

  </div>
</template>

<script>
import TButton from '../../../src/button'
import TPopover from '../../../src/popover'
export default {
  components: {TButton, TPopover},
}
</script>
<style>
.ice-popover{
  z-index: 30;
}
</style>