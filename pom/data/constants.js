import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: process.env.URLHOME,
    LOGIN_URL_LANDPAGE: process.env.URLLOGIN

}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER: {
        EMAIL: 'JAVIER.CHAVEZ',
        PASSWORD: 'TEST2'
    }
}

export const LABELS = {
    
    TYPEOFERROR: {
        INVALIDEMAIL: 'Invalid email address.',
        INVALIDPASSWORD: 'Wrong email or password.',
        EMPTYPASSWORD: 'Invalid email address.'
    }
}