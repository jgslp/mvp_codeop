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
                            <select name="attendance" id="" className="session-input form-control"  value={newSession.attendance} onChange={e => handleChange(e)}>
                                <option value="">Choose...</option>
                                <option value="">{`High five, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Thanks for your hard work today, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Amazing job, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Outstanding effort, ${profileStudent.firstname}!`}</option>
                                <option value="">{`Keep up the good work, ${profileStudent.firstname}!`}</option>
                                <option value="">{`${profileStudent.firstname} had difficulty participating in speech today.`}</option>
                                <option value="">{`${profileStudent.firstname} was unavailable for speech today.`}</option>
                                <option value="">{`${profileStudent.firstname} was absent from school today.`}</option>
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
                    <button type="submit" className="btn btn-primary">Add session</button>
                </form>
    )
}

export default ProgressForm;