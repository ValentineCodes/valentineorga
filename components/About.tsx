import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='bg-[#292f37] bg-opacity-90 min-h-screen flex flex-col lg:flex-row items-center space-y-14 lg:justify-between lg:space-x-14 px-6 lg:px-32 py-14'>
            <div>
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                        scale: 0.8,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                >
                    <h1 className='border-2 border-[#15f7d6] rounded-ss-[30px] rounded-br-[30px] px-6 py-4 text-2xl lg:text-4xl inline'>About&nbsp;Me</h1>
                </motion.div>

                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                        scale: 0.8,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.7, delay: 0.05, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='space-y-2 border p-4 rounded-[30px] max-w-[600px] mt-10 lg:mt-20'
                >
                    <p className='text-[#15f7d6] font-thin text-sm'>{'<p>'}</p>
                    <p className='ml-4 text-2xl lg:text-4xl text-[#15f7d6]'>Hello!</p>
                    <p className='text-sm lg:text-md font-light text-gray-200 ml-4'>My name is Valentine Orga and I specialize in blockchain development utilizing <span className='text-[#15f7d6]'>NextJS</span>, <span className='text-[#15f7d6]'>React Native</span>, <span className='text-[#15f7d6]'>Solidity</span>, e.t.c.</p>
                    <p className='text-sm lg:text-md font-light text-gray-200 ml-4'>I&apos;m highly disciplined and dedicated to writing clear, concise, robust code that works. I believe in the blockchain&apos;s potential so I strive to never stop learning and improving.</p>
                    <p className='text-sm lg:text-md font-light text-gray-200 ml-4'>I love reading books and educative articles. Also, Chess and Football... <span className='text-[#15f7d6]'>Up&nbsp;Barcelona!</span></p>
                    <p className='text-sm lg:text-md font-light text-gray-200 ml-4'>I&apos;m always open to new challenges. Enough to push me beyond my limits and broaden my vision of the ecosystem.</p>
                    <p className='text-[#15f7d6] font-thin text-sm'>{'</p>'}</p>
                </motion.div>
            </div>

            <motion.div
                initial={{
                    opacity: 0.5,
                    scale: 0.8,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                viewport={{ once: true }}
            >
                <img
                    src="/images/workspace.jpeg"
                    alt='Doing what I do'
                    className='w-72'
                />
            </motion.div>
        </div>
    )
}