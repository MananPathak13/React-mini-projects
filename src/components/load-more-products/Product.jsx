import React from 'react'
import "./styles.css"

const Product = ({ item }) => {
    return (
        <>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
        </>
    )
}

export default Product
