import React from 'react'
import loadable from '@loadable/component'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Pages/Home'

import '../styles/global.scss'

const AboutMe = loadable(() => import('../components/Pages/AboutMe'))
const Profile = loadable(() => import('../components/Pages/Profile'))
const Skills = loadable(() => import('../components/Pages/Skills'))
const Contacts = loadable(() => import('../components/Pages/Contacts'))

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
