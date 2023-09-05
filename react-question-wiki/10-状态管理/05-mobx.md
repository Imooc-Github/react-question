# Mobx

Mobx 可以通过**声明式**的方式来修改数据。像 Vue 。<br>
不像 React 和 redux 那样，需要用纯函数和不可变值。

## 基本概念

主旨 https://zh.mobx.js.org/the-gist-of-mobx.html

- state 数据
- action 动作
- derivation 派生
    - computed
    - `observer` 监听变化，包裹的 React 组件
    - `autorun` 监听变化，像 watch

## 代码演示

简单 demo - mobx-demo/src/BasicDemo

todo-list demo - mobx-demo/src/TodoDemo2

## 小结

Mobx 使用单项数据流 https://zh.mobx.js.org/the-gist-of-mobx.html#%E5%8E%9F%E5%88%99

## 其他

v6 已经默认去掉了**装饰器**语法，为了大部分的兼容性 https://mobx.js.org/installation.html#mobx-and-decorators

尽量使用 `computed`<br>
https://mobx.js.org/the-gist-of-mobx.html
When starting with MobX, people tend to overuse reactions. The golden rule is, always use computed if you want to create a value based on the current state.

computed 必须是纯函数。而 action 可以修改 state （如 arr.push）<br>
computed 采用惰性求值，会缓存其输出，并且只有当其依赖的可观察对象被改变时才会重新计算。 它们在不被任何值观察时会被暂时停用。
