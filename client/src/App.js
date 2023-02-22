import React, { useEffect, useState } from "react";
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
// import Navbar from './components/Navbar';
import Progress from './components/Progress';


function App() {
  let [students, setStudents] = useState([]);
  let [isProgressView, setIsProgressView] = useState(false);
  
  useEffect(() => {
    getStudents();
  }, []);

  const handleChangeView = (isProgressView) => {
    setIsProgressView(isProgressView);
}
  // get student
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
  //     birthdate: "",
  //     annual: "",
  //     triennial: "",
  //     goal: "",
  //     minutes: 0,
  //   });
  // }

 
  return (
    <div className="App">
       <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header navbar-brand">SLP Case Manager</div>
          <div>
              <button className={ `nav-button ${!isProgressView ? "btn large" : "btn"} `} onClick={() => handleChangeView(false)}>Caseload</button>
              <button className={ `nav-button ${isProgressView ? "btn large" : "btn"} `} onClick={() => handleChangeView(true)}>Progress</button>
          </div>
        </nav> 

      <main>
        {isProgressView ? (
            <Progress students={students} getStudents={getStudents}/>
        ) : (
          <div>
            <Form getStudents={getStudents}/>
            <Table students={students} getStudents={getStudents} deleteStudent={deleteStudent} setStudents={setStudents}/>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
