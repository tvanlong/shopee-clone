import { Link } from 'react-router-dom'
import path from 'src/constants/path'

function NotFound() {
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-9xl font-extrabold text-gray-900 tracking-widest'>404</h1>
      <div className='px-4 text-sm rounded bg-orange rotate-12 absolute'>Page Not Found</div>
      <button className='mt-5'>
        <Link
          to={path.home}
          className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring'
        >
          <span className='relative block px-8 py-3 bg-[#1A2238]'>
            <span className='text-white'>Go Home</span>
          </span>
        </Link>
      </button>
    </main>
  )
}

export default NotFound
