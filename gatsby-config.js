require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
        title: `João Mota Web Developer & Designer || João Mota Programador Web & Designer`,
        description: `Personal Website From João Mota Web Developer & Designer || Website Pessoal do Programador Web & Designer João Mota`,
        siteUrl: 'https://www.joaommota.com',
        author: `João Mota`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/resources`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `João Mota`,
                short_name: `João Mota`,
                start_url: `/`,
                icon: 'src/resources/logo/ExportFavicon.png',
                background_color: `#ffffff`,
                theme_color: `#008b7f`,
                display: `standalone`,
                prefer_related_applications: true,
                cache_busting_mode: 'none'
            }
        },
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [`/`],
                workboxConfig: {
                    globPatterns: ['**/*']
                }
            }
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://www.joaommota.com',
                sitemap: 'https://www.joaommota.com/sitemap.xml',
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-firebase',
            options: {
                credentials: {
                    apiKey: process.env.FIREBASE_API_KEY,
                    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
                    databaseURL: process.env.FIREBASE_DATABASE_URL,
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
                    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
                    appId: process.env.FIREBASE_APP_ID
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-js-fallback`
    ]
}
