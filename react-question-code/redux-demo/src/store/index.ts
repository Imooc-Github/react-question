import { configureStore } from '@reduxjs/toolkit'
import undoable, { excludeAction, StateWithHistory } from 'redux-undo'
import countReducer from './count'
import todoListReducer, { TodoItemType } from './todoList'

export type StateType = {
    count: number
    todoList: StateWithHistory<TodoItemType[]>
}

export default configureStore({
    reducer: {
        count: countReducer,

        // // 没有 undo redo
        // todoList: todoListReducer

        // 加了 undo
        todoList: undoable(todoListReducer, {
            limit: 20, // 限制只能撤销 20 步
            filter: excludeAction(['todoList/toggleCompleted']) // 屏蔽某些 action ，不进行 undo redo
        })

        // 扩展其他模块
    }
})