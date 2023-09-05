import React, { FC } from 'react'

type PropsType = {
  name: string
}

const Demo1: FC<PropsType> = (props: PropsType) => {
  const { name } = props // '双越老师'

  return <div>Hello {name}</div>
}

export default Demo1
