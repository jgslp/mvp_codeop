

require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "speech",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // create students table
  let sqlStudents = "DROP TABLE if exists students; CREATE TABLE students(id INT NOT NULL AUTO_INCREMENT, firstname VARCHAR(20) not null, lastname VARCHAR(20) not null, minutes INT, goal VARCHAR(400), birthdate DATE, annual DATE, triennial DATE, PRIMARY KEY (id));";
  con.query(sqlStudents, function (err, result) {
    if (err) throw err;
    console.log("Table creation `students` was successful!");

    console.log("Closing...");
  });

  // create sessions table
  let sqlSessions = "DROP TABLE if exists sessions; CREATE TABLE sessions(id INT NOT NULL AUTO_INCREMENT, student_id INT, sessionDate DATE NOT NULL, attendance VARCHAR(100) NOT NULL, trials INT, anecdote VARCHAR(500), homework VARCHAR(300), PRIMARY KEY (id), FOREIGN KEY (student_id) REFERENCES students(id));";
  con.query(sqlSessions, function (err, result) {
    if (err) throw err;
    console.log("Table creation `sessions` was successful!");

    console.log("Closing...");
  });

  con.end();
});

