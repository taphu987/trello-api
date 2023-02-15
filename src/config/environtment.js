require('dotenv').config();

exports.env = {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET
};
