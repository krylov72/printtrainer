'use client'
import { useTrainerContext } from '@/context/TrainerContext'
import { AnimatePresence, motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

type MainContainer = PropsWithChildren

const MainContainer = ({ children }: MainContainer) => {
    const { isStart } = useTrainerContext()
    return (
        <AnimatePresence>
            <motion.main
                className={`flex flex-col h-screen justify-center items-center ${isStart ? '' : 'justify-center'}`}
            >
                {children}
            </motion.main>
        </AnimatePresence>
    )
}

export default MainContainer
