# 基础知识

- HTTP 请求，前后端通讯 —— 不再具体讲解了
- API - XMLHttpRequest 和 fetch
- 常用工具：axios

代码演示
- XMLHttpRequest 和 fetch
- axios - 在项目中安装演示

（用已有的 mock 服务来演示）

```js
var xhr = new XMLHttpRequest();
xhr.open('get', '/api/test', true);
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4 && xhr.status === 200) {
     var result = JSON.parse(xhr.responseText);
   }
}
xhr.send();
```

```js
fetch('/api/test')
    .then(res => res.json())
    .then(data => console.log(data))
```
