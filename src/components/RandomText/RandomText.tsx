'use client'
import { convertSymbol } from '@/helpers/convertSymbol'
import { useEffect, useRef, useState } from 'react'
import { Loader } from '../Loader/Loader'
import { motion, AnimatePresence } from 'framer-motion'
import { useTrainerContext } from '@/context/TrainerContext'

type Props = {
    text: string
}

const RandomText = ({ text }: Props) => {
    const wordRef = useRef<HTMLDivElement | null>(null)
    const { setStartTimer } = useTrainerContext()
    const stringToArray = (text?: string) => {
        return text?.split('').map((word, i) => ({
            value: convertSymbol(word),
            index: i,
            verify: false,
        }))
    }
    const [key, setKey] = useState(':)')
    const [currentText, setCurrentText] = useState(stringToArray(text))
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async (): Promise<{ text: string; status: string }> => {
        const response = await fetch(
            'https://fish-text.ru/get?format=json&number=1&type=title'
        )

        return response.json()
    }
    const updateData = async () => {
        setIsLoading(true)
        try {
            const data = await fetchData()
            const dataToArray = stringToArray(data.text)

            setTimeout(() => {
                setCurrentText(dataToArray)
                setCurrentIndex(0)
                setIsLoading(false)
            }, 500)
        } catch (e) {
            console.error('Ошибка получения данных', e)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        wordRef.current?.focus()

        const handleSetKey = (e: KeyboardEvent) => {
            if (e.key === ' ') {
                setKey('Пробел')
            } else {
                setKey(e.key)
            }

            if (currentText?.some((item) => item.verify === false)) {
                if (e.key === currentText[currentIndex].value) {
                    setCurrentText((prev) =>
                        prev?.map((item) =>
                            item.value === e.key && item.index === currentIndex
                                ? { ...item, verify: true }
                                : item
                        )
                    )
                    setCurrentIndex((prevIndex) => prevIndex + 1)
                }
            }
        }

        window.addEventListener('keydown', handleSetKey)

        if (currentText?.every((item) => item.verify)) {
            setStartTimer(false)
            updateData()
        } else if (currentIndex === 1) {
            setStartTimer(true)
        }
        return () => {
            window.removeEventListener('keydown', handleSetKey)
        }
    }, [currentIndex, currentText])

    return (
        <div className="relative items-center  justify-between flex flex-col w-full">
            <div className="min-h-[300px]">
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{
                                opacity: 0,
                                scale: 0.8,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Loader />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="text"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{
                                opacity: 0,
                                scale: 0.8,
                                transition: { duration: 1 },
                            }}
                            tabIndex={0}
                            ref={wordRef}
                            className="text-[#d0c5ad] text-[40px] outline-none"
                        >
                            {currentText?.map((word) => (
                                <span
                                    key={word.index}
                                    className={`${word.verify && 'text-[#c98643]'}`}
                                >
                                    {word.value}
                                </span>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className="text-[#d0c5ad] text-[30px] flex flex-col  items-center">
                Нажатая клавиша:
                {key && (
                    <motion.div
                        key={key}
                        initial={{ scale: 1, y: 20 }}
                        animate={{ scale: 1.2, y: 0 }}
                        transition={{ duration: 0.2 }}
                        exit={{ scale: 1 }}
                        className="text-[#53422e] shadow-lg shadow-almostBlack transition-all min-h-[60px] mt-4 text-[25px] w-fit rounded-lg duration-300 px-6 py-2 bg-[#e9bf98]"
                    >
                        {key}
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export { RandomText }
