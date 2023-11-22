module.exports = {
    port: 3500,
    mongodbUrl: 'mongodb://localhost:27017/jiexin',
    session: {
        name: 'UID',
        secret: 'UID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        }
    }
}