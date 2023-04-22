import React from 'react'
import { BsBagCheckFill } from "react-icons/bs"

const Icon = ({ data }) => {
    // console.log(data);
    return (
        <div className='w-[260px] max-sm:h-[240px] md:h-[270px]'>
            <div className='max-sm:flex max-sm:justify-center max-sm:items-center'>
                <div className='h-[100px] w-[100px] bg-cyan-200 rounded-full flex justify-center items-center'>
                    <div className='w-[80%] h-[80%] rounded-full flex justify-center items-center bg-cyan-500 text-white'>
                        {<data.img size={30} />}
                    </div>
                </div>
            </div>

            <h1 className='text-2xl tracking-wide font-bold cap capitalize mt-9 max-sm:mt-3 px-2 max-sm:text-center'>{data.tag}</h1>
            <p className='text-[13px] leading-[20px] mt-3 px-2 mb-5 overflow max-sm:text-center'>
                {data.description}
            </p>
        </div>
    )
}

export default Icon