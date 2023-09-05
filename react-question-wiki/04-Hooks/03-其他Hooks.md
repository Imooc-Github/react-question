# 其他 Hooks

## useRef

一般用于操作 DOM 元素，代码演示：src/pages/UseRefDemo1.tsx

PS：useRef 也可以传入 JS 值，但更新时不会触发 rerender ，需替换为 useState

## useMemo

- 函数组件，默认，每次 state 变化都会重新执行
- useMemo 可以缓存某个数据，不用每次都重新生成
- 可用于计算量比较大的数据场景

代码参考 pages/UseMemoAndCallback/UseMemoDemo1.tsx

注意文档中的这段话 “你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。” https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo<br>
即，useMemo 的控制权在 React ，不一定保证每个都会缓存，但都是为了全局的性能最佳。

## useCallback

useCallback 就是 useMemo 的语法糖，和 useMemo 一样。用于缓存函数。

代码参考 pages/UseMemoAndCallback/UseCallbackDemo1.tsx
