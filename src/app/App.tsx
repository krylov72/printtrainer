'use client'

import { RandomText } from '@/components/RandomText/RandomText'
import { Timer } from '@/components/Timer/Timer'
import { useTrainerContext } from '@/context/TrainerContext'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    text: string
}

const App = ({ text }: Props) => {
    const { isStart, startTimer } = useTrainerContext()
    return (
        <>
            <AnimatePresence>
                {isStart && (
                    <motion.div
                        className=" flex flex-col w-full justify-center"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{
                                opacity: isStart ? 1 : 0,
                                scale: isStart ? 1 : 0.9,
                            }}
                            transition={{ duration: 0.5 }}
                            className="h-full flex flex-col justify-center gap-[50px]"
                        >
                            <Timer hasStarted={startTimer} />
                            <RandomText text={text} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default App
