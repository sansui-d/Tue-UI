---
title: Layout 布局
---
# Layout 布局

### 布局一

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码

```vue
    <t-layout style="color: white; margin-bottom:50px;">
      <t-header style="height: 50px; background:#409eff;">
        header
      </t-header>
      <t-content style="height: 100px; background:#66b1ff;">
        content
      </t-content>
      <t-footer style="height: 50px; background:#409eff;">
        footer
      </t-footer>
    </t-layout>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
    <t-layout style="color: white; overflow: hidden; margin-bottom: 50px">
      <t-header style="height: 50px; background: #409eff"> header </t-header>
      <t-layout>
        <t-sider
          style="height: 100px; background: #c6e2ff; width: 200px; color: white"
        >
          sider
        </t-sider>
        <t-content style="height: 100px; background: #66b1ff">
          content
        </t-content>
      </t-layout>
      <t-footer style="height: 50px; background: #409eff"> footer </t-footer>
    </t-layout>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
    <t-layout style="color: white; overflow: hidden; margin-bottom: 50px">
      <t-sider style="background: #66b1ff; width: 200px; color: white">
        sider
      </t-sider>
      <t-layout>
        <t-header style="height: 50px; background: #409eff"> header </t-header>
        <t-content style="height: 100px; background: #c6e2ff">
          content
        </t-content>
        <t-footer style="height: 50px; background: #409eff"> footer </t-footer>
      </t-layout>
    </t-layout>
```