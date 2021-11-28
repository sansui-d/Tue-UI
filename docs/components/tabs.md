---
title: Tabs 标签页
---
# Tabs 标签页

#### 基本用法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码

```vue
data() {
    return {
      selected: '1',
    }
},

<t-tabs :selected="selected">
    <t-tabs-head>
      <t-tabs-item name="1">标题一</t-tabs-item>
      <t-tabs-item disabled name="2">标题二</t-tabs-item>
      <t-tabs-item name="3">标题三</t-tabs-item>
    </t-tabs-head>
    <t-tabs-body>
      <t-tabs-pane name="1">内容1</t-tabs-pane>
      <t-tabs-pane name="2">内容2</t-tabs-pane>
      <t-tabs-pane name="3">内容3</t-tabs-pane>
    </t-tabs-body>
</t-tabs>
```

# Attributes

### Tabs

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 当前选中 | String |name| --

### TabsHeadItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 
|disabled|设置是否禁用|Boolean|true、false|false

### TabsBodyPane
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 