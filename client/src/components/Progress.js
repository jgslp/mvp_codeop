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
                        <input type="date" className="session-input"></input>
                        <select name="" id="" className="session-input">
                            <option value="">{`High five, ${profileStudent.firstname}!`}</option>
                            <option value="">{`Thanks for your hard work today, ${profileStudent.firstname}!`}</option>
                            <option value="">{`Amazing job, ${profileStudent.firstname}!`}</option>
                            <option value="">{`Outstanding effort, ${profileStudent.firstname}!`}</option>
                            <option value="">{`Keep up the good work, ${profileStudent.firstname}!`}</option>
                            <option value="">{`${profileStudent.firstname} had difficulty participating in speech today.`}</option>
                            <option value="">{`${profileStudent.firstname} was unavailable for speech today.`}</option>
                            <option value="">{`${profileStudent.firstname} was absent from school today.`}</option>
                        </select>
                        <input type="number" className="session-input" placeholder="% trials correct"></input>
                        <textarea className="session-input" placeholder="Anecdotal data"></textarea>
                        <textarea className="session-input" placeholder="Skill to practice at home"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Add session</button>
                </form>
            </div>
        </div>
    )
}

export default Progress;
