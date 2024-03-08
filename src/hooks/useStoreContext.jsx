import { useContext } from 'react'
import { StoreContext } from '../context/store'

 const useStoreContext = () => {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useStoreContext must be used within a StoreContextProvider')
  }
  return context
}


export default useStoreContext