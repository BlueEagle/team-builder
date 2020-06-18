import React from 'react'

const Member = (props) => {
  const { member } = props

  return (
    <div className="memberContainer">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <h4>{member.email}</h4>
    </div>
  )
}

export default Member