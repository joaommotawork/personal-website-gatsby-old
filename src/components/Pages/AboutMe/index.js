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
                    <div className={classes.SkillsColumns}>
                        <ul className={classes.Columns}>
                            <li>{t('AboutMe.Image')}</li>
                            <li>{t('AboutMe.UX/UI')}</li>
                            <li>{t('AboutMe.Front-End')}</li>
                            <li>{t('AboutMe.Back-End')}</li>
                        </ul>
                        <ul className={classes.Columns}>
                            <li>{t('AboutMe.Mobile')}</li>
                            <li>{t('AboutMe.Learning')}</li>
                            <li>{t('AboutMe.Management')}</li>
                            <li>{t('AboutMe.Methodologies')}</li>
                        </ul>
                    </div>
                    <p>{t('AboutMe.Text5')}</p>
                    <p>{t('AboutMe.Text6')}</p>
                    <p>{t('AboutMe.Text7')}</p>
                    <p>{t('AboutMe.Text8')}</p>
                    <p>{t('AboutMe.Text9')}</p>
                </div>
            </div>
        </Fade>
    )
}

export default AboutMe
