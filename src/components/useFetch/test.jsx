import React from 'react'
import UseFetch from '.'

const TestUseFetch = () => {

    const { data, pending, error } = UseFetch(
        "https://dummyjson.com/products",
        {}
    )
    return (
        <div>
            <h1>USe Fetch Hook</h1>
            {pending ? (<h1>Loading...</h1>) : null}
            {error ? (<h1>{error}</h1>) : null}
            {
                (data && data.length) ?
                    data.map((item, index) => (
                        <p key={index}>{item.title}</p>
                    )) : null
            }
        </div>
    )
}

export default TestUseFetch
