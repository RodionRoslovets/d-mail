import React from 'react';
import LettersList from '../../lettersList/lettersList';
import statuses from '../../../statuses';

const Important = () => {
    return ( 
        <LettersList status={statuses.important}/>
     );
}
 
export default Important;