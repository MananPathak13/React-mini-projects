import React, { useState } from 'react'
import "./styles.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Product = ({ item }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = () => {
        if (imageIndex === item.images.length - 1) {
            setImageIndex(0);
        }
        else {
            setImageIndex(imageIndex + 1);
        }
    }

    return (
        <div className='product'>
            {item.title}
            <div className='image-container'>
                <FaArrowLeft />
                <img src={item.images[imageIndex]} alt={item.thumbnail} />
                <FaArrowRight onClick={() => nextImage()} />
            </div>
        </div>
    )
}

export default Product
