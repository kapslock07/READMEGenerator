const axios = require("axios");

const api = {

  getUser: function(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl)

  }
};

//?access_token=5a8045f3b6352c2ffbc389829311a5f66e12b070

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
