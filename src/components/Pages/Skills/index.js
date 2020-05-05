import React from 'react'
import Fade from 'react-reveal/Fade'
import Tilt from 'react-tilt'
import ReactVivus from 'react-vivus'
import { Tooltip, Zoom, withStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import useWindowSize from '../../../hooks/useWindowSize'
import Illustration from '../../../resources/illustrations/Programming.svg'
import HTML from '../../../resources/skills/Skills_HTML.svg'
import HTMLStatic from '../../../resources/skills/Skills_HTMLStatic.svg'
import CSS from '../../../resources/skills/Skills_CSS.svg'
import CSSStatic from '../../../resources/skills/Skills_CSSStatic.svg'
import JavaScript from '../../../resources/skills/Skills_JavaScript.svg'
import JavaScriptStatic from '../../../resources/skills/Skills_JavaScriptStatic.svg'
import ReactIcon from '../../../resources/skills/Skills_React.svg'
import ReactIconStatic from '../../../resources/skills/Skills_ReactStatic.svg'
import Photoshop from '../../../resources/skills/Skills_Photoshop.svg'
import PhotoshopStatic from '../../../resources/skills/Skills_PhotoshopStatic.svg'
import Illustrator from '../../../resources/skills/Skills_Illustrator.svg'
import IllustratorStatic from '../../../resources/skills/Skills_IllustratorStatic.svg'

import classes from './index.module.scss'

const Skills = () => {
    const { t } = useTranslation()
    const Size = useWindowSize()

    let FontTooltip = withStyles({
        tooltip: {
            fontSize: '80%',
            backgroundColor: '#868686'
        },
        arrow: {
            color: '#868686'
        }
    })(Tooltip)

    if (Size.width < 768) {
        FontTooltip = withStyles({
            tooltip: {
                fontSize: '100%',
                backgroundColor: '#868686'
            },
            arrow: {
                color: '#868686'
            }
        })(Tooltip)
    }

    return (
        <Fade left>
            <div className={classes.SkillsMainContainer}>
                <h1>{t('Skills.Title')}</h1>
                <div className={classes.SkillsContainer}>
                    <div className={classes.Skills}>
                        <div className={classes.SkillsText}>
                            <div className={classes.SkillsIcons}>
                                <div className={classes.BlockContainer}>
                                    <div className={classes.BlockItemContainer}>
                                        <FontTooltip
                                            disableFocusListener
                                            TransitionComponent={Zoom}
                                            title="HTML"
                                            placement={
                                                Size.width < 360
                                                    ? 'top'
                                                    : Size.width < 1200 &&
                                                      Size.width > 360
                                                    ? 'top'
                                                    : 'top'
                                            }
                                            interactive
                                            leaveTouchDelay={3000}
                                            arrow
                                        >
                                            <div>
                                                <img
                                                    className={
                                                        classes.BlockItemStatic
                                                    }
                                                    src={HTMLStatic}
                                                    alt="HTML"
                                                />
                                                <ReactVivus
                                                    id="html"
                                                    className={
                                                        classes.BlockItem
                                                    }
                                                    option={{
                                                        file: HTML,
                                                        animTimingFunction:
                                                            'EASE',
                                                        type: 'oneByOne',
                                                        duration: 50
                                                    }}
                                                />
                                            </div>
                                        </FontTooltip>
                                    </div>
                                    <div className={classes.BlockItemContainer}>
                                        <FontTooltip
                                            disableFocusListener
                                            TransitionComponent={Zoom}
                                            title="CSS"
                                            placement={
                                                Size.width < 360
                                                    ? 'right'
                                                    : Size.width < 1200 &&
                                                      Size.width > 360
                                                    ? 'right-start'
                                                    : 'top'
                                            }
                                            interactive
                                            leaveTouchDelay={3000}
                                            arrow
                                        >
                                            <div>
                                                <img
                                                    className={
                                                        classes.BlockItemStatic
                                                    }
                                                    src={CSSStatic}
                                                    alt="CSS"
                                                />

                                                <ReactVivus
                                                    id="css"
                                                    className={
                                                        classes.BlockItem
                                                    }
                                                    option={{
                                                        file: CSS,
                                                        animTimingFunction:
                                                            'EASE',
                                                        type: 'oneByOne',
                                                        duration: 50
                                                    }}
                                                />
                                            </div>
                                        </FontTooltip>
                                    </div>
                                    <div className={classes.BlockItemContainer}>
                                        <FontTooltip
                                            disableFocusListener
                                            TransitionComponent={Zoom}
                                            title="JavaScript"
                                            placement={
                                                Size.width < 360
                                                    ? 'bottom'
                                                    : Size.width < 1200 &&
                                                      Size.width > 360
                                                    ? 'right-start'
                                                    : 'top'
                                            }
                                            interactive
                                            leaveTouchDelay={3000}
                                            arrow
                                        >
                                            <div>
                                                <img
                                                    className={
                                                        classes.BlockItemStatic
                                                    }
                                                    src={JavaScriptStatic}
                                                    alt="JavaScript"
                                                />

                                                <ReactVivus
                                                    id="javaScript"
                                                    className={
                                                        classes.BlockItem
                                                    }
                                                    option={{
                                                        file: JavaScript,
                                                        animTimingFunction:
                                                            'EASE',
                                                        type: 'oneByOne',
                                                        duration: 50
                                                    }}
                                                />
                                            </div>
                                        </FontTooltip>
                                    </div>
                                </div>
                                <div className={classes.BlockContainer}>
                                    <div className={classes.BlockItemContainer}>
                                        <FontTooltip
                                            disableFocusListener
                                            TransitionComponent={Zoom}
                                            title="React"
                                            placement={
                                                Size.width < 360
                                                    ? 'top'
                                                    : Size.width < 1200 &&
                                                      Size.width > 360
                                                    ? 'top'
                                                    : 'top'
                                            }
                                            interactive
                                            leaveTouchDelay={3000}
                                            arrow
                                        >
                                            <div>
                                                <img
                                                    className={
                                                        classes.BlockItemStatic
                                                    }
                                                    src={ReactIconStatic}
                                                    alt="React"
                                                />

                                                <ReactVivus
                                                    id="react"
                                                    className={
                                                        classes.BlockItem
                                                    }
                                                    option={{
                                                        file: ReactIcon,
                                                        animTimingFunction:
                                                            'EASE',
                                                        type: 'oneByOne',
                                                        duration: 50
                                                    }}
                                                />
                                            </div>
                                        </FontTooltip>
                                    </div>
                                    <div className={classes.BlockItemContainer}>
                                        <FontTooltip
                                            disableFocusListener
                                            TransitionComponent={Zoom}
                                            title="Photoshop"
                                            placement={
                                                Size.width < 360
                                                    ? 'left'
                                                    : Size.width < 1200 &&
                                                      Size.width > 360
                                                    ? 'left-start'
                                                    : 'top'
                                            }
                                            interactive
                                            leaveTouchDelay={3000}
                                            arrow
                                        >
                                            <div>
                                                <img
                                                    className={
                                                        classes.BlockItemStatic
                                                    }
                                                    src={PhotoshopStatic}
                                                    alt="Photoshop"
                                                />

                                                <ReactVivus
                                                    id="photoshop"
                                                    className={
                                                        classes.BlockItem
                                                    }
                                                    option={{
                                                        file: Photoshop,
                                                        animTimingFunction:
                                                            'EASE',
                                                        type: 'oneByOne',
                                                        duration: 50
                                                    }}
                                                />
                                            </div>
                                        </FontTooltip>
                                    </div>
                                    <div className={classes.BlockItemContainer}>
                                        <FontTooltip
                                            disableFocusListener
                                            TransitionComponent={Zoom}
                                            title="Illustrator"
                                            placement={
                                                Size.width < 360
                                                    ? 'bottom'
                                                    : Size.width < 1200 &&
                                                      Size.width > 360
                                                    ? 'left-start'
                                                    : 'top'
                                            }
                                            interactive
                                            leaveTouchDelay={3000}
                                            arrow
                                        >
                                            <div>
                                                <img
                                                    className={
                                                        classes.BlockItemStatic
                                                    }
                                                    src={IllustratorStatic}
                                                    alt="Illustrator"
                                                />

                                                <ReactVivus
                                                    id="illustrator"
                                                    className={
                                                        classes.BlockItem
                                                    }
                                                    option={{
                                                        file: Illustrator,
                                                        animTimingFunction:
                                                            'EASE',
                                                        type: 'oneByOne',
                                                        duration: 50
                                                    }}
                                                />
                                            </div>
                                        </FontTooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Illustration}>
                        <Tilt className="Tilt" options={{ max: 10 }}>
                            <img
                                className={classes.Illustration}
                                src={Illustration}
                                alt={t('Skills.Illustration')}
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Skills
