import React from "react";

function Sidebar({students, viewProfile}) {
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
        <div className="card bg-light mb-3 sidebar-card">
        <div className="card-header"><h6>Select a student:</h6></div>
        <ul>
             {sortedStudents.map((student) => {
            return (
            <li key={student.id} onClick={() => viewProfile(student.id)}>{`${student.lastname}, ${student.firstname}`}</li>
            )})}
        </ul>
    </div>
    )
}

export default Sidebar;