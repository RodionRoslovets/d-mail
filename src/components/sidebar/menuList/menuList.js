import React from 'react';

import MenuListItem from './menuListItem/menuListItem';

const MenuList = () => {
    return (
        <ul>
            <MenuListItem text='Входящие' to="/"/>
            <MenuListItem text='Отправленные' to='/send' />
            <MenuListItem text='Черновики' to="/"/>
            <MenuListItem text='Спам' to="/spam"/>
            <MenuListItem text='Важные' to="/important"/>
            <MenuListItem text='Корзина' to="/deleted"/>
        </ul>
    )
}

export default MenuList;