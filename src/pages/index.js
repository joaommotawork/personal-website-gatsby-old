import React, { Suspense, lazy } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Pages/Home'

import '../styles/global.scss'

const AboutMe = lazy(() => import('../components/Pages/AboutMe'))
const Profile = lazy(() => import('../components/Pages/Profile'))
const Skills = lazy(() => import('../components/Pages/Skills'))
const Contacts = lazy(() => import('../components/Pages/Contacts'))

const IndexPage = () => (
    <Layout>
        <SEO title="João Mota Web Developer & Designer" />
        <Home />
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <AboutMe />
        </Suspense>
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <Profile />
        </Suspense>
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <Skills />
        </Suspense>
        <Suspense fallback={<h1>Still Loading…</h1>}>
            <Contacts />
        </Suspense>
    </Layout>
)

export default IndexPage
