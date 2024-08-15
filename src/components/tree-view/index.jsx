import React from 'react'
import MenuItem from './menu-item'
import menus from './data'
import './styles.css'


const TreeView = ({ menuList = menus }) => {
    return (
        <div className='tree-container'>
            <ul>
                {
                    menuList.map((item, index) => (
                        < MenuItem item={item} key={index} />
                    ))
                }
            </ul>
        </div>

    )
}

export default TreeView
