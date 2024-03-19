import { ContactForm } from '@/components/form/contact'
import React from 'react'


export default function ContactPage() {
  return (
    <div className='container mx-auto px-3 space-y-6 md:px-0'>
        
        <div className='flex md:flex-row flex-col h-full mt-6'>
        <div className=' flex-1 w-full'>
            <h2  className='text-2xl font-medium leading-6 mb-4'>Points of contact</h2>
            <span>
              <p className='mt-2 mb-1 text-xl font-medium'>Email address</p>
              <p className='flex gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-5 w-5 lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@mudisolutions.com</p>
            </span>

            <span>
              <p className='mt-2 text-xl font-medium mb-4'>Contact</p>
              <p className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide w-5 h-5 lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +234 9032065399</p>
              <p className='flex items-center gap-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide w-5 h-5 lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>

                +44 7850881998</p>
            </span>

            <span>
            <p className='text-xl font-medium mt-2 mb-4'>Physical</p>
            <p className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide w-5 h-5 lucide-map-pinned"><path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835"/></svg>
             100 Okumagba Avenue Warri, Delta  State, Nigeria. 
</p>
            </span>
        </div>

        <div className='flex-[1.5] w-full'>
            <h2 className='text-2xl font-medium'>Let&apos;s talk about your project</h2>
            <ContactForm />
        </div>
        </div>
    </div>
  )
}
