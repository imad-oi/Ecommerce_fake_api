import * as actionTypes from './types'

export const storeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (state.cart.find(product => product.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map(product =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + action.payload.quantity
                }
              : product
          )
        }
      }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id)
      }
    case actionTypes.CLEAN_CART:
      return {
        ...state,
        cart: []
      }
    case actionTypes.MODIFY_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(product =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: action.payload.quantity
              }
            : product
        )
      }
    default:
      return state
  }
}
