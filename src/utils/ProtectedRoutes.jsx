import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token')
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} /> // replace is used to replace the current entry in the history stack, that way the user can't go back to the home page after logging out
  }
  return <>{children}</>
}

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoutes
