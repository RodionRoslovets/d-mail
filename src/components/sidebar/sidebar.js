import React from 'react';
import MenuList from './menuList/menuList';
import WriteButton from '../writeButton/writeButton';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const style = {
        backgroundColor: '#ccc',
        border: '1px solid black'
    }

    return (
        <div style={style}>
            <MenuList />
            <Link to="/write">
                <WriteButton/>
            </Link>
        </div>
    )
}

export default Sidebar;