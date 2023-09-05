# Form 提交

## H5 的基本逻辑

- 获取问卷组件数据
- 显示页面表单
- 用户填写数据，提交数据

## 数据如何提交

- 使用 Ajax 提交，参考之前的 antd form ，getFieldsValue() 获取数据，并提交
- 使用 form 提交（ HTML 功能，不用 JS ）
- 后者更简洁，兼容性更好（老年机），代码体积更小，性能更好

PS：第一种方式也在 B 端学过了，例如登录注册页

## form 提交

```html
<form action="/api/post">
  <input name="username"> <!--输入框-->
  <input name="password"> <!--输入框-->
  <input type="radio" name="gender" value="male"> <!--单选-->
  <input type="radio" name="gender" value="female"> <!--单选-->
  <input type="submit" value="提交"> <!--提交按钮-->
</form>
```

```js
// 服务端 `/api/post` 接口可得到如下数据
{
  // 格式 name: value
  username: '张三',
  password: 'abc',
  gender: 'male'
}
```

## name 就是组件的 fe_id —— 重要！！！

根据之前统计页的数据结构分析，name 就是 fe_id

```js
{
  // 格式 name: value
  c1: '张三',  // fe_id === 'c1'
  c2: 'abc',  // fe_id === 'c2'
  c3: 'male'  // fe_id === 'c3'
}
```
