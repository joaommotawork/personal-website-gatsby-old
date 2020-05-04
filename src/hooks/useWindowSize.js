import React, { useState, useEffect } from 'react'

const useWindowSize = () => {
    const isClient = typeof window === 'object'

    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        if (!isClient) {
            return false
        }

        const handleResize = () => {
            setWindowSize(getSize())
        }

        window.addEventListener('Resize', handleResize)
        return () => window.removeEventListener('Resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize
