import React from 'react'
import { SocialIcon } from "react-social-icons";

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className="flex flex-row justify-between self-start border-b-[0.5px] border-[gray] w-full bg-transparent mx-20 py-6">
            <h1 className="text-lg font-semibold"><span className="text-[#15f7d6]">{'<C/>'}</span> ValentineCodes</h1>

            <nav>
                <ul className="flex flex-row justify-between space-x-6 text-sm font-light">
                    <li><a className="hover:text-[#15f7d6] duration-300">Home</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">About</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">Skills</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">Works</a></li>
                    <li><a className="hover:text-[#15f7d6] duration-300">Contact</a></li>
                    <li>
                        <SocialIcon
                            url="https://www.linkedin.com/in/valentineorga"
                            fgColor="gray"
                            bgColor="transparent"
                            target="_blank"
                            className='mt-[-15px]'
                        />
                    </li>
                    <li>
                        <SocialIcon
                            url="https://twitter.com/ValentineOrga"
                            fgColor="gray"
                            bgColor="transparent"
                            target="_blank"
                            className='mt-[-15px]'
                        />
                    </li>
                    <li>
                        <SocialIcon
                            url="https://github.com/ValentineCodes"
                            fgColor="gray"
                            bgColor="transparent"
                            target="_blank"
                            className='mt-[-15px]'
                        />
                    </li>
                </ul>
            </nav>
        </header>
    )
}