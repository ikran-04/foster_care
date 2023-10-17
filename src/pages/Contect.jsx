import React from 'react'

export const Contect = () => {
    return (
        <div className='w-full m-auto  py-10'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0'>

                <div className='md:w-1/3 md:ml-12 p-5 space-y-5'>
                    <h1 className='text-4xl font-semibold'>Contact Us</h1>
                    <p>Send us a message, and we will contact you to arrange a free consultation</p>
                    <form className='flex flex-col space-y-8'>
                        <input type="text" placeholder='name'  className='border-b outline-0'/>
                        <input type="text" placeholder='email' className='border-b outline-0' />
                        <input type="text" placeholder='comment' className='border-b outline-0' />
                        <button className='py-2 bg-green-800 text-white font-bold'>Get a Qoute</button>

                    </form>
                </div>
                <div className=' bg-[#1E1E1E] md:w-1/2'>
                    <div className='p-5 space-y-5 text-gray-400'>
                        <h1 className='text-5xl text-white'>Info</h1>
                        <div className='flex items-center space-x-5'>
                            <img src="icons/email.png" alt="" className='w-8 h-8' />
                            <p>max@fostercarepropertyservice.com</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <img src="icons/whatsapp.png" alt="" className='w-8 h-8' />
                            <p>max@fostercarepropertyservice.com</p>
                        </div>
                        <p className='text-sm md:text-base'>

                            “ We are very satisfied with the services we receive. Max Foster and his team provide quality service at fair prices. Max is easy to get ahold of and responds in a timely manner when additional jobs are required. We highly recommend Foster Care Property Services for your landscaping needs.”
                            Thank you so much, Fostercare Property Service!


                        </p>
                        <p>Karen Anderson
                        </p>
                        <a href="/">Google Review</a>
                        <div className='flex space-x-10'>
                            <button className='px-5 py-2 bg-white text-black'>Email Owener</button>
                            <button className='px-5 py-2 border border-white text-white'>Email Owener</button>

                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}
