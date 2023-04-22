import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Hero from '../Hero/Hero'
import Parteners from '../../layouts/Parteners/Parteners'
import Execellents from '../Headers/Execellents/Execellents'
import Card from '../Headers/Execellents/child/Card'
import Icon from '../Headers/Difference/Icon/Icon'
import Difference from '../Headers/Difference/Difference'

const Home = () => {
    return (
        <div>
            <div className=''>
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
            <Footer />
        </div>
    )
}

export default Home