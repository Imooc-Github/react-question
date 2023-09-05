# 搭建 mock 服务

## Mock.js

http://mockjs.com/

- 前端引入 Mock.js
- 定义路由
- Mock.js 劫持 ajax 请求

代码演示
- 安装 Mock.js 和 axios
- 定义路由，参考 `_mock/index.ts`
- App.js 测试 ajax

```ts
import './_mock/index'
import axios from 'axios'

useEffect(() => {
    // fetch('/api/test')  // 不能用 fetch
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    axios.get('/api/test').then(res => console.log('res', res.data))
  }, [])
```

Mock.js 的强大之处：
- 前端劫持 Ajax
- Random 的模拟能力

注意
- Mock.js 只能劫持 XHR ，不能劫持 fetch ，所以不要用 fetch 请求。
- Mock.js 要在生产环境下去掉，否则上线会有问题 —— Mock.js 体积也很大
- 结论：不建议直接在前端使用 Mock.js

## nodejs 搭建 Mock 服务

代码参考 question-mock

- 刻意延迟 1s ，模拟真实效果
- 使用 Mock.js 的 `Random` 功能
- 定义写 Mock 的格式，考虑扩展性

前端修改 `devServer` ，参考 craco.config.js

扩展 webpack 配置
- 使用 craco https://github.com/dilanx/craco
- 可参考 https://www.lingjie.tech/article/2021-01-04/27 

## 在线 Mock 平台

不稳定，可能不维护了。有数据泄漏风险（多人使用，难免会写敏感数据）

- fast-mock
- y-api
- swagger - 尽量不推荐用国外平台（可以用做工具，但别用作服务）
