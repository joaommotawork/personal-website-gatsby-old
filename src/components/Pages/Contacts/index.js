import React, { useEffect } from 'react'
import Granim from 'granim'
import Particles from 'react-particles-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'

import Wave from '../../../resources/svg/Wave.svg'

import pdfLight from '../../../resources/pdf/João Mota CV - Light.pdf'
import pdfDark from '../../../resources/pdf/João Mota CV - Dark.pdf'

import classes from './index.module.scss'

const Contacts = () => {
    const { t } = useTranslation('translation', { useSuspense: false })
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

    const FullDate = new Date()

    const CurrentYear = FullDate.getFullYear()

    return (
        <div className={classes.ContactsContainer}>
            <img className={classes.Wave} src={Wave} alt={t('Contacts.Wave')} />
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
            <div className={classes.Container}>
                <div className={classes.MainContainer}>
                    <div className={classes.BlockMainContainer}>
                        <h1>{t('Contacts.DownloadCV')}</h1>
                        <div className={classes.BlockContainer}>
                            <div className={classes.BlockItem}>
                                <button
                                    type="button"
                                    className={classes.Button}
                                >
                                    <a href={pdfLight} download>
                                        <FontAwesomeIcon
                                            className={classes.Icons}
                                            icon={faFileAlt}
                                        />
                                        {'⠀'}
                                        {t('Contacts.Light')}
                                    </a>
                                </button>
                            </div>
                            <div className={classes.BlockItem}>
                                <button
                                    type="button"
                                    className={classes.Button}
                                >
                                    <a href={pdfDark} download>
                                        <FontAwesomeIcon
                                            className={classes.Icons}
                                            icon={faFileAlt}
                                        />
                                        {'⠀'}
                                        {t('Contacts.Dark')}
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.BlockMainContainer}>
                        <h1>{t('Contacts.ContactMe')}</h1>
                        <div className={classes.BlockContainer}>
                            <div className={classes.BlockItem}>
                                <button
                                    type="button"
                                    className={classes.ButtonSocial}
                                >
                                    <a
                                        href="https://www.linkedin.com/in/johnymoty/"
                                        target="__blank"
                                    >
                                        <FontAwesomeIcon
                                            className={classes.Icons}
                                            icon={faLinkedinIn}
                                            size="1x"
                                        />
                                    </a>
                                </button>
                            </div>
                            <div className={classes.BlockItem}>
                                <button
                                    type="button"
                                    className={classes.ButtonSocial}
                                >
                                    <a
                                        href="https://wa.me/351964758077"
                                        target="__blank"
                                    >
                                        <FontAwesomeIcon
                                            className={classes.Icons}
                                            icon={faWhatsapp}
                                            size="1x"
                                        />
                                    </a>
                                </button>
                            </div>
                            <div className={classes.BlockItem}>
                                <button
                                    type="button"
                                    className={classes.ButtonSocial}
                                >
                                    <a
                                        href="mailto:joaommota.work@gmail.com"
                                        target="__blank"
                                    >
                                        <FontAwesomeIcon
                                            className={classes.Icons}
                                            icon={faEnvelope}
                                            size="1x"
                                        />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <small className={classes.Copyright}>
                    &copy; Copyright {CurrentYear}, {t('SiteMetadata.Author')}
                </small>
            </div>
        </div>
    )
}

export default Contacts
