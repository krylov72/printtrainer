'use client'

import { useTrainerContext } from '@/context/TrainerContext'
import { easeInOut, motion } from 'framer-motion'

const Header = () => {
    const { setIsStart } = useTrainerContext()
    const title = 'PRINT TRAINER'

    const startGameHandler = () => {
        setIsStart(true)
    }
    return (
        <motion.header
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-3 w-full py-5 flex bg-[#d0c5ad] shadow-almostBlack shadow-xl gap-20 rounded-[30px] justify-center  items-center container"
        >
            <ul>
                <motion.li
                    className="font-kanit text-[30px] cursor-pointer text-[#82460b] uppercase relative"
                    onClick={startGameHandler}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    START
                </motion.li>
            </ul>
            <h1 className="text-[70px] text-blood border-x-2 px-3 outline-1 shadow-rose flex">
                {title.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 1, color: '#c57d2d', y: 0 }}
                        whileInView={{ color: '#644829' }}
                        transition={{
                            duration: 1,
                            ease: easeInOut,
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: index * 0.2,
                        }}
                        className="inline-block"
                    >
                        {char === ' ' ? '\u00A0' : char}{' '}
                    </motion.span>
                ))}
            </h1>
            <ul>
                <motion.li
                    className="font-kanit text-[30px] cursor-pointer text-[#82460b] uppercase relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                    SETTINGS
                </motion.li>
            </ul>
        </motion.header>
    )
}

export { Header }
