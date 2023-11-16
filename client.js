const net = require("net");
const { IP, PORT } = require("./constants");
const { getName } = require("./util");

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
    console.log(`
    **********
    Welcome to Sneaky Snakes!
      - W, A, S, D are your directional keys (Up, Left, Down Right)
      - L, K, O, or U to send messages
      - Q or Ctrl + C to quit the game
    And remember to have fun :)
    **********
    `);
    getName(conn);
  });

  // Log data from server to the user
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };