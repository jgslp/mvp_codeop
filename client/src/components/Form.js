import { useState } from "react";
import './Form.css';

function Form({getStudents}) {
    let [newStudent, setNewStudent] = useState({
        firstname: "",
        lastname: "",
        birthdate: Date.now(),
        annual: Date.now(),
        triennial: Date.now(),
        goal: "",
        minutes: 0,
      });

      const handleSubmit = e => {
        e.preventDefault();
        addStudent();
      };
    
      const handleChange = e => {
        setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
      };

      async function addStudent() {
        try {
          let body = {
            firstname: newStudent.firstname,
            lastname: newStudent.lastname,
            birthdate: newStudent.birthdate,
            annual: newStudent.annual,
            triennial: newStudent.triennial,
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
          birthdate: Date.now(),
          annual: Date.now(),
          triennial: Date.now(),
          goal: "",
          minutes: 0,
        });
      }

    return (
        <form onSubmit={e => handleSubmit(e)}>

        <div className="inputs">
          <div className="inputs-top">
            <div className="basic-inputs">
              <label>First Name:</label>
              <input 
                className="small-input"
                type="text"
                name="firstname"
                label="First Name"
                onChange={e => handleChange(e)}
                value={newStudent.firstname} 
              /> 
              <label> Last Name:</label>     
              <input 
                className="small-input"
                type="text"
                name="lastname"
                label="Last Name"
                onChange={e => handleChange(e)}
                value={newStudent.lastname} 
              /> 
              <label> Minutes per Month: </label>      
              <input 
                  className="small-input"
                  type="number"
                  name="minutes"
                  placeholder="Minutes per month"
                  onChange={e => handleChange(e)}
                  value={newStudent.minutes} 
                  />  
            </div>  
            <div className="date-inputs">
              <label className="date-label"> Birthdate:</label>    
              <input 
                  className="small-input"
                  type="date"
                  label="birthdate"
                  name="birthdate"
                  placeholder="Birthdate"
                  onChange={e => handleChange(e)}
                  value={newStudent.birthdate}   
                  /> 
              <label className="date-label"> Annual Due:</label>   
              <input 
                 className="small-input"
                 type="date"
                 name="annualDate"
                 onChange={e => handleChange(e)}
                 value={newStudent.annualDate}
              /> 
            <label className="date-label"> Triennial Due:</label> 
            <input 
                className="small-input"
                type="date"
                name="triennialDate"
                onChange={e => handleChange(e)}
                value={newStudent.triennialDate} 
              />  
              </div>
        </div>
        <div className="goal-input">
            <label> Student Goal: </label>      
            <input 
                className="large-input"
                type="text"
                name="goal"
                onChange={e => handleChange(e)}
                value={newStudent.goal} 
            />
          </div>
          <button type="Submit" className="btn btn-primary">Add Student</button>  
        </div>   
       
    </form>
    )
}

export default Form;