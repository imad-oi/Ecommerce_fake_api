import { lazy, useEffect, useState } from 'react'
import InputSearch from '../components/ui/InputSearch'
import useCategories from '../hooks/useCategories'
import useDebounce from '../hooks/useDebounce'
import useProducts from '../hooks/useProducts'

const ProductList = lazy(() => import('../components/product/ProductList'))
const CategoryList = lazy(() => import('../components/category/categoryList'))

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Products')
  const [categories, error] = useCategories()
  const [products, loadingProducts] = useProducts(selectedCategory)
  const [filtredProducts, setFiltredProducts] = useState([])

  const debouncedSearch = useDebounce(searchTerm, 1000)

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const filtredProducts = products.filter(product => {
      return product.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    })
    setFiltredProducts(filtredProducts)
  }, [debouncedSearch, products])

  if (error) {
    return (
      <div className="bg-red-50 py-9">
        <h1 className="text-red-500">Something went wrong: {error.message}</h1>
      </div>
    )
  }

  return (
    <main className="dark:bg-white-10">
      <section className="dark:bg-white-10">
        <h2 className="ribbon-primary text-h2 text-center py-4 text-dark-100 font-semi-bold">
          Search for a product
        </h2>
        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
        <div className="py-6">
          <InputSearch onChange={handleInputChange} value={searchTerm} />
        </div>
        <ProductList loading={loadingProducts} products={filtredProducts} />
      </section>
    </main>
  )
}

export default HomePage
