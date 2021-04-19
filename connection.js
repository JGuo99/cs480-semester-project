// Module(s)
const mysqlx = require('@mysql/xdevapi');

// Connection
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    // schema: 'pandamic'
}

mysqlx.getSession(config)
  .then(session => {
    console.log(session.inspect());
    console.log("Connected!");
  });

mysqlx.getSession(config)
.catch(err => {
  console.log(err.message);
})

// Getting Database (Schema)
var pandamicData = mysqlx.getSchema('pandamic');


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "adminData",
//   port: 3307
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
