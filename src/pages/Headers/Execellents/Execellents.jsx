import React from 'react'
import Card from './child/Card'
import Heading from './child/Heading'
import { excellenceData, execellenceImages } from "../../../localdata/excellence"
import Style from "../../../style/style"

function Execellents() {
    return (
        <div className='w-full py-5 mt-3'>
            <Heading heading={excellenceData.heading} description={excellenceData.description} />
            <div className='w-full flex justify-center mt-6'>
                <div className={`${Style.customScrollNew} w-[95%] flex justify-between items-center`}>
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