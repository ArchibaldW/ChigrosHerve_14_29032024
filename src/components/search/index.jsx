import './style.scss'

export default function Search({ setSearchResults = {} }) {

  function handleChange(e) {
    setSearchResults(e.target.value)
  }

  return <input type='search' onChange={handleChange} />
}
