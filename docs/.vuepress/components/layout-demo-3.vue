<template>
  <div style="padding-top: 16px">
    <t-layout style="color: white; overflow: hidden; margin-bottom: 50px">
      <t-sider style="background: #66b1ff; width: 200px; color: white">
        sider
      </t-sider>
      <t-layout>
        <t-header style="height: 50px; background: #409eff"> header </t-header>
        <t-content style="height: 100px; background: #c6e2ff">
          content
        </t-content>
        <t-footer style="height: 50px; background: #409eff"> footer </t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import TLayout from "../../../src/layout";
import THeader from "../../../src/header";
import TFooter from "../../../src/footer";
import TContent from "../../../src/content";
import TSider from "../../../src/sider";

export default {
  components: { TLayout, THeader, TFooter, TContent, TSider },
};
</script>