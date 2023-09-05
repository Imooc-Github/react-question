import React, { FC, useEffect } from 'react'
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'

// Model the application store
class Timer {
    secondsPassed = 0
    constructor() {
        makeAutoObservable(this)
    }
    increase() {
        this.secondsPassed++
    }
    reset() {
        this.secondsPassed = 0
    }
}

const myTimer = new Timer()

type PropsType = { timer: Timer }
const TimerView = observer((props: PropsType) => {
    const { timer } = props
    return <button onClick={() => timer.reset()}>
        Seconds passed: {timer.secondsPassed}
    </button>
})

const Demo: FC = () => {
    useEffect(() => {
        const id = setInterval(() => {
            myTimer.increase()
        }, 1000)

        return () => {
            clearInterval(id) // 自己定义的定时器，要自己去销毁
        }
    }, [])

    return <div>
        <p>Basic Demo</p>
        <TimerView timer={myTimer}></TimerView>
    </div>
}

export default Demo
