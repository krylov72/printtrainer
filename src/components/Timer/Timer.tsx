import { formatNumber } from '@/helpers/formatNumber'
import { useEffect, useState } from 'react'

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

    useEffect(() => {
        if (!hasStarted) {
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

    return (
        <div className="w-full flex relative items-center justify-center z-50">
            <p className="text-[#c98643] text-[40px]">{`${formatNumber(timer.minutes)}:${formatNumber(timer.seconds)}:${formatNumber(timer.milliseconds)}`}</p>
        </div>
    )
}

export { Timer }
