<template>
  <div>
    <div class="easy">
      <t-input placeholder="请输入内容"></t-input>
      <t-input value="默认内容"></t-input>
      <t-input disabled value="默认内容"></t-input>
    </div>
    <div class="bindDate">
      <t-input v-model="value"></t-input>
      <p>value: {{value}}</p>
    </div>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{'t-input':Input},
  data(){
    return{
      value:'默认内容'
    }
  }
}
</script>
<style lang="scss">
div.easy{
  margin-top: 10px;
  margin-bottom: 8px;
  > input{
    margin-top: 8px;
  }
}

div.bindDate{
  margin-top: 8px;
  height: 64px;
}
</style>