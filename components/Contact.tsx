'use client'

import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import { LuLoader } from 'react-icons/lu'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type Input = {
  name: string
  email: string
  message: string
  company?: string // honeypot — real users never fill this in
}

const SERVICE_ID = 'service_3lucjjt'
const TEMPLATE_ID = 'template_27ys0r5'
const PUBLIC_KEY = 'u7V42A2oJGcyMzB_f'

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>()
  const [isSending, setIsSending] = useState(false)

  const onSubmit: SubmitHandler<Input> = async data => {
    if (data.company) {
      // Honeypot triggered — quietly drop the submission.
      reset()
      return
    }

    try {
      setIsSending(true)

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Valentine Orga',
        },
        { publicKey: PUBLIC_KEY },
      )

      toast.success("Message sent — I'll get back to you shortly.", {
        position: 'top-center',
      })
      reset()
    } catch (error) {
      toast.error(
        "Couldn't send that. Please check your connection and try again.",
        {
          position: 'top-center',
        },
      )
      console.error(error)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="bg-bg py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
            description="Open to smart contract engineering, blockchain engineering, Web3 product development, and consulting or freelance work."
          />
        </Reveal>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl space-y-8"
          noValidate
        >
          <input
            type="text"
            {...register('company')}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-text"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                {...register('name', { required: 'Please enter your name' })}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="w-full border-b border-border bg-transparent py-2 text-sm text-text outline-none focus:border-accent"
              />
              {errors.name ? (
                <p id="name-error" className="mt-1 text-xs text-danger">
                  {errors.name.message}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text"
              >
                Your email
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@example.com"
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full border-b border-border bg-transparent py-2 text-sm text-text outline-none focus:border-accent"
              />
              {errors.email ? (
                <p id="email-error" className="mt-1 text-xs text-danger">
                  {errors.email.message}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-text"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="What are you building?"
              {...register('message', {
                required: 'Please add a short message',
              })}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full border-b border-border bg-transparent py-2 text-sm text-text outline-none focus:border-accent"
            />
            {errors.message ? (
              <p id="message-error" className="mt-1 text-xs text-danger">
                {errors.message.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-all duration-200 hover:scale-[1.03] hover:opacity-90 active:scale-95 disabled:scale-100 disabled:opacity-60"
          >
            {isSending ? (
              <>
                <LuLoader className="animate-spin" aria-hidden />
                Sending…
              </>
            ) : (
              <>
                Send message
                <BsSend
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </>
            )}
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  )
}
