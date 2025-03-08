import { motion } from 'motion/react'

const Loader = () => {
    return (
        <div className="flex flex-col ">
            <motion.div
                className="w-[70px] h-[70px]  flex justify-center items-start border-2 border-[#d0c5ad] rounded-full border-dashed"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
            >
                <div className="text-[#d0c5ad] text-[40px] self-start">♥</div>
            </motion.div>
        </div>
    )
}

export { Loader }
