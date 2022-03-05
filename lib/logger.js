const dbConn = require("./db");

//fetches
export async function fetchAll() {
  const db = await dbConn();
  // db.query(`USE ${process.env.DB_DATABASE}`);
  const [data] = await db.execute(`SELECT * FROM log`);
  return data;
}

export async function fetchDebug() {
  const db = await dbConn();
  const [data] = await db.execute(
    `SELECT * FROM log WHERE log.level = 'debug'`
  );
  return data;
}

export async function fetchError() {
  const db = await dbConn();
  const [data] = await db.execute(
    `SELECT * FROM log WHERE log.level = 'error'`
  );
  return data;
}

export async function fetchFatal() {
  const db = await dbConn();
  const [data] = await db.execute(
    `SELECT * FROM log WHERE log.level = 'fatal'`
  );
  return data;
}

export async function fetchInfo() {
  const db = await dbConn();
  const [data] = await db.execute(`SELECT * FROM log WHERE log.level = 'info'`);
  return data;
}

export async function fetchTrace() {
  const db = await dbConn();
  const [data] = await db.execute(
    `SELECT * FROM log WHERE log.level = 'trace'`
  );
  return data;
}

export async function fetchWarn() {
  const db = await dbConn();
  const [data] = await db.execute(`SELECT * FROM log WHERE log.level = 'warn'`);
  return data;
}

//inserts
export async function trace(req, message) {
  const db = await dbConn();
  const level = "trace";
  const timestamp = new Date().toGMTString();
  const method = req.method;
  const host = req.headers.host;
  const url = req.headers.referer ? req.headers.referer : req.url;
  const userIP =
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

  const values = [level, timestamp, method, url, userIP, host, message];

  await db.execute(
    `INSERT INTO log (level, timestamp, method, url, userIP, host, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    values
  );
}

export async function debug(req, message) {
  const db = await dbConn();
  const level = "debug";
  const timestamp = new Date().toGMTString();
  const method = req.method;
  const host = req.headers.host;
  const url = req.headers.referer ? req.headers.referer : req.url;
  const userIP =
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

  const values = [level, timestamp, method, url, userIP, host, message];

  await db.execute(
    `INSERT INTO log (level, timestamp, method, url, userIP, host, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    values
  );
}

export async function info(req, message) {
  const db = await dbConn();
  const level = "info";
  const timestamp = new Date().toGMTString();
  const method = req.method;
  const host = req.headers.host;
  const url = req.headers.referer ? req.headers.referer : req.url;
  const userIP =
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

  const values = [level, timestamp, method, url, userIP, host, message];

  await db.execute(
    `INSERT INTO log (level, timestamp, method, url, userIP, host, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    values
  );
}

export async function warn(req, message) {
  const db = await dbConn();
  const level = "warn";
  const timestamp = new Date().toGMTString();
  const method = req.method;
  const host = req.headers.host;
  const url = req.headers.referer ? req.headers.referer : req.url;
  const userIP =
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

  const values = [level, timestamp, method, url, userIP, host, message];

  await db.execute(
    `INSERT INTO log (level, timestamp, method, url, userIP, host, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    values
  );
}

export async function error(req, message) {
  const db = await dbConn();
  const level = "error";
  const timestamp = new Date().toGMTString();
  const method = req.method;
  const host = req.headers.host;
  const url = req.headers.referer ? req.headers.referer : req.url;
  const userIP =
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

  const values = [level, timestamp, method, url, userIP, host, message];

  await db.execute(
    `INSERT INTO log (level, timestamp, method, url, userIP, host, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    values
  );
}

export async function fatal(req, message) {
  const db = await dbConn();
  const level = "fatal";
  const timestamp = new Date().toGMTString();
  const method = req.method;
  const host = req.headers.host;
  const url = req.headers.referer ? req.headers.referer : req.url;
  const userIP =
    req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "";

  const values = [level, timestamp, method, url, userIP, host, message];

  await db.execute(
    `INSERT INTO log (level, timestamp, method, url, userIP, host, message) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    values
  );
}

//clear
export async function clearAll() {
  const db = await dbConn();
  await db.execute("TRUNCATE log");
  return;
}
