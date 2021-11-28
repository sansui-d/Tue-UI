---
title: Popover 弹出框
---
# Popover 弹出框

### 支持 HTML

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 示例代码

```vue
<t-popover position="left">
  <t-button>左边弹出</t-button>
  <template slot="content">
    <strong style="color: #F1453D">加粗的提示</strong>
  </template>
</t-popover>
<t-popover>
  <t-button>上方弹出</t-button>
  <template slot="content">
    <a href="https://github.com/sansui-d/Tue-UI">这是个a链接</a>
  </template>
</t-popover>
<t-popover position="bottom">
  <t-button>下方弹出</t-button>
  <template slot="content">
    普通文本内容
  </template>
</t-popover>
<t-popover position="right">
  <t-button>右边弹出</t-button>
  <template slot="content">
    普通文本内容
  </template>
</t-popover>
```

### 支持 hover 触发

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 示例代码

```vue
<t-popover position="left" trigger="hover">
  <t-button>左边弹出</t-button>
  <template slot="content">
    弹出内容
  </template>
</t-popover>
<t-popover trigger="hover">
  <t-button>上方弹出</t-button>
  <template slot="content">
    弹出内容
  </template>
</t-popover>
<t-popover position="bottom" trigger="hover">
  <t-button>下方弹出</t-button>
  <template slot="content">
    弹出内容
  </template>
</t-popover>
<t-popover position="right" trigger="hover">
  <t-button>右边弹出</t-button>
  <template slot="content">
    弹出内容
  </template>
</t-popover>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|position| 设置弹出框相对触发区域的位置 | String |left、right、top、bottom| top
|trigger| 设置触发模式 | String |click、hover|click