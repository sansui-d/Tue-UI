<template>
  <div style="padding-top: 16px;">

    <t-popover position="left" trigger="hover">
      <t-button>左边弹出</t-button>
      <template slot="content">
        弹出内容
      </template>
    </t-popover>
    <t-popover trigger="hover">
      <t-button>上方弹出</t-button>
      <template slot="content">
        弹出内容
      </template>
    </t-popover>
    <t-popover position="bottom" trigger="hover">
      <t-button>下方弹出</t-button>
      <template slot="content">
        弹出内容
      </template>
    </t-popover>
    <t-popover position="right" trigger="hover">
      <t-button>右边弹出</t-button>
      <template slot="content">
        弹出内容
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