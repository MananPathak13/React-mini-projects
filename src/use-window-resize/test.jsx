import React from 'react'
import UseWindowResize from '.';

const UseWindowResizeTest = () => {

    const windowSize = UseWindowResize();

    const { width, height } = windowSize;
    return (
        <div>
            <h1>Use Window resize Hook</h1>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    )
}

export default UseWindowResizeTest
