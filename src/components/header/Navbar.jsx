/* eslint-disable react/no-unknown-property */
import logo from '../../assets/ksss-logo.webp';

function Navbar() {
  return (
    <nav className='flex h-20 border border-b-gray-200 fixed w-full z-20 top-0 start-0 p-4 items-center justify-around'>
      <img src={logo} className=' h-12' />
      <h2 className=' text-blue-400 font-bold'>History</h2>
      <a href='https://www.ksss.se/' className=' font-bold flex'>
        <span className='border-b border-b-gray-950'>KSSS</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-4 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
          />
        </svg>
      </a>

      <div>
        <label class='flex items-center relative w-max cursor-pointer select-none'>
          <input
            type='checkbox'
            class='appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500'
          />
          <span class='absolute font-medium text-xs uppercase right-1 text-white'>
            {' '}
            SV{' '}
          </span>
          <span class='absolute font-medium text-xs uppercase right-8 text-white'>
            {' '}
            EN{' '}
          </span>
          <span class='w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200' />
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
