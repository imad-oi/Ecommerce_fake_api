import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

const authConext = React.createContext({
  token: ''
})

const AuthContextProvider = ({ children }) => {
  const [token, _setToken] = useState('')

  const getToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      _setToken(token)
    }
    return token
  }

  return (
    <authConext.Provider
      value={{
        token,
        getToken
      }}
    >
      {children}
    </authConext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.node
}

export default AuthContextProvider
