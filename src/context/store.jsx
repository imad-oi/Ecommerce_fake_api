import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'
import { storeReducer } from './reducer'

const initialStore = {
  cart: [],
  products: [],
  wishlist: []
}

const StoreContext = createContext(initialStore)

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialStore)
  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}


StoreContextProvider.propTypes = {
  children: PropTypes.element.isRequired
}

export { StoreContext, StoreContextProvider }
