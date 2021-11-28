---
title: Grid 栅格
---
# Grid 栅格

### 24网格

#### 预览

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

#### 示例代码 

```vue
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
```

### 设置 gutter

#### 预览

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

#### 示例代码

```vue
<t-row class="demoRow" gutter="10">
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
<t-row class="demoRow" gutter="10">
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
```

### 设置空隙

#### 预览

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

#### 示例代码

```vue
<t-row class="demoRow" gutter="10">
  <t-col span="8">
    <div class="demoCol">8</div>
  </t-col>
  <t-col span="8" offset="8">
    <div class="demoCol">8</div>
  </t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="6" offset="6">
    <div class="demoCol">6</div>
  </t-col>
  <t-col span="6" offset="6">
    <div class="demoCol">6</div>
  </t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="4">
    <div class="demoCol">4</div>
  </t-col>
  <t-col span="4" offset="4">
    <div class="demoCol">4</div>
  </t-col>
  <t-col span="4" offset="8">
    <div class="demoCol">4</div>
  </t-col>
</t-row>
<t-row class="demoRow" gutter="10">
  <t-col span="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2" offset="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2" offset="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2" offset="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2">
    <div class="demoCol">2</div>
  </t-col>
  <t-col span="2" offset="2">
    <div class="demoCol">2</div>
  </t-col>
</t-row>
```

# Attributes

### Row 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|gutter| 间距 | String、Number |--|0
|position|对齐方式|String|left、center、right|left

### Col
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|span| 栅格占据的列数 | String、Number |1-24|--
|offset|栅格左侧的间隔格数| String、Number|1-24|--
|ipad|ipad响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|narrowPc|窄屏幕响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|pc|普通电脑响应式布局|Number、Object|span数字或{span:1;offset:1}|--
|widePc|宽屏响应式布局|Number、Object|span数字或{span:1;offset:1}|--