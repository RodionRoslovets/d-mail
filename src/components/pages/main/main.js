import React, {Component} from 'react';
import LettersList from '../../lettersList/lettersList';
import statuses from '../../../statuses';

class Main extends Component {
    render() { 
        return ( 
            <LettersList status={statuses.income}/>
        );
    }
}

export default Main;