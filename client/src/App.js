import React, { useEffect, useState } from "react";
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Progress from './components/Progress';

function App() {
  let [students, setStudents] = useState([]);
  let [isProgressView, setIsProgressView] = useState(false);
  
  useEffect(() => {
    getStudents();
  }, []);

  // get students
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
  //     let body = {firstname: modalStudent.firstname, lastname: modalStudent.lastname, birthdate: modalStudent.birthdate, annual: modalStudent.annual, triennial: modalStudent.triennial, minutes: modalStudent.minutes, goal:modalStudent.goal};
  //     let options = {
  //       method: "PUT",
  //       body: JSON.stringify(body)
  //     };
  //     let results = await fetch(`/api/students/${id}`, options);
  //     let data = await results.json();
  //     console.log(data);
  //     getStudents();
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   setModalStudent({
  //     firstname: "",
  //     lastname: "",
  //     birthdate: "",
  //     annual: "",
  //     triennial: "",
  //     goal: "",
  //     minutes: 0,
  //   });
  // }

 
  return (
    <div className="App">
      <Navbar isProgressView={isProgressView} setIsProgressView={setIsProgressView}/>
      <main className="row">
        {isProgressView ? (
            <Progress students={students} getStudents={getStudents}/>
        ) : (
          <div>
            <div>
              <Form getStudents={getStudents}/>
            </div>
            <div className="col-10 offset-1">
              <Table students={students} getStudents={getStudents} deleteStudent={deleteStudent} setStudents={setStudents}/>
            </div>     
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
