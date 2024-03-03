import React from 'react'

import { CiMail, CiLocationOn } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
    return (
        <div className='flex flex-col md:flex-row items-center space-y-14 md:justify-between md:space-x-14 px-6 md:px-32 py-14 max-w-[1200px] mx-auto md:mt-16'>
            <div className='border border-white rounded-ss-[100px] rounded-br-[100px] px-4 py-6 shadow-[-3px_-3px_10px_2px_#15f7d6] max-w-[300px]'>
                <img src="/images/profile_image.webp" alt="My handsome face" className='relative rounded-full h-32 w-32 mx-auto object-cover border-4 border-[#15f7d6]' />
                <p className="text-center text-lg font-light mt-2">Valentine Orga</p>
                <p className='text-center text-xs font-thin text-gray-400'>Blockchain Developer</p>

                <div className='mt-4 space-y-3 inline-block'>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <CiMail color='#15f7d6' />
                        <span>Valentineorga@gmail.com</span>
                    </p>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <CiLocationOn color='#15f7d6' />
                        <span>Nigeria</span>
                    </p>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <GoPackage color='#15f7d6' />
                        <span>Full-time / Freelancer</span>
                    </p>
                    <p className='flex items-center text-sm space-x-3 text-gray-400'>
                        <IoIosLink color='#15f7d6' />
                        <span>www.valentineorga.com</span>
                    </p>

                    <div className='flex flex-row items-center space-x-4 text-sm font-light text-black'>
                        <span className='bg-[#15f7d6] px-2 py-1 rounded-xl'>NextJs</span>
                        <span className='bg-[#15f7d6] px-2 py-1 rounded-xl'>React&nbsp;Native</span>
                        <span className='bg-[#15f7d6] px-2 py-1 rounded-xl'>Solidity</span>
                    </div>
                </div>

                <button className='flex flex-row items-center mx-auto space-x-2 bg-white hover:bg-[#15f7d6] px-4 py-2 text-black rounded-3xl font-light duration-200 mt-4'>
                    <span>Download CV</span>
                    <BsDownload />
                </button>
            </div>

            <div>
                <p className='text-[#15f7d6] font-thin text-sm'>{'<h1>'}</p>
                <p className='ml-4 text-2xl md:text-4xl xl:text-5xl'>Hey</p>
                <p className='ml-4 text-2xl md:text-4xl xl:text-5xl'>I'm&nbsp;<span className='text-[#15f7d6]'>Valentine</span>,</p>
                <p className='ml-4 text-2xl md:text-4xl xl:text-5xl'>Blockchain Developer</p>
                <p className='text-[#15f7d6] font-thin text-sm'>{'</h1>'}</p>

                <p className='text-[#15f7d6] font-thin text-sm mt-6'>{'<p>'}</p>
                <p className='ml-4 text-sm md:text-md text-gray-400 max-w-lg'>I help businesses grow by crafting out great user experiences. If you're looking for developer that loves to get stuff done.</p>
                <p className='text-[#15f7d6] font-thin text-sm'>{'</p>'}</p>

                <Link href="#contact" className='flex flex-row items-center text-[#15f7d6] text-3xl mt-4 ml-4'>Let's Talk <CiMail className='ml-2' /></Link>
            </div>
        </div>
    )
}