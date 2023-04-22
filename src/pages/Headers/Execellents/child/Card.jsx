import React from 'react'

const Card = ({data}) => {
    return (
        <div className='w-[260px] max-sm:h-[380px] md:h-[420px]'>
            <div className='h-[250px] w-[250px] p-2 max-sm:h-[200px] max-sm:w-[200px]  hover:overflow-hidden'>
                <img src={data.img} alt=""
                    className='h-full w-full hover:scale-125 hover:overflow-hidden transition-all'
                />
            </div>
            <h1 className='text-2xl tracking-wide font-bold cap capitalize mt-3 px-2'>{data.tag}</h1>
            <p className='text-[13px] leading-[20px] mt-2 px-2 mb-5 overflow'>
                {data.description}
            </p>
        </div>
    )
}

export default Card