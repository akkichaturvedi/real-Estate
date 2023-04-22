import React from 'react'
import images from '../../localdata/partener.json'

const Parteners = () => {
    return (
        <div className='flex justify-around w-full p-4 mt-2'>
            {
                images.map((item, index) => {
                    return (
                        <div key={index} className='h-[100px] w-[200px] max-sm:h-[50px] max-sm:w-[70px] rounded-lg'>
                            <img src={item.img} alt=""
                                className='w-full h-full rounded-lg hover:scale-105 hover:-skew-y-3 hover:overflow-hidden transition-all hover:focus:ring-2 hover:border-cyan-400'
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Parteners