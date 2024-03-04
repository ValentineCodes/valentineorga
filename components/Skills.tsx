import React from 'react'
import { CiMonitor } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { LuSquareStack } from "react-icons/lu";

import Skill from './Skill';
import MousePointer from './MousePointer';

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className='min-h-screen bg-[#292f37] bg-opacity-90 flex flex-col items-center justify-center px-6 lg:px-32 py-14'>
            <MousePointer />

            <h1 className='text-4xl text-[#15f7d6] font-light inline mt-16'>Skills</h1>
            <p className='text-md font-light text-gray-400 text-center'>I strive to never stop learning and improving</p>

            <div className="flex flex-col md:flex-row justify-between items-center max-md:space-y-8 md:space-x-10 my-14 text-black text-center">
                <div className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'>
                    <CiMonitor className='text-3xl md:text-4xl' />
                    <p className='text-lg md:text-xl font-light'>Web Development</p>
                    <p className='text-sm md:text-md font-thin'>HTML, CSS, JS, NEXTJS</p>
                </div>
                <div className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'>
                    <BsPhone className='text-3xl md:text-4xl' />
                    <p className='text-lg md:text-xl font-light'>Mobile Development</p>
                    <p className='text-sm md:text-md font-thin'>REACT NATIVE</p>
                </div>
                <div className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'>
                    <LuSquareStack className='text-3xl md:text-4xl' />
                    <p className='text-lg md:text-xl font-light'>Smart Contract Development</p>
                    <p className='text-sm md:text-md font-thin'>SOLIDITY</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10">
                <Skill img="/images/html_logo.png" title="HTML" />
                <Skill img="/images/css_logo.png" title="CSS" />
                <Skill img="/images/ts-js_logo.png" title="Typescript / Javascript" />
                <Skill img="/images/react_logo.png" title="NextJs / React Native" />
                <Skill img="/images/solidity_logo.png" title="Solidity" />
                <Skill img="/images/firebase_logo.png" title="Firebase" />
            </div>
        </div>
    )
}