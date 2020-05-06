import React from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ReactLoading from 'react-loading'
import { useTranslation } from 'react-i18next'

import Illustration from '../../../resources/illustrations/Profile.svg'
import ProfilePicture from '../../../resources/images/Profile.png'
import Calendar from '../../../resources/icons/Calendar.svg'
import Flag from '../../../resources/icons/Flag.svg'

import classes from './index.module.scss'

const Profile = () => {
    const { t } = useTranslation('translation', { useSuspense: false })

    return (
        <Fade right>
            <div className={classes.ProfileMainContainer}>
                <h1>{t('Profile.Title')}</h1>
                <div className={classes.ProfileContainer}>
                    <div className={classes.Illustration}>
                        <Tilt className="Tilt" options={{ max: 10 }}>
                            <img
                                className={classes.Illustration}
                                src={Illustration}
                                alt={t('Profile.Illustration')}
                            />
                        </Tilt>
                    </div>
                    <div className={classes.Profile}>
                        <div className={classes.ProfilePicture}>
                            <LazyLoadImage
                                alt="Profile"
                                effect="blur"
                                src={ProfilePicture}
                                placeholder={
                                    <ReactLoading
                                        type={'spin'}
                                        color={'#008b7f'}
                                        height={'25%'}
                                        width={'25%'}
                                    />
                                }
                                height="100%"
                                width="100%"
                            />
                        </div>
                        <div className={classes.ProfileText}>
                            <label>
                                {t('Profile.WebDeveloper')} <b>&</b>{' '}
                                {t('Profile.Designer')}
                            </label>
                            <div className={classes.ProfileTextWithIcon}>
                                <div className={classes.BlockContainer}>
                                    <img
                                        className={classes.Icon}
                                        src={Calendar}
                                        alt={t('Profile.Calendar')}
                                    />
                                    <div className={classes.BlockText}>
                                        <label className={classes.Title}>
                                            {t('Profile.Birthday')}
                                        </label>
                                        <label>06/03/1999</label>
                                    </div>
                                </div>
                                <div className={classes.BlockContainer}>
                                    <img
                                        className={classes.Icon}
                                        src={Flag}
                                        alt={t('Profile.Flag')}
                                    />
                                    <div className={classes.BlockText}>
                                        <label className={classes.Title}>
                                            {t('Profile.Country')}
                                        </label>
                                        <label>PORTUGAL</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Profile
