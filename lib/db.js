const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  // database: process.env.DB_DATABASE,
});

// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_DATABASE,
// });

const poolConnection = async () => {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  await pool.execute(`SHOW TABLES LIKE 'level';`).then(([data]) => {
    if (!data.length) {
      pool
        .execute(
          `
        CREATE TABLE level (
          name varchar(10) PRIMARY KEY,
          priority int(1) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `
        )
        .then(() => {
          pool.execute(`
          INSERT INTO level (name, priority) VALUES ('debug', 5),('error', 2),('fatal', 1),('info', 4),('trace', 6),('warn', 3);
          `);
        });
    }
  });

  await pool.execute(`SHOW TABLES LIKE 'log';`).then(([data]) => {
    if (!data.length) {
      pool
        .execute(
          `
        CREATE TABLE log (
          id int(11) PRIMARY KEY AUTO_INCREMENT,
          level varchar(10) NOT NULL,
          timestamp text NOT NULL,
          method varchar(10) NOT NULL,
          url text NOT NULL,
          userIP varchar(50) NOT NULL,
          host varchar(100) NOT NULL,
          message text DEFAULT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `
        )
        .then(() => {
          pool.execute(`
          ALTER TABLE log ADD KEY level (level);
          `);
        })
        .then(() => {
          pool.execute(`
            ALTER TABLE log ADD CONSTRAINT log_ibfk_1 FOREIGN KEY (level) REFERENCES level (name);
            `);
        });
    }
  });

  return pool;
};

module.exports = poolConnection;
