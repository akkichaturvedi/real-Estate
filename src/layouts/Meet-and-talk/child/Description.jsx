import React from 'react'
import style from "../../../style/style"

const Description = ({ data }) => {
    return (
        <div className='w-full px-5'>
            <h1 className='text-2xl font-bold tracking-wide leading-[38px]'>
                {data.tag}
            </h1>
            <p className='pt-5 md:pt-7 text-[14px]'>
                {data.description}
            </p>
            <div className='flex justify-between items-center pt-8 md:pt-10'>
                <button className={`${style.customButtonStyle}`}>{data.button}</button>
                {
                    data.more ? <h3 className='font-bold tracking-wide'>{data.more} {` -->`} </h3> : ""
                }
            </div>
        </div>
    )
}

export default Description