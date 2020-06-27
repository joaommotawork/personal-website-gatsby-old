import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Layout from '../../Layout'

import classes from './index.module.scss'

import Logo from '../../../resources/logo/ExportJavaScript.png'
import logo from '../../../resources/logo/MetaData.png'

const NotFoundPage = () => {
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
            content: `@johnymoty`
        },
        {
            property: `fb:app_id`,
            content: '583953398912118'
        }
    ]

    return (
        <Layout>
            <Helmet
                htmlAttributes={{
                    lang
                }}
                title={title}
                meta={meta}
                defer={false}
            />
            <div className={classes.JavaScriptDisabledContainer}>
                <div className={classes.MessageContainer}>
                    <img
                        className={classes.Logo}
                        src={Logo}
                        alt={t('Illustration')}
                    />
                    <h1>
                        {t('JavaScriptDisabled', 'PLEASE ENABLE JAVASCRIPT')}
                    </h1>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage
