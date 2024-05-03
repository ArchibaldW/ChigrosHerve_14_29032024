import './style.scss'

export default function TextInput({ id, label, type, defaultValue = '' }) {
  return (
    <div className='input-wrapper'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} defaultValue={defaultValue} />
    </div>
  )
}
