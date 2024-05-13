import React from 'react'
import Layout from '../components/Layoout/Layout'
import SliderMain from '../components/SliderMain'
import AboutCom from '../components/AboutCom'
import InformationCom from '../components/InformationCom'
import TeamCom from '../components/TeamCom'
import Advertisement from '../components/Advertisement'

const HomePage = () => {
    return (
        <Layout >
            <SliderMain />
            <AboutCom />
            <InformationCom />
            <Advertisement />
            <TeamCom />
        </Layout>
    )
}

export default HomePage
