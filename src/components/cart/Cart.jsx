import PropTypes from 'prop-types'
import ProductCardPanel from '../product/ProductCardPanel'
import Button from '../ui/Button'
import QuantityModifier from '../QuantityModifier'

const Cart = ({
  products,
  cleanCart,
  total,
  removeFromCart,
  handleClickMinus,
  handleClickPlus
}) => {
  return (
    <div className="border h-[500px]  overflow-y-scroll p-4 flex flex-col justify-between">
      <h1 className="text-h3 font-medium border-b-2">Cart</h1>
      <ul className="flex flex-col gap-2">
        {products.map(product => (
          <div key={product.id} className="flex items-center justify-between">
            <ProductCardPanel product={product} />
            <QuantityModifier
              handleClickMinus={() =>
                handleClickMinus(product.id, product.quantity)
              }
              handleClickPlus={() =>
                handleClickPlus(product.id, product.quantity)
              }
              quantity={product.quantity}
            />
            <Button
              onClick={() => removeFromCart(product.id)}
              size="sm"
              variant="primary"
            >
              remove
            </Button>
          </div>
        ))}
      </ul>

      {products.length === 0 ? (
        <div className="text-center bg-primary-10 p-3">
          <h1 className="text-h5">Cart is empty</h1>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-start gap-4">
            <h1 className="font-medium">Total:</h1>
            <h1 className="font-semi-bold text-primary-100 text-h5">
              {total}dh
            </h1>
          </div>
          <Button onClick={() => cleanCart()} variant="black">
            Checkout
          </Button>
        </>
      )}
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  cleanCart: PropTypes.func,
  total: PropTypes.number,
  removeFromCart: PropTypes.func,
  modifyQuantity: PropTypes.func,
  handleClickMinus: PropTypes.func,
  handleClickPlus: PropTypes.func
}

export default Cart
