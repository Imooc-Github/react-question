# 技术方案设计

## UI 组件设计

拆分组件，拼出界面。画图表示

- flex 布局
- 居中对齐
- antd Tabs 组件

代码演示，重点注意：
- 高度 100%
- 画布的尺寸、定位
- 画布的 Y 滚动

## 组件数据结构设计

一个问卷的基本信息

```js
{
    id: 'xxx',
    title: '标题',
    desc: '描述',
    isStar: false,
    isDeleted: false,
    isPublished: false, // 是否发布
    componentList: [], // 组件列表
}
```

每个组件的信息

```js
{
    id: 'xxx',
    type: 'questionInfo', // 组件类型，每个组件都固定
    title: '组件标题', // 图层修改标题
    isHidden: false,
    isLocked: false,
    props: {}, // 组件属性，如单选有多少个选项
}
```

各个组件的 type 和 props —— 参考项目的 http 请求数据

## 状态管理

状态管理的核心价值
- 统一管理数据，方便多组件共享数据
- 问卷编辑页面，复杂，组件多
- 各个组件都在使用、修改问卷数据 —— 根据功能来演示

状态管理需要管理的
- 上述所有问卷数据
- 问卷信息和 componentList ，分两个模块 - 考虑 undo-redo
- 需要增加 selectedId ，知道选中了哪个 —— （工具栏、属性，都需要根据 selectedId 操作）

（代码演示）

## 问卷组件设计

一个问卷组件的基本配置：
- type 和 title （ type 很重要 ）
- Component 即画布显示的组件
- PropComponent 即属性面板显示的属性编辑
- defaultProps 默认的属性

代码演示（先做几个基本组件）

PS：考虑扩展性

## API 设计

- 获取单个问卷
- 保存（自动保存）
- 发布

代码演示
