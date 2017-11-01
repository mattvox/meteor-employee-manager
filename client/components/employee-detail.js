import React from 'react'

const EmployeeDetail = ({ employee }) => {
  const { name, email, phone, avatar } = employee

  return (
    <div className='thumbnail'>
      <img src={avatar} alt={name} className='img-fluid' style={{ width: '100%' }} />
      <div className='caption'>
        <h3 className='text-center'>{name}</h3>
        <ul className='list-group' style={{ paddingLeft: 0 }}>
          <li className='list-group-item' style={{ border: '0px' }}>
            {email}
          </li>
          <li className='list-group-item' style={{ border: '0px' }}>
            {phone}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EmployeeDetail
