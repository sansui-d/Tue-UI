<template>
  <button
    class="t-button"
    :class="[`icon-${iconPosition}`, type ? 't-' + type : 't-default']"
    @click="$emit('click')"
  >
    <t-icon v-if="icon && !loading" :name="icon" class="icon"></t-icon>
    <t-icon class="loading icon" v-if="loading" name="loading"></t-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./icon.vue"; // 全局注册的 Icon 在单元测试时并不可用
export default {
  name: "TueButton",
  components: { "t-icon": Icon },
  props: {
    icon: {},
    type: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>
<style lang="scss" scoped>
@import "helper";
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
button {
  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.t-default {
  // color: white;
  background: $button-bg;
  border: 1px solid $border-color;

  &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    border-color: #409eff;
  }
}
.t-primary {
  color: white;
  background-color: #409eff;
  border: 1px solid #409eff;
  > svg {
    fill: white;
  }
  &:hover {
    border-color: #66b1ff;
    background-color: #66b1ff;
    color: white;
  }
  &:active {
    background-color: #409eff;
    color: white;
  }
}
.t-success {
  color: white;
  background-color: #67c23a;
  border: 1px solid #67c23a;
  > svg {
    fill: white;
  }
  &:hover {
    border-color: #85ce61;
    background-color: #85ce61;
    color: white;
  }
  &:active {
    background-color: #67c23a;
    color: white;
  }
}
.t-danger {
  color: white;
  background-color: #f56c6c;
  border: 1px solid #f56c6c;
  > svg {
    fill: white;
  }
  &:hover {
    border-color: #f78989;
    background-color: #f78989;
    color: white;
  }
  &:active {
    background-color: #f56c6c;
    color: white;
  }
}
.t-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;

  // &:active {
  //   background-color: #409eff;
  // }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
    line-height: $font-size;
  }

  // 不加行高 文字没法和 icon 对齐，应该是浏览器问题吧...
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }

  .loading {
    animation: spin 1.5s linear infinite;
  }
}
</style>