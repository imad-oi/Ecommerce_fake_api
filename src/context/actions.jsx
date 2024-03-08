import * as actionTypes from './types'

const storeActions = dispatch => {
  return {
    addToCart: (id, payload) => {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
          id: id,
          quantity: payload.quantity,
          image: payload.image,
          title: payload.title,
          price: payload.price
        }
      })
    },
    removeFromCart: id => {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
          id: id
        }
      })
    },
    cleanCart: () => {
      dispatch({
        type: actionTypes.CLEAN_CART
      })
    },
    modifyQuantity: (id, quantity) => {
      dispatch({
        type: actionTypes.MODIFY_QUANTITY,
        payload: {
          id: id,
          quantity: quantity
        }
      })
    }
  }

}

export default storeActions
