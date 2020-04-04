import React from 'react';
import style from './writeLetter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const WriteLetter = ({ send, writeTo, writeTheme, writeContent }) => {



    return (
        <form
            className={style.write_form}
            onSubmit={(e) => {
                e.preventDefault();
                send()
            }}>
            <input
                type="text"
                name="to"
                placeholder="Кому"
                className={style.write_input}
                onChange={(e)=>{
                    writeTo(e.target.value)
                }} />
            <input
                type="text"
                name="theme"
                placeholder="Тема"
                className={style.write_input}
                onChange={(e)=>{
                    writeTheme(e.target.value)
                }}/>
            <textarea
                placeholder="Текст письма"
                rows="10"
                className={style.write_textarea}
                onChange={(e)=>{
                    writeContent(e.target.value)
                }}>
            </textarea>
            <button>Отправить</button>
        </form>
    );
}

export default connect(undefined, actions)(WriteLetter);