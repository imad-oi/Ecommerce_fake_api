import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import { Suspense } from 'react'
import Loader from '../Loader'

const UserProfileLayout = () => {
  return (
    <main className="h-screen flex ">
      <Sidebar />
      <div className="flex-1 px-48">
      <Suspense
          fallback={
           <Loader />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </main>
  )
}

export default UserProfileLayout
