import React from "react";

function TableBody({ employees }) {
    return (
        <div>
            {employees.map(emp => (
                <tr>
                    <td> <img src={emp.picture.medium} alt="employeePhoto"></img></td>
                    <th>{emp.name.first}</th>
                    <th>{emp.name.last}</th>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{emp.dob.date}</td>
                </tr>
            ))
            }
        </div>
    )
}

export default TableBody;