import React, { useRef } from 'react'

const ScrollToSection = () => {

    const ref = useRef(null);


    const data = [
        {
            label: "First Card",
            style: {
                width: '100%',
                height: '600px',
                background: "red",
            }
        },
        {
            label: "Second Card",
            style: {
                width: '100%',
                height: '600px',
                background: "yellow",
            }
        },
        {
            label: "Third Card",
            style: {
                width: '100%',
                height: '600px',
                background: "green",
            }
        },
        {
            label: "Fourth Card",
            style: {
                width: '100%',
                height: '600px',
                background: "blue",
            }
        },
        {
            label: "Fifth Card",
            style: {
                width: '100%',
                height: '600px',
                background: "brown",
            }
        },
    ]


    function handleScrollToSection() {
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: 'smooth',
        });
    }
    return (
        <div>
            <h1>Scroll to section</h1>
            <button onClick={handleScrollToSection}>Scroll</button>
            {
                data.map((item, index) => (
                    <div ref={index === 3 ? ref : null} style={item.style}>{item.label}</div>
                ))
            }
        </div>
    )
}

export default ScrollToSection
