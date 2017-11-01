import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { image, helpers } from 'faker'

import { Employees } from '../imports/collections/employees'


Meteor.startup(() => {
  const numberOfRecords = Employees.find({}).count()

  !numberOfRecords &&
    _.times(5000, () => {
      const { name, email, phone } = helpers.createCard()

      Employees.insert({
        name,
        email,
        phone,
        avatar: image.avatar(),
      })
    })

  Meteor.publish('employees', maxRecordsPerPage => (
    Employees.find({}, { limit: maxRecordsPerPage || 12 })
  ))
})

// Meteor CLI: meteor remove autopublish
// - command ran to prevent meteor from publishing all 5000
// - records on startup.
