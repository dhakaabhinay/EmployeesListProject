// src/components/EmployeesForm.js
import React, { useState, useEffect } from 'react'
import './EmployeesForm.css'

const EmployeesForm = ({ addEmployee, updateEmployee, selectedEmployee }) => {
  const initialEmployee = {
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    email: '',
    contactModes: [],
    maritalStatus: '',
    immediateJoiner: '',
  }

  const [employee, setEmployee] = useState(initialEmployee)
  const isUpdateMode = !!selectedEmployee

  useEffect(() => {
    if (isUpdateMode) {
      setEmployee(selectedEmployee)
    } else {
      setEmployee(initialEmployee)
    }
  }, [isUpdateMode, selectedEmployee])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === 'checkbox') {
      setEmployee((prevEmployee) => ({
        ...prevEmployee,
        contactModes: checked
          ? [...prevEmployee.contactModes, value]
          : prevEmployee.contactModes.filter((mode) => mode !== value),
      }))
    } else {
      setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isUpdateMode) {
      updateEmployee(employee)
    } else {
      addEmployee(employee)
    }
    setEmployee(initialEmployee)
  }

  const handleClear = () => {
    setEmployee(initialEmployee)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={employee.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Middle Name:
        <input
          type="text"
          name="middleName"
          value={employee.middleName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={employee.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={employee.gender === 'male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={employee.gender === 'female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="others"
            checked={employee.gender === 'others'}
            onChange={handleChange}
          />
          Others
        </label>
      </label>

      <label>
        Phone Number:
        <input
          type="number"
          name="phoneNumber"
          value={employee.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Mode of contact:
        <label>
          <input
            type="checkbox"
            name="email"
            value="email"
            checked={employee.contactModes.includes('email')}
            onChange={handleChange}
          />
          Email
        </label>
        <label>
          <input
            type="checkbox"
            name="phone"
            value="phone"
            checked={employee.contactModes.includes('phone')}
            onChange={handleChange}
          />
          Phone
        </label>
      </label>

      <label>
        Marital Status:
        <select
          name="maritalStatus"
          value={employee.maritalStatus}
          onChange={handleChange}
        >
          <option value="none">None</option>

          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </label>

      <label>
        Immediate Joiner:
        <label>
          <input
            type="radio"
            name="immediateJoiner"
            value="Yes"
            checked={employee.immediateJoiner === 'Yes'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="immediateJoiner"
            value="No"
            checked={employee.immediateJoiner === 'No'}
            onChange={handleChange}
          />
          No
        </label>
      </label>

      <div>
        <button type="submit">{isUpdateMode ? 'Update' : 'Submit'}</button>
        <button className="btn-clear" type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default EmployeesForm
