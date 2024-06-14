import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'

const StarRating = ({numberOfStars =5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRatingClick = (currentIndex)=>{
        setRating(currentIndex);
    }
    
    const handleRatingMouseMove = (currentIndex) => {
        setHover(currentIndex);
    }

    const handleRatingMouseLeave = () => {
        setHover(rating);
    }

    return (
    <div className='star-rating'>
        {
            [...Array(numberOfStars)].map((_, index) => {
                index++;
                return <FaStar 
                className={((index<= (rating || hover)) ? "active": "inactive") }
                key = {index}
                onClick={() =>handleRatingClick(index)} 
                onMouseMove={() => handleRatingMouseMove(index)}
                onMouseLeave={() => handleRatingMouseLeave()}
                size={40}
                />
            })
        }
    </div>
  )
}

export default StarRating;