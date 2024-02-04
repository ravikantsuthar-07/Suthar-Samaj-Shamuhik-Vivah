import React from 'react'
import Layout from '../components/Layoout/Layout'
import SliderMain from '../components/SliderMain'
import AboutCom from '../components/AboutCom'
import InformationCom from '../components/InformationCom'
import TeamCom from '../components/TeamCom'

const HomePage = () => {
    return (
        <Layout >
            <SliderMain />
            <AboutCom />
            <InformationCom />
            <TeamCom />
        </Layout>
    )
}

export default HomePage
