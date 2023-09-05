import React, { FC, useState } from 'react'
import { Typography, Radio, Space } from 'antd'
import type { RadioChangeEvent } from 'antd'

const { Paragraph } = Typography

const Demo: FC = () => {
  const [value, setValue] = useState('')

  function handleChange(event: RadioChangeEvent) {
    setValue(event.target.value)
  }

  return (
    <>
      <Paragraph>Antd form elems demo</Paragraph>

      <Radio.Group value={value} onChange={handleChange}>
        <Space direction="vertical">
          <Radio value={'a'}>A</Radio>
          <Radio value={'b'}>B</Radio>
          <Radio value={'c'}>C</Radio>
        </Space>
      </Radio.Group>
    </>
  )
}

export default Demo
