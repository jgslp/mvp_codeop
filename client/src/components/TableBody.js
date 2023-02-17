function TableBody({ tableData, deleteStudent}) {

    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.id}>
            <td>{data.firstname ? data.firstname : "——"}</td>
            <td>{data.lastname ? data.lastname : "——"}</td>
            <td>{data.birthdate ? data.birthdate : "——"}</td>
            <td>{data.annual ? data.annual : "——"}</td>
            <td>{data.triennial ? data.triennial : "——"}</td>
            <td>{data.minutes ? data.minutes : "——"}</td>
            <td><span className="material-symbols-outlined" onClick={() => deleteStudent(data.id)}>delete</span></td>
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;