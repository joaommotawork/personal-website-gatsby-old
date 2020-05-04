import React, { useEffect } from 'react'
import Granim from 'granim'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import Wave from '../../../resources/svg/Wave.svg'

import pdfWhite from '../../../resources/pdf/Curriculum Vitae - White.pdf'
import pdfBlack from '../../../resources/pdf/Curriculum Vitae - Black.pdf'

import classes from './index.module.scss'

const Contacts = () => {
    useEffect(() => {
        let granimContacts = new Granim({
            element: '#granimContacts',
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
        <div className={classes.ContactsContainer}>
            <div className={classes.WaveWrapper}></div>
            <img className={classes.Wave} src={Wave} alt="Wave" />
            <canvas id="granimContacts" className={classes.Granim} />
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
            <div className={classes.MainContainer}>
                <div className={classes.BlockContainer}>
                    <h1>DOWNLOAD MY CV:</h1>
                    <div className={classes.BlockItem}>
                        <button className={classes.Button}>
                            <a href={pdfWhite} download>
                                <FontAwesomeIcon
                                    className={classes.Icons}
                                    icon={faFileAlt}
                                />
                                {'⠀'}
                                WHITE
                            </a>
                        </button>
                    </div>
                    <div className={classes.BlockItem}>
                        <button className={classes.Button}>
                            <a href={pdfBlack} download>
                                <FontAwesomeIcon
                                    className={classes.Icons}
                                    icon={faFileAlt}
                                />
                                {'⠀'}
                                BLACK
                            </a>
                        </button>
                    </div>
                </div>
                <div className={classes.BlockContainer}>
                    <h1>CONTACT ME: </h1>
                    <div className={classes.BlockItem}>
                        <button className={classes.ButtonSocial}>
                            <a
                                href="https://www.linkedin.com/in/johnymoty/"
                                target="__blank"
                            >
                                <FontAwesomeIcon
                                    className={classes.Icons}
                                    icon={faLinkedinIn}
                                    size="2x"
                                />
                            </a>
                        </button>
                    </div>
                    <div className={classes.BlockItem}>
                        <button className={classes.ButtonSocial}>
                            <a href="mailto:joaommota.work@gmail.com">
                                <FontAwesomeIcon
                                    className={classes.Icons}
                                    icon={faEnvelope}
                                    size="2x"
                                />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
