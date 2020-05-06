import React from 'react'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next'

import classes from './index.module.scss'

const AboutMe = () => {
    const { t } = useTranslation('translation', { useSuspense: false })

    return (
        <Fade right>
            <div className={classes.AboutMeContainer}>
                <h1>{t('AboutMe.Title')}</h1>
                <div className={classes.Text}>
                    <p>{t('AboutMe.Text1')}</p>
                    <p>{t('AboutMe.Text2')}</p>
                    <p>{t('AboutMe.Text3')}</p>
                    <p>{t('AboutMe.Text4')}</p>
                    <p>{t('AboutMe.Text5')}</p>
                    <p>{t('AboutMe.Text6')}</p>
                </div>
            </div>
        </Fade>
    )
}

export default AboutMe
