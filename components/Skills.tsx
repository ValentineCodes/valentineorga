import React from 'react'
import { CiMonitor } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { LuSquareStack } from "react-icons/lu";

import Skill from './Skill';
import MousePointer from './MousePointer';
import { motion } from 'framer-motion';

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className='min-h-screen bg-[#292f37] bg-opacity-90 flex flex-col items-center justify-center px-6 lg:px-32 py-14'>
            <MousePointer />

            <h1 className='text-4xl text-[#15f7d6] font-light inline mt-16 underline underline-offset-[12px] mb-4'>Skills</h1>
            <p className='text-md font-light text-gray-400 text-center'>I strive to never stop learning and improving</p>

            <div className="flex flex-col md:flex-row justify-between items-center max-md:space-y-8 md:space-x-10 my-14 text-black text-center">
                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0.5
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'
                >
                    <CiMonitor className='text-3xl md:text-4xl' />
                    <p className='text-lg md:text-xl font-light'>Web Development</p>
                    <p className='text-sm md:text-md font-light'>HTML, CSS, TS, NEXTJS</p>
                </motion.div>

                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0.5
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'
                >
                    <BsPhone className='text-3xl md:text-4xl' />
                    <p className='text-lg md:text-xl font-light'>Mobile Development</p>
                    <p className='text-sm md:text-md font-light'>REACT NATIVE & TYPESCRIPT</p>
                </motion.div>

                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0.5
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'
                >
                    <LuSquareStack className='text-3xl md:text-4xl' />
                    <p className='text-lg md:text-xl font-light'>Smart Contract Development</p>
                    <p className='text-sm md:text-md font-light'>SOLIDITY & TYPESCRIPT</p>
                </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-10">
                <motion.div
                    initial={{
                        opacity: 0.5,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <Skill img="/images/html_logo.png" title="HTML" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0.5,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Skill img="/images/css_logo.png" title="CSS" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0.5,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Skill img="/images/ts-js_logo.png" title="Typescript / Javascript" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0.5,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Skill img="/images/react_logo.png" title="NextJs / React Native" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0.5,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Skill img="/images/solidity_logo.png" title="Solidity" />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0.5,
                        scale: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Skill img="/images/firebase_logo.png" title="Firebase" />
                </motion.div>
            </div>
        </div>
    )
}