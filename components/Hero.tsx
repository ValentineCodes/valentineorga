import React from 'react'

import { GoPackage } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import Link from 'next/link';

import { motion } from "framer-motion";

type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='flex flex-col md:flex-row items-center space-y-14 md:justify-between md:space-x-14 px-6 md:px-32 py-14 max-w-[1200px] mx-auto md:mt-16'>
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0,
                    scale: 0.8,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className='border border-white rounded-ss-[100px] rounded-br-[100px] px-4 py-6 shadow-[-3px_-3px_10px_2px_#15f7d6] max-w-[300px]'
            >
                <img src="/images/profile_image.webp" alt="My handsome face" className='relative rounded-full h-32 w-32 mx-auto object-cover border-4 border-[#15f7d6]' />
                <p className="text-center text-lg font-light mt-2">Valentine Orga</p>
                <p className='text-center text-xs font-thin text-gray-400'>Blockchain Developer</p>

                <div className='mt-4 space-y-3 inline-block'>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <LuMail color='#15f7d6' />
                        <span>Valentineorga@gmail.com</span>
                    </p>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <FiPhoneCall color='#15f7d6' />
                        <span>+2348140715721</span>
                    </p>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <GrLocation color='#15f7d6' />
                        <span>Nigeria</span>
                    </p>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <GoPackage color='#15f7d6' />
                        <span>Full-time / Freelancer</span>
                    </p>

                    <div className='flex flex-row items-center space-x-4 text-sm font-light text-black'>
                        <span className='bg-[#15f7d6] px-2 py-1 rounded-xl'>NextJs</span>
                        <span className='bg-[#15f7d6] px-2 py-1 rounded-xl'>React&nbsp;Native</span>
                        <span className='bg-[#15f7d6] px-2 py-1 rounded-xl'>Solidity</span>
                    </div>
                </div>

                <a href="/images/profile_image.webp" download="Valentine Orga's Resume">
                    <button className='flex flex-row items-center mx-auto space-x-2 bg-white hover:bg-[#15f7d6] px-4 py-2 text-black rounded-3xl font-light duration-200 mt-4'>
                        <span>Download CV</span>
                        <BsDownload />
                    </button>
                </a>
            </motion.div>

            <div className='container'>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                >
                    <p className='text-[#15f7d6] font-thin text-sm'>{'<h1>'}</p>
                    <p className='ml-4 text-2xl md:text-4xl xl:text-5xl'>Hey</p>
                    <p className='ml-4 text-2xl md:text-4xl xl:text-5xl'>I&apos;m&nbsp;<span className='text-[#15f7d6]'>Valentine</span>,</p>
                    <p className='ml-4 text-2xl md:text-4xl xl:text-5xl'>Blockchain Developer</p>
                    <p className='text-[#15f7d6] font-thin text-sm'>{'</h1>'}</p>
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
                >
                    <p className='text-[#15f7d6] font-thin text-sm mt-6'>{'<p>'}</p>
                    <p className='ml-4 text-sm md:text-md text-gray-400 max-w-lg'>I help businesses grow by crafting out great user experiences. If you&apos;re looking for a developer that loves to get stuff done</p>
                    <p className='text-[#15f7d6] font-thin text-sm'>{'</p>'}</p>
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
                >
                    <Link href="#contact" className='flex flex-row items-center text-[#15f7d6] text-3xl mt-4 ml-4'>Let&apos;s Talk <span className='bg-[#43454e] p-2 ml-2 rounded-full'><LuMail className='text-[1rem]' /></span></Link>
                </motion.div>
            </div>
        </div >
    )
}