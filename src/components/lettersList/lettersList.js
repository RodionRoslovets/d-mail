import React from 'react';
import { connect } from 'react-redux';
import LetterListItem from "../letterListItem/letterListItem";
// import * as actions from '../../actions';

const LettersList = ({ letters }) => {
    const newLetters = letters.map((letter) => {
        return (
            <li key={letter.key} style={{listStyle:'none'}}>
                <LetterListItem heading={letter.heading}
                    id={letter.key}
                />
            </li >

        )
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

export default connect(mapStateToProps, undefined)(LettersList);