const net = require("net");
const prompt = require('prompt-sync')();

const { IP, PORT } = require("./constants");

const getName = (connection) => {
  const name = prompt('Enter your initials (max 3 characters)');
  connection.write(`Name: ${name}`);
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
    getName(conn);
  });

  // Log data from server to the user
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };