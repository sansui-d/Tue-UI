<template>
  <div class="wrapper">
    <input
      :type="type"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
import Icon from "./icon.vue";

export default {
  components: { Icon },
  name: "TueInput",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "helper";
.wrapper {
  font-size: $input-font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: solid 1px $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover
    }
    &:focus {
      border-color: #409eff;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>