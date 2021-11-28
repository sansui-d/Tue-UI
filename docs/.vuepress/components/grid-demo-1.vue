<template>
  <div>
    <t-row class="demoRow">
      <t-col span="8">
        <div class="demoCol">8</div>
      </t-col>
      <t-col span="8">
        <div class="demoCol">8</div>
      </t-col>
      <t-col span="8">
        <div class="demoCol">8</div>
      </t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="6">
        <div class="demoCol">6</div>
      </t-col>
      <t-col span="6">
        <div class="demoCol">6</div>
      </t-col>
      <t-col span="6">
        <div class="demoCol">6</div>
      </t-col>
      <t-col span="6">
        <div class="demoCol">6</div>
      </t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="4">
        <div class="demoCol">4</div>
      </t-col>
      <t-col span="4">
        <div class="demoCol">4</div>
      </t-col>
      <t-col span="4">
        <div class="demoCol">4</div>
      </t-col>
      <t-col span="4">
        <div class="demoCol">4</div>
      </t-col>
      <t-col span="4">
        <div class="demoCol">4</div>
      </t-col>
      <t-col span="4">
        <div class="demoCol">4</div>
      </t-col>
    </t-row>
    <t-row class="demoRow">
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
      <t-col span="2">
        <div class="demoCol">2</div>
      </t-col>
    </t-row>
  </div>
</template>
<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components:{
    't-row':Row,
    't-col':Col,
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>