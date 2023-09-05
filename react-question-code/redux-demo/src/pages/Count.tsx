import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../store/count'
import type { StateType } from '../store/index'

const Count: FC = () => {
    const count = useSelector<StateType>(state => state.count)

    const dispatch = useDispatch()

    return <div>
        <span><>count: {count}</></span>
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(decrease())}>-</button>
    </div>
}

export default Count