# useReducer

## 背景

第一，是 `useState` 的代替方案。<br>
当数据简单时用 `useState` ，当数据结构较为复杂时，可以考虑用 `useReducer`

第二，参考了 redux （马上要学）的设计，一个简化了的 redux

## 代码演示

简单 demo `pages/CountReducer.tsx`

todo list demo `pages/TodoReducer/index.tsx`

## 概念

- state 或 store - 存储数据
- action - 动作，格式如 `{ type: 'xxx', ... }`
- reducer - 根据 action 生成新 state —— **不可变数据**
- dispatch - 触发 action

PS：在 React 环境下，永远不能忘记 `不可变数据`

## 问题

需结合 useContext 跨组件通讯

另，state 和 dispatch 没有模块化，数据混在一起，也不适合复杂项目。

但简单项目还是可以用的。
