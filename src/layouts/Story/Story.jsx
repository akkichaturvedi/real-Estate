import React from 'react'
import style from "../../style/style"
import Description from '../Meet-and-talk/child/Description'
import { storydata, storyImage } from '../../localdata/story'

const Story = () => {
    return (
        <div className={`${style.maxsmStyle} ${style.mdStyle} ${style.mdStyle} max-sm:flex-col-reverse w-full px-8 max-sm:p-2`}>
            <div className='w-[40%] max-sm:w-full max-sm:mt-5'>
                <Description data={storydata} />
            </div>

            <div className='w-[40%] max-sm:w-full max-sm:mt-5 max-sm:px-3'>
                <img src={storyImage} alt=""
                    className='w-full h-full'
                />
            </div>
        </div>
    )
}

export default Story