import axiosClient from "../../lib/axios-client"

let getCategories = async () => {
  const res = await axiosClient.get('/products/categories')
  return res.data
}


export const ApiService = {
  getCategories
}
