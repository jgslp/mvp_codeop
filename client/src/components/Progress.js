import React from "react";
import './Progress.css';

function Progress({students}) {
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
        <div>
            <div className="card bg-light mb-3">
            <div className="card-header"><h6>Select a student:</h6></div>
            <ul>
               {sortedStudents.map((student) => {
                return (
                 <li key={student.id}>{`${student.lastname}, ${student.firstname}`}</li>
            )})}
            </ul>
            </div>
        </div>
    )
}

export default Progress;
