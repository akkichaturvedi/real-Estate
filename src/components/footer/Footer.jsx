import React from 'react'
import style from '../../style/style'
import { AiFillTwitterCircle, AiFillInstagram, AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
    return (
        <div className={`w-full ${style.maxsmStyle} ${style.mdStyle} ${style.smStyle} bg-gradienet-[142deg] bg-gradient-to-r text-white from-[#474747] to-[#222222] p-10 max-sm:p-2 max-sm:flex-col`}>

            <div className='w-[45%] p-2 max-sm:w-full'>
                <span className='tracking-widest font-extrabold'>
                    Logo
                </span>
                <p className='mt-8 '>
                    is a general contractor company based in Jakarta. More than 25 years of experience in building and carving out Indonesia's development.
                </p>
                <div className='flex justify-between items-center w-[25%] max-sm:w-[50%] mt-8'>
                    <span className={`flex justify-center items-center border border-red-50 h-6 w-6 rounded-full bg-netural-300 hover:border-2 hover:border-cyan-500`}>
                        <AiFillTwitterCircle size={100} />
                    </span>
                    <span className={`flex justify-center items-center h-6 w-6 rounded-full bg-netural-300 hover:border-2 hover:border-cyan-500`}>
                        <AiFillInstagram size={100} />
                    </span>
                    <span className={`flex justify-center items-center h-6 w-6 rounded-full bg-netural-300 hover:border-2 hover:border-cyan-500`}>
                        <AiFillGoogleCircle size={100} />
                    </span>
                    <span className={`flex justify-center items-center h-6 w-6 rounded-full bg-netural-300 hover:border-2 hover:border-cyan-500`}>
                        <AiFillLinkedin size={100} />
                    </span>
                </div>
            </div>

            <div className={`w-[45%] p-2 max-sm:w-full flex justify-evenly max-sm:mt-4 max-sm:justify-between max-sm:pr-5`}>
                <div>
                    <ul className='list-none '>
                        <li className='mt-2 capitalize font-extrabold'>Company</li>
                        <li className='cursor-pointer mt-3 capitalize'>About</li>
                        <li className='cursor-pointer mt-3 capitalize'>How it works</li>
                        <li className='cursor-pointer mt-3 capitalize'>Term</li>
                        <li className='cursor-pointer mt-3 capitalize'>privacy policy</li>
                    </ul>
                </div>

                <div>
                    <ul className='list-none '>
                        <li className='mt-2 capitalize font-extrabold'>more</li>
                        <li className='cursor-pointer mt-3 capitalize'>Documentation</li>
                        <li className='cursor-pointer mt-3 capitalize'>License</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer