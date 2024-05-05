import React from 'react'
import { BANNER_IMAGE } from '../../constant'

const MoviesCard = ({path}) => {
  return (
    <div className='w-48'>
      <img src={`${BANNER_IMAGE}/${path}`} alt='movies' />  
    </div>   
  )
}

export default MoviesCard