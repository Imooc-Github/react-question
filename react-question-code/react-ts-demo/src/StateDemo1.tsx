import React, { FC, useState } from 'react'

const Demo: FC = () => {
  // let count = 0 // 普通的 js 变量，无法触发组件的更新

  const [count, setCount] = useState(0) // useState 可以触发组件的更新，
  //   const [name, setName] = useState('双越')

  function add() {
    // count++
    // setCount(count + 1)

    setCount(count => count + 1) // 使用函数，state 更新不会被合并
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)

    // setCount(count => count + 1)
    console.log('cur count ', count) // 异步更新，无法直接拿到最新的 state 值
  }

  return (
    <div>
      <button onClick={add}>add {count}</button>
    </div>
  )
}

export default Demo
