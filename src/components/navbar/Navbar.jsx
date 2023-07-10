import React, { useState } from 'react'
import style from "../../style/style"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import { Link , useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [isToggle, setIsToggle] = useState(true)

    return (
        <div className={`${style.maxsmStyle} ${style.mdStyle} ${style.smStyle} px-10 z-50 max-sm:px-4 h-12  bg-[#2B2B2B]`}>
            <Link to={"/"}><div className='font-extrabold text-white tracking-widest'>Logo</div></Link>

            <div className='md:hidden'>
                {isToggle ? <GiHamburgerMenu color='white' className='align-end font-extrabold'
                    onClick={() => setIsToggle(!isToggle)}
                /> : <ImCross color='white' onClick={() => setIsToggle(!isToggle)} />}

            </div>

            <div className={`w-[50%] max-sm:${isToggle ? "hidden" : "block"} max-sm:fixed max-sm:top-12 max-sm:right-0 max-sm:w-[60%] max-sm:flex-col max-sm:z-[999]`}>
                <div className='w-full max-sm:h-screen max-sm:bg-black max-sm:z-[999]'>
                    <ul className={`max-sm:flex max-sm:justify-between p-3 ${style.mdStyle} ${style.smStyle} list-none text-gray-400  max-sm:flex-col`}>
                        <li className='text-white max-sm:text-inherit cursor-pointer max-sm:mt-2'>Home</li>
                        <li className='cursor-pointer max-sm:mt-2'>Product</li>
                        {/* <li className='cursor-pointer max-sm:mt-2'>Find a Team</li> */}
                        <Link to={"/about"}><li className='cursor-pointer max-sm:mt-2'>About us</li></Link>
                        {/* <li className='cursor-pointer max-sm:mt-2'>Articals</li> */}
                        {/* <li className='cursor-pointer max-sm:mt-2'>Portfoli</li> */}
                        <Link to={"/contact"}><li className='cursor-pointer max-sm:mt-2'>Contact Us</li></Link>
                        <li className='cursor-pointer max-sm:text-2xl max-sm:capitalize max-sm:text-cyan-400 max-sm:text-center max-sm:tracking-wide md:hidden max-sm:mt-10'>designed By ankur</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Navbar