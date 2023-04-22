import React from 'react'
import { GiSpotedFlower } from "react-icons/gi"
import { GrFormAdd } from "react-icons/gr"


const Short = () => {
    return (
        <>
            <div className='w-full max-sm:hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-between px-5 py-8 items-center'>
                <span className='capitalize'>
                    general <br /> projects
                </span>
                <div>
                    <span className='font-bold'>25 <span className='font-thin'>years</span><sup> s</sup> </span><br />
                    <span>operated</span>
                </div>
                <p className='text-[10px] leading-[20px]'>
                    As a trusted general project that has been <br />
                    operating for 25 years, our commitment is <br />
                    always to prioritize our client satisfaction
                </p>
            </div>

            <div className='w-full md:hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 items-center'>
                <div className='flex justify-between'>
                    <div>
                        <span className='font-bold'>25 <span className='font-thin'>years</span><sup> s</sup> </span><br />
                        <span>operated</span>
                    </div>
                    <span className='capitalize font-extrabold tracking-widest'>
                        Logo
                    </span>
                </div>
                <p className='text-[10px] leading-[20px] mt-3'>
                    As a trusted general project that has been 
                    operating for 25 years, our commitment is 
                    always to prioritize our client satisfaction
                </p>
                <div className='w-full px-2 mt-4 flex justify-between items-center'>
                    <div>
                        <span className='flex items-center'><span className='font-bold'> 300 </span><GrFormAdd /></span>
                        <span className='text-[13px] text-gray-300'>happy <br /> client</span>
                    </div>
                    <div>
                        <span className='flex items-center'><span className='font-bold'> 900 </span><GrFormAdd /></span>
                        <span className='text-[13px] text-gray-300'>Amazing <br /> Project</span>
                    </div>
                    <div>
                        <span className='flex items-center'><span className='font-bold'> 20 </span><GrFormAdd /></span>
                        <span className='text-[13px] text-gray-300'>Award <br /> winnig</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Short