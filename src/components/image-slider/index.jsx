import React, { useState, useEffect } from 'react'
import "./styles.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const ImageSlider = ({ url, limit = 5 }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)



    const fetchImages = async (getUrl) => {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
            }

        } catch (e) {
            setError(e.message)
        }
        setLoading(false)

    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);


    if (loading) {
        <div>Loading...</div>
    }

    if (error != null) {
        <div>Error Occured! {error}</div>
    }
    return (
        <div className='container '>
            <FaAngleLeft />
            {images && images.length ?

                images.map((imageItem) => (
                    < img
                        key={imageItem.id}
                        src={imageItem.url}
                        alt={imageItem.url}
                        className='current-Image'
                    />
                )) : null
            }
            <FaAngleRight />
        </div>
    )
}

export default ImageSlider
