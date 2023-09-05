# 实战 用户

## JWT

- JWT - JSON Web Token
- 登录成功，服务端派发一个 token
- 后续 HTTP 请求都带着这个 token ，以表明自己的身份

（画图表示）

## services

创建 src/services/user.ts
- 即用即添加 service
- 即用即增加 mock

## 用户功能

注册

登录
- 保存 token
- 给 src/services/ajax.ts 增加 request 拦截器

获取用户信息 MainLayout QuestionLayout（两者平等） —— 抽离 hooks/userLoadUserData.ts

退出（ UserInfo 组件）—— 删除 token
