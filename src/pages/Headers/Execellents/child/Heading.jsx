import React from 'react'

const Heading = ({ heading, description }) => {
    return (
        <div className='w-full flex justify-between px-10 max-sm:flex-col'>
            <h1
                className='text-4xl tracking-wide font-bold cap capitalize w-[22%] max-sm:w-full max-sm:text-center max-sm:text-2xl'
            >{heading}</h1>
            <p
                className='text-[13px] leading-[20px] w-[30%] max-sm:w-full max-sm:text-center max-sm:mt-3'
            >{description}</p>
        </div>
    )
}

export default Heading