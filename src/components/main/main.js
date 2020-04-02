import React, {Component} from 'react';
import {connect} from 'react-redux';
import LettersList from './lettersList/lettersList'

class Main extends Component {
    // constructor(props){
    //     super(props)
    // }

    render() { 
        const {letters} = this.props
        return ( 
            <LettersList letters = {letters}/>
        );
    }
}

const mapStateToProps = (state)=>{
    return(
        {
            letters:state
        }
    )
}

export default connect(mapStateToProps,undefined)(Main);