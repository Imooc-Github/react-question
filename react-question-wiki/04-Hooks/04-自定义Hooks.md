# 自定义 Hooks

已学习了几个常用的内置 Hooks ，可以用于很多业务功能。

## 修改网页标题

- 第一步，直接在组件内部写
- 第二步，可以抽离一个函数
- 第三步，可以直接抽离一个文件 src/hooks/useTitle.ts ，引用使用

抽离自定义 Hook ，可用于很多组件，**复用代码**

## 获取鼠标位置

（刚才的没有返回值，这次有返回值）

代码演示 src/hooks/useMousePosition.ts （直接在 App.tsx 中使用）

## 异步获取信息

（再来个异步的）

代码演示 src/hooks/useGetInfo.ts （直接在 App.tsx 中使用）

## 小节

自定义 Hooks 可以抽离公共逻辑，复用到多个组件中 —— 这是 Hooks 设计的初衷

在 Hooks 和函数组件之前，class 组件也有一些方法：mixin HOC render-prop 等，但都没有 Hooks 来的简单。
