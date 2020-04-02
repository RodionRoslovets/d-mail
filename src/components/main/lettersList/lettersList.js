import React from 'react';

import Letter from "./letter/letter";

const LettersList = ({ letters }) => {
    const newLetters = letters.map((letter) => {
        return (
            <Letter heading={letter.heading} key={letter.key}/>
        )
    });

    return (
        <ul style={{ padding: 0 }}>
            {newLetters}
        </ul>
    );
}

export default LettersList;