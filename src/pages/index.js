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
                width={'25%'}
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

    const keywords = t('SiteMetadata.Keywords')
    const title = `${t('HomePage')} | ${t('SiteMetadata.Title')}`
    const type = t('Type')
    const description = t('SiteMetadata.Description')
    const siteUrl = t('SiteMetadata.SiteUrl')
    const author = t('SiteMetadata.Author')
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
