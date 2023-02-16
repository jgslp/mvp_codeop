import React, { useEffect, useState } from "react";
import './App.css';
import Table from './components/Table';

function App() {
  let [students, setStudents] = useState([]);
  let [newStudent, setNewStudent] = useState({
    firstname: "",
    lastname: "",
    // birthdate: Date.now(),
    // annualDate: Date.now(),
    // triennialDate: Date.now(),
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
        // birthdate: newStudent.birthdate,
        // annualDate: newStudent.annualDate,
        // triennialDate: newStudent.triennialDate,
        minutes: newStudent.minutes,
        goal: newStudent.goal
      };
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      };
      let results = await fetch("/students", options);
      let data = await results.json();
      console.log(data);
      getStudents();
    } catch (err) {
      console.log(err);
    }
    setNewStudent({
      firstname: "",
      lastname: "",
      // birthdate: Date.now(),
      // annualDate: Date.now(),
      // triennialDate: Date.now(),
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

  // async function deleteStudent(id) {
  //   try {
  //     let options = {
  //       method: "DELETE"
  //     };
  //     let results = await fetch(`/students/${id}`, options);
  //     let data = await results.json();
  //     console.log(data);
  //     getStudents();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className="App">
      <h1>Speech therapy app</h1>
      <form onSubmit={e => handleSubmit(e)}>

          <div className="inputs">
              <div className="name-inputs">
                <label>First Name:</label>
                <input 
                  type="text"
                  name="firstname"
                  label="First Name"
                  onChange={e => handleChange(e)}
                  value={newStudent.firstname} 
                /> 
                <label> Last Name:</label>     
                <input 
                  type="text"
                  name="lastname"
                  label="Last Name"
                  onChange={e => handleChange(e)}
                  value={newStudent.lastname} 
                /> 
              </div>  
              <div className="basic-inputs">
                {/* <label> Birthdate:</label>    
                <input 
                    type="date"
                    label="birthdate"
                    name="birthdate"
                    placeholder="Birthdate"
                    onChange={e => handleChange(e)}
                    value={newStudent.birthdate}   
                    />  */}
                <label> Minutes per Month: </label>       
                <input 
                    type="number"
                    name="minutes"
                    placeholder="Minutes per month"
                    onChange={e => handleChange(e)}
                    value={newStudent.minutes} 
                    />  
              </div>
              {/* <div className="date-inputs">
                <label> Annual Due:</label>   
                <input 
                   type="date"
                   name="annualDate"
                   onChange={e => handleChange(e)}
                   value={newStudent.annualDate}
                /> 
              <label> Triennial Due:</label> 
              <input 
                  type="date"
                  name="triennialDate"
                  onChange={e => handleChange(e)}
                  value={newStudent.triennialDate} 
                />  
          </div> */}
          <div className="goal-input">
              <label> Student Goal: </label>      
              <input 
                  type="text"
                  name="goal"
                  onChange={e => handleChange(e)}
                  value={newStudent.goal} 
              />
            </div>
          </div>   
          <button type="Submit" className="btn btn-primary">Submit</button>
      </form>
      <div className="content">
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
