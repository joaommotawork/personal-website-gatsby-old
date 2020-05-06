import React, { Fragment, useState, useEffect } from 'react'
import loadable from '@loadable/component'
import '../i18n'
import ReactLoading from 'react-loading'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import '../styles/global.scss'
import classes from '../styles/index.module.scss'

const Layout = loadable(() => import('../components/Layout'), {
    fallback: (
        <div className={classes.Loading}>
            <ReactLoading
                type={'spin'}
                color={'#008b7f'}
                height={'25%'}
            />
        </div>
    )
})
const Home = loadable(() => import('../components/Pages/Home'))
const AboutMe = loadable(() => import('../components/Pages/AboutMe'))
const Profile = loadable(() => import('../components/Pages/Profile'))
const Skills = loadable(() => import('../components/Pages/Skills'))
const Contacts = loadable(() => import('../components/Pages/Contacts'))

const IndexPage = () => {
    const { t } = useTranslation('translation', { useSuspense: false })

    const [language, setLanguage] = useState()

    useEffect(() => {
        setLanguage(localStorage.getItem('i18nextLng'))
    }, [])

    const keywords = t(
        'SiteMetadata.Keywords',
        'João Mota Web Developer & Designer, João Mota, Personal Website, Web Developer, Web Designer, HTML, CSS, JavaScript, React, Photoshop, Illustrator'
    )
    const title = `${t('Homepage', 'Homepage')} | ${t(
        'SiteMetadata.Title',
        'João Mota Web Developer & Designer'
    )}`
    const type = t('Type', 'Personal Website')
    const description = t(
        'SiteMetadata.Description',
        'Personal Website From João Mota Web Developer & Designer'
    )
    const siteUrl = t('SiteMetadata.SiteUrl', 'https://www.joaommota.com')
    const author = t(
        'SiteMetadata.Author',
        'João Mota Web Developer & Designer'
    )
    const meta = [
        {
            property: `charset`,
            content: 'UTF-8'
        },
        {
            property: `keywords`,
            content: keywords
        },
        {
            property: `author`,
            content: author
        },
        {
            property: `og:title`,
            content: title
        },
        {
            property: `og:type`,
            content: type
        },
        {
            name: `description`,
            content: description
        },
        {
            property: `og:description`,
            content: description
        },
        {
            property: `og:website`,
            content: siteUrl
        }
    ]

    return (
        <Fragment>
            <Helmet
                htmlAttributes={{
                    language
                }}
                title={title}
                meta={meta}
                defer={false}
            />
            <Layout>
                <Home />
                <AboutMe />
                <Profile />
                <Skills />
                <Contacts />
            </Layout>
        </Fragment>
    )
}

export default IndexPage
