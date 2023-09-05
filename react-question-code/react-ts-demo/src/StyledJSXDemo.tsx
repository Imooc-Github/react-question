import React, { FC } from 'react'

const Demo: FC = () => {
  return (
    <div className="container">
      <p>styled-jsx demo</p>

      {/* eslint-disable-next-line */}
      <style jsx>
        {`
          .container {
            background-color: '#f1f1f1';
          }
          p {
            color: 'red';
          }
        `}
      </style>
    </div>
  )
}

export default Demo
