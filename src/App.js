import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/pages/main/main';
import Spam from './components/pages/spam/spam';
import Important from './components/pages/important/imoprtant';
import Deleted from './components/pages/deleted/deleted';
// import Letter from './components/pages/letter/letter';

class App extends Component {
    render() {
        return (
            <Router>
                <Container fluid={true}>
                    <Header />
                    <Row>
                        <Col md="2">
                            <Sidebar />
                        </Col>
                        <Col md="10" style={{overflowY:'auto', height:'90vh'}}>
                            <Switch>
                                <Route exact path="/">
                                    <Main />
                                </Route>
                                <Route path="/spam">
                                    <Spam />
                                </Route>
                                <Route path="/important">
                                    <Important />
                                </Route>
                                <Route path="/deleted">
                                    <Deleted />
                                </Route>
                                {/* <Route path="/letters/">
                                    <Letter/>
                                </Route> */}
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default App;