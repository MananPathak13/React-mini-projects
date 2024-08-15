import React, { useEffect, useState } from 'react'
import Product from './Product';
import './styles.css'

const LoadMoreProducts = ({ url = "https://dummyjson.com/products/search?q=phone" }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [productCounter, setProductCounter] = useState(1);

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}&limit=${productCounter * 10}`);
            const data = await res.json();
            if (data && data.products.length && data.products) {
                console.log(data.products);
                setProducts(data.products)
            }
        } catch (e) {
            setError(e)
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchProducts();
    }, [url, productCounter]);
    if (error) {
        return <div>{error}</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className='conatainer'>
            <div className='product-container'>
                {products.map((product, index) => (
                    <Product item={product} key={index} />
                ))}
            </div>
            <div className='button-container'>
                <button onClick={() => { setProductCounter(productCounter + 1) }}>Load More</button>
            </div>
        </div>
    )
}

export default LoadMoreProducts
