import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // To get the id entered in url from main.jsx
    let {userid} = useParams()
  return (
    <div>
      User:{userid}
    </div>
  )
}

export default User
