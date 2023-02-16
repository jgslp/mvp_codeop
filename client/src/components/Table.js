//https://blog.logrocket.com/creating-react-sortable-table

import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table({students}) {
 const [tableData, setTableData] = useState(students);

 const columns = [
  { label: "First Name", accessor: "firstname" },
  { label: "Last Name", accessor: "lastname" },
//   { label: "Birthdate", accessor: "birthdate" },
//   { label: "Annual Review", accessor: "annualDate" },
//   { label: "Triennial Reevaluation", accessor: "triennialDate" },
  { label: "Minutes per month", accessor: "minutes" },
 ];

 const handleSorting = (sortField, sortOrder) => {
  if (sortField) {
    const sorted = [...tableData].sort((a, b) => {
     return (
      a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
       numeric: true,
      }) * (sortOrder === "asc" ? 1 : -1)
     );
    });
    setTableData(sorted);
   }
  };
 
 return (
  <>
   <table className="table">
    <caption>
    </caption>
    <TableHead columns={columns} handleSorting={handleSorting}/>
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default Table;