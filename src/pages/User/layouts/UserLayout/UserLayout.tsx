import { Outlet } from 'react-router-dom'
import UserSideNav from '../../components/UserSideNav'
import { Helmet } from 'react-helmet-async'

function UserLayout() {
  return (
    <div className='bg-neutral-100 py-16 text-sm text-gray-600'>
      <Helmet>
        <title>Shopee Việt Nam | Mua và bán trên ứng dụng di động và website</title>
        <meta name='description' content='Hồ sơ tài khoản shopee' />
      </Helmet>
      <div className='container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-12'>
          <div className='md:col-span-3 lg:col-span-2'>
            <UserSideNav />
          </div>
          <div className='md:col-span-9 lg:col-span-10'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserLayout
