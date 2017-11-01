import React, { PureComponent } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees'

import EmployeeDetail from './employee-detail'

const MAX_RECORDS_PER_PAGE = 12

class EmployeeList extends PureComponent {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    // setting variable instead of state to avoid rerenders
    // when variable changes and only rerender when employees
    // prop is updated
    this.page = 1
  }

  handleClick() {
    this.page += 1
    Meteor.subscribe('employees', MAX_RECORDS_PER_PAGE * this.page)
  }

  renderEmployees() {
    const { employees } = this.props

    return employees.map(employee => (
      <EmployeeDetail key={employee._id} employee={employee} />
    ))
  }

  render() {
    return (
      <div>
        <div className='employee-list'>
          {this.renderEmployees()}
        </div>
        <button
          onClick={this.handleClick}
          className='btn btn-primary center-block'
        >
          Load more...
        </button>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('employees', MAX_RECORDS_PER_PAGE)

  return { employees: Employees.find({}).fetch() }
})(EmployeeList)
