const axios = require("axios");

const api = {
  getUser(user) {
    const queryUrl = `https://api.github.com/users/${user.username}/?per_page=100`;

    axios.get(queryUrl).catch(err => {
      console.log("error");
      process.exit(1);
    });
  }
}

module.exports = api;
