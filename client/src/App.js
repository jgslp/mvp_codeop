import React, { useEffect, useState } from "react";
import './App.css';
import Table from './components/Table';

function App() {
  let [students, setStudents] = useState([]);
  let [newStudent, setNewStudent] = useState({
    firstname: "",
    lastname: "",
    birthdate: Date.now(),
    annualDate: Date.now(),
    triennialDate: Date.now(),
    goal: "",
    minutes: 0,
  });

  useEffect(() => {
    getStudents();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    addStudent();
  };

  const handleChange = e => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

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

  async function addStudent() {
    try {
      let body = {
        firstname: newStudent.firstname,
        lastname: newStudent.lastname,
        birthdate: newStudent.birthdate,
        annualDate: newStudent.annualDate,
        triennialDate: newStudent.triennialDate,
        minutes: newStudent.minutes,
        goal: newStudent.goal
      };
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      };
      let results = await fetch("/api/students", options);
      let data = await results.json();
      console.log(data);
      getStudents();
    } catch (err) {
      console.log(err);
    }
    setNewStudent({
      firstname: "",
      lastname: "",
      birthdate: Date.now(),
      annualDate: Date.now(),
      triennialDate: Date.now(),
      goal: "",
      minutes: 0,
    });
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

  async function deleteStudent(id) {
    try {
      let options = {
        method: "DELETE"
      };
      let results = await fetch(`/api/students/${id}`, options);
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
      <form onSubmit={e => handleSubmit(e)}>
          <input 
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={e => handleChange(e)}
            value={newStudent.firstname} 
            />        
          <input 
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={e => handleChange(e)}
            value={newStudent.lastname} 
            />        
          <input 
            type="date"
            name="birthdate"
            placeholder="Birthdate"
            onChange={e => handleChange(e)}
            value={newStudent.birthdate}   
            />      
          <input 
            type="date"
            name="annualDate"
            placeholder="Annual Review Date"
            onChange={e => handleChange(e)}
            value={newStudent.annualDate}
            />
          <input 
            type="date"
            name="triennialDate"
            placeholder="Triennial Reevaluation Date"
            onChange={e => handleChange(e)}
            value={newStudent.triennialDate} 
            />            
          <input 
            type="number"
            name="minutes"
            placeholder="Minutes per month"
            onChange={e => handleChange(e)}
            value={newStudent.minutes} 
            />          
          <input 
            type="text"
            name="goal"
            placeholder="Goal"
            onChange={e => handleChange(e)}
            value={newStudent.goal} 
            />    
          <button type="Submit">Submit</button>
      </form>
      <div className="content">
        <div>{students}</div>
        <ul>
          {students.map(student => {
            <li key={student.id}>
              <span>{`${student.firstname}`}</span>
            </li>
          })}
        </ul>
        <Table studentData={students}/>
      </div>
    </div>
  );
}

export default App;
