import React, { FC } from 'react'

type PropsType = {
  title: string
  desc?: string
}

const QuestionInfo: FC<PropsType> = ({ title, desc }) => {
  return <div style={{ textAlign: 'center' }}>
    <h1>{title}</h1>
    <p>{desc}</p>
  </div>
}

export default QuestionInfo
