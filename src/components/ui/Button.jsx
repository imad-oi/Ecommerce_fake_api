import PropTypes from 'prop-types'

const buttonVariants = {
  primary: 'bg-primary-100 text-white-100 hover:bg-primary-75 focus:ring-primary-100',
  black: 'bg-black-100 text-white-100  hover:bg-black-75 focus:ring-black-100'
}

const sizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-5 text-lg'
}

const Button = ({ children, onClick, size = 'md', variant = 'primary' }) => {
  return (
    <button
      className={`btn  ${buttonVariants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'black']),
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}
