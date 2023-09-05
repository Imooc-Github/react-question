# 工具栏

PS：先不管 undo/redo

## 删除

从 Redux store 中删除组件

## 隐藏/显示

第一，定义数据结构，增加 `isHidden`
- Mock 数据
- store 数据类型

第二，修改 `isHidden` 执行 隐藏/显示

第三，EditCanvas 过滤掉隐藏的组件

## 锁定/解锁

第一，定义数据结构，增加 `isLocked`
- Mock 数据
- store 数据类型

第二，修改 `isLocked` 执行 隐藏/显示<br>
button 切换 type

第三，EditCanvas 增加锁定样式

第四，Edit/ComponentProp 使用 `isLocked` 来判断组件属性 form 是否可用

## 复制/粘贴

第一，为 store 增加一个属性 `copiedComponent`

第二，执行复制、粘贴

PS：判断粘贴 button disabled

## 上移/下移

等着和拖拽排序一起做，这俩很相似。

PS：判断 button disabled

## 快捷键

在 EditCanvas `useBindCanvasKeyBoardEvent`
