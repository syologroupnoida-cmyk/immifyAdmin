import React from 'react'
import Hero from '../../components/appPageComponents/Hero'
import ForStudents from '../../components/appPageComponents/ForStudents'
import Consulting from '../../components/appPageComponents/consulting'
import Migrate from '../../components/appPageComponents/migrate'
import Study from '../../components/appPageComponents/study'
import Work from '../../components/appPageComponents/work'
import Coaching from '../../components/appPageComponents/coaching'
import WhyChooseUs from '../../components/appPageComponents/whychooseus'
import LatestUpdates from '../../components/appPageComponents/LatestUpdates'
import No1 from '../../components/appPageComponents/No1'
import Testimonials from '../../components/appPageComponents/Testimonials'
import HowItWorks from '../../components/appPageComponents/HowItWorks'

import FAQ from '../../components/appPageComponents/FAQ'

const Home = () => {
    return (
        <>
            <Hero />
            <ForStudents />
            <Consulting />
            <Migrate />
            <Study />
            <Work />
            <Coaching />
            <WhyChooseUs />
            <LatestUpdates />
            <No1 />
            <Testimonials />
            <HowItWorks />
          
            <FAQ />
        </>
    )
}

export default Home