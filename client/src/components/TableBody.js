function TableBody({ tableData, columns }) {
    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.id}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "——";
          return <td key={accessor}>{tData}</td>;
         })}
         <span className="material-symbols-outlined">delete</span>
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;