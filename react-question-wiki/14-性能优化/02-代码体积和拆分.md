# 代码体积和拆分

## 代码体积分析

https://create-react-app.dev/docs/analyzing-the-bundle-size/

```shell
# build 以后，可以直接运行结果 （看控制台提示）
yarn global add serve
# npm install serve -g
serve -s build
```

发现 main.js 体积有 `1.5M` —— 首页加载就需要 `1.5M` ，有点大，需要拆分。

分析内部发现比较大的体积来自于 antd recharts react-dom dnd-kit 等。<br>
首先想到的：拆分页面，路由懒加载，把编辑页、统计页拆分开

## 路由懒加载

代码参考 src/router/index.ts

再进行代码体积分析，发现 main.js 减小到 `1.0M` 还是很大。<br>
但至少编辑页面、统计页面的代码都移除了。

分析结果中，发现一个不符合预期的现象：**`@dnd-kit` 是拖拽排序的，应该在编辑页，不应该在 main.js**<br>
查代码发现，在 src/store/componentsReducer/index.ts 中用到了 `@dnd-kit/sortable` ，而后者用依赖于 `@dnd-kit/core`<br>
这个是否要优化掉？（把相关代码移动到编辑页面的引用） —— **不值得！！！**
- 这部分代码只占用 50kb ，最后GZip 压缩以后大约 16kb ，体积不算大
- 如果移动代码，将导致代码修改较多，而且可能破坏语义、可读性
- 综合考虑成本和收益，这里保持不变

继续：分析结果中，占比最大的是 antd 和 react-dom ，可以抽离公共代码。

## 抽离公共代码

PS：生成环境需要抽离。开发环境不需要抽离，否则影响打包速度。

代码参考 craco.config.js ，注意两点
- 必须是生成环境。开发环境不需要抽离，否则影响打包速度。
- 设置 `chunks: 'all'`

重新 build 以后，发现 main.js 只有 `35kb` ，react-dom antd vendors 都被拆分出去了。

## 合理使用缓存

运行 build 结果，发现首页依然要加载好几个 JS 文件： main.js react-dom antd vendors<br>
它们体积的总和依然是 1M 左右，那和优化之前一样吗？ —— **不一样**
- 优化之前是一个文件，一旦有代码改动，文件变化，缓存失效
- 优化之后拆分多个文件，代码改动只会导致 main.js 变化，其他文件都会缓存
- 如果不频繁升级 npm 插件，其他 js 文件不会频繁变动

## CSS

不用做优化，css 已经被分离为 main.css antd-chunk.css edit-page.css stat-page.css

## 小结

从一开始的 1.6M 到最后的 33KB ，效果明显。

PS：浏览器和服务端一般都默认支持 Gzip 压缩，体积能压缩 1/3 左右
