import { useState } from 'react'
import MenuList from './menu-list'
import { FaMinus, FaPlus } from "react-icons/fa"



const MenuItem = ({ item }) => {
    const [displayChildren, setDisplayChildren] = useState(false);

    return (
        <li >
            <div className='menu-item'>
                {item.label}
                {
                    item && item.children && item.children.length ?
                        <span onClick={() => setDisplayChildren(!displayChildren)} >
                            {displayChildren ? <FaMinus color="#fff" size={15} /> : <FaPlus size={15} color="#fff" />}
                        </span> : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayChildren ?

                    <MenuList list={item.children} />
                    : null
            }

        </li >

    )
}

export default MenuItem
