import React from 'react'
import MenuItem from './menu-item'

const MenuList = ({ list = [] }) => {
    return (
        <ul className='menu-list-container'>
            {
                list && list.length ?
                    list.map((item, index) => (

                        <MenuItem key={index} item={item} />
                    )
                    )
                    : null
            }
        </ul>
    )
}

export default MenuList
