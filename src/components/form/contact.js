"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input/text";

const sendRequest = async (data) => {
    const res = await fetch("/api/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: `Inquiry about your services -  ${data.firstname} ${data.lastname}`,
        body: `
            SERVICE INQUIRY
  
            Hello Mudi Team,
  
            ${data.message}.
  
            We specialize in ${data.domain} and would love to hear back from you soonest. Please feel free to reach me at ${data.email}.
  
            --------------------------------------------------------------------------
  
            This invitation was intended for Mudi Solutions. If you were not expecting this invitation, you can ignore this email. 
        `
      }),
    });
    const result = await res.json();
  
    return result;
  };

 const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid, isSubmitting },
      } = useForm();
      const onSubmit = async (data) => {
        try {
          await sendRequest(data);
          toast.success('Your message has been sent')
          reset()
        } catch (error) {
          toast.error('Error occured. Try again after some time.')
          console.error(error);
        }
      };
  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-8 w-full '>
                <div className='md:flex md:gap-3 w-full'>
                <Input type="text" placeholder="First name*" {...register("firstname", { required: "Field is required" })} />
                <Input type="text" placeholder="Last name*" {...register("lastname", { required: "Field is required" })} />
                </div>

                <div className='md:flex md:gap-3'>
                <Input type="email" placeholder="Email address*" {...register("email", {
              required: "Field is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalid email",
              },
            })} />
                <Input type="text" placeholder="Job role" />
                </div>
                <Input type="text" placeholder="Company domain*" {...register("domain", { required: "Field is required" })} />
                <textarea {...register("message", { required: "Field is required" })} className='w-full border mb-2 border-gray-300 rounded-md py-2 px-4 outline-none focus:ring-1 focus:ring-blue-700' rows={6} placeholder='Please tell us a bit about your goals, what you&apos;re hoping to achieve with us?'/>
            </div>
            <button
          disabled={!isValid || isSubmitting}
          type="submit"
          className=" h-12 bg-[#FF6B19] w-full font-medium rounded-md disabled:opacity-70 disabled:cursor-none"
        >
          Talk to us
        </button>
    </form>
  )
}


export { ContactForm }