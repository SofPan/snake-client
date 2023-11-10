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

  // keys to move directions
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "d") {
    connection.write("Move: right");
  }

  // send messages to other users
  if (key === "l") {
    connection.write("Say: LOL");
  }
  if (key === "k") {
    connection.write("Say: Keep away!");
  }
  if (key === "o") {
    connection.write("Say: Oh no :/");
  }
  if (key === "u") {
    connection.write("Say: UGH!");
  }
};


module.exports = { setupInput };