import React from 'react';
import style from './writeLetter.module.css';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {useHistory} from 'react-router-dom';

const WriteLetter = ({ draft, send, writeTo, writeTheme, writeContent, to, theme, content }) => {
    let hist = useHistory();
    return (
        <form
            className={style.write_form}
            onSubmit={(e) => {
                e.preventDefault();
                send()

                setTimeout(()=>{
                    hist.push('/send')
                },1000)

            }}>
            <input
                type="text"
                name="to"
                placeholder="Кому"
                className={style.write_input}
                value={to}
                onChange={(e) => {
                    writeTo(e.target.value)
                }} />
            <input
                type="text"
                name="theme"
                placeholder="Тема"
                className={style.write_input}
                value={theme}
                onChange={(e) => {
                    writeTheme(e.target.value)
                }} />
            <textarea
                placeholder="Текст письма"
                rows="10"
                className={style.write_textarea}
                value={content}
                onChange={(e) => {
                    writeContent(e.target.value)
                }}>
            </textarea>
            <input type="submit" />
            <button onClick={
                (e) => {
                    e.preventDefault()
                    draft()
                }
            }>В черновик</button>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        to: state.writeLetter.to,
        theme: state.writeLetter.theme,
        content: state.writeLetter.content
    }
}

export default connect(mapStateToProps, actions)(WriteLetter);