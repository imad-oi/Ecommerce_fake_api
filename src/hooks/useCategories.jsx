import { useCallback, useEffect, useState } from 'react'
import { ApiService } from '../services/api/api.service'

const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(null)

  const fetchCategories = useCallback(async () => {
    try {
      const data = await ApiService.getCategories()
      setCategories(data)
    } catch (error) {
      setError(error)
    }
  }, [])

  useEffect(() => {
    fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // if (error){
  //   throw error
  // }
  return [categories, error]
}

export default useCategories
