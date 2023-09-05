# 普通表单组件

## input 组件

```tsx
import React, { FC, useState, ChangeEvent } from 'react'

const Demo: FC = () => {
  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  return <input onChange={handleChange} value={text} />
}
```

## 受控组件 vs 非受控组件

受控组件
- 元素的值同步到 state
- 使用 `value` 属性

非受控组件
- 元素的值，不同步到 state
- 使用 `defaultValue` 属性

React 推荐使用受控组件。看似麻烦，其实让设计更简单。

## 其他表单组件

textarea radio checkbox select

代码参考 react-ts-demo `pages/FormElemDemo1.tsx`

## form

参考 react-ts-demo `pages/homePageDemo/Demo3.tsx`
