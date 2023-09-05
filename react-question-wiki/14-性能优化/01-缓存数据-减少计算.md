# 缓存数据 减少计算

PS：React18 开发环境下，组件会渲染两次。生产环境则不会。

## useState 传入函数

- useState 传入初始化数据
- 如传入函数，则只在组件渲染执行一次
- 如果数据结构较复杂，可使用函数

代码演示，参考 react-ts-demo 中 pages/UseStateFnDemo.tsx

## useMemo 缓存数据

（之前讲过，再回顾一遍，不用代码演示了）

- 函数组件，默认，每次 state 变化都会重新执行
- useMemo 可以缓存某个数据，不用每次都重新生成
- 可用于计算量比较大的数据场景

代码参考 pages/UseMemoAndCallback/UseMemoDemo1.tsx

注意文档中的这段话 “你可以把 useMemo 作为性能优化的手段，但不要把它当成语义上的保证。” https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo<br>
即，useMemo 的控制权在 React ，不一定保证每个都会缓存，但都是为了全局的性能最佳。

项目示例：统计页，链接和二维码的 Elem

## useCallback 缓存函数

（之前讲过，再回顾一遍，不用代码演示了）

useCallback 就是 useMemo 的语法糖，和 useMemo 一样。用于缓存函数。

代码参考 pages/UseMemoAndCallback/UseCallbackDemo1.tsx

项目示例：新增组件

## React.memo 缓存组件

当 state 变化时，React 会默认渲染所有**子组件**，无论其 props 是否变化

但如果想要控制子组件根据 props 变化来渲染，可以使用 `React.memo`

代码演示，可以在 pages/homePageDemo/Demo3.tsx <br>
为 `List` 组件增加 `React.memo`

PS：注意和 `useMemo` 的区别，一开始容易搞混了
