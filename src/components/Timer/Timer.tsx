import { formatNumber } from '@/helpers/formatNumber'
import { useEffect, useRef, useState } from 'react'

interface Timer {
    milliseconds: number
    seconds: number
    minutes: number
}

type TimerProps = {
    hasStarted: boolean
}

const Timer = ({ hasStarted }: TimerProps) => {
    const [timer, setTimer] = useState<Timer>({
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
    })
    const timerResult = useRef<Timer | null>(null)

    useEffect(() => {
        if (!hasStarted) {
            timerResult.current = timer
            setTimer({ milliseconds: 0, minutes: 0, seconds: 0 })
            return
        }
        const interval = setInterval(() => {
            setTimer((prev) => {
                let ms = prev.milliseconds + 10
                let sec = prev.seconds
                let min = prev.minutes

                if (ms >= 1000) {
                    ms = 0
                    sec += 1
                }
                if (sec >= 60) {
                    sec = 0
                    min += 1
                }

                return { milliseconds: ms, seconds: sec, minutes: min }
            })
        }, 10)
        return () => clearInterval(interval)
    }, [hasStarted])
    const getTimer = () => {
        if (timerResult.current) {
            const prevTimer = `${formatNumber(timerResult.current.minutes)}:${formatNumber(timerResult.current.seconds)}:${formatNumber(timerResult.current.milliseconds)}`
            return prevTimer
        }
    }

    return (
        <div className="w-full relative flex flex-col items-center justify-center z-50">
            <p className="absolute bottom-full text-[#d0c5ad]">{getTimer()}</p>
            <p className="text-[#c98643] text-[40px]">{`${formatNumber(timer.minutes)}:${formatNumber(timer.seconds)}:${formatNumber(timer.milliseconds)}`}</p>
        </div>
    )
}

export { Timer }
