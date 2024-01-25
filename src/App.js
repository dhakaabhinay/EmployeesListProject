import React, { useState } from 'react'
import EmployeesForm from './EmployeesForm'
import EmployeesList from './EmployeesList'
import './App.css'

const App = () => {
  const [employees, setEmployees] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  const addEmployee = (employee) => {
    setEmployees([...employees, employee])
  }

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees]
    updatedEmployees.splice(index, 1)
    setEmployees(updatedEmployees)
  }

  const editEmployee = (index) => {
    setSelectedEmployee(employees[index])
  }

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = [...employees]
    const index = updatedEmployees.findIndex(
      (employee) => employee === selectedEmployee,
    )
    updatedEmployees[index] = updatedEmployee
    setEmployees(updatedEmployees)
    setSelectedEmployee(null)
  }

  const handleEditClick = (index) => {
    editEmployee(index)
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Employees List Project</h1>
      <EmployeesForm
        addEmployee={addEmployee}
        updateEmployee={updateEmployee}
        selectedEmployee={selectedEmployee}
      />
      <EmployeesList
        employees={employees}
        deleteEmployee={deleteEmployee}
        handleEditClick={handleEditClick}
      />
    </div>
  )
}

export default App
