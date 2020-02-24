const axios = require("axios");

const api = {

  function({ user }) {
    const queryUrl = `https://api.github.com/users/${user}?access_token=5a8045f3b6352c2ffbc389829311a5f66e12b070`;

    axios.get(queryUrl).then(function (res) {
      // console.log(res.data.email);
      const emailAddress = res.data.email
      // console.log(res.data.avatar_url);
      const profilePicUrl = res.data.avatar_url
      console.log(emailAddress);
      console.log(profilePicUrl);


    });

  }
};

//   getUser(user) {
//     const queryUrl = `https://api.github.com/users/${user.username}/?per_page=100`;

//     axios.get(queryUrl).catch(err => {
//       console.log("error");
//       process.exit(1);
//     });
//   }
// }

module.exports = api;
