# 撤销重做

## 实现原理

（先介绍 stack）

两个 stack ：undo-stack redo-stack

- 输入：redo-stack 清空，undo-stack 入栈
- undo ：undo-stack 出栈，redo-stack 入栈
- redo ：redo-stack 出栈，undo-stack 入栈

画图表示<br>
代码演示

## redux 撤销重做

https://www.npmjs.com/package/redux-undo

代码演示，从之前的 redux todo-list demo 上进行

- store/store.ts
- pages/TodoList.ts

## 开发

- src/store/store.ts
- src/hooks/useGetComponentInfo.ts
- src/pages/question/Edit/EditToolbar.tsx

PS：看 ctrl + z 等快捷键
