import './App.css'
import Router from '../pages/router'
import { Modal } from 'simple-react-modal-library'
import { getModal } from '../store/selectors'
import { useSelector, useDispatch } from 'react-redux'
import modalSlice from '../features/modal/modalSlice'

function App() {
  const dispatch = useDispatch()
  const modal = useSelector(getModal)

  function hideModal() {
    dispatch(modalSlice.actions.hideModal())
  }

  return (
    <div className='app'>
      <Router />
      <Modal text={modal.text} show={modal.show} hideModal={hideModal} />
    </div>
  )
}

export default App
