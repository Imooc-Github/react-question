# 实战 问卷

## 配置 axios

创建 src/services/ajax.ts ，**先不写 request 拦截器**

创建 src/services/question.ts
- 即用即添加 service
- 即用即增加 mock

## 问卷功能1

创建问卷 ManageLayout.tsx

获取单个问卷 Edit Stat（ 虽先不做，但可先获取数据 ） —— 抽离为 hooks/useLoadQuestionData.ts

## 使用 useRequest

https://ahooks.js.org/zh-CN

传统方式需要自己处理 loading error ，而 useRequest 解决了这个问题。

重构以上两个

## 问卷功能2

获取问卷列表 List Star Trash —— 抽离为 hooks/useLoadQuestionListData.ts

问卷操作
- Trash 恢复、彻底删除
- QuestionCard.tsx 星标、删除、复制

## 分页和搜索

回顾：ListSearch 和 url 参数

分页 url 参数 `page` 和 `pageSize`

- Antd 分页组件
- 修改 hooks/useLoadQuestionListData.ts

## LoadMore

List 不用传统分页，用 LoadMore

- 初始化：加载第一页，监听滚动
- 滚动到底部，加载下一页
- 不能用 url 参数 `page` 和 `pageSize` ，否则刷新会出问题的

PS：搜索依然可以用 url 参数
