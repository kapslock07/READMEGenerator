function generateMarkdown(answers, gitHubStuff) {
  return `
# ${answers.title} \n
Profile Pic: ${gitHubStuff.avatar_url} \n
Email: ${gitHubStuff.email} \n
Description: ${ answers.description} \n
Installation: ${ answers.installation} \n
    `;
}

module.exports = generateMarkdown;
