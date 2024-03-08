export function getCategoryUrl(selectedCategory) {
  let url = ''
  if (selectedCategory === 'All Products') {
    url = '/products/categories'
  } else {
    url = `/products/category/${selectedCategory}`
  }
  return url
}
