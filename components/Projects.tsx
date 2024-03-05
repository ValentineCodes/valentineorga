import React from 'react'
import MousePointer from './MousePointer'
import ProjectsSlide from './ProjectsSlide'

type Props = {}

export default function Projects({ }: Props) {
    return (
        <div className='min-h-screen bg-[#292f37] bg-opacity-[0.99] flex flex-col items-center justify-center pt-16 pb-36'>
            <MousePointer />

            <h1 className='text-4xl text-[#15f7d6] font-light inline mt-16 underline underline-offset-[12px] mb-4'>Projects</h1>
            <p className='text-md font-light text-gray-400'>It was exciting working on these projects</p>

            <ProjectsSlide />
        </div>
    )
}