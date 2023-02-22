import React, {useState} from "react";
import Sidebar from './Sidebar'
import ProgressForm from './ProgressForm';
import './Progress.css';

function Progress({students, getStudents}) {
    let [profile, setProfile] = useState(false);
    let [profileStudent, setProfileStudent] = useState({});
    // let [newSession, setNewSession] = useState ({
    //     student_id: profileStudent.id,
    //     sessionDate: newSession.sessionDate,
    //     attendance: newSession.attendance,
    //     trials: newSession.trials,
    //     anecdote: newSession.anecdote,
    //     homework: newSession.homework
    // })


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

    //   async function addSession() {
    //     try {
    //       let body = {
    //         student_id: profileStudent.id,
    //         sessionDate: newSession.sessionDate,
    //         attendance: newSession.attendance,
    //         trials: newSession.trials,
    //         anecdote: newSession.anecdote,
    //         homework: newSession.homework
    //       };
    //       let options = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(body)
    //       };
    //       let results = await fetch("/sessions", options);
    //       let data = await results.json();
    //       console.log(data);
    //       setNewSession(data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //     setNewSession({
    //       student_id: profileStudent.id,
    //       sessionDate: "",
    //       attendance: "",
    //       trials: 0,
    //       anecdote: "",
    //       homework: "",
    //     });
    //   }


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
                <ProgressForm  profileStudent={profileStudent}/> 
            </div>
        </div>
    )
}

export default Progress;
