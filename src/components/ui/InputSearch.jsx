import PropTypes from 'prop-types'

const InputSearch = ({ onChange, value }) => {
  return (
    <input
      type="search"
      className="input-search"
      placeholder="Search ...."
      onChange={onChange}
      value={value}
    />
  )
}

InputSearch.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export default InputSearch
