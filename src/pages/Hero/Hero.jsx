import React from 'react'
import style from '../../style/style'
import { GrFormAdd } from "react-icons/gr"
import Homeimage from "../../assetss/big_hero_image.png"
import Short from './Short/Short'

const Hero = () => {
    return (
        <div className='w-full relative h-[80dvh] max-sm:h-[100dvh] bg-gradienet-[142deg] bg-gradient-to-r text-white from-[#474747] to-[#222222] p-10 flex justify-between max-sm:p-2 max-sm:flex-col'>

            <div className='w-[40%] max-sm:w-full'>
                <h1 className='text-5xl max-sm:text-2xl font-bold tracking-wide capitalize mt-10 max-sm:mt-2 leading-[60px] max-sm:leading-[35px]'>
                    we provide <br />architecture design <br /> and construction
                </h1>
                <p className='text-[13px] mt-5 text-gray-300 leading-[30px] max-sm:leading-[17px] max-sm:z-50'>
                    More than 100 building and housing projects that we have built. <br />
                    The building owner chose us over other contractors in Jakarta, <br />
                    because our work is different
                </p>
                <button className={`${style.customButtonStyle} mt-14 max-sm:mt-6`}>
                    discover more
                </button>
                <div className='w-full px-2 mt-16 flex justify-between items-center max-sm:hidden'>
                    <div>
                        <span className='flex items-center text-cyan-400'><span className='font-bold'> 300 </span><GrFormAdd /></span>
                        <span className='text-[13px] text-gray-300'>happy <br /> client</span>
                    </div>
                    <div>
                        <span className='flex items-center text-cyan-400'><span className='font-bold'> 900 </span><GrFormAdd /></span>
                        <span className='text-[13px] text-gray-300'>Amazing <br /> Project</span>
                    </div>
                    <div>
                        <span className='flex items-center text-cyan-400'><span className='font-bold'> 20 </span><GrFormAdd /></span>
                        <span className='text-[13px] text-gray-300'>Award <br /> winnig</span>
                    </div>
                </div>
            </div>

            <div className='w-[35%] md:h-full max-sm:w-[90%] max-sm:h-[55dvh] max-sm:absolute max-sm:right-0 max-sm:bottom-36 md:absolute md:-right-2 md:bottom-14'>
                <img src={Homeimage} alt=""
                    className='w-full h-full md:bg-cover'
                />
            </div>

            <div className='w-[50%] absolute bottom-0 right-0 max-sm:w-full'>
                <Short />
            </div>

        </div>
    )
}

export default Hero