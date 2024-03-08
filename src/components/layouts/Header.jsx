import { Link, NavLink, useNavigate } from 'react-router-dom'
import DarkModeToggle from '../DarkModeToggle'
import Button from '../ui/Button'
import CartModal from '../cart/CartModal'

const navList = [
  { name: 'Home', link: '/' },
  { name: 'Contact', link: '/contact' }
  // add other here ...
]

const Header = () => {
  const token = localStorage.getItem('token')
  const router = useNavigate()

  const handleAccountClick = () => {
    if (token) {
      router('/user/profile')
    } else {
      router('/login')
    }
  }
  return (
    <header className="flex justify-between items-center px-14 sticky top-0 z-10 bg-black-5 dark:bg-white-10  ">
      <div>
        <h1 className="text-h3 italic font-medium">
          <Link to="/">CORAL</Link>
        </h1>
      </div>
      <div>
        <nav>
          <ul className="flex justify-center font-roboto items-center gap-3">
            {navList.map(navItem => (
              <li key={navItem.name}>
                <NavLink to={navItem.link}>{navItem.name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="space-x-4">
        <Button variant="black" onClick={handleAccountClick}>
          Account
        </Button>
        <CartModal />
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header
