import React from 'react';
import LettersList from '../../lettersList/lettersList';
import statuses from '../../../statuses';

const Draft = () => {
    return ( <LettersList status={statuses.draft}/> );
}

export default Draft;