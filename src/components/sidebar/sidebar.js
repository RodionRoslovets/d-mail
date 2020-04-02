import React from 'react';
// import {Row, Col} from 'reactstrap';
import MenuList from './menuList/menuList';



const Sidebar = () => {
    const style = {
        backgroundColor: '#ccc',
        border: '1px solid black'
    }

    return (
        <div style={style}>
            <MenuList />
        </div>
    )
}

export default Sidebar;