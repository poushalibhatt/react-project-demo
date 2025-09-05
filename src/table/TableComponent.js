import React from 'react'

const TableComponent = ({phoneList}) => {
    
  return (
    <div>
        Table Component
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
                {phoneList.map(list => (
                    <tr>
                        <td>{list.firstname}</td>
                        <td>{list.lastname}</td>
                        <td>{list.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableComponent