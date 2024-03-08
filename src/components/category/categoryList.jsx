import PropTypes from 'prop-types'

const categoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <ul className="flex justify-start gap-4">
      <li
        onClick={() => setSelectedCategory('All Products')}
        className={selectedCategory === 'All Products' ? 'text-primary-75 font-regular underline' : '' }
      >All Products</li>
      {categories.map(category => (
        <li
          onClick={() => setSelectedCategory(category)}
          className={category === selectedCategory ? 'text-primary-75 font-regular underline' : ''  }
          key={category}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}

categoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func
}

export default categoryList
