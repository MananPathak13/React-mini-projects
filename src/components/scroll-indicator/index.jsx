import React, { useEffect, useState } from 'react'
import './styles.css'

const ScrollIndicator = ({ getUrl }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const fetchData = async () => {
        try {
            setLoading(true)
            const dataFromAPI = await fetch(getUrl).then(res => res.json())

            if (dataFromAPI && dataFromAPI.products && dataFromAPI.products.length > 0) setData(dataFromAPI.products)
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setError(error)
            setLoading(false)
        }
    }

    const handleScrollPercentage = () => {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((scrolled / height) * 100)
    }
    useEffect(() => {
        console.log(scrollPercentage)

    }, [scrollPercentage])

    useEffect(() => {
        fetchData();
    }, [getUrl]);

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, []);

    if (loading) {
        return <div>Loading Data ...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <div className='top-container'>
                <h1>Custom scroll Indicator</h1>
                <div className='progress-tracker'>
                    <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
            </div>
            <div className='data-conatainer'>
                {
                    data && data.length ?
                        data.map((product, index) => (
                            <p key={index}>{product.title}</p>
                        ))
                        : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator
