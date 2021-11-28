---
title: Collapse 折叠面板
---
# Collapse 折叠面板

### 基本用法

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

#### 示例代码

```vue
<t-collapse :selected.sync="selectedTab" single>
  <t-collapse-item title="标题1" name="1">内容111111111111</t-collapse-item>
  <t-collapse-item title="标题2" name="2">内容222222222222</t-collapse-item>
  <t-collapse-item title="标题3" name="3">内容333333333333</t-collapse-item>
</t-collapse>

<script>
export default {
  data() {
    return {
      selectedTab: ['1']
    }
  },
}
</script>
```

# Attributes

### Collapse 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 选中项 | Array |--|[]
| single | 是否单一展示 |    boolean | true、false|false

### CollapseItem
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|title| 标题 | String |--|--
| name | 唯一标识，必填 |    String |-- |--