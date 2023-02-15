var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET student list
router.get("/students/", function(req, res, next) {
  db(`SELECT * FROM students;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one student
router.get("/students/:id", async function(req, res, next) {
  //your code here
  try {
    let results = await db(`SELECT * FROM students WHERE id=${req.params.id}`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// INSERT a new student into the DB
router.post("/students/", async function(req, res, next) {
  //your code here
  let { firstname, lastname, birthdate, annualDate, triennialDate, goal, minutes } = req.body;
  let sql = `INSERT INTO students (firstname, lastname, birthdate, annualDate, triennialDate, goal, minutes ) VALUES ('${firstname}', '${lastname}', '${birthdate}', '${annualDate}', '${triennialDate}', '${goal}, '${minutes}' ')`;
  try {
    await db(sql);
    const results = await db("SELECT * FROM students");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a student from the DB
router.delete("/students/:id", async function(req, res, next) {
  let id = req.params.id;
  let sql = `DELETE FROM students WHERE id = ${id}`;
  try {
    await db(sql);
    const results = await db("SELECT* FROM students");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;