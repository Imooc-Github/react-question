# Next.js

由 [Vercel](https://vercel.com/) 创建，最流行的 React SSR 框架

初学者区分三个框架
- next.js
- nuxt.js
- nest.js

## 安装

PS：安装 nodejs 最新版本 http://nodejs.cn/

参考[官网](https://www.nextjs.cn/docs/getting-started)的命令 

```sh
npx create-next-app@latest --typescript
## 或 yarn create next-app --typescript
```

PS：只做一个简单 demo 可以先把 `--example` 去掉

## 启动

运行 `npm run dev`

添加新功能

- 页面 `src/pages` ， 可创建一个 `pages/about.tsx` 组件
- API `src/pages/api`
- 静态资源，如 `public/data/about.json` ，GET 访问 `/data/about.json`

## 两种形式 pre-render

- Static Generation 项目构建时生成 HTML 文件，以后访问不会重复生成
- Server-side rendering 每次请求都重新生成 HTML 文件

（画图解释）

### Static Generation

代码参考 `about.tsx`

构建项目
- `npm run build` 构建，可以看到 `getStaticProps` 被执行
- `npm run start` 运行构建的项目 （ 不是运行源码，可修改源码试试 ）

PS：如果就一个普通的 React 组件，也会默认使用这种方式，如 Success.tsx

### Server-side rendering

代码参考 `blog.tsx`

构建项目，运行看 `getServerSideProps` 每次都执行

## 动态路由

想访问 `/blog/1` 这种动态路由，还需要继续调整。

- 新建 `pages/question/[id].tsx`
- 在 `getServerSideProps` 获取动态参数 `id`

回顾：B 端发布以后的 URL 拼接规则
