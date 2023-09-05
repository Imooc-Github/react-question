# Hooks 使用规则

## 命名规则

Hook 必须 `useXxx` 格式来命名。

PS：这种命名规则也很易读，简单粗暴

## 调用位置

Hook 或自定义 Hook ，只能在两个地方被调用
- 组件内部
- 其他 Hook 内部

组件外部，或一个普通函数中，不能调用 Hook

## 顺序一致

Hook 在每次渲染时都按照相同的顺序被调用。

- Hook 必须是组件“第一层代码”
- Hook 不可放在 if 等条件语句中 （ 或者前面有 return ，也算是条件 ）
- Hook 不可放在 for 等循环语句中

代码演示

## 闭包陷阱

当**异步函数**中获取 state 时，可能不是最新的 state 值。

解决方案：替换为 `useRef` —— **但 ref 变化不会触发 rerender** ，所以得结合 state 一起

代码参考 src/pages/ClosureTrap.tsx
