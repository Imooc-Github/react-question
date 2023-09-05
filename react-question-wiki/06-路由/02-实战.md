# 开发

## 增加页面

- pages/Home.tsx
- pages/Login.tsx
- pages/Register.tsx
- pages/NotFoundPage.tsx
- pages/manage/List.tsx
- pages/manage/Star.tsx
- pages/manage/Delete.tsx
- pages/question/Edit.tsx
- pages/question/Stat.tsx

## 增加 Layout

layouts 目录下，所有文件。

PS：先不要管 antd 组件和样式，先把 JSX 写出再说。

## 增加 React-router 配置

安装 `react-router-dom` ，配置参考 router/index.ts

还有 App.ts 也有改动

## 路由功能

- 跳转 - Home 页面使用 `useNavigate` 和 `<Link>`
- 获取动态路由参数 - Edit 页面使用 `useParams`
- 获取 query - Home 页面使用 `useSearchParams`
