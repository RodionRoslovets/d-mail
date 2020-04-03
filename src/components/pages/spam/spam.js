import React from 'react';
import LettersList from '../../lettersList/lettersList';
import statuses from '../../../statuses';

const Spam = () => {
    return ( 
        <LettersList status={statuses.spam}/>
    );
}

export default Spam;