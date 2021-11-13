<template>
  <svg class="Ticon" :class="name=='loading'?'loading':null"><use :xlink:href="`#i-${name}`"></use></svg>
</template>
<script>
export default{
    props:{
        name:String
    }
}
</script>
<style lang="less" scoped>
.Ticon {
  width: 1em;
  height: 1em;
}
@keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.loading{
    animation: spin 1s infinite linear;
}
</style>
