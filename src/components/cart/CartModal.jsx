import { FaShoppingBag } from 'react-icons/fa'
import storeActions from '../../context/actions'
import useStoreContext from '../../hooks/useStoreContext'
import Cart from './Cart'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

const CartModal = () => {
  const {
    state: { cart: CartProducts },
    dispatch
  } = useStoreContext()
  const { cleanCart, removeFromCart, modifyQuantity } = storeActions(dispatch)

  const handleClickMinus = (id, quantity) => {
    if (quantity - 1 > 0) modifyQuantity(id, quantity - 1)
  }
  const handleClickPlus = (id, quantity) => {
    modifyQuantity(id, quantity + 1)
  }

  const length = CartProducts.reduce((acc, item) => acc + item.quantity, 0)

  const total = CartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  const renderButton = ({ onClick }) => (
    <Button onClick={onClick} variant="black">
      <span className="flex items-center gap-3 relative">
        <FaShoppingBag />
        <span className="absolute -left-2 bottom-2 bg-red-600 text-white-100 rounded-full">
          {length > 0 && length}
        </span>
        Shoping
      </span>
    </Button>
  )

  return (
    <Modal renderButton={renderButton}>
      <Cart
        removeFromCart={removeFromCart}
        cleanCart={cleanCart}
        products={CartProducts}
        modifyQuantity={modifyQuantity}
        handleClickMinus={handleClickMinus}
        handleClickPlus={handleClickPlus}
        total={total}
      />
    </Modal>
  )
}

export default CartModal
