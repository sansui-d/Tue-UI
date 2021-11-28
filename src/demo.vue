<template>
  <div>
    <c-button icon="setting" iconPosition="right" type="success">安妮</c-button>
    <c-button icon="setting" iconPosition="right" type="success">安妮</c-button>
    <c-button icon="setting" iconPosition="right">安妮</c-button>
    <div style="display: flex">
      <t-input placeholder="请输入内容"></t-input>
      <t-input value="默认内容"></t-input>
      <t-input disabled value="默认内容"></t-input>
      <t-input type="number"></t-input>
    </div>
    <!--可支持数据绑定-->
    <!-- <t-input v-model="value"></t-input>
    <p>value: {{ value }}</p> -->
    <i-tabs :selected="selected">
      <i-tabs-head>
        <i-tabs-item name="1">标题一</i-tabs-item>
        <i-tabs-item disabled name="2">标题二</i-tabs-item>
        <i-tabs-item name="3">标题三</i-tabs-item>
      </i-tabs-head>
      <i-tabs-body>
        <i-tabs-pane name="1">内容1</i-tabs-pane>
        <i-tabs-pane name="2">内容2</i-tabs-pane>
        <i-tabs-pane name="3">内容3</i-tabs-pane>
      </i-tabs-body>
      <i-row class="demoRow" gutter="10">
        <i-col span="8">
          <div class="demoCol">8</div>
        </i-col>
        <i-col span="8">
          <div class="demoCol">8</div>
        </i-col>
        <i-col span="8">
          <div class="demoCol">8</div>
        </i-col>
      </i-row>
      <i-row class="demoRow" gutter="10">
        <i-col span="6">
          <div class="demoCol">6</div>
        </i-col>
        <i-col span="6">
          <div class="demoCol">6</div>
        </i-col>
        <i-col span="6">
          <div class="demoCol">6</div>
        </i-col>
        <i-col span="6">
          <div class="demoCol">6</div>
        </i-col>
      </i-row>
    </i-tabs>
    <g-layout style="color: white; overflow: hidden; margin-bottom: 50px">
      <g-header style="height: 50px; background: #9e91f2"> header </g-header>
      <g-layout>
        <g-sider
          style="height: 100px; background: #ddd; width: 200px; color: black"
        >
          sider
        </g-sider>
        <g-content style="height: 100px; background: #7b62d9">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; background: #9e91f2"> footer </g-footer>
    </g-layout>
    <c-button @click="$toast('点击弹出提示')">上方弹出</c-button>
    <c-button @click="$toast('点击弹出提示', { position: 'middle' })"
      >中间弹出</c-button
    >
    <c-button @click="$toast('点击弹出提示', { position: 'bottom' })"
      >下方弹出</c-button
    >
    <i-collapse :selected.sync="selectedTab" single>
      <i-collapse-item title="标题1" name="1">hello，你好呢。</i-collapse-item>
      <i-collapse-item title="标题2" name="2"
        >你知道我在想你吗?</i-collapse-item
      >
      <i-collapse-item title="标题3" name="3">我在等你呀!</i-collapse-item>
    </i-collapse>
    <i-popover position="top">
      <c-button>左边弹出</c-button>
      <template slot="content">
        <strong style="color: #f1453d">加粗的提示</strong>
      </template>
    </i-popover>
    <i-popover position="left">
      <i-button>左边弹出</i-button>
      <template slot="content">
        <strong style="color: #f1453d">加粗的提示</strong>
      </template>
    </i-popover>
    <i-popover>
      <i-button>上方弹出</i-button>
      <template slot="content">
        <a href="https://github.com/Orange-ice/Ice-UI">这是个a链接</a>
      </template>
    </i-popover>
    <i-popover position="bottom">
      <i-button>下方弹出</i-button>
      <template slot="content"> 普通文本内容 </template>
    </i-popover>
    <i-popover position="right">
      <i-button>右边弹出</i-button>
      <template slot="content"> 普通文本内容 </template>
    </i-popover>
  </div>
</template>

<script>
import '../dist/index.css'
import {Button} from "../dist/index.js";
import Icon from "./icon";
import {Input} from "../dist/index";
import Col from "./col";
import Row from "./row";
import Layout from "./layout";
import Header from "./header";
import Footer from "./footer";
import Sider from "./sider";
import Content from "./content";
import Toast from "./toast";
import plugin from "./plugin.js";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse";
import CollapseItem from "./collapse-item";
import Plugin from "./plugin";
import Vue from "vue";
Vue.use(Plugin);
export default {
  name: "demo",
  components: {
    "c-button": Button,
    "t-input": Input,
    "i-tabs": Tabs,
    "i-tabs-head": TabsHead,
    "i-tabs-body": TabsBody,
    "i-tabs-pane": TabsPane,
    "i-tabs-item": TabsItem,
    "i-row": Row,
    "i-col": Col,
    "g-layout": Layout,
    "g-header": Header,
    "g-sider": Sider,
    "g-content": Content,
    "g-footer": Footer,
    Toast: Toast,
    "i-collapse": Collapse,
    "i-collapse-item": CollapseItem,
    "i-popover": Popover,
  },
  data() {
    return {
      selectedTab: ["1"],
      selected: "1",
      source: [
        {
          name: "春天",
          children: [{ name: "花开" }, { name: "温暖" }, { name: "光芒万丈" }],
        },
        {
          name: "夏天",
          children: [{ name: "炎热" }, { name: "凉快" }],
        },
      ],
    };
  },
  methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          },
        },
      });
    },
  },
};
</script>
