import { useState } from 'react'
import { Link } from 'react-router-dom'

const listItems = [
  {
    name: 'Profile',
    path: '/user/profile'
  },
  {
    name: 'Order',
    path: '/user/order'
  },
  {
    name: 'wishlist',
    path: '/user/wishlist'
  }
]
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('profile')
  return (
    <nav className="h-screen w-96 bg-black-75 ">
      <ul>
        {listItems.map((item, index) => (
          <li
            onClick={() => setActiveItem(item.name)}
            key={index}
            className={`text-white p-4 ${
              activeItem.toLowerCase() === item.name.toLowerCase() ? 'bg-red-300' : ''
            }`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
