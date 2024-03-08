import PropTypes from 'prop-types'

export function getProductUrlForCategory(selectedCategory) {
  let url = ''
  if (selectedCategory === 'All Products') {
    url = `/products`
  } else {
    url = `/products/category/${selectedCategory}`
  }
  return url
}

export const productPropTypes = PropTypes.shape({
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.shape({
    rate: PropTypes.number,
    count: PropTypes.number
  }).isRequired
})
