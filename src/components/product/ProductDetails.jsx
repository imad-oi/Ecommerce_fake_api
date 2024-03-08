import PropTypes from 'prop-types'
import { productPropTypes } from '../../utils/productUtils'
import QuantityModifier from '../QuantityModifier'
import Button from '../ui/Button'

const ProductDetails = ({
  product,
  quantity,
  handleClickMinus,
  handleClickPlus,
  addToCart
}) => {
  return (
    <main className="h-screen">
      <h1 className="text-h5">Product Details</h1>
      <div className="flex justify-start gap-6 items-center pt-32">
        <div>
          <img
            src={product.image}
            className="bg-black-25 w-96 h-96"
            height={500}
            width={400}
            alt={product.title}
          />
        </div>
        <div className="flex flex-col justify-between items-start gap-4 ">
          <h1 className="text-h3">{product.title}</h1>
          <p className="text-subtitle1 text-black-75">{product.description}</p>
          <p className="text-h4 text-primary-100 font-semi-bold">
            {product.price}
          </p>

          <QuantityModifier
            handleClickMinus={handleClickMinus}
            handleClickPlus={handleClickPlus}
            quantity={quantity}
          />
          <Button
            variant="primary"
            onClick={() => addToCart(product.id, { quantity, ...product })}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </main>
  )
}

ProductDetails.propTypes = {
  product: productPropTypes,
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  addToCart: PropTypes.func,
  handleClickMinus: PropTypes.func,
  handleClickPlus: PropTypes.func
}

export default ProductDetails
