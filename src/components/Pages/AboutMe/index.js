import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
import VisibilitySensor from 'react-visibility-sensor'

import classes from './index.module.scss'

const AboutMe = () => {
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
            <Fade left opposite when={useShow}>
                <div className={classes.AboutMeContainer}>
                    <h1>ABOUT ME</h1>
                    <div className={classes.Text}>
                        <p>
                            I'm a Student at ISTEC - Instituto Superior de
                            Tecnologias Avançadas, my main goal is to develop
                            Web Apps and Design for them, I work with: HTML,
                            CSS, JavaScript, ReactJS, MySQL/PostgresSQL and have
                            some basics in Java, Swift and C#.
                        </p>
                        <p>
                            I know how to work with Photoshop and Illustrator
                            and I'm currently learning how to edit videos in
                            Premiere and work with After Effects.
                        </p>
                        <p>
                            I am an ambitious, punctual, hardworking and
                            innovative person, that can fit well in every
                            environment and culture.
                        </p>
                        <p>
                            I have acquired a good ability to communicate,
                            negotiate, and interact with other people.
                        </p>
                        <p>
                            Also, i have an excellent organizational, management
                            and planning skills.
                        </p>
                        <p>
                            Some of my Passions are: Judo, Skate, Surf, Music
                            and Adventure, i love meeting new people and I'm
                            open to new experiences.
                        </p>
                    </div>
                </div>
            </Fade>
        </VisibilitySensor>
    )
}

export default AboutMe
