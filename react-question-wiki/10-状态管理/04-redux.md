# Redux

Redux 是 React 最出名的状态管理工具

## 概念

redux 和 useReducer 的概念一样
- state 或 store - 存储数据
- action - 动作，格式如 `{ type: 'xxx', ... }`
- reducer - 根据 action 生成新 state —— **不可变数据**
- dispatch - 触发 action

但 redux 和 useReducer 有很多区别
- store 可拆分模块
- 可通过 Hook 获取 state 和 dispatch
- 开发者工具

## 代码演示

代码参考 undo-redo-demo （忽略 undo redo 功能）。分两步：
- 不使用 immer
- 使用 immer

## 开发者工具

Chrome redux DevTools

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=zh-CN

可以看到每一步 dispatch 的 state 变化，开发调试很方便

## redux 单项数据流模型

参考这里的动图 https://cn.redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow/
