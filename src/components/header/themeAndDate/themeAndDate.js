import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import style from './themeAndDate.module.scss';

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
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        const {date} = this.state;
        const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`
        const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`
        return(
            <Row>
                <Col md='12'>
                    <p className={style.date}>{`${hours}:${minutes}`}</p>
                </Col>
            </Row>
        )
    }
}
export default ThemeAndDate;