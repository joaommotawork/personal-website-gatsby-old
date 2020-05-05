import React, { useEffect } from 'react'
import Granim from 'granim'
import Particles from 'react-particles-js'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

import classes from '../styles/404.module.scss'

import Illustration404 from '../resources/illustrations/404.svg'

const NotFoundPage = () => {
    const { t } = useTranslation()

    const language = localStorage.getItem('i18nextLng')
    const keywords = t('SiteMetadata.Keywords')
    const title = `${t('NotFound')} | ${t('SiteMetadata.Title')}`
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
