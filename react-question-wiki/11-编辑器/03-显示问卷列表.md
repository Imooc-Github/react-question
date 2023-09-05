# 显示问卷列表

在 EditCanvas 中显示

## 新建两个组件

- QuestionTitle
- QuestionInput

## Ajax 获取数据

第一，设计组件的数据结构

```js
// components: [ ... ] ，每个组件有如下结构：
{
    id: 'xxx',
    type: 'questionInfo', // 组件类型，每个组件都固定
    title: '组件标题', // 图层修改标题
    props: {}, // 组件属性，如单选有多少个选项
    // isHidden: false,
    // isLocked: false,
}
```

第二，加载数据

- hooks/useLoadQuestionData.ts
- 数据要放在 Redux store 中，因为各个组件都要使用这个数据，共享 （先不要写 `selectedId`）

## 显示在 EditCanvas

把组件拼成 `componentConfList` 

注意：CSS 屏蔽鼠标行为

## 点击设置 selectedId

selectedId 要存储在 Redux store 中，各个组件都要使用，共享

在 EditCanvas 增加 onClick ，增加 selected 样式

Edit/index.ts 中，点击空白处 `clearSelectedId`
