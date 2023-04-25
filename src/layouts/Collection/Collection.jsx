import React from 'react'
import { imageCollection } from '../../localdata/collection'
import Heading from '../../pages/Headers/Execellents/child/Heading'
import style from "../../style/style"


const Collection = () => {
    return (
        <div className='py-5 mt-3'>
            <Heading heading={"our best collections"} />
            <div className={` w-full flex justify-center items-center md:mt-5`}>
                <div className={`${style.customScrollNew} w-full max-sm:w-[350px] md:px-10 max-sm:p-2 flex justify-between overflow-hidden  max-sm:flex-wrap`}>
                    {
                        imageCollection.map((item, index) => {
                            return <img key={index} src={item.img} alt=""
                                className='w-[300px] h-[400px] md:p-5 max-sm:p-2 max-sm:h-[200px] max-sm:w-[165px] transition-all hover:scale-105 hover:rotate-180'
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Collection