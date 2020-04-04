import React from 'react';
import { connect } from 'react-redux';
import LetterListItem from "../letterListItem/letterListItem";
import * as actions from '../../actions';
// import statuses from '../../statuses';

const LettersList = ({ letters, status, del, imp, spam, restore, openLetter }) => {
    const newLetters = letters.map((letter) => {

        if(letter.status === status){
            return (
                <li key={letter.key} style={{listStyle:'none'}} >
                    <LetterListItem 
                        heading={letter.heading}
                        id={letter.key} 
                        status={status}
                        del={del}
                        imp={imp}
                        spam={spam}
                        restore={restore}
                        openLetter={openLetter}
                    />
                </li >
            )
        }
        return null
    });

return (
    <ul style={{ padding: 0 }}>
        {newLetters}
    </ul>
);
}

const mapStateToProps = (state) => {
    return (
        {
            letters: state.letters
        }
    )
}

export default connect(mapStateToProps, actions)(LettersList);