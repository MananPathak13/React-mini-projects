import React, { useEffect, useState } from 'react'
import Product from './Product'
import './styles.css'

const LoadMoreProducts = ({ getUrl }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false)


    const getProducts = async () => {
        setLoading(true)
        try {
            const data = await fetch(`${getUrl}?limit=${count === 0 ? 20 : (count + 1) * 20}&skip=${count === 0 ? 0 : count * 20}`).then(res => res.json())
            if (data && data.products && data.products.length) {
                setProducts((data.products))
            }
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        getProducts();
    }, [getUrl, count]);

    useEffect(() => {
        if (products.length === 100) setDisableButton(true);
    }, [products]);

    if (loading) return (<div>Loading...</div>);
    if (error) return (<div>Error: {error.message}</div>);
    return (
        <div className='main-product-container'>
            <div className='product-container'>
                {products && products.length ?
                    products.map((item, index) => (
                        <div key={index} className='product'>
                            <Product item={item} />
                        </div>
                    )) : null
                }
            </div>
            <div className='button-container'>
                <button disabled={disableButton} onClick={() => setCount(count + 1)} > Load More Products</button>
                {disableButton ? <p>Max limit reached</p> : null}
            </div>
        </div >
    )
}

export default LoadMoreProducts
