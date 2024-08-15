import React, { useState } from 'react'
import './styles.css'

const MenuItem = ({ item }) => {
    const [showChildren, setShowChildren] = useState(false)
    return (
        <div>
            <li className='list-container'>
                <div className='li-container'>
                    <p>{item.label}</p>
                    {item && item.children ? (<span onClick={() => { setShowChildren(!showChildren) }}>{showChildren ? '-' : '+'}</span>) : null}
                </div>
                {showChildren && item.children && (
                    <ul>
                        {item.children.map((child, index) =>
                            (<MenuItem item={child} key={index} />)

                        )
                        }
                    </ul>
                )
                }
            </li>
        </div>
    )
}

export default MenuItem
