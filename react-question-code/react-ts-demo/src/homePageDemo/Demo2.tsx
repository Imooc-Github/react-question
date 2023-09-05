import React, { FC, useState } from 'react'

const Demo2: FC = () => {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return <button onClick={handleClick}>Count is : {count}</button>
}

export default Demo2
