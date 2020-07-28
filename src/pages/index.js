import React, { Fragment, useState, useEffect } from 'react'
import loadable from '@loadable/component'
import '../i18n'
import ReactLoading from 'react-loading'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useIsJsEnabled } from 'gatsby-plugin-js-fallback'

import '../styles/global.scss'
import classes from '../styles/index.module.scss'

import JavaScriptDisabled from '../components/Pages/JavaScriptDisabled'

import logo from '../resources/logo/MetaData.png'

const Layout = loadable(() => import('../components/Layout'), {
    fallback: (
        <div className={classes.Loading}>
            <ReactLoading type={'spin'} color={'#008b7f'} height={'25%'} />
        </div>
    )
})
const Home = loadable(() => import('../components/Pages/Home'))
const AboutMe = loadable(() => import('../components/Pages/AboutMe'))
const Skills = loadable(() => import('../components/Pages/Skills'))
const Contacts = loadable(() => import('../components/Pages/Contacts'))

const IndexPage = () => {
    const isJsEnabled = useIsJsEnabled()
    const { t } = useTranslation('translation', { useSuspense: false })

    const [lang, setLang] = useState()

    useEffect(() => {
        setLang(localStorage.getItem('i18nextLng'))
    }, [])

    const keywords = t(
        'SiteMetadata.Keywords',
        'João Mota Web Developer & Designer, João Mota, Personal Website, Web Developer, Web Designer, HTML, CSS, JavaScript, React, Photoshop, Illustrator'
    )
    const title = `${t('HomePage', 'Homepage')} | ${t(
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
            name: `description`,
            content: description
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
            property: `og:description`,
            content: description
        },
        {
            property: `og:website`,
            content: siteUrl
        },
        {
            property: `og:url`,
            content: siteUrl
        },
        {
            property: `og:image`,
            content: logo
        },
        {
            property: `twitter:card`,
            content: `summary_large_image`
        },
        {
            property: `og:site_name`,
            content: title
        },
        {
            property: `twitter:image:alt`,
            content: title
        },
        {
            property: `twitter:site`,
            content: `@joaommotame`
        },
        {
            property: `fb:app_id`,
            content: '583953398912118'
        }
    ]

    return isJsEnabled ? (
        <Fragment>
            <Helmet
                htmlAttributes={{
                    lang
                }}
                title={title}
                meta={meta}
                defer={false}
            />
            <Layout>
                <Home />
                <AboutMe />
                <Skills />
                <Contacts />
            </Layout>
        </Fragment>
    ) : (
        <JavaScriptDisabled />
    )
}

export default IndexPage
