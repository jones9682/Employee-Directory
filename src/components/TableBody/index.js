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
        <table className="table table-striped">
            <thead>
                {employees.map(emp => (
                    <tr>
                        <td className="align-middle"> <img src={emp.picture.medium} alt="employeePhoto"></img></td>
                        <th className="align-middle">{emp.name.first}</th>
                        <th className="align-middle">{emp.name.last}</th>
                        <td className="align-middle">{emp.phone}</td>
                        <td className="align-middle">{emp.email}</td>
                        <td className="align-middle">{formatDate(emp.dob.date)}</td>
                        <td></td>
                    </tr>
                ))
                }
            </thead>
        </table>
    )
}

export default TableBody;