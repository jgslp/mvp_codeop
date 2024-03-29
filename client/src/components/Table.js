// used tutorial https://blog.logrocket.com/creating-react-sortable-table

import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table({students, deleteStudent, getStudents, setStudents}) {

 const columns = [
  { label: "First Name", accessor: "firstname" },
  { label: "Last Name", accessor: "lastname" },
  { label: "Birthdate", accessor: "birthdate" },
  { label: "Annual Review", accessor: "annual" },
  { label: "Triennial Reevaluation", accessor: "triennial" },
  { label: "Minutes per month", accessor: "minutes" },
  // { label: "Edit student", accessor: "edit"},
  { label: "Remove student", accessor: "remove"}
 ];

 // sorts table on column label click
 const handleSorting = (sortField, sortOrder) => {
  if (sortField) {
    const sorted = [...students].sort((a, b) => {
     if (a[sortField] === null) return 1;
     if (b[sortField] === null) return -1;
     if (a[sortField] === null && b[sortField] === null) return 0;
     return (
      a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
       numeric: true,
      }) * (sortOrder === "asc" ? 1 : -1)
     );
    });
    setStudents(sorted);
   }
  };
 
 return (
  <>
   <table className="table">
    <caption>
    </caption>
    <TableHead columns={columns} handleSorting={handleSorting}/>
    <TableBody columns={columns} tableData={students} getStudents={getStudents} deleteStudent={deleteStudent} />
   </table>
  </>
 );
};

export default Table;