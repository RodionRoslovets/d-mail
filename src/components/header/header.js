import React from 'react';
import {Row, Col} from 'reactstrap';

import ThemeAndDate from './themeAndDate/themeAndDate';
import SearchBar from './searchBar/searchBar';
import Logo from './logo/logo';

const Header = ()=>{
    return (
        <header>
            <Row>
                <Col md='1'>
                    <Logo/>
                </Col>
                <Col md={{size:8, offset:1}}>
                    <SearchBar/>
                </Col>
                <Col md='2'>
                    <ThemeAndDate/>
                </Col>
            </Row>
        </header>
    )
}

export default Header;