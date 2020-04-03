import React from 'react';
import {connect} from 'react-redux';

const Letter = ({ heading, content, id }) => {
    
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
        heading:state.currentLetter.heading,
        content:state.currentLetter.content,
        id:state.currentLetter.id
    }
}

export default connect(mapStateToProps, undefined)(Letter);