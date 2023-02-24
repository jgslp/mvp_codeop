import React from "react";

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
            {/* <td><input name="firstname" value={data.firstname ? data.firstname : "——"} type="text" onChange={onChangeInput}/></td>
            <td><input name="lastname" value={data.lastname ? data.lastname : "——"} type="text" onChange={onChangeInput} /></td>
            <td><input name="birthdate" value={data.birthdate ? data.birthdate.toString().substring(0, 10) : "——"} type="date" onChange={onChangeInput} /></td>
            <td><input name="annual" value={data.annual ? data.annual.toString().substring(0, 10) : "——"} type="date" onChange={onChangeInput} /></td>
            <td><input name="triennial" value={data.triennial ? data.triennial.toString().substring(0, 10) : "——"} type="date" onChange={onChangeInput} /></td>
            <td><input name="minutes" value={data.minutes ? data.minutes : "——"} type="number" onChange={onChangeInput} /> </td> */}
            {/* <td><span className="material-symbols-outlined">edit_square</span></td> */}
            <td><span className="material-symbols-outlined" onClick={() => deleteStudent(data.id)}>delete</span></td>
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;