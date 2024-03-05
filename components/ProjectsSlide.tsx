import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiOutlineCursorClick } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import projects from "@/projects.json"
import Link from 'next/link';

type Props = {}

type WorkProps = {
    title: string;
    description: string;
    demoLink: string;
    codeLink: string;
    codeImg: string;
    demoImg: string;
}
function Work({ title, description, demoLink, codeLink, codeImg, demoImg }: WorkProps) {
    return (
        <div>
            <div className='flex flex-col max-md:space-y-10 md:flex-row md:space-x-10 items-center'>
                {/* Code Monitor */}
                <Link href={codeLink} target='_blank'>
                    <div className='flex flex-col items-center'>
                        <div style={{ backgroundImage: `url(${codeImg})` }} className="bg-no-repeat bg-cover w-[180px] aspect-[3/4] border-8 border-[#4d4d4d]">

                        </div>
                        <div className='w-[50px] h-[30px] bg-[#4d4d4d]'>

                        </div>
                        <div className='w-[100px] h-[7px] bg-[#4d4d4d] rounded-lg'>

                        </div>
                    </div>
                </Link>

                {/* Preview Monitor */}
                <Link href={demoLink} target='_blank'>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-end mb-4 space-x-2'>
                            <Link href={demoLink} target='_blank' className='text-[#15f7d6] text-lg underline underline-offset-8'>Check this out</Link>
                            <HiOutlineCursorClick className='text-[#15f7d6]' />
                        </div>
                        <div style={{ backgroundImage: `url(${demoImg})` }} className="bg-no-repeat bg-cover w-[230px] aspect-[16/10] border-8 border-[#4d4d4d]">

                        </div>
                        <div className='bg-white w-[230px] h-[20px] flex justify-center items-center rounded-b-xl'>
                            <div className='w-[12px] aspect-square rounded-full bg-black'></div>
                        </div>
                        <div className='w-[50px] h-[25px] bg-white'>

                        </div>
                        <div className='w-[100px] h-[7px] bg-white rounded-lg'>

                        </div>
                    </div>
                </Link>
            </div>

            <h2 className='text-center text-lg font-semibold mt-4'>{title}</h2>
            <p className='text-md font-light text-gray-400 text-center mt-2 max-w-sm mx-auto'>{description}</p>
        </div>
    )
}

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className='absolute left-[-20px] z-[1000] top-[46.8%] md:top-[42%] bg-black hover:bg-[#15f7d6] cursor-pointer hover:text-black duration-200 bg-opacity-40 text-2xl inline-block p-2 rounded-full' onClick={onClick}>
            <IoIosArrowBack />
        </div>
    );
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className='absolute right-[-20px] z-[1000] bottom-[49%] bg-black hover:bg-[#15f7d6] cursor-pointer hover:text-black duration-200 bg-opacity-40 text-2xl inline-block p-2 rounded-full' onClick={onClick}>
            <IoIosArrowForward />
        </div>
    );
}

export default function ProjectsSlide({ }: Props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className='container w-[80%] max-w-[600px] mt-16'>
            <Slider {...settings}>
                {projects.map(project => (
                    <Work
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        demoLink={project.demoLink}
                        codeLink={project.codeLink}
                        codeImg={project.codeImg}
                        demoImg={project.demoImg}
                    />
                ))}
            </Slider>
        </div>
    )
}