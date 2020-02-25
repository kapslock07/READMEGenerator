const dotenv = require('dotenv').config();
const axios = require("axios");


const api = {

  getUser: function (username) {
    const queryUrl = `https://api.github.com/users/${username}?access_token=${process.env.TOKEN}`;

    return axios.get(queryUrl)

  }
};


module.exports = api;
