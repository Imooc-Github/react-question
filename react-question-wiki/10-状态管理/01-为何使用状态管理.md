# 为何使用状态管理

## 状态提升

- 一个复杂页面，要拆分 UI 组件
- 但数据保存在顶级组件
- 通过 props 传递到下级组件

代码演示，参考 react-ts-demo 中 `pages/homePageDemo/demo3.tsx` —— 需要抽离 `<form>` 为单独的组件

（画图表示）

## 状态管理

但如果情况再复杂，例如问卷编辑器，光通过状态提升无法满足。需要状态管理 —— 数据放在一个集中的第三方。

（画图表示）

React 状态管理的方式
- 自带的 Context useReducer
- Redux
- Mobx
