import { useCallback, useEffect, useState } from 'react'
import axiosClient from '../lib/axios-client'
import { getProductUrlForCategory } from '../utils/productUtils'

const useProducts = selectedCategory => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = useCallback(async () => {
    const url = getProductUrlForCategory(selectedCategory)
    try {
      setLoading(true)
      const res = await axiosClient.get(url)

      // TODO: Implement this using reducer
      setResults(res.data)
      setLoading(false)
      //...
    } catch (error) {
      setError(error)
      // TODO: USE ERROR BOUNDARY or a custom handler 
      setLoading(false)
    }
  }, [selectedCategory])

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory])

  return [results, loading, error]
}

export default useProducts
