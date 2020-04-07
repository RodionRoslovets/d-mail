import React from 'react';
import * as actions from '../../../actions';
import { connect } from 'react-redux';
import style from './searchBar.module.scss'

const SearchBar = ({ search }) => {
    return (
        <input
            className={style.searchBar}
            onChange={(e) => { search(e.target.value) }}
            type="text"
            style={{ width: '100%' }}
            placeholder="Поиск" />
    )
}

export default connect(undefined, actions)(SearchBar);