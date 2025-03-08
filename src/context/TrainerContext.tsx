'use client'
import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useState,
} from 'react'

type ContextProps = PropsWithChildren

type Context = {
    isStart: boolean
    setIsStart: Dispatch<SetStateAction<boolean>>
    startTimer: boolean
    setStartTimer: Dispatch<SetStateAction<boolean>>
}

const TrainerContext = createContext<Context | null>(null)

export const TrainerProvider = ({ children }: ContextProps) => {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [startTimer, setStartTimer] = useState<boolean>(false)

    return (
        <TrainerContext.Provider
            value={{ setIsStart, isStart, startTimer, setStartTimer }}
        >
            {children}
        </TrainerContext.Provider>
    )
}

export const useTrainerContext = () => {
    const context = useContext(TrainerContext)
    if (!context) {
        throw new Error(
            'useTrainerContext must be used within a TrainerProvider'
        )
    }
    return context
}
