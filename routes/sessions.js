var express = require("express");
var router = express.Router();
const db = require("../model/helper");

// GET student list
router.get("/sessions", function(req, res, next) {
  db(`SELECT * FROM sessions;`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

// GET one student
router.get("/sessions/:id", async function(req, res, next) {
  try {
    let results = await db(`SELECT * FROM sessions WHERE id=${req.params.id}`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// INSERT a new student into the DB
router.post("/sessions", async function(req, res, next) {
  let { sessionDate, attendance, trials, anecdote, homework, student_id} = req.body;
  let sql = `INSERT INTO sessions (sessionDate, attendance, trials, anecdote, homework, student_id) VALUES ('${sessionDate}', '${attendance}', '${trials}', '${anecdote}', '${homework}', '${student_id}')`;
  try {
    await db(sql);
    const results = await db("SELECT * FROM sessions");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// EDIT a student in the DB
router.put("/sessions/:id", async function(req, res, next) {
  let { sessionDate, attendance, trials, anecdote, homework} = req.body;
  let sql = `UPDATE sessions SET sessionDate='${sessionDate}', attendance='${attendance}', trials='${trials}', anecdote='${anecdote}', homework='${homework}' WHERE id= ${req.params.id}`;
  try {
    await db(sql);
    const results = await db("SELECT* FROM sessions");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a student from the DB
router.delete("/sessions/:id", async function(req, res, next) {
  let id = req.params.id;
  let sql = `DELETE FROM sessions WHERE id = ${id}`;
  try {
    await db(sql);
    const results = await db("SELECT* FROM sessions");
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;