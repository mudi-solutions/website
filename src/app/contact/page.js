import React from 'react'

const Input = ({ type, placeholder}) => {
    return <input type={type} placeholder={placeholder} className='w-full border md:mb-6 mb-2 border-gray-300 rounded-md h-14 py-2 px-4 outline-none focus:ring-1 focus:ring-blue-700' />
}

export default function ContactPage() {
  return (
    <div className='container mx-auto px-3 space-y-6 md:px-0'>
        
        <div className='flex md:flex-row flex-col h-full mt-6'>
        <div className=' flex-1 w-full'>
            <h2  className='text-2xl font-medium leading-6'>Points of contact</h2>
        </div>

        <div className='flex-[1.5] w-full'>
            <h2 className='text-2xl font-medium'>Let&apos;s talk about your project</h2>
            <div className='mt-8 '>
                <div className='md:flex md:gap-3'>
                <Input type="text" placeholder="First name*" />
                <Input type="text" placeholder="Last name*" />
                </div>

                <div className='md:flex md:gap-3'>
                <Input type="email" placeholder="Email address*" />
                <Input type="text" placeholder="Job role" />
                </div>
                <Input type="text" placeholder="Company domain*" />
                <textarea className='w-full border mb-2 border-gray-300 rounded-md py-2 px-4 outline-none focus:ring-1 focus:ring-blue-700' rows={6} placeholder='Please tell us a bit about your goals, what you&apos;re hoping to achieve with us?'/>
            </div>
            <input
                type="submit"
                className=" h-12 bg-[#FF6B19] w-full rounded-md font-medium"
                value="Let's talk"
              />
        </div>
        </div>
    </div>
  )
}
