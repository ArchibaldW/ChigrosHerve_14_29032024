import { Route, Routes } from 'react-router-dom'

import ROUTES from './routes.js'

import CreateEmployee from '../createEmployee/'
import ListEmployee from '../listEmployee'
import PageNotFound from '../pageNotFound'

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.createEmployee} element={<CreateEmployee />} />
      <Route path={ROUTES.listEmployee} element={<ListEmployee />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
