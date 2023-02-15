import React from "react";
//import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  let [students, setStudents] = useState([]);
  let [newStudent, setNewStudent] = useState({
    firstname: "",
    lastname: "",
    birthdate: Date.now(),
    annualDate: Date.now(),
    triennialDate: Date.now(),
    goal: "",
    minutes: Date.now(),
  });

  async function getStudents() {
    try {
      let results = await fetch("/students");
      let data = await results.json();
      console.log(data);
    } catch(err) {
      console.log(err);
    }
  }

  async function addStudent() {
    try {
      let body = {
        firstname: newStudent.firstname,
        lastname: newStudent.lastname,
        birthdate: newStudent.birthdate,
        annualDate: newStudent.annualDate,
        triennialDate: newStudent.triennialDate,
        minutes: newStudent.minutes,
        goal: setNewStudent.goal
      };
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      };
      let results = await fetch("/students/", options);
      let data = await results.json();
      console.log(data);
      getStudents();
    } catch (err) {
      console.log(err);
    }
    setNewStudent({
      firstname: "",
      lastname: "",
      birthdate: 0,
      annualDate: 0,
      triennialDate: 0,
      goal: "",
      minutes: 0,
    });
  }

  async function updateStudent(id) {
    try {
      let options = {
        method: "PUT",
      };
      let results = await fetch(`/students/${id}`, options);
      let data = await results.json();
      console.log(data);
      getStudents();
    } catch (err) {
      console.log(err);
    }
    setNewStudent({
      firstname: "",
      lastname: "",
      birthdate: 0,
      annualDate: 0,
      triennialDate: 0,
      goal: "",
      minutes: 0,
    });
  }

  async function deleteStudent(id) {
    try {
      let options = {
        method: "DELETE"
      };
      let results = await fetch(`/students/${id}`, options);
      let data = await results.json();
      console.log(data);
      getStudents();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1>Speech therapy app</h1>
    </div>
  );
}

export default App;
