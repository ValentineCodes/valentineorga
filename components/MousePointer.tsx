import React from 'react'
import { CiDesktopMouse2 } from 'react-icons/ci'

type Props = {}

export default function MousePointer({ }: Props) {
    return (
        <div className='flex flex-col items-center'>
            <CiDesktopMouse2 className='text-4xl text-[#15f7d6]' />
            <div className='flex flex-col items-center ml-1'>
                <div className='rotate-90'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='rotate-90 mt-[-16px]'>-</div>
                <div className='ml-[-3px] mt-[-10px] text-xs'>♦</div>
            </div>
        </div>
    )
}