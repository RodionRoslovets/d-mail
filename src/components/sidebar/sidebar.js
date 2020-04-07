import React from 'react';
import MenuList from './menuList/menuList';
import { Link } from 'react-router-dom';
import style from './sidebar.module.scss';
import Button from '../button/button';
import $ from 'jquery';

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <Button listener={()=>{
                $(`.${style.menuList}`).slideToggle()
            }}>Меню</Button>
            <MenuList classes={style.menuList}/>
            <Link to="/write">
                <Button>
                    Написать
                </Button>
            </Link>
        </div>
    )
}

export default Sidebar;