import React, { useState } from 'react'
import Rating from 'react-simple-star-rating'
 
export default function Ratings() {
  const [rating, setRating] = useState(0) 
   const handleRating = (rate) => {
    setRating(rate)
  } 
  return (
    <div className='container'>
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' 
      /> 2 days ago
    </div>
  )
}