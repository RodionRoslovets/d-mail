import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';


class ThemeAndDate extends Component{
    constructor(){
        super()

        this.state = {
            date:new Date()
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState((state)=>({
                date:new Date()
            }))
        },500)
        console.log(1)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        const {date} = this.state;
        return(
            <Row>
                <Col md='6'>
                    <label>
                        <p>Включить темную тему</p>
                        <input type="checkbox" hidden/>
                    </label>
                </Col>
                <Col md='6'>
                    <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
                </Col>
            </Row>
        )
    }
}
export default ThemeAndDate;