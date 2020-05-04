import React from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

import Illustration from '../../../resources/illustrations/Profile.svg'
import ProfilePicture from '../../../resources/images/Profile.webp'
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
                        <img
                            className={classes.ProfilePicture}
                            src={ProfilePicture}
                            alt="Profile"
                        />
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
