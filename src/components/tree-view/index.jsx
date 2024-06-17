import React from 'react'
import MenuList from './menu-list'
import "./styles.css"

const TreeView = ({ menu = [] }) => {
    return (
        <div className='treeview-container'>
            <MenuList list={menu} />
        </div>
    )
}

export default TreeView
