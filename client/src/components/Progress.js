import React, {useState} from "react";
import './Progress.css';

function Progress({students, getStudents}) {
    let [profile, setProfile] = useState(false);
    let [profileStudent, setProfileStudent] = useState({

    });


    // get one student
    async function viewProfile(id) {
        try {
          let results = await fetch(`/students/${id}`);
          let data = await results.json();
          setProfile(true);
          setProfileStudent(data[0]);
        } catch(err) {
          console.log(err);
        }
      }

    let sortedStudents = students.sort(function (a, b) {
        if (a.lastname < b.lastname) {
            return -1;
        }
        if (a.lastname > b.lastname) {
            return 1;
        }
        return 0;
    })

    return (
        <div className="progress-view">
            <div className="card bg-light mb-3">
                <div className="card-header"><h6>Select a student:</h6></div>
                <ul>
                     {sortedStudents.map((student) => {
                    return (
                    <li key={student.id} onClick={() => viewProfile(student.id)}>{`${student.lastname}, ${student.firstname}`}</li>
                    )})}
                </ul>
            </div>
            <div className="profile-section">
                {profile && (
                    <div>
                        <h3>{`${profileStudent.firstname} ${profileStudent.lastname}`}</h3>
                        <h6>{profileStudent.goal}</h6>
                    </div>
                )}
                <form>
                    <div className="progress-inputs">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Session Date</span>
                            </div>
                            <input type="date" className="session-input form-control"></input>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" for="inputGroupSelect01">Select one</label>
                            </div>
                            <select name="" id="" className="session-input form-control">
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
                            <input type="number" className="session-input form-control"></input>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text textarea-span">Anecdotal data</span>
                            </div>
                            <textarea className="session-input form-control" ></textarea>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text textarea-span">Skill to practice at home</span>
                            </div>
                            <textarea className="session-input form-control" ></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add session</button>
                </form>
            </div>
        </div>
    )
}

export default Progress;
