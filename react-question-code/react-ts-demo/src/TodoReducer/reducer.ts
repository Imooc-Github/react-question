import type { TodoType } from './store'

export type ActionType = {
  type: string
  payload?: any // 附加的内容（要新增的 todo ，要删除的 todoId）
}

export default function reducer(state: TodoType[], action: ActionType) {
  switch (action.type) {
    case 'add':
      return state.concat(action.payload) // 返回新的 state，不可变数据
    case 'delete':
      return state.filter(todo => todo.id !== action.payload)
    default:
      throw new Error()
  }
}
