<template>
  <svg class="Ticon"><use :xlink:href="`#i-${name}`"></use></svg>
</template>
<script>
export default {
  name:'TIcon',
  props: {
    name: String,
  }
};
</script>
<style lang="less" scoped>
.Ticon {
  width: 1em;
  height: 1em;
}
</style>
