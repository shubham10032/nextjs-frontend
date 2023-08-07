import mysql from "serverless-mysql";
const db = mysql({
  config: {
    host:     process.env.DB_HOST,
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
  },
});
export { db };