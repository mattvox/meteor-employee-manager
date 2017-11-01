import React from 'react'
import { render } from 'react-dom'

import EmployeeList from './components/employee-list'

const App = () => (
  <div className='container' style={{ padding: '40px' }}>
    <EmployeeList />
  </div>
)

Meteor.startup(() => {
  render(<App />, document.getElementById('root'))
})
