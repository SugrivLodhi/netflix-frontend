import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-gradient-to-r from-black-500 to-white-500'>
      <Link to='/'>
     <img className='h-28' src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='netflix log' />
     </Link>  
     <div className='flex items-center gap-4 mr-4'>
      <h4 className='font-medium text-xl text-white'>Sugriv Lodhi</h4>
      <button className='py-2 px-3 bg-red-500 text-white rounded-md'>Logout</button>
      <Link to='/browse'>
      <button className='py-2 px-3 bg-red-500 text-white rounded-md' >Browse</button>    
      </Link>
    </div>   
    </div>
  )
}

export default Header