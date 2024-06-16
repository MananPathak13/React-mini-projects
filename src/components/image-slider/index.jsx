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


    const nextImage = () => {
        currentSlide === images.length - 1 ?
            (setCurrentSlide(1)) : setCurrentSlide(currentSlide + 1)
    }

    const prevImage = () => {
        currentSlide === 0 ?
            (setCurrentSlide(images.length - 1)) : setCurrentSlide(currentSlide - 1)
    }



    if (loading) {
        <div>Loading...</div>
    }

    if (error != null) {
        <div>Error Occured! {error}</div>
    }
    return (
        <div className='container '>
            <FaAngleLeft className='arrow arrow-left' onClick={() => prevImage()} />
            {images && images.length ?

                images.map((imageItem, index) => (
                    < img
                        key={imageItem.id}
                        src={imageItem.download_url}
                        alt={imageItem.download_url}
                        className={index === currentSlide ? 'current-image' : "current-image hide-current-image"}
                    />
                )) : null
            }
            <FaAngleRight className='arrow arrow-right' onClick={() => nextImage()} />

            <span className='circle-indicators'>
                {images && images.length ? images.map((_, index) => (
                    <button
                        key={index}
                        className={index === currentSlide ? 'current-indicator' : "current-indicator inactive-indicator"}
                        onClick={() => { setCurrentSlide(index) }}></button>
                )) : null}
            </span>
        </div>
    )
}

export default ImageSlider
