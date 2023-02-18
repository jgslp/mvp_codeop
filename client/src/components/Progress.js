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
            <div className="profileSection">
                {profile && (
                    <div>
                        <h3>{`${profileStudent.firstname} ${profileStudent.lastname}`}</h3>
                        <h6>{profileStudent.goal}</h6>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Progress;
