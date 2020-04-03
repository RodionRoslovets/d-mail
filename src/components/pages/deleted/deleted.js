import React from 'react';
import LettersList from '../../lettersList/lettersList';
import statuses from '../../../statuses';

const Deleted = () => {
    return ( 
        <LettersList status={statuses.deleted}/>
     );
}
 
export default Deleted;