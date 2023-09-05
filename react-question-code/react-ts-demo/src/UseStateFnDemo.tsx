import React, { FC, useState } from 'react'

function genArr() {
  console.log('genArr...')
  const arr = new Array(100)
  arr.fill('hello')
  return arr
}

const Demo: FC = () => {
  console.log('demo...')
  // const [arr, setArr] = useState(['a', 'b', 'c'])
  const [arr, setArr] = useState(genArr)

  function addStr() {
    setArr([...arr, 'hello'])
  }

  return (
    <>
      <p>length {arr.length}</p>
      <div>
        <button onClick={addStr}>add</button>
      </div>
    </>
  )
}

export default Demo
