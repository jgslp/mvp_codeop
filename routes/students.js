var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET student list
router.get("/", function(req, res, next) {
  db(`SELECT * FROM students;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one student
router.get("/:id", async function(req, res, next) {
  try {
    let results = await db(`SELECT * FROM students WHERE id=${req.params.id}`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// INSERT a new student into the DB
router.post("/", async function(req, res, next) {
  let { firstname, lastname, minutes, goal, birthdate, annual, triennial} = req.body;
  let sql = `INSERT INTO students (firstname, lastname, minutes, goal, birthdate, annual, triennial) VALUES ('${firstname}', '${lastname}', '${minutes}', '${goal}', '${birthdate}', '${annual}', '${triennial}')`;
  try {
    await db(sql);
    const results = await db("SELECT * FROM students");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// EDIT a student in the DB
router.put("/:id", async function(req, res, next) {
  let {firstname, lastname, minutes, goal, annual, triennial, birthdate} = req.body;
  let sql = `UPDATE students SET firstname='${firstname}', lastname='${lastname}', minutes='${minutes}', birthdate='${birthdate}', annual='${annual}', triennial='${triennial}', goal='${goal}' WHERE id= ${req.params.id}`;
  try {
    await db(sql);
    const results = await db("SELECT* FROM students");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a student from the DB
router.delete("/:id", async function(req, res, next) {
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