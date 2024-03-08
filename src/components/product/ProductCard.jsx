import PropTypes from 'prop-types'
import Button from '../ui/Button'
import { CiHeart } from 'react-icons/ci'
import { FaShoppingBag } from 'react-icons/fa'
import Ribbon from '../ui/Ribbon'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ addToCart, title, price, image, id, isPromo }) => {
  const router = useNavigate()
  return (
    <div
      className="card group relative hover:cursor-pointer"
      onClick={() => router(`/product/${id}`)}
    >
      <div className="absolute">
        {isPromo && <Ribbon variant="primary" text="sales" />}
      </div>
      <img className="w-48 h-52 p-4  pb-10 " src={image} alt="product image" />
      <div className="overlay transition-all duration-75 absolute bottom-14 left-0 right-0 flex items-center justify-between  opacity-0 group-hover:opacity-100">
        <span className="text-primary-700 ps-4">
          <CiHeart />
        </span>
        <Button
          onClick={e => {
            e.stopPropagation()
            addToCart(id, { quantity: 1, title, price, image })
          }}
          variant="black"
        >
          <span className="flex items-center gap-3">
            <FaShoppingBag />
            Shop now
          </span>
        </Button>
      </div>
      <div className="mt-2">
        <h6 className="text-h6 text-dark-100">{title.slice(0, 20)}</h6>
        <p className="text-span text-primary-100">{price} $</p>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func,
  isPromo: PropTypes.bool
}

export default ProductCard
