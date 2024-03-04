import React from 'react'
import { BsSend } from "react-icons/bs";
import MousePointer from './MousePointer';
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion';

type Props = {}
type Input = {
    name: string;
    email: string;
    message: string;
};

export default function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = (data) => {
        window.location.href = `mailto:valentineorga@gmail.com?subject=Job Request&body=Hi, My name is ${data.name}. ${data.message} [${data.email}]`;
    };

    return (
        <div className='min-h-screen bg-[#292f37] bg-opacity-[0.99] flex flex-col items-center justify-center px-6 lg:px-32 md:py-14 max-md:pb-14'>
            <MousePointer />

            <h1 className='text-4xl text-[#15f7d6] font-light inline mt-16 underline underline-offset-[12px] mb-4'>Contact</h1>
            <p className='text-md font-light text-gray-400 text-center'>I'm currently available for full-time positions</p>

            <div className='mt-14 space-y-14 flex flex-col items-center w-full max-w-[720px]'>
                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0.5
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}>
                    <h1 className='border-2 border-[#15f7d6] rounded-ss-[30px] rounded-br-[30px] px-6 py-2 text-2xl text-[#15f7d6] inline'>Send Me A Message</h1>
                </motion.div>

                <form className="flex flex-col space-y-10 mx-auto w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col sm:flex-row sm:space-x-20 space-y-10 sm:space-y-0">
                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0.5
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                            viewport={{ once: true }}
                            className='flex flex-col space-y-4 grow'
                        >
                            <label className='text-lg md:text-xl text-[#15f7d6]'>Your name *</label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Enter your name"
                                className="bg-transparent border-b border-b-[#15f7d6] outline-none text-md"
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{
                                y: 50,
                                opacity: 0.5
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            className='flex flex-col space-y-4 grow'
                        >
                            <label className='text-lg md:text-xl text-[#15f7d6]'>Your email *</label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-b border-b-[#15f7d6] outline-none text-md"
                                required
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{
                            y: 50,
                            opacity: 0.5
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.35 }}
                        viewport={{ once: true }}
                        className='flex flex-col space-y-4'
                    >
                        <label className='text-lg md:text-xl text-[#15f7d6]'>Your message *</label>
                        <textarea
                            {...register("message")}
                            placeholder="How may I be of service?"
                            className="bg-transparent border-b border-b-[#15f7d6] outline-none text-md w-full"
                            required
                        />
                    </motion.div>

                    <motion.div
                        initial={{
                            scale: 0.8,
                            opacity: 0.5,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
                        viewport={{ once: true }}>
                        <button type='submit' className='flex flex-row items-center mx-auto space-x-2 text-lg md:text-xl bg-[#15f7d6] hover:bg-transparent px-6 py-2 text-black hover:text-white border border-[#15f7d6] rounded-3xl font-light duration-200 mt-4'>
                            <span>Send Message</span>
                            <BsSend />
                        </button>
                    </motion.div>
                </form>
            </div>
        </div>
    )
}