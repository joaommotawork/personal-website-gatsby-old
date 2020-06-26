import React from 'react'
import ReactVivus from 'react-vivus'
import Typed from 'react-typed'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

import Logo from '../../../resources/logo/Logo_Animation.svg'
import Wave from '../../../resources/svg/Wave.svg'
import ProfilePicture from '../../../resources/images/Profile.png'

import classes from './index.module.scss'

const Home = () => {
    const { t, i18n } = useTranslation('translation', { useSuspense: false })

    const changeLanguage = code => {
        i18n.changeLanguage(code)
        window.location.reload(true)
    }

    return (
        <div className={classes.HomeContainer}>
            <div className={classes.TopBar}>
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
                </div>
                <div className={classes.Languages}>
                    <button
                        className={classes.ButtonLanguages}
                        type="button"
                        onClick={() => changeLanguage('pt')}
                    >
                        <img
                            className={classes.LanguageIcon}
                            src="https://hatscripts.github.io/circle-flags/flags/pt.svg"
                            alt={t('Home.LanguagePT')}
                        />
                    </button>

                    <button
                        className={classes.ButtonLanguages}
                        type="button"
                        onClick={() => changeLanguage('en')}
                    >
                        <img
                            className={classes.LanguageIcon}
                            src="https://hatscripts.github.io/circle-flags/flags/gb.svg"
                            alt={t('Home.LanguageEN')}
                        />
                    </button>
                </div>
            </div>
            <div className={classes.Card}>
                <div className={classes.Profile}>
                    <div className={classes.ProfilePicture}>
                        <LazyLoadImage
                            alt="Profile"
                            effect="blur"
                            src={ProfilePicture}
                            height="100%"
                            width="100%"
                        />
                    </div>
                    <div className={classes.ProfileText}>
                        <span>
                            {t('Profile.WebDeveloper')} <b>&</b>{' '}
                            {t('Profile.Designer')}
                        </span>
                    </div>
                </div>
            </div>
            <div className={classes.TextContainer}>
                <div className={classes.OutsideText}>
                    <Typed
                        strings={[t('Home.Name')]}
                        typeSpeed={70}
                        showCursor={false}
                    />
                </div>
                <div className={classes.OutsideText}>
                    <span>
                        {t('Home.I')}
                        <FontAwesomeIcon
                            className={classes.Icons}
                            icon={faHeart}
                            size="1x"
                        />
                    </span>
                    <Typed
                        strings={[
                            t('Home.Developing'),
                            t('Home.Design'),
                            t('Home.Sports'),
                            t('Home.Music'),
                            t('Home.Adventure')
                        ]}
                        typeSpeed={70}
                        backSpeed={70}
                        backDelay={1000}
                        showCursor={false}
                        loop
                    />
                </div>
            </div>
            <div className={classes.WaveWrapper}>
                <img className={classes.Wave} src={Wave} alt={t('Home.Wave')} />
            </div>
        </div>
    )
}

export default Home
