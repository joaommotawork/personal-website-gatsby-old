import React from 'react'

import '../../styles/global.scss'
import classes from './index.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={classes.LayoutContainer}>
            <main>{children}</main>
        </div>
    )
}

export default Layout
