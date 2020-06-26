import React from 'react'
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

    const FullDate = new Date()

    const CurrentYear = FullDate.getFullYear()

    return (
        <div className={classes.ContactsContainer}>
            <img className={classes.Wave} src={Wave} alt={t('Contacts.Wave')} />
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
