const prompt = require('prompt-sync')();

const getName = (connection) => {
  const name = prompt('Enter your initials (max 3 characters)');
  connection.write(`Name: ${name}`);
};

module.exports = { getName };
