const net = require("net");
const { IP, PORT } = require("./constants");

const getName = () => {
  console.log("Enter your initials (max 3 characters)");
  let name = process.stdin;
  return new Promise((resolve) => {
    resolve(name);
  });
};
// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Let the user know they are connected
  conn.on("connect", () => {
    console.log("Connected to game server.");
    getName()
      .then((name) => conn.write(`Name: ${name}`));
    // send user initials to the server

  });

  // Log data from server to the user
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };