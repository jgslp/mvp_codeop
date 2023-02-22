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
                {/* <ProgressForm  profileStudent={profileStudent} getSessions={getSessions}/>  */}
            </div>
        <div>
            {sessions.map((data) => {
            return (
                <div key={data.id}>
                    <div>{data.sessionDate}</div>
                </div>
            );
            })}
        </div>
    </div>
    )
}

export default Progress;
