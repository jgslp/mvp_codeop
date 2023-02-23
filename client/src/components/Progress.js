import React, {useState, useEffect} from "react";
import Sidebar from './Sidebar'
import ProgressForm from './ProgressForm';
import './Progress.css';

function Progress({students, getStudents}) {
    let [profile, setProfile] = useState(false);
    let [profileStudent, setProfileStudent] = useState({});
    let [sessions, setSessions] = useState([]);

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


    return (
        <div className="progress-view">
            <Sidebar students={students} viewProfile={viewProfile} />
            <div className="profile-section">
                {profile && (
                    <div>
                        <h3>{`${profileStudent.firstname} ${profileStudent.lastname}`}</h3>
                        <h6>{profileStudent.goal}</h6>
                    </div>
                )}
                <ProgressForm  profileStudent={profileStudent} getSessions={getSessions}/> 
                <div>  
                    {sessions.map((data) => {
                        // if student_id from sessions === selected student's id
                        if (data.student_id === profileStudent.id) {
                            return (
                            <div key={data.id} className="card bg-light mb-3 session-card">
                                <div className="card-header session-header d-flex justify-content-end">{data.sessionDate.toString().substring(0, 10)}</div>
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
    )
}

export default Progress;
