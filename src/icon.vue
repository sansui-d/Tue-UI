<template>
  <svg class="t-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'

export default {
  name: 'TueIcon',
  props: ['name']
}
</script>
<style lang="scss" scoped>
.t-icon {
  width: 1em;
  height: 1em;
}
</style>