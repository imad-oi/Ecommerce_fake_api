import PropTypes from 'prop-types'

const ProductCardPanel = ({ product }) => {
  return (
    <li className="flex gap-4 justify-start items-center  p-2">
      <img src={product.image} className="w-14" alt={product.title} />
      <div>
        <h1 className="text-h5 text-black-75">{product.title.slice(0, 15)}</h1>
        <p className="font-semi-bold text-primary-100 text-h5">
          {product.price} $
        </p>
        <p className="font-semi-bold text-primary-100  text-span">
          quantity: {product.quantity}
        </p>
      </div>
    </li>
  )
}

ProductCardPanel.propTypes = {
  product: PropTypes.shape({
    quantity: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
  }),
}

export default ProductCardPanel
