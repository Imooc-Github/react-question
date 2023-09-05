# 完善其他组件

## 获取组件列表

- 新建 service `getQuestionById`
- 获取组件列表数据，做各种判断 `errno` `isDeleted` `isPublished`
- 新建 `genComponent` ，统计获取组件，并传入属性

## 扩展其他组件

- Title
- Paragraph
- Info
- Textarea
- Checkbox

## checkbox 组件特殊

这种 name-value 的形式（ name 即 `fe_id` ）对于其他组件（input textarea radio），因为它们只有 value

但对于 checkbox 不合适，因为它可以选中多个。所以需要一些变化
- 使用 `<input type="hidden" name={fe_id} values={selectedValues}>`
- checkbox 切换选择时，及时修改 `selectedValues`
