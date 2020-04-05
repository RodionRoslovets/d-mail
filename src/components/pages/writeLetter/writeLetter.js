import React from 'react';
import style from './writeLetter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

const WriteLetter = ({ send, writeTo, writeTheme, writeContent, to, theme, content }) => {
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
                value={to}
                onChange={(e)=>{
                    writeTo(e.target.value)
                }} />
            <input
                type="text"
                name="theme"
                placeholder="Тема"
                className={style.write_input}
                value={theme}
                onChange={(e)=>{
                    writeTheme(e.target.value)
                }}/>
            <textarea
                placeholder="Текст письма"
                rows="10"
                className={style.write_textarea}
                value={content}
                onChange={(e)=>{
                    writeContent(e.target.value)
                }}>
            </textarea>
            <button>Отправить</button>
        </form>
    );
}

const mapStateToProps = (state)=>{
    return {
        to:state.writeLetter.to,
        theme:state.writeLetter.theme,
        content:state.writeLetter.content
    }
}

export default connect(mapStateToProps, actions)(WriteLetter);