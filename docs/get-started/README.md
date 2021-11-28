---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i tue-ui
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 tue-ui

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

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

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
    Button,
    Icon,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Footer,
    Sider,
    Content,
    Toast,
    plugin,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse,
    CollapseItem

} from 'tue-ui'

Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-button-group', ButtonGroup)
Vue.component('t-input', Input)
Vue.component('t-row',Row)
Vue.component('t-col',Col)
Vue.component('t-layout',Layout)
Vue.component('t-header',Header)
Vue.component('t-sider',Sider)
Vue.component('t-content',Content)
Vue.component('t-footer',Footer)
Vue.use(plugin)                           // toast 组件的使用方法
Vue.component('t-tabs',Tabs)
Vue.component('t-tabs-head',TabsHead)
Vue.component('t-tabs-body',TabsBody)
Vue.component('t-tabs-item',TabsItem)
Vue.component('t-tabs-pane',TabsPane)
Vue.component('t-popover',Popover)
Vue.component('t-collapse',Collapse)
Vue.component('t-collapse-item',CollapseItem)
```