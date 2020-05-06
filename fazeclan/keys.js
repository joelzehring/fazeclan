// ADD YOUR OWN KEYS AND RENAME THIS FILE TO keys.js
const GITHUB_TOKENS = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
  GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
  GITHUB_TOKEN_SECRET: "SOME TOKEN SECRET"
};

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const MLAB_DOMAIN = process.env.MLAB_DOMAIN;
const MLAB_PORT = process.env.MLAB_PORT;
const HEROKU_PROJECT = process.env.HEROKU_PROJECT;
const MONGODB = {
  MONGODB_URI: `mongodb://${DB_USER}:${DB_PASSWORD}@ds${MLAB_DOMAIN}.mlab.com:${MLAB_PORT}/${HEROKU_PROJECT}`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...GITHUB_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
