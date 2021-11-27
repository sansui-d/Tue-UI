---
title: Button 按钮
---
# Button 按钮

**导入**

```js
import {Button, Icon} from 'tue-ui'
import 'tue-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    't-button': Button,
    't-icon': Icon
  }
}
```

#### 基本用法：

<ClientOnly>
<button-demo-1></button-demo-1>
</ClientOnly>

#### 示例代码：

```vue
<t-button>默认按钮</t-button>
<t-button type="primary">主要按钮</t-button>
<t-button type="success">成功按钮</t-button>
<t-button type="danger">危险按钮</t-button>
```

#### 加入icon:

<ClientOnly>
<button-demo-2></button-demo-2>
</ClientOnly>

#### 示例代码：

```vue
<t-button icon="setting">设置</t-button>
<t-button :loading="loading1" type="primary">加载中</t-button>
<t-button :loading="loading2" @click="loading2=!loading2" type="primary">点击加载</t-button>
```
```js
export default {
  data() {
    return {
      loading1: true,
      loading2: false
    }
  }
}
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
| icon | 设置内置的icon |    String | setting，info，left，right，download，loading，thumbs-up，down| -- 
|iconPosition|图标位置|String|left、right|left
| loading      | 加载状态      |  Boolean |true、false| false
