import { useState } from "react";

function TableHead({ columns, handleSorting }) {
    const [sortField, setSortField] = useState("");
    const [order, setOrder] = useState("asc");

    const handleSortingChange = (accessor) => {
        const sortOrder =
         accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
       };

    return (
     <thead>
      <tr>
       {columns.map(({ label, accessor, sortable }) => {
        // supposed to add sort images to column labels, not working
        const cl = sortable
        ? sortField === accessor && order === "asc"
          ? "up"
          : sortField === accessor && order === "desc"
          ? "down"
          : "default"
          : ""; 
        return (<th key={accessor} className={cl} onClick={() => handleSortingChange(accessor)}>
            {label}
            </th>
         );
       })}
      </tr>
     </thead>
    );
   };
   
   export default TableHead;