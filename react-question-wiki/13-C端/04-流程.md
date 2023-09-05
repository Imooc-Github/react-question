# 流程

先拿两个组件 input radio 跑通流程

## 新建组件

- QuestionInput
- QuestionRadio

组件属性参考 Mock 的组件列表

## 渲染 form

在 question 页面新建 form 组件

- 增加 questionId
- 临时**静态引入** QuestionInput QuestionRadio
- 提交按钮

## 提交 form

- 新建 API `/api/answer` ，并写入 form `action`
- 新建 service `postAnswer`
- 新建 Mock ，接受提交的答卷

## 抽离 PageWrapper

考虑到各个页面 question success fail ，抽离 `<PageWrapper>` 组件<br>
注意 js css

替换 `public/favicon.ico`
