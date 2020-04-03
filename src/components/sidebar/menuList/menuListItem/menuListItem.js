import React from 'react';

import { Link } from 'react-router-dom';

const MenuListItem = ({ text, to }) => {
    return (
        <li>
            <Link to={to}>
                {text}
            </Link>
        </li>
    );
}

export default MenuListItem;