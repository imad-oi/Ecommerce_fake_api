import PropTypes from 'prop-types'
import { productPropTypes } from '../../utils/productUtils'
import ProductCard from './ProductCard'
import useStoreContext from '../../hooks/useStoreContext'
import storeActions from '../../context/actions'

const ProductList = ({ loading, products }) => {
  const { dispatch } = useStoreContext()
  const { addToCart } = storeActions(dispatch)

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <h1 className="text-h1 text-dark-100">Loading...</h1>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <h1 className="text-h1 text-dark-100">No products found</h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-5 gap-x-4 gap-y-8 ">
      {products?.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          addToCart={addToCart}
          isPromo={product.id % 2} 
        />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.arrayOf(productPropTypes)
}

export default ProductList
