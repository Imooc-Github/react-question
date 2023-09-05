import React, { FC, useState, ChangeEvent } from 'react'
import { nanoid } from 'nanoid'

type TodoType = {
  id: string
  title: string
}

const Demo3: FC = () => {
  const [count, setCount] = useState(0)

  // todo list
  const [list, setList] = useState<TodoType[]>([
    { id: nanoid(5), title: '吃饭' },
    { id: nanoid(5), title: '睡觉' },
  ])

  return (
    <div>
      <h3>Todo {count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>
      <List2 list={list} />
      <InputForm list={list} setList={setList} />
    </div>
  )
}

export default Demo3

// ---------------------- 分割线 ----------------------

type InputFormPropsType = {
  list: TodoType[]
  setList: (list: TodoType[]) => void
}
const InputForm: FC<InputFormPropsType> = ({ list, setList }) => {
  // 输入框文字
  const [text, setText] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  // 新增 todo
  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!text.trim()) return

    setList(
      list.concat({
        id: nanoid(5),
        title: text,
      })
    )

    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">What needs to be done?</label>
      <br />
      <input id="new-todo" onChange={handleChange} value={text} />
      <button type="submit">Add #{list.length + 1}</button>
    </form>
  )
}

// ---------------------- 分割线 ----------------------

type ListPropsType = {
  list: TodoType[]
}
const List: FC<ListPropsType> = ({ list = [] }) => {
  console.log('list...')
  return (
    <ul>
      {list.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

const List2 = React.memo(List) // 根据 props 来更新，不是“无脑”更新
