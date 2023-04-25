import React from 'react'
import Description from './child/Description'
import style from "../../style/style"
import { meetAndTalkData, backgroundImage, manImage } from '../../localdata/MeetandTalk'

const MeetandTalk = () => {
    return (
        <div className={`${style.maxsmStyle} ${style.mdStyle} max-sm:flex-col px-6 max-sm:p-2 `}>
            <div className='w-[40%] max-sm:w-full relative'>
                <img src={backgroundImage} alt=""
                    className='w-full h-full'
                />

                <div className={`max-sm:w-[230px] ${style.maxsmStyle} ${style.mdStyle} p-5 max-sm:py-3 flex-col w-[250px] max-sm:h-[230px] h-[250px] absolute top-36 -right-28 max-sm:left-14 max-sm:top-60 bg-gradient-to-r from-gray-700 via-gray-900 to-black`}>
                    <div className='h-[50px] w-[50px] rounded-full'>
                        <img src={manImage} alt="" className='h-full w-full rounded-full' />
                    </div>
                    <h1 className='text-white font-bold text-xl mt-1'> {meetAndTalkData.owner}</h1>
                    <p className='text-white text-sm mt-1 text-center'>
                        {meetAndTalkData.ownerDescription}
                    </p>
                </div>

            </div>

            <div className='w-[45%] max-sm:w-full max-sm:mt-[8rem]'>
                <Description data={meetAndTalkData} />
            </div>
            
        </div>)
}

export default MeetandTalk