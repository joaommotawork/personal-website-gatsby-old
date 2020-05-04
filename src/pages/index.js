import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Pages/Home'
import AboutMe from '../components/Pages/AboutMe'
import Profile from '../components/Pages/Profile'
import Skills from '../components/Pages/Skills'
import Contacts from '../components/Pages/Contacts'

import '../styles/global.scss'

const IndexPage = () => (
    <Layout>
        <SEO title="João Mota Web Developer & Designer" />
        <Home />
        <AboutMe />
        <Profile />
        <Skills />
        <Contacts />
    </Layout>
)

export default IndexPage
