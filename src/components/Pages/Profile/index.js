import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import VisibilitySensor from 'react-visibility-sensor'

import Illustration from '../../../resources/illustrations/Profile.svg'
import ProfilePicture from '../../../resources/images/Profile.png'
import Calendar from '../../../resources/icons/Calendar.svg'
import Flag from '../../../resources/icons/Flag.svg'

import classes from './index.module.scss'

const Profile = () => {
    const [useShow, setShow] = useState(false)

    const onChange = isVisible => {
        isVisible ? setShow(true) : setShow(false)
    }

    return (
        <VisibilitySensor
            partialVisibility
            offset={500}
            minTopValue={500}
            onChange={onChange}
        >
            <div className={classes.ProfileContainer}>
                <Fade right opposite when={useShow}>
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
                                            alt="Calendar Icon"
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
                                            alt="Flag Icon"
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
                </Fade>
            </div>
        </VisibilitySensor>
    )
}

export default Profile
