import './style.scss'

export default function Fieldset({ legend, className = '', children }) {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  )
}
