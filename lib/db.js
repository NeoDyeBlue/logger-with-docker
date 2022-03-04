const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  // database: process.env.DB_DATABASE,
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

// const poolConnection = () => {
//   const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//   });
//   pool.query(`USE ${process.env.DB_DATABASE};`);

//   return pool;
// };

// console.log(poolConnection());

// const checkDB = () => {
//   pool.query(`CREATE`);
// };

// pool.pool.connect((err, conn) => {
//   console.log("run");
//   conn.query(`USE ${process.env.DB_DATABASE}`);
// });

module.exports = pool;
