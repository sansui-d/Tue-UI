---
title: Input 输入框
---
# Input 输入框

#### 基本用法：

<ClientOnly>
<input-demos></input-demos>
</ClientOnly>

<br>

#### 示例代码：

```vue
<t-input placeholder="请输入内容"></t-input>
<t-input value="默认内容"></t-input>
<t-input disabled value="默认内容"></t-input>

<!--可支持数据绑定-->
<t-input v-model="value"></t-input>
<p>value: {{value}}</p>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|value| 设置默认内容 | String |--|-- 
|disabled| 是否禁用状态 | Boolean |true, false|false
|readonly| 是否只读状态 | Boolean |true, false|false
|placeholder| 提示信息 | String |--|-- 