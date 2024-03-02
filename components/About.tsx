import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='flex flex-row justify-around w-full py-16'>
            <div>
                <h1 className='border-2 border-[#15f7d6] rounded-ss-[30px] rounded-br-[30px] px-6 py-4 text-5xl inline'>About Me</h1>

                <div className='space-y-2 border p-4 rounded-[30px] max-w-[600px] mt-20'>
                    <p className='text-[#15f7d6] font-thin text-sm'>{'<p>'}</p>
                    <p className='ml-4 text-5xl text-[#15f7d6]'>Hello!</p>
                    <p className='text-lg font-light text-gray-200 ml-4'>My name is Valentine Orga and I specialize in blockchain development utilizing <span className='text-[#15f7d6]'>NextJS</span>, <span className='text-[#15f7d6]'>React Native</span>, <span className='text-[#15f7d6]'>Solidity</span>, e.t.c.</p>
                    <p className='text-lg font-light text-gray-200 ml-4'>I'm highly disciplined and dedicated to writing clear, concise, robust code that works. I believe in the blockchain's potential so I strive to never stop learning and improving.</p>
                    <p className='text-lg font-light text-gray-200 ml-4'>I love reading books and educative articles. Also, Football... <span className='text-[#15f7d6]'>Up Barcelona!</span></p>
                    <p className='text-lg font-light text-gray-200 ml-4'>I'm always open to new challenges. Enough to push me beyond my limits and broaden my vision of the ecosystem.</p>
                    <p className='text-[#15f7d6] font-thin text-sm'>{'</p>'}</p>
                </div>
            </div>

            <img src="/images/man_codes.jpeg" alt='Doing what I do' className='w-72' />
        </div>
    )
}