import React from 'react'
import Card from './child/Card'
import Heading from './child/Heading'
import { excellenceData , execellenceImages } from "../../../localdata/excellence"

function Execellents() {
    return (
        <div className='w-full py-5 mt-3'>
            <Heading heading={excellenceData.heading} description={excellenceData.description}/>
            <div className='w-full flex justify-center mt-6'>
                <div className='w-[95%] flex justify-between items-center overflow-scroll overflow-x-visible overflow-y-hidden scroll-custom scroll-smooth snap-none'>
                    {
                        execellenceImages.map((items, index) => {
                            return <Card key={index} data={items} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Execellents