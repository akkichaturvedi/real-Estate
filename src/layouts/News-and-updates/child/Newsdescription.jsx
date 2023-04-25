import React from 'react'
import style from "../../../style/style"

const Newsdescription = ({ data }) => {
    return (
        <div className='w-full p-2'>
            <div className='w-[350px] max-sm:w-[300px]'>
                <div className='w-full h-[220px] overflow-hidden'>
                    <img src={data.img} alt=""
                        className='w-full h-full hover:scale-110 transition-all'
                    />
                </div>
                <div className='w-full mt-2 flex'>
                    <div className='w-[10%] text-xl font-bold'>
                        <span>{data.date}</span><br />
                        <span>{data.month}</span>
                    </div>
                    <div className='w-[80%] pl-5 font-bold text-left'>
                        {data.title}
                    </div>
                </div>
                <div className='mt-5 pb-5'>
                    <p>
                        {data.description} <span className='text-cyan-400 cursor-pointer'>Read more</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Newsdescription