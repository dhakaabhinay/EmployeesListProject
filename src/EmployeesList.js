import React from 'react'
import './EmployeesList.css'

const EmployeesList = ({ employees, deleteEmployee, handleEditClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Modes of Contact</th>
          <th>Marital Status</th>
          <th>Immediate Joiner</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.firstName}</td>
            <td>{employee.middleName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.gender}</td>
            <td>{employee.phoneNumber}</td>
            <td>{employee.email}</td>
            <td>{employee.contactModes.join(', ')}</td>
            <td>{employee.maritalStatus}</td>
            <td>{employee.immediateJoiner}</td>
            <td>
              <button
                className="btn-edit"
                onClick={() => handleEditClick(index)}
              >
                Edit
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteEmployee(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeesList
