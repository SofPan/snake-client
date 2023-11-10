const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Let the user know they are connected
  conn.on("connect", () => {
    console.log("Connected to game server.");
    conn.write("Name: SGP");
  });

  // Log data from server to the user
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };