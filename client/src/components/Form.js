import React, { useState } from "react";
import './Form.css';

function Form({getStudents}) {
    let [newStudent, setNewStudent] = useState({
        firstname: "",
        lastname: "",
        birthdate: "",
        annual: "",
        triennial: "",
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
          birthdate: "",
          annual: "",
          triennial: "",
          goal: "",
          minutes: 0,
        });
      }

    return (
        <form onSubmit={e => handleSubmit(e)} >
        <h1>My Students</h1>
        <div className="inputs">
          <div className="inputs-top">
            <div className="basic-inputs">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">First Name</span>
                </div>
                <input 
                    className="small-input input-group form-control"
                    type="text"
                    name="firstname"
                    label="First Name"
                    onChange={e => handleChange(e)}
                    value={newStudent.firstname} 
                />  
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Last Name</span>
                </div>   
                <input 
                    className="small-input form-control"
                    type="text"
                    name="lastname"
                    label="Last Name"
                    onChange={e => handleChange(e)}
                    value={newStudent.lastname} 
                /> 
              </div> 
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Minutes/month</span>
                </div>    
                <input 
                  className="small-input form-control"
                  type="number"
                  name="minutes"
                  onChange={e => handleChange(e)}
                  value={newStudent.minutes} 
                  />  
                </div>
            </div>  
            <div className="date-inputs">
                <div className="input-group mb-3">
                 <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Birthdate</span>
                 </div>    
                <input 
                  className="small-input form-control"
                  type="date"
                  label="birthdate"
                  name="birthdate"
                  placeholder="Birthdate"
                  onChange={e => handleChange(e)}
                  value={newStudent.birthdate}   
                  /> 
                </div>
                <div className="input-group mb-3">
                 <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Annual due</span>
                 </div>  
              <input 
                 className="small-input form-control"
                 type="date"
                 name="annual"
                 onChange={e => handleChange(e)}
                 value={newStudent.annual}
              /> 
              </div>
              <div className="input-group mb-3">
                 <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Triennual due</span>
                 </div>  
            <input 
                className="small-input form-control"
                type="date"
                name="triennial"
                onChange={e => handleChange(e)}
                value={newStudent.triennial} 
              />  
              </div>
              </div>
              <div className="goal-input">
              <div className="input-group">
                 <div className="input-group-prepend">
                    <span className="input-group-text goal-span">Goal</span>
                 </div>      
                <textarea 
                    className="large-input form-control"
                    name="goal"
                    onChange={e => handleChange(e)}
                    value={newStudent.goal} 
                 ></textarea>
                 </div>
                 </div>  
        </div>
          <button type="Submit" className="btn btn-primary">Add Student</button>  
        </div>   
       
    </form>
    )
}

export default Form;