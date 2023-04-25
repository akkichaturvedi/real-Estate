import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero from '../Hero/Hero'
import Parteners from '../../layouts/Parteners/Parteners'
import Execellents from '../Headers/Execellents/Execellents'
import Difference from '../Headers/Difference/Difference'
import Collection from '../../layouts/Collection/Collection'
import MeetandTalk from '../../layouts/Meet-and-talk/MeetandTalk'
import Story from '../../layouts/Story/Story'
import News from '../../layouts/News-and-updates/News'

const Home = () => {
    return (
        <div>
            <div className='z-[999] sticky w-full left-0 top-0'>
                <Navbar />
            </div>
            <Hero />
            <div>
                <Parteners />
            </div>
            <div>
                <Execellents />
            </div>
            <div>
                <Difference />
            </div>
            <div>
                <MeetandTalk />
            </div>
            <div>
                <Story />
            </div>
            <div>
                <News />
            </div>
            <div>
                <Collection />
            </div>
            <Footer />
        </div>
    )
}

export default Home