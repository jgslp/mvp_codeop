import React, {useState} from "react";

function ProgressForm({profileStudent, getSessions}) {
    let [newSession, setNewSession] = useState ({
        student_id: profileStudent.id,
        sessionDate: "",
        attendance: "",
        trials: 0,
        anecdote: "",
        homework: ""
    })
    const options = [`${profileStudent.firstname} worked hard in speech today.`, `${profileStudent.firstname} had difficulty participating in speech today.`, `${profileStudent.firstname} was unavailable for speech today.`, `${profileStudent.firstname} was absent today.`]

    const handleSubmit = e => {
        e.preventDefault();
        addSession();
      };
    
    const handleChange = e => {
        setNewSession({ ...newSession, [e.target.name]: e.target.value });
      };


      async function addSession() {
        try {
          let body = {
            student_id: profileStudent.id,
            sessionDate: newSession.sessionDate,
            attendance: newSession.attendance,
            trials: newSession.trials,
            anecdote: newSession.anecdote,
            homework: newSession.homework
          };
          let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          };
          let results = await fetch("/sessions", options);
          let data = await results.json();
          console.log(data);
          setNewSession(data);
          getSessions();
        } catch (err) {
          console.log(err);
        }
        // reset form fields
        setNewSession({
          student_id: profileStudent.id,
          sessionDate: "",
          attendance: "",
          trials: 0,
          anecdote: "",
          homework: "",
        });
      }

    return (
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="progress-inputs">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Session Date</span>
                            </div>
                            <input type="date" name="sessionDate" value={newSession.sessionDate} className="session-input form-control" onChange={e => handleChange(e)}></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Select one</label>
                            </div>
                            <select name="attendance" className="session-input form-control"  id="mySelect" onChange={e => handleChange(e)}>
                                <option >Choose...</option>
                                {options.map((option, index) => {
                                    return <option key={index}>{option}</option>
                                })}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">% trials correct</span>
                            </div>
                            <input type="number" name="trials" className="session-input form-control"  value={newSession.trials} onChange={e => handleChange(e)}></input>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text textarea-span">Anecdotal data</span>
                            </div>
                            <textarea className="session-input form-control" name="anecdote"  value={newSession.anecdote} onChange={e => handleChange(e)} ></textarea>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text textarea-span">Skill to practice at home</span>
                            </div>
                            <textarea className="session-input form-control" name="homework"  value={newSession.homewrok} onChange={e => handleChange(e)}></textarea>
                        </div>
                    </div>
                    <div className=" add-student-btn">
                        <button type="submit" className="btn btn-primary">Add session</button>
                    </div>
                </form>
    )
}

export default ProgressForm;