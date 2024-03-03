import React, { Fragment } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="container mx-auto flex justify-between items-center border-b-[0.5px] border-[gray] bg-transparent p-6 space-x-4 h-24">
            <h1 className="text-lg font-semibold"><span className="text-[#15f7d6]">{'<VC/>'}</span> ValentineCodes</h1>

            <nav className='flex items-center space-x-6'>
                <ul className="hidden lg:flex items-center justify-between space-x-6 text-sm font-light">
                    <li><a className="hover:text-[#15f7d6] duration-300">Home</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">About</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">Skills</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">Works</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">Contact</a></li>
                </ul>


                <div className='hidden sm:flex space-x-6'>
                    <Link href="https://www.linkedin.com/in/valentineorga" target="_blank"><FaLinkedinIn className='text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl' /></Link>

                    <Link href="https://twitter.com/ValentineOrga" target="_blank"><FaTwitter className='text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl' /></Link>

                    <Link href="https://github.com/ValentineCodes" target="_blank"><FaGithub className='text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl' /></Link>
                </div>

                <Popover.Button className="hover:bg-black hover:bg-opacity-20 p-2 rounded-lg block lg:hidden">
                    {({ open }) => open ? <CgClose className='text-xl' /> : <RiMenu2Fill className='text-xl' />}
                </Popover.Button>
            </nav>

            <Transition
                as={Fragment}
                enter="duration-100 ease-out"
                enterFrom="scale-95 opacity-0"
                enterTo="scale-100 opacity-100"
                leave="duration-75 ease-out"
                leaveFrom="scale-100 opacity-100"
                leaveTo="scale-95 opacity-0"
            >
                <Popover.Panel as='nav' focus className="absolute inset-x-0 top-24 z-[1000] origin-top-right transform p-2 transition lg:hidden bg-[#292f37]">
                    <ul className="text-sm font-light">
                        <li className='p-4 hover:bg-black hover:bg-opacity-20 duration-200'><a href='#home'>Home</a></li>
                        <li className='p-4 hover:bg-black hover:bg-opacity-20 duration-200'><a href='#about'>About</a></li>
                        <li className='p-4 hover:bg-black hover:bg-opacity-20 duration-200'><a href='#skills'>Skills</a></li>
                        <li className='p-4 hover:bg-black hover:bg-opacity-20 duration-200'><a href='#works'>Works</a></li>
                        <li className='p-4 hover:bg-black hover:bg-opacity-20 duration-200'><a href='#contact'>Contact</a></li>
                    </ul>


                    <div className='flex sm:hidden space-x-6 ml-4 mt-2'>
                        <Link href="https://www.linkedin.com/in/valentineorga" target="_blank"><FaLinkedinIn className='text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl' /></Link>

                        <Link href="https://twitter.com/ValentineOrga" target="_blank"><FaTwitter className='text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl' /></Link>

                        <Link href="https://github.com/ValentineCodes" target="_blank"><FaGithub className='text-gray-500 hover:text-[#15f7d6] duration-200 text-2xl' /></Link>
                    </div>
                </Popover.Panel>
            </Transition>
        </header>
    )
}