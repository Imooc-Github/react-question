import { createSlice } from '@reduxjs/toolkit'

const INIT_STATE: number = 100

export const countSlice = createSlice({
    name: 'count', // 模块的名字（redux store 默认可以拆分模块的）
    initialState: INIT_STATE,
    reducers: {
        increase(state: number) {
            return state + 1
        },
        decrease(state: number) {
            return state - 1 // 返回一个新的 state ，不可变数据
        }
    }
})

export const { increase, decrease } = countSlice.actions

export default countSlice.reducer
