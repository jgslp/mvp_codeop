
function TableBody({ tableData, deleteStudent}) {

    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.id}>
            <td>{data.firstname ? data.firstname : "——"}</td>
            <td>{data.lastname ? data.lastname : "——"}</td>
            <td>{data.birthdate ? data.birthdate.toString().substring(0, 10) : "——"}</td>
            <td>{data.annual ? data.annual.toString().substring(0, 10) : "——"}</td>
            <td>{data.triennial ? data.triennial.toString().substring(0, 10) : "——"}</td>
            <td>{data.minutes ? data.minutes : "——"}</td>
            <td><span className="material-symbols-outlined" onClick={() => deleteStudent(data.id)}>delete</span></td>
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;