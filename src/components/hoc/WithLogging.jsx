import PropTypes from 'prop-types'

const WithLogging = OriginalComponent => {
  const WithLoggingComponent = props => {
    if (props.login) return <OriginalComponent />
    return null
  }

  WithLoggingComponent.displayName = `WithLogging(${OriginalComponent.displayName ||
    OriginalComponent.name ||
    'Component'})`
  WithLoggingComponent.propTypes = {
    login: PropTypes.bool.isRequired
  }

  return WithLoggingComponent
}

export default WithLogging
