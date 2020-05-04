import React from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Illustration from '../../../resources/illustrations/Profile.svg'
import ProfilePicture from '../../../resources/images/Profile.png'
import Calendar from '../../../resources/icons/Calendar.svg'
import Flag from '../../../resources/icons/Flag.svg'

import classes from './index.module.scss'

const Profile = () => {
    return (
        <Fade right>
            <div className={classes.ProfileMainContainer}>
                <h1>PROFILE</h1>
                <div className={classes.ProfileContainer}>
                    <div className={classes.Illustration}>
                        <Tilt className="Tilt" options={{ max: 10 }}>
                            <img
                                className={classes.Illustration}
                                src={Illustration}
                                alt="Illustration"
                            />
                        </Tilt>
                    </div>
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
                            <label>
                                WEB DEVELOPER <b>&</b> DESIGNER
                            </label>
                            <div className={classes.ProfileTextWithIcon}>
                                <div className={classes.BlockContainer}>
                                    <img
                                        className={classes.Icon}
                                        src={Calendar}
                                        alt="Calendar"
                                    />
                                    <div className={classes.BlockText}>
                                        <label className={classes.Title}>
                                            BIRTHDAY
                                        </label>
                                        <label>06/03/1999</label>
                                    </div>
                                </div>
                                <div className={classes.BlockContainer}>
                                    <img
                                        className={classes.Icon}
                                        src={Flag}
                                        alt="Flag"
                                    />
                                    <div className={classes.BlockText}>
                                        <label className={classes.Title}>
                                            COUNTRY
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
