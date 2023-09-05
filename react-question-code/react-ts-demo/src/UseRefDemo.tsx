import React, { FC, useRef } from 'react'

// const Demo: FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null)

//   function selectInput() {
//     const inputElem = inputRef.current
//     if (inputElem) inputElem.select() // DOM 节点，DOM 操作 API
//   }

//   return (
//     <div>
//       <input ref={inputRef} defaultValue="hello world" />
//       <button onClick={selectInput}>选中 input</button>
//     </div>
//   )
// }

const Demo: FC = () => {
  const nameRef = useRef('双越') // 不是 DOM 节点，普通的 JS 变量

  function changeName() {
    nameRef.current = '双越老师' // 修改 ref 值，不会触发 rerender （ state 修改会触发组件 rerender ）
    // console.log(nameRef.current)
  }

  return (
    <>
      <p>name {nameRef.current}</p>
      <div>
        <button onClick={changeName}>change name</button>
      </div>
    </>
  )
}

export default Demo
