import React, { useEffect } from 'react'
import ReactVivus from 'react-vivus'
import Granim from 'granim'
import Particles from 'react-particles-js'
import Typed from 'react-typed'

import Logo from '../../../resources/logo/Logo_Animation.svg'
import Wave from '../../../resources/svg/Wave.svg'

import classes from './index.module.scss'

const Home = () => {
    useEffect(() => {
        let granimHome = new Granim({
            element: '#granimHome',
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
        <div className={classes.HomeContainer}>
            <div className={classes.LogoContainer}>
                <ReactVivus
                    id="logo"
                    className={classes.LogoItem}
                    option={{
                        file: Logo,
                        animTimingFunction: 'EASE',
                        type: 'oneByOne',
                        duration: 50
                    }}
                />
                <div className={classes.Text}>
                    <div className={classes.OutsideText}>
                        <Typed
                            strings={['MY NAME IS JOÃO MOTA']}
                            typeSpeed={70}
                            showCursor={false}
                        />
                    </div>
                    <div className={classes.OutsideText}>
                        <label className={classes.Love}>I ♥⠀</label>
                        <Typed
                            strings={[
                                'DEVELOPING',
                                'DESIGN',
                                'SPORTS',
                                'MUSIC',
                                'ADVENTURE'
                            ]}
                            typeSpeed={100}
                            backSpeed={100}
                            backDelay={1000}
                            showCursor={false}
                            loop
                        />
                    </div>
                </div>
            </div>
            <canvas id="granimHome" className={classes.Granim} />
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
            <div className={classes.WaveWrapper}>
                <img className={classes.Wave} src={Wave} alt="Wave" />
            </div>
        </div>
    )
}

export default Home
