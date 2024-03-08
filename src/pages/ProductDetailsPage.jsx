import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import storeActions from '../context/actions'
import useStoreContext from '../hooks/useStoreContext'
import axiosClient from '../lib/axios-client'

import ProductDetails from '../components/product/ProductDetails'

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const { dispatch } = useStoreContext()
  const { addToCart } = storeActions(dispatch)
  const [quantity, setQuantity] = useState(1)

  const fetchProductDetails = async () => {
    const response = await axiosClient.get(`/products/${id}`)
    setProduct(response.data)
  }
  useEffect(() => {
    fetchProductDetails()
    // eslint-disable-next-line
  }, [])

  const handleClickMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1)
    else setQuantity(1)
  }
  const handleClickPlus = () => {
    setQuantity(quantity + 1)
  }
  return (
    <ProductDetails
      quantity={quantity}
      handleClickPlus={handleClickPlus}
      handleClickMinus={handleClickMinus}
      addToCart={addToCart}
      product={product}
    />
    // TODO: {/*  for example you can add more presentationl component here, like : comments, ralated products */}
  )
}

export default ProductDetailsPage
