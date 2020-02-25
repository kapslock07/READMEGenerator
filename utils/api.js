const dotenv = require('dotenv').config();
const axios = require("axios");


const api = {

  getUser: function (username) {
    const queryUrl = `https://api.github.com/users/${username}?access_token=${process.env.TOKEN}`;

    return axios.get(queryUrl)

  }
};

// ?access_token=${process.env.TOKEN}
//?access_token=3527bf673a0c5af06df4c855c7517022d4f179d8

//   getUser(user) {
//     const queryUrl = `https://api.github.com/users/${user.username}/?per_page=100`;

//     axios.get(queryUrl).catch(err => {
//       console.log("error");
//       process.exit(1);
//     });
//   }
// }

//api.getUser("space-age-pete")

module.exports = api;
