const stdin = process.stdin;
let connection;
// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;
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
  if (key === 'w') {
    console.log("Move: up");
  }
  if (key === "s") {
    console.log("Move: down");
  }
  if (key === "a") {
    console.log("Move: left");
  }
  if (key === "d") {
    console.log("Move: right");
  }
};

stdin.on("data", handleUserInput);

module.exports = { setupInput };