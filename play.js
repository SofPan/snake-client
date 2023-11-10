const { connect } = require('./client');
const stdin = process.stdin;

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
};

stdin.on("data", handleUserInput);

console.log("Connecting ...");
connect();
setupInput();