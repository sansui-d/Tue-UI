<template>
  <button
    class="Tbutton"
    :class="{ [`icon-${iconPosition}`]: true }" 
    @click="$emit('click')"
  >
    <t-icon class="icon" v-if="icon && !loading" :name="icon"></t-icon>
    <t-icon class="icon loading" v-if="loading" name="loading"></t-icon>
    <div class="content"><slot></slot></div>
  </button>
</template>
<script>
import Icon from './icon.vue'
export default {
  name:'TButton',
  components:{'t-icon':Icon},
    props: {
    icon: {
        type:String,
        default:undefined
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value == "left" || value == "right";
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="sass" scoped>
@keyframes spin
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)

.loading
    animation: spin 1.5s infinite linear

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
        line-height: 1em
    > .icon
        order: 1
        margin-right: .3em
    &.icon-right
        > .content
            order: 1
            line-height: 1em
        > .icon
            order: 2
            margin-left: .3em
</style>