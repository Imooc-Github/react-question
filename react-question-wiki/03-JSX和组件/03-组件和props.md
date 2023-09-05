# 组件和 props

## React 一切皆组件

React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

组件可嵌套

- React 通过组件来构建 UI
- 组件拆分也有利于代码组织和维护，尤其对于大型软件
- JSX 中，组件 tag 首字母要大写

代码演示：从 index.tsx 开始，到 `<App>` 全都是组件。

## 组件就是一个函数

- React 之前是 class 组件
- 现已被函数组件 FC 全面取代
- 输入 props ，返回一段 JSX

## 实战：List 页面抽离组件

代码参考 react-ts-demo 中 `components/QuestionCard1.tsx`

- props 类型
- TS 泛型


## 进阶：type 还是 interface

都可以实现类型定义的功能 （具体代码演示），用哪个都可以

---

PS：组件之间的数据传递不仅仅只有 props ，课程后面还会继续讲解其他形式。

TS 语法如果一开始不熟练，就先记住当前的。随着课程深入，用多了也就熟练了。

PS：函数也可以当做属性来传递
