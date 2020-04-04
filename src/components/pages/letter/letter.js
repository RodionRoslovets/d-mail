import React from 'react';
import {connect} from 'react-redux';

const Letter = ({ heading, content }) => {
    
    return (
        <div>
            <h2>{heading}</h2>
            <hr />
            <div>
                {content}
            </div>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        heading:state.currLetter.heading,
        content:state.currLetter.content
    }
}

export default connect(mapStateToProps, undefined)(Letter);