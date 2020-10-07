import React from "react";

function TableBody({ employees }) {

    function formatDate(date) {
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate = [month, day, year].join("-");
        return formattedDate;
    }
    return (
        <div>
            {employees.map(emp => (
                <tr>
                    <td> <img src={emp.picture.medium} alt="employeePhoto"></img></td>
                    <th>{emp.name.first}</th>
                    <th>{emp.name.last}</th>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{formatDate(emp.dob.date)}</td>
                </tr>
            ))
            }
        </div>
    )
}

export default TableBody;