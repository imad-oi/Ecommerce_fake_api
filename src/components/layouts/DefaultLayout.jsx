import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import Header from './Header'
import Loader from '../Loader'

const DefaultLayout = () => {
  return (
    <main className="h-screen flex flex-col  dark:bg-white-10">
      <Header />
      <div className="flex-1 px-48 dark:bg-white-10">
        <Suspense
          fallback={
           <Loader />
          }
        >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}

export default DefaultLayout
