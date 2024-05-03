import { NavLink } from 'react-router-dom'
import CreateEmployeeForm from '../../container/createEmployeeForm'
import './style.scss'

export default function CreateEmployee() {
  return (
    <>
      <div className='title'>
        <h1>HRnet</h1>
      </div>

      <NavLink to='/list' className='list-link'>
        View Current Employees
      </NavLink>
      <div className='container'>
        <h2>Create Employee</h2>
        <CreateEmployeeForm />
      </div>
    </>
  )
}
