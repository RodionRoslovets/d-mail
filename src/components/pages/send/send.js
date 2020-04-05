import React from 'react';
import LettersList from '../../lettersList/lettersList';
import statuses from '../../../statuses';

const Send = () => {
    return (
        <LettersList status={statuses.send} />
    );
}

export default Send;