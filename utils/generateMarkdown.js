function generateMarkdown(answers, gitHubStuff) {
  return `
# ${answers.title}
Description: ${answers.description} \n
Installation: ${answers.installation} \n
Profile Pic: ${gitHubStuff.avatar_url}
`;
}

module.exports = generateMarkdown;
