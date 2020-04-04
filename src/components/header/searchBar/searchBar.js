import React from 'react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

const SearchBar = ({search})=>{
    return (
        <input onChange={(e)=>{search(e.target.value)}} type="text" style={{width:'100%'}} placeholder="Поиск" />
    )
}

export default connect(undefined, actions)(SearchBar);