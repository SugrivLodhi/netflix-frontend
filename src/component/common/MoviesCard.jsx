import React from 'react'
import { BANNER_IMAGE } from '../../constant'

const MoviesCard = ({path}) => {
  if(!path){
    return
  }
  return (
    <div className='w-48'>
      <img src={`${BANNER_IMAGE}/${path}`} alt='movies' />  
    </div>   
  )
}

export default MoviesCard