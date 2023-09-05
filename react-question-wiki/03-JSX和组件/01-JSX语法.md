# JSX 语法

JSX - JS 语法扩展，可以在 JS 中写模板（类似 HTML 语法）<br>
JSX 已经成为 ES 语法标准，也可用于其他框架，如 Vue3

- 标签
- 属性
- 事件
- JS 表达式
- 判断
- 循环

## 标签

- 首字母小写 - HTML tag
- 首字母**大写** - 自定义组件
- 如 `<input/>` 和 `<Input/>` 就不一样

可以像 HTML 一样嵌套

JSX 里的标签必须是闭合的，`<input>` `<br>` 这样写在 JSX 会报错（在 HTML 中不会报错），必须闭合 `<input/>`

每一段 JSX 只能有一个根节点，或者使用 `<></>` （ Fragment ）

## 属性

和 HTML 属性基本一样，但有些和 JS 关键字冲突了

- `class` 要改为 `className`
- `style` 要写成 JS 对象（不能是 string），key 采用**驼峰写法**
- `for` 要改为 `htmlFor`

## 事件

`onXxx` 的形式

注意 TS 的写法

```jsx
function clickHandler(event: React.MouseEvent<HTMLParagraphElement>) {
    event.preventDefault()
    console.log('clicked')
}

return <p onClick={clickHandler}>hello world</p>
```

如果要想**传递参数**，可以通过如下方式

```jsx
  function clickHandler(event: React.MouseEvent<HTMLParagraphElement>, x: string) {
    event.preventDefault()
    console.log('clicked', x)
  }

  return (
    <p onClick={(e: React.MouseEvent<HTMLParagraphElement>) => clickHandler(e, 'hello')}>
        hello world
    </p>
  )
```

PS：Event handlers must be passed, **not called!** `onClick={handleClick}`, not `onClick={handleClick()}`.

## JS 表达式

`{xxx}` 格式表示一个 JS 变量或表达式，可用于

- 普通文本内容，或判断、循环
- 属性值
- 用于注释

## 判断

JS 一般使用 `if...else` 做判断，但不能用于 JSX 的 `{xxx}` 中。

所以，可以选择其他方式做判断
- 运算符 `&&`
- 三元表达式 `a ? b : c`
- 用函数封装

```jsx
const flag = true
return <div>
    {flag && <p>hello</p>}
    {flag ? <p>你好</p> : <p>再见</p>}
</div>
```

或者用函数封装

```js
function Hello() {
    if (flag) return <p>你好</p>
    else return <p>再见</p>
}

return <Hello></Hello>
```

## 循环

使用 `map` 做循环

```js
  const list = [
    { username: 'zhangsan', name: '张三' },
    { username: 'lisi', name: '李四' },
    { username: 'shuangyue', name: '双越' },
  ]

  const ul = <ul>
    {list.map(user => {
        return <li key={user.username}>{user.name}</li>
    })}
  </ul>
```

JSX 循环必须有 `key` - 帮助 React 识别哪些元素改变了，比如被添加或删除。
- 同级别 `key` 必须唯一
- `key` 是不可改变的 —— 尽量不用 index ，要用业务 ID （也不要用随机数）
- `key` 用于优化 VDOM diff 算法（后面再说）

## 显示 HTML 代码

JSX 防止注入攻击，否则用 `dangerouslySetInnerHTML={{ __html: 'xxx' }}`

