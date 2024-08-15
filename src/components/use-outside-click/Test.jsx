import React, { useRef, useState } from 'react'
import UseOnclickOutside from '.';

const UseOnclickOutsideTest = () => {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOnclickOutside(ref, () => setShowContent(false));

    return (
        <div>
            {
                showContent ? (<div ref={ref}>
                    <h1>This is some random Content</h1>
                    <p>Please click outside of this to hide</p>
                </div>) : (<button onClick={() => setShowContent(true)}>Show Content</button>)
            }
        </div>
    )
}

export default UseOnclickOutsideTest
