//https://blog.logrocket.com/creating-react-sortable-table

import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

function Table(props) {
 const [tableData, setTableData] = useState(props.studentData);

 const columns = [
  { label: "First Name", accessor: "firstname" },
  { label: "Last Name", accessor: "lastname" },
  { label: "Birthdate", accessor: "birthdate" },
  { label: "Annual Review", accessor: "annualDate" },
  { label: "Triennial Reevaluation", accessor: "triennialDate" },
  { label: "Minutes per month", accessor: "minutes" },
 ];

 return (
  <>
   <table className="table">
    <caption>
     Speech students on caseload, column headers are sortable.
    </caption>
    <TableHead columns={columns} />
    <TableBody columns={columns} tableData={tableData} />
   </table>
  </>
 );
};

export default Table;