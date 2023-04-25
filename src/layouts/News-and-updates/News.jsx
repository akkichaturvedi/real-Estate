import React from 'react'
import Newsdescription from './child/Newsdescription'
import { newsData } from '../../localdata/news'
import style from "../../style/style"

const News = () => {
    return (
        <div className={`md:mt-10 max-sm:mt-5 ${style.maxsmStyle} ${style.mdStyle} ${style.smStyle} ${style.customScrollNew} px-8 max-sm:px-5`}>
            {
                newsData.map((items, index) => {
                    return <Newsdescription key={index} data={items} />
                })
            }
        </div>
    )
}

export default News