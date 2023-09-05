# useState

## 让页面“动”起来

例如实现一个 click 计数功能，普通变量无法实现。即：修改普通变量无法触发组件的更新 rerender

通过 useState 即可实现。

## state 是什么

State, A component's memory —— 这个比喻非常好！

- props 父组件传递过来的信息
- state 组件自己内部的状态，不对外

每次 state 变化，都会触发组件更新，从新渲染页面。

代码演示，参考 react-ts-demo 中 `pages/StateDemo1.tsx`

## state 的特点

### 异步更新

代码演示

PS：setState 传入函数，可同步更新

### 可能会被合并

代码演示

### 不可变数据

state 可以是任意 JS 类型，不仅仅是值类型。<br>
不可直接修改 state ，而要 setState 新值。

代码演示

PS：函数组件，每个更新函数从新执行，**state 被重置，而不是被修改**。state 可以理解为 readOnly

## immer

Immer 简化了不可变数据结构的处理。特别是对于 JS 语法没那么熟悉的人。

代码演示，参考 react-ts-demo 中 `pages/ImmerDemo1.tsx`

## 实战：List 页面使用 state

- 使用 state
- 使用 immer
    - push
    - 修改 isPublish

代码参考 `pages/List2.tsx`

---

最重要的就是：不可变数据 —— 这是 React state 的核心
