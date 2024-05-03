import './style.scss'

export default function Select({ id, label, options = [] }) {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
