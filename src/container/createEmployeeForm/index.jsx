import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from '../../components/form/selectInput'
import TextInput from '../../components/form/textInput'
import Fieldset from '../fieldSet'
import Form from '../form'
import './style.scss'
import employeeSlice from '../../features/employee/employeeSlice'
import modalSlice from '../../features/modal/modalSlice'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

export default function CreateEmployeeForm() {
  const departmentOptions = [
    'Sales',
    'Marketing',
    'Engineering',
    'Human Resources',
    'Legal',
  ]

  const stateOptions = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District Of Columbia',
    'Federated States Of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Islands',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]

  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')

  const dispatch = useDispatch()

  const haveMajority = (date) => {
    if (date) {
      return moment().diff(date.toLocaleDateString('en-US'), 'years') >= 18
    } else {
      return true
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (
      e.target.firstName.value &&
      e.target.lastName.value &&
      dateOfBirth &&
      startDate &&
      e.target.street.value &&
      e.target.city.value &&
      e.target.state.value &&
      e.target.zipCode.value &&
      e.target.department.value
    ) {
      console.log(dateOfBirth, startDate)
      dispatch(
        employeeSlice.actions.addEmployee({
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          dateOfBirth: dateOfBirth
            ? dateOfBirth.toLocaleDateString('fr-FR')
            : '03/19/2000',
          startDate: startDate
            ? startDate.toLocaleDateString('fr-FR')
            : '03/19/2024',
          street: e.target.street.value,
          city: e.target.city.value,
          state: e.target.state.value,
          zipCode: e.target.zipCode.value,
          department: e.target.department.value,
        })
      )
      dispatch(modalSlice.actions.showModal('Utilisateur ajouté'))
      e.target.reset()
    } else {
      dispatch(modalSlice.actions.showModal('Formulaire mal renseigné'))
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TextInput id='firstName' label='First Name' type='text' />
      <TextInput id='lastName' label='Last Name' type='text' />

      <label className='date-picker-label' for="dateOfBirth">Date of Birth</label>
      <DatePicker
        selected={dateOfBirth}
        onChange={(date) => setDateOfBirth(date)}
        filterDate={haveMajority}
        id="dateOfBirth"
      />

      <label className='date-picker-label' for="startDate">Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        id="startDate"
      />
      <Fieldset className='address' legend='Address'>
        <TextInput id='street' label='Street' type='text' />

        <TextInput id='city' label='City' type='text' />

        <Select id='state' label='State' options={stateOptions} />

        <TextInput id='zipCode' label='Zip Code' type='number' />
      </Fieldset>
      <Select id='department' label='Department' options={departmentOptions} />
      <button type='submit'>Save</button>
    </Form>
  )
}
