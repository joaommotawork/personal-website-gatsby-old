import React, { useEffect } from 'react'
import Granim from 'granim'
import Particles from 'react-particles-js'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import classes from '../styles/404.module.scss'

import Illustration404 from '../resources/illustrations/404.svg'

const NotFoundPage = () => {
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
            <SEO title="404: Not Found" />
            <div className={classes.NotFoundContainer}>
                <div className={classes.MessageContainer}>
                    <img
                        className={classes.Illustration}
                        src={Illustration404}
                        alt="Illustration"
                    />
                    <h1>404: Not Found</h1>
                </div>
                <canvas id="granimNotFound" className={classes.Granim} />
                <Particles
                    className={classes.Particles}
                    params={{
                        particles: {
                            number: {
                                value: 1000,
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
