<template>
  <button class="Tbutton" :class="{ [`icon-${iconPosition}`]: true }">
    <Ticon class="icon" v-if="icon" :name="icon"></Ticon>
    <div class="content"><slot></slot></div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value == "left" || value == "right";
      },
    },
  },
};
</script>
<style lang="sass" scoped>
.Tbutton
    height: var(--button-height)
    font-size: var(--font-size)
    padding: 0 1em
    border-radius: var(--button-radius)
    border: 1px solid var(--border-color)
    background: var(--button-bg)
    vertical-align: middle
    display: inline-flex
    justify-content: center
    align-items: center
    &:hover
        border-color: var(--border-color-hover)
    &:active
        background-color: var(--button-active-bg)
    &:focus
        outline: none
    > .content
        order: 2
        line-height: var(--font-size)
    > .icon
        order: 1
        margin-right: .3em
    &.icon-right
        > .content
            order: 1
            line-height: var(--font-size)
        > .icon
            order: 2
            margin-left: .3em
</style>