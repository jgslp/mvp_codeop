import React, {useState, useEffect} from "react";
import Sidebar from './Sidebar'
import ProgressForm from './ProgressForm';
import './Progress.css';

function Progress({students}) {
    let [profile, setProfile] = useState(false);
    let [profileStudent, setProfileStudent] = useState({});
    let [sessions, setSessions] = useState([]);
    let [correct, setCorrect] = useState(0);
    let [incorrect, setIncorrect] = useState(0);

    useEffect(() => {
        getSessions();
      }, []);

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

      // get sessions
      async function getSessions() {
        try {
          let results = await fetch("/sessions");
          let data = await results.json();
          console.log(data);
          setSessions(data);
        } catch(err) {
          console.log(err);
        }
      }

      function increaseCorrect() {
        setCorrect(correct + 1);
      }

      function increaseIncorrect() {
        setIncorrect(incorrect + 1);
      }

      function reset() {
        setCorrect(0);
        setIncorrect(0);
      }

    return (
        <div className="progress-view row">
            <div className="col-2 offset-2">
                <Sidebar students={students} viewProfile={viewProfile} />
            </div>
            <div className="col-6 content">
                <div className="profile-section">
                    {profile && (
                        <div>
                            <h2>{`${profileStudent.firstname} ${profileStudent.lastname}`}</h2>
                            <h5>{profileStudent.goal}</h5>
                        </div>
                    )}
                    <div className="progress-form">
                        {profile && (
                            < ProgressForm  profileStudent={profileStudent} getSessions={getSessions}/> 
                        )}
                    </div>
                    <div className="calculator">
                        <div>
                            <div>Trials: {correct} / {correct + incorrect}</div>
                            <div>Percentage Correct: {((correct / (correct + incorrect)) * 100).toFixed(0)}</div>
                            <button className="btn btn-success" onClick={increaseCorrect}>+ correct</button>
                            <button className="btn btn-danger" onClick={increaseIncorrect}>- incorrect</button>
                        </div>
                        <div>
                            <button className="btn btn-warning" onClick={reset}>reset</button>
                            <button className="btn btn-primary">submit</button>
                        </div>
                    </div>
                    <div>  
                        {/* most recent session at top */}
                        {sessions.slice(0).reverse().map((data) => {
                            // if student_id from sessions === selected student's id
                            if (data.student_id === profileStudent.id) {
                                return (
                                <div key={data.id} className="card bg-light mb-3 session-card">
                                    <div className="card-header session-header d-flex justify-content-end">{data.sessionDate.toString().substring(0, 10).split("-").reverse().join("-") }</div>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.attendance}</h5>
                                    <div>{data.anecdote}</div>
                                    {data.trials !== 0 && (
                                        <div>{`Accuracy: ${data.trials}%`}</div>
                                    )}
                                    {data.homework && (
                                        <div>Homework: {data.homework}</div>
                                    )}
                                    </div>
                                </div>
                        );
                    }
                })}
            </div>
        </div>   
      </div>
    </div>
    )
}

export default Progress;
