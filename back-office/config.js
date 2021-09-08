require('dotenv').config();

module.exports = {
    db: {

        id: `${process.env.DB_ID}`
        , pwd: `${process.env.DB_PWD}`
        , cluster: `${process.env.DB_CLUSTER}`
        , dbName: 'Mama-mouv'
    }
    , smtp: {
        service: 'Gmail',
        auth: {
            user: `${process.env.SMTP_USER}`,
            pass: `${process.env.SMTP_PASS}`
        },
    }

}