import { Suspense, lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import AuthContextProvider from '../context/AuthContect'
import { StoreContextProvider } from '../context/store'
import '../index.css'
import ProtectedRoutes from '../utils/ProtectedRoutes'
import Loader from '../components/Loader'
import Dashboard from '../components/user/Dashboard'

const UserProfileLayout = lazy(() =>
  import('../components/layouts/UserProfileLayout')
)
const DefaultLayout = lazy(() => import('../components/layouts/DefaultLayout'))
const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const ProductDetailsPage = lazy(() => import('../pages/ProductDetailsPage'))

const DefaultRouter = () => {
  const router = useRoutes([
    {
      path: '/',
      element: (
        <StoreContextProvider>
          <AuthContextProvider>
            <Suspense fallback={<Loader />}>
              <DefaultLayout />
            </Suspense>
          </AuthContextProvider>
        </StoreContextProvider>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/product/:id',
          element: <ProductDetailsPage />
        },
        {
          path: '*',
          element: <h1>Not Found</h1>
        }
      ]
    },
    {
      path: '/user',
      element: (
        <ProtectedRoutes>
          <Suspense fallback={<Loader />}>
            <UserProfileLayout />
          </Suspense>
        </ProtectedRoutes>
      ),
      children: [
        {
          path: '/user/profile',
          element: <Dashboard />
        },
        {
          path: '/user/order',
          element: <h1>UserOrderPage</h1>
        },
        {
          path: '/user/wishlist',
          element: <h1>UserWishlistPage</h1>
        }
      ]
    },

    {
      path: '/login',
      element: <LoginPage />
    },

    {
      path: '*',
      element: <h1>Not Found</h1>
    }
  ])
  return router
}
export default DefaultRouter
