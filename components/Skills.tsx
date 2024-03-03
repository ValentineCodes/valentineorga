import React from 'react'
import { CiDesktopMouse2, CiMonitor } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { LuSquareStack } from "react-icons/lu";

import Skill from './Skill';

type Props = {}

export default function Skills({ }: Props) {
    return (
        <div className='h-screen bg-[#292f37] bg-opacity-90 flex flex-col items-center justify-center'>
            <CiDesktopMouse2 className='text-4xl text-[#15f7d6]' />

            <h1 className='text-5xl text-[#15f7d6] font-light inline mt-16'>Skills</h1>
            <p className='text-md font-light text-gray-400'>I strive to never stop learning and improving</p>

            <div className='flex flex-row space-x-8 text-black my-14'>
                <div className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'>
                    <CiMonitor className='text-4xl' />
                    <p className='text-xl font-light'>Web Development</p>
                    <p className='text-md font-thin'>HTML, CSS, JS, NEXTJS</p>
                </div>
                <div className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'>
                    <BsPhone className='text-4xl' />
                    <p className='text-xl font-light'>Mobile Development</p>
                    <p className='text-md font-thin'>REACT NATIVE</p>
                </div>
                <div className='flex flex-col items-center space-y-3 rounded-lg border-l-8 border-[#0c73b8] bg-[#15f7d6] px-4 py-2'>
                    <LuSquareStack className='text-4xl' />
                    <p className='text-xl font-light'>Smart Contract Development</p>
                    <p className='text-md font-thin'>SOLIDITY</p>
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