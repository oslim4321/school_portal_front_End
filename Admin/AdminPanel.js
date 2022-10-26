import React, { useEffect } from 'react'

import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'


function AdminPanel() {

    const user = useSelector((state) => state.data)
  const navigate = useNavigate();
  console.log(user.user.isAdmin)
 
  return (
      <div>
           {user.loading && 
          <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow mx-4" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </div>}
      {!user.loading && user.error ? <div>{user.error}</div> : null}
      {/* {
        user.error ? navigate('/') : null
      } */}
      {
        !user.loading && user.user ? (
          <div>Welcome { user.user.name} You are one of our Admin { user.user.email}</div>
        ) : null
      }
    </div>
  )
}

export default AdminPanel