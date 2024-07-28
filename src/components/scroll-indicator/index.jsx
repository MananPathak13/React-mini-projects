import React, { useEffect, useState } from 'react'

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

    useEffect(() => {
        fetchData();
    }, [getUrl])

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener()
        }
    }, [])

    return (
        <div>
            <h1>Custom scroll Indicator</h1>
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
