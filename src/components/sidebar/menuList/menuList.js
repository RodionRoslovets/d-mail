import React from 'react';

import MenuListItem from './menuListItem/menuListItem';

const MenuList = () => {
    return (
        <ul>
            <MenuListItem text='Входящие' />
            <MenuListItem text='Отправленные' />
            <MenuListItem text='Черновики' />
            <MenuListItem text='Спам' />
            <MenuListItem text='Важные' />
            <MenuListItem text='Корзина' />
        </ul>
    )
}

export default MenuList;