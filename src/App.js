import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main';

class App extends Component {
    render() {
        return (
            <Container fluid={true}>
                <Header />
                <Row>
                    <Col md="2">
                        <Sidebar />
                    </Col>
                    <Col md="10">
                        <Main/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;