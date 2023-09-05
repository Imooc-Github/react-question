# 拖拽排序

拖拽排序是 Web 管理系统的常见功能，React 也有相应的第三方插件供我们选择。

## 技术选型

分析常见的第三方插件，并且选择一个合适的。

- 看 github star ，看 npm 下载量 —— （不一定最高，但要有一定的数量规模）
- 看 github 代码更新，和 npm 发布更新
- 看文档和 demo ，是否易读易懂 —— （当年，Vue 能在国内打开，文档占了很大功劳）

### react-dnd

- github star 多，代码更新及时 https://github.com/react-dnd/react-dnd
- npm 下载量大 https://www.npmjs.com/package/react-dnd
- 但，文档不易懂，学习成本高 。如[首页](https://react-dnd.github.io/react-dnd/about) 的 demo ，代码就非常复杂，不易读

PS：examples 太复杂 https://github.com/react-dnd/react-dnd/tree/main/packages/examples/src/04-sortable/simple

### react-beautiful-dnd

https://github.com/atlassian/react-beautiful-dnd

- github star 多， 代码更新不频繁了 https://github.com/atlassian/react-beautiful-dnd
- npm 下载量高 https://www.npmjs.com/package/react-beautiful-dnd
- 文档比较好理解，可以直接在 github 上找到 [examples](https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/examples.md)

但，**不支持 React18 严格模式**（代码好久没更新了）<br>
去掉 `<React.StrictMode>` 就好了。但这样就丢失了严格模式的好处 https://zh-hans.reactjs.org/docs/strict-mode.html

有解决的 lib ，但 star 太少了，不可靠 https://github.com/hello-pangea/dnd

PS：暂无精力更新，看 npm 首页的描述 https://www.npmjs.com/package/react-beautiful-dnd

### Sortablejs

老牌的 js 排序 lib ，不依赖于 React 或 Vue 。

官方提供的 React 版本的下载量还可以 https://github.com/SortableJS/react-sortablejs

但它有一个提示 `is not considered ready for production` ，不推荐用于生产环境

### react-sortable-hoc

https://github.com/clauderic/react-sortable-hoc

star 和下载量都不错，但已不再主动维护，推荐使用 `dnd-kit`

### dnd-kit

https://docs.dndkit.com/presets/sortable

- github star 数量还可以（不算高），代码更新及时 https://github.com/clauderic/dnd-kit
- npm 下载量还可以（不算高）https://www.npmjs.com/package/@dnd-kit/core
- 文档和 demo 通俗移动

代码演示，参考 dnd-kit-and-sortablejs-demo

## 开发

- 抽离组件 `SortableContainer` `SortableItem` —— 图层和画布都需要拖拽排序
- 在画布和图层使用

之前代码的改动
- App.css 增加 `div[role="button"] { outline: 0 }`
- 键盘快捷键，修改 `isActiveElementValid` 函数内的逻辑

工具栏：上移/下移
