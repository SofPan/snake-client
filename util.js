const prompt = require('prompt-sync')();

// Prompt user for their name and write to server
const getName = (connection) => {
  const name = prompt('Enter your initials');
  connection.write(`Name: ${name}`);
};

module.exports = { getName };
