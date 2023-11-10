const { keybindings } = require('./constants');
let connection;
// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // exit the program
  if (key === "\u0003" || key === "q") {
    process.exit();
  }

  connection.write(keybindings[key]);
};


module.exports = { setupInput };