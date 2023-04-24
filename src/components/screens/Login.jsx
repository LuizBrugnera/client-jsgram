import React from 'react'

import User from '../user/User'

const Login = ({setIsAuthenticated}) => {
  return (
    <>
      <User screen='login' setIsAuthenticated={setIsAuthenticated}/>
    </>
  )
}

export default Login