import React, { useEffect, useState } from 'react'
import Granim from 'granim'
import Particles from 'react-particles-js'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

import classes from '../styles/404.module.scss'

import Illustration404 from '../resources/illustrations/404.svg'
import logo from '../resources/logo/MetaData.png'

const NotFoundPage = () => {
    const { t } = useTranslation('translation', { useSuspense: false })

    const [language, setLanguage] = useState()

    useEffect(() => {
        setLanguage(localStorage.getItem('i18nextLng'))
    }, [])

    const keywords = t(
        'SiteMetadata.Keywords',
        'João Mota Web Developer & Designer, João Mota, Personal Website, Web Developer, Web Designer, HTML, CSS, JavaScript, React, Photoshop, Illustrator'
    )
    const title = `${t('NotFoundTitle', '404: Page Not Found')} | ${t(
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

    useEffect(() => {
        let granimNotFound = new Granim({
            element: '#granimNotFound',
            name: 'granim',
            opacity: [1, 1],
            transitionSpeed: 1000,
            states: {
                'default-state': {
                    gradients: [
                        ['#008b7f', '#008b7f'],
                        ['#008b7f', '#005b96'],
                        ['#011f4b', '#008b7f']
                    ]
                }
            }
        })
    }, [])

    return (
        <Layout>
            <Helmet
                htmlAttributes={{
                    language
                }}
                title={title}
                meta={meta}
                defer={false}
            />
            <div className={classes.NotFoundContainer}>
                <div className={classes.MessageContainer}>
                    <img
                        className={classes.Illustration}
                        src={Illustration404}
                        alt="Illustration"
                    />
                    <h1>{t('NotFound')}</h1>
                </div>
                <canvas id="granimNotFound" className={classes.Granim} />
                <Particles
                    className={classes.Particles}
                    params={{
                        particles: {
                            number: {
                                value: 500,
                                density: {
                                    enable: false
                                }
                            },
                            size: {
                                value: 3,
                                random: true,
                                anim: {
                                    speed: 10,
                                    size_min: 0.5
                                }
                            },
                            line_linked: {
                                enable: false
                            },
                            move: {
                                random: true,
                                speed: 1,
                                direction: 'top',
                                out_mode: 'out'
                            }
                        }
                    }}
                />
            </div>
        </Layout>
    )
}

export default NotFoundPage
