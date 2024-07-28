import React, { useState, useEffect } from 'react'
import "./styles.css"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const ImageSlider = ({ url, limit = 5, page = 1 }) => {

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchImages = async () => {

        try {
            setLoading(true);
            const res = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await res.json();
            setImages(data);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    }

    const changeImageRight = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    const changeImageLeft = () => {
        if (currentImage === 0) { setCurrentImage(images.length - 1); }
        else { setCurrentImage(currentImage - 1) }
    }
    useEffect(() => {
        if (url !== "") fetchImages();
    }, [url])

    if (loading) return (<div>Loading</div>);
    if (error) return (<div>{error}</div>);
    return (
        <div className='container '>
            <FaAngleLeft className='arrow arrow-left' size={40} onClick={() => changeImageLeft()} />
            {images.map((image, index) => (
                < img key={index} src={image.download_url} alt={image.author}
                    className={index === currentImage ? "current-image" : "hide-current-image"} />
            ))}
            <FaAngleRight className='arrow arrow-right' size={40} onClick={() => changeImageRight()} />

            <span className='circle-indicators'>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={index === currentImage ? "indicators current-indicator" : "indicators inactive-indicator"
                        }></button>
                ))}

            </span>
        </div >
    )
}

export default ImageSlider
