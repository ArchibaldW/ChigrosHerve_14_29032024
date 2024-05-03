import './style.scss'

import { NavLink } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { useSelector } from 'react-redux'

import { getEmployees } from '../../store/selectors'
import { useEffect, useState } from 'react'
import Search from '../../components/search'

export default function ListEmployee() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const employees = useSelector(getEmployees)
  const columns = [
    { name: 'First Name', selector: (row) => row.firstName, sortable: true },
    { name: 'Last Name', selector: (row) => row.lastName, sortable: true },
    { name: 'Start Date', selector: (row) => row.startDate, sortable: true },
    { name: 'Department', selector: (row) => row.department, sortable: true },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    { name: 'Street', selector: (row) => row.street, sortable: true },
    { name: 'City', selector: (row) => row.city, sortable: true },
    { name: 'State', selector: (row) => row.state, sortable: true },
    { name: 'Zip Code', selector: (row) => row.zipCode, sortable: true },
  ]

  useEffect(() => {
    setData(
      employees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(search.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(search.toLowerCase()) ||
          employee.startDate.toLowerCase().includes(search.toLowerCase()) ||
          employee.department.toLowerCase().includes(search.toLowerCase()) ||
          employee.dateOfBirth.toLowerCase().includes(search.toLowerCase()) ||
          employee.street.toLowerCase().includes(search.toLowerCase()) ||
          employee.city.toLowerCase().includes(search.toLowerCase()) ||
          employee.state.toLowerCase().includes(search.toLowerCase()) ||
          employee.zipCode.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, employees])

  return (
    <div className='container'>
      <h1>Current Employees</h1>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationComponentOptions={{ selectAllRowsItem: true }}
      />
      <Search setSearchResults={setSearch} />
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}
