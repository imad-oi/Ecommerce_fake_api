import PropTypes from 'prop-types'
import { FaMinus, FaPlus } from 'react-icons/fa'

const QuantityModifier = ({
  quantity,
  handleClickPlus,
  handleClickMinus
}) => {
  return (
    <div className="flex  justify-center items-center gap-4">
      <div className="flex gap-4">
        <div className="border border-black-100">
          <button
            onClick={() => {
              handleClickMinus()
            }}
            className="border-e-2 p-4"
          >
            <FaMinus />
          </button>
          <span className="  p-4">{quantity}</span>
          <button
            onClick={() => {
              handleClickPlus()
            }}
            className="border-s-2 p-4"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

QuantityModifier.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
  handleClickPlus: PropTypes.func,
  handleClickMinus: PropTypes.func
}

export default QuantityModifier
