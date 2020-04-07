import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ThemeAndDate from './themeAndDate/themeAndDate';
import SearchBar from './searchBar/searchBar';
import Logo from './logo/logo';

const Header = () => {
    return (
        <header>
            <Row>
                <Col md={{ size: 1, order:0 }} xs={{ size: 6, order:1 }}>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Col>
                <Col md={{ size: 8, offset: 1, order:0 }} xs={{ size: 12, order:3 }}>
                    <SearchBar />
                </Col>
                <Col md={{ size: 2, order:0 }} xs={{ size: 6, order:2 }}>
                    <ThemeAndDate />
                </Col>
            </Row>
        </header>
    )
}

export default Header;