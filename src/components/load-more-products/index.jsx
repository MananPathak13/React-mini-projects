import React, { useEffect, useState } from 'react';
import Product from './Product';
import './styles.css';

const LoadMoreProducts = ({ getUrl }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        try {
            const data = await fetch(`${getUrl}?limit=${count === 0 ? 20 : (count + 1) * 20}&skip=${count === 0 ? 0 : count * 20}`).then(res => res.json());
            if (data && data.products && data.products.length) {
                setProducts((prevProducts) => [...prevProducts, ...data.products]);
            } else {
                setDisableButton(true); // Disable button if no more products are returned
            }
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    }, [getUrl, count]);

    const handleLoadMore = (e) => {
        e.preventDefault();
        setCount(count + 1);
        // Maintain the scroll position after state update
        window.scrollTo({
            top: document.documentElement.scrollTop,
            behavior: 'smooth'
        });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <div className='main-product-container'>
            <div className='product-container'>
                {products && products.length ? (
                    products.map((item, index) => (
                        <div key={index} className='product'>
                            <Product item={item} />
                        </div>
                    ))
                ) : null}
            </div>
            <div className='button-container'>
                <button
                    disabled={disableButton}
                    onClick={handleLoadMore}
                >
                    Load More Products
                </button>
                {disableButton ? <p>Max limit reached</p> : null}
            </div>
        </div>
    );
};

export default LoadMoreProducts;
