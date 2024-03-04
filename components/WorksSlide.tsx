import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiOutlineCursorClick } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {}

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className='absolute right-0 z-[1000] bottom-[45%] bg-black hover:bg-[#15f7d6] cursor-pointer hover:text-black duration-200 bg-opacity-40 text-2xl inline-block p-2 rounded-full' onClick={onClick}>
            <IoIosArrowForward />
        </div>
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div className='absolute left-0 z-[1000] top-[48%] md:top-[42%] bg-black hover:bg-[#15f7d6] cursor-pointer hover:text-black duration-200 bg-opacity-40 text-2xl inline-block p-2 rounded-full' onClick={onClick}>
            <IoIosArrowBack />
        </div>
    );
}

type WorkProps = {
    code: string;
    project: string;
}
function Work({ code, project }: WorkProps) {
    return (
        <div>
            <div className='flex flex-col max-md:space-y-10 md:flex-row md:space-x-10 items-center'>
                {/* Code Monitor */}
                <div className='flex flex-col items-center'>
                    <div style={{ backgroundImage: `url(${code})` }} className="bg-no-repeat bg-cover w-[180px] aspect-[3/4] border-8 border-[#4d4d4d]">

                    </div>
                    <div className='w-[50px] h-[30px] bg-[#4d4d4d]'>

                    </div>
                    <div className='w-[100px] h-[7px] bg-[#4d4d4d] rounded-lg'>

                    </div>
                </div>

                {/* Preview Monitor */}
                <div className='flex flex-col items-center'>
                    <div className='flex items-end mb-4 space-x-2'>
                        <a href="#" className='text-[#15f7d6] text-lg underline underline-offset-8'>Check this out</a>
                        <HiOutlineCursorClick className='text-[#15f7d6]' />
                    </div>
                    <div style={{ backgroundImage: `url(${project})` }} className="bg-no-repeat bg-cover w-[230px] aspect-[16/10] border-8 border-[#4d4d4d]">

                    </div>
                    <div className='bg-white w-[230px] h-[20px] flex justify-center items-center rounded-b-xl'>
                        <div className='w-[12px] aspect-square rounded-full bg-black'></div>
                    </div>
                    <div className='w-[50px] h-[25px] bg-white'>

                    </div>
                    <div className='w-[100px] h-[7px] bg-white rounded-lg'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default function WorksSlide({ }: Props) {
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
                {[1, 2, 3].map(_ => (
                    <Work key={_.toString()} code='/images/coding_bg.jpeg' project='/images/profile_image.webp' />
                ))}
            </Slider>
        </div>
    )
}