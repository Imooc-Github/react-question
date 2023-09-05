import React, { FC, useState } from 'react'
import produce from 'immer'

const Demo: FC = () => {
  //   const [userInfo, setUserInfo] = useState({ name: '双越', age: 20 })
  //   function changeAge() {
  //     // // **不可变数据** - 不去修改 state 的值，而是要传入一个新的值 —— 重要！
  //     // setUserInfo({
  //     //   ...userInfo,
  //     //   age: 21,
  //     // })

  //     setUserInfo(
  //       produce(draft => {
  //         draft.age = 21
  //       })
  //     )
  //   }

  const [list, setList] = useState(['x', 'y'])
  function addItem() {
    // // **不可变数据** - 不去修改 state 的值，而是要传入一个新的值 —— 重要！
    // setList(list.concat('z'))
    // // setList([...list, 'z'])

    setList(
      produce(draft => {
        draft.push('z')
      })
    )
  }

  return (
    <div>
      <h2>state 不可变数据</h2>
      {/* <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>change age</button> */}
      <div>{JSON.stringify(list)}</div>
      <button onClick={addItem}>add item</button>
    </div>
  )
}

export default Demo
