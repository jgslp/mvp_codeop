import React, { useEffect, useState } from "react";
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Navbar from './components/Navbar';


function App() {
  let [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  // add student to db
  async function getStudents() {
    try {
      let results = await fetch("/students");
      let data = await results.json();
      console.log(data);
      setStudents(data);
    } catch(err) {
      console.log(err);
    }
  }

  // delete student from db
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

  // async function updateStudent(id) {
  //   try {
  //     let options = {
  //       method: "PUT",
  //     };
  //     let results = await fetch(`/api/students/${id}`, options);
  //     let data = await results.json();
  //     console.log(data);
  //     getStudents();
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setNewStudent({
  //     firstname: "",
  //     lastname: "",
  //     birthdate: Date.now(),
  //     annualDate: Date.now(),
  //     triennialDate: Date.now(),
  //     goal: "",
  //     minutes: 0,
  //   });
  // }

 
  return (
    <div className="App">
      <Navbar />
      <h1>My Student List</h1>
      <Form getStudents={getStudents}/>
      <Table students={students} getStudents={getStudents} deleteStudent={deleteStudent}/>
    </div>
  );
}

export default App;
