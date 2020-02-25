function generateMarkdown(answers, gitHubStuff) {
  return `
# ${answers.title} \n
![Profile Pic](${gitHubStuff.avatar_url}) \n
**Description:** *${ answers.description}* \n
**Email:** ${gitHubStuff.email} \n
**Installation:** ${ answers.installation} \n
**Usage:** ${ answers.usage} \n
**Licenses:** ${ answers.licenses} \n
**Contributing:** ${ answers.contributing} \n
**Testing:** ${ answers.testing} \n
**Questions:** ${ answers.questions} \n
    `;
}

module.exports = generateMarkdown;
