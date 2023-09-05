# 路由设计

## 页面对应的路由

- 首页 `/`
- 登录 `/login`
- 注册 `/register`
- 问卷管理
    - 我的问卷 `/manage/list`
    - 星标问卷 `/manage/star`
    - 回收站 `/manage/trash`
- 问卷详情
    - 编辑问卷 `/question/edit/:id` （动态路由）
    - 问卷统计 `/question/stat/:id`
- 404

## Layout 模板

- MainLayout
- ManageLayout
- QuestionLayout
