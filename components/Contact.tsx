import React, { useState } from 'react'
import { BsSend } from "react-icons/bs";
import MousePointer from './MousePointer';
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LuLoader } from "react-icons/lu";

type Props = {}
type Input = {
    name: string;
    email: string;
    message: string;
};

const SERVICE_ID = "service_3lucjjt"
const TEMPLATE_ID = "template_27ys0r5"
const PUBLIC_KEY = "u7V42A2oJGcyMzB_f"

export default function Contact({ }: Props) {
    const { register, handleSubmit } = useForm<Input>();
    const [isSending, setIsSending] = useState(false)

    const onSubmit: SubmitHandler<Input> = async (data) => {
        const msgParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
            to_name: "Valentine Orga"
        }

        try {
            setIsSending(true)

            await emailjs
                .send(SERVICE_ID, TEMPLATE_ID, msgParams, {
                    publicKey: PUBLIC_KEY,
                })

            toast.success("Email sent successfully. We'll get back to you shortly", {
                position: "top-center",
            });
        } catch (error) {
            toast.error("Failed to send email. Please ensure you have a stable network connection", {
                position: "top-center",
            });
            console.error(error)
        } finally {
            setIsSending(false)
        }
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
                        <button type='submit' disabled={isSending} className='flex flex-row items-center mx-auto space-x-2 text-lg md:text-xl bg-[#15f7d6] hover:bg-transparent px-6 py-2 text-black hover:text-white border border-[#15f7d6] rounded-3xl font-light duration-200 mt-4'>
                            {isSending ?
                                <motion.div
                                    initial={{
                                        rotate: 0
                                    }}
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{ duration: 1, ease: "easeInOut", repeatType: "loop", repeat: 1000 }}
                                >
                                    <LuLoader className='text-2xl md:text-3xl w-[160px]' />
                                </motion.div>
                                :
                                <>
                                    <span>Send Message</span>
                                    <BsSend />
                                </>
                            }
                        </button>
                    </motion.div>
                </form>
            </div>

            <ToastContainer />
        </div>
    )
}