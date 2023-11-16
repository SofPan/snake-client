const { keybindings } = require('./constants');
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// On certain keypresses, exit game, move snake, or send message
const handleUserInput = (key) => {
  // exit the program
  if (key === "\u0003" || key === "q") {
    process.exit();
  }
  // only write bound keys to connection object to avoid crashes on wrong keypress
  if (keybindings[key]) {
    connection.write(keybindings[key]);
  }
};


module.exports = { setupInput };