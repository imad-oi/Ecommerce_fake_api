import PropTypes from 'prop-types'

const ribbonVariants = {
  primary: 'bg-primary-100 ',
  black: 'bg-black-100'
}

const Ribbon = ({ text, variant }) => {
  return <span className={`ribbon ${ribbonVariants[variant]}`}>{text}</span>
}

Ribbon.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'black'])
}

Ribbon.defaultProps = {
  variant: 'primary'
}

export default Ribbon
