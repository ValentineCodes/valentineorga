import React from 'react'
import { CiDesktopMouse2 } from 'react-icons/ci'
import { motion } from "framer-motion"

type Props = {}

export default function MousePointer({ }: Props) {
    return (
        <motion.div
            initial={{
                y: 0,
            }}
            whileInView={{
                y: 30
            }}
            transition={{ duration: 0.7, repeat: 5, repeatType: "reverse", ease: "easeInOut" }}
            viewport={{ once: true }}
            className='flex flex-col items-center'
        >
            <CiDesktopMouse2 className='text-4xl text-[#15f7d6]' />
            <div className='flex flex-col items-center ml-[2px]'>
                <div className='rotate-90'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='ml-[-3px] mt-[-10px] text-xs text-white'>♦</div>
            </div>
        </motion.div>
    )
}