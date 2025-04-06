import React from 'react'
import { movieImgUrl } from './utils/Constant'

const MovieCard = ({path}) => {
  return (
    <div className=''>
      <img alt='Movie card' src={movieImgUrl+path}/>
    </div>
  )
}

export default MovieCard
