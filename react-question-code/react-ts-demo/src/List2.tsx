import React, { FC, useState, useEffect } from 'react'
import produce from 'immer'
import QuestionCard from './components/QuestionCard'

// 组件是一个函数（执行返回 JSX 片段），组件初次渲染执行这个函数
// 任何 state 更新，都会触发组件的更新（重新执行函数）
const List2: FC = () => {
  useEffect(() => {
    console.log('加载 ajax 网络请求')

    return () => {
      console.log('销毁')
    }
  }, []) // 无依赖，组件初次渲染时执行

  // const [count, setCount] = useState(0)
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷1', isPublished: false },
    { id: 'q2', title: '问卷2', isPublished: true },
    { id: 'q3', title: '问卷3', isPublished: false },
    { id: 'q4', title: '问卷4', isPublished: true },
  ])

  // useEffect(() => {
  //   console.log('question list changed')
  // }, [questionList])

  // useEffect(() => {
  //   console.log('count changed')
  // }, [count, questionList])

  function add() {
    // setCount(count + 1)

    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   // 新增 concat
    //   questionList.concat({
    //     id: 'q' + r,
    //     title: '问卷' + r,
    //     isPublished: false,
    //   })
    // )

    // immer 的方式
    setQuestionList(
      produce(draft => {
        draft.push({
          id: 'q' + r,
          title: '问卷' + r,
          isPublished: false,
        })
      })
    )
  }

  function deleteQuestion(id: string) {
    // // 不可变数据
    // setQuestionList(
    //   // 删除 filter
    //   questionList.filter(q => {
    //     if (q.id === id) return false
    //     else return true
    //   })
    // )

    // immer 的方式
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }

  function publishQuestion(id: string) {
    // setQuestionList(
    //   // 修改 map
    //   questionList.map(q => {
    //     if (q.id !== id) return q

    //     return {
    //       ...q,
    //       isPublished: true,
    //     }
    //   })
    // )

    // immer 的方式
    setQuestionList(
      produce(draft => {
        const q = draft.find(item => item.id === id)
        if (q) q.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页2</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}>新增问卷</button>
      </div>
    </div>
  )
}

export default List2
