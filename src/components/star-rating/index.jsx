import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './styles.css'

const StarRating = ({ numberOfStars = 5 }) => {

    const [stars, setStars] = useState(0)
    const [hover, setHover] = useState(0)


    const handleHover = (index) => {
        setHover(index + 1)
    }


    const handleClick = (index) => {
        setStars(index + 1)
    }

    const handleLeave = () => {
        setHover(0)
    }
    return (
        <div className='star-rating'>
            {
                [...Array(numberOfStars)].map((_, index) => (
                    <FaStar onMouseEnter={() => handleHover(index)} onClick={() => handleClick(index)} onMouseLeave={() => handleLeave()}
                        className={index < (hover || stars) ? "active" : "inactive"}
                        size={40} />
                ))
            }
        </div>
    )
}

export default StarRating;