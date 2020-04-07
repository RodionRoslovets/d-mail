import React from 'react';
import style from './writeLetter.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { useHistory } from 'react-router-dom';
import Button from '../../button/button'

const WriteLetter = ({ draft, send, writeTo, writeTheme, writeContent, to, theme, content }) => {
    let hist = useHistory();

    return (
        <form
            className={style.write_form}
            onSubmit={(e) => {
                e.preventDefault();
                send()
                setTimeout(() => {
                    hist.push('/send')
                }, 1000)

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
            <Button type="submit">Отправить</Button>
            <Button listener={
                (e) => {
                    e.preventDefault()
                    draft()
                    setTimeout(() => {
                        hist.push('/draft')
                    }, 1000)
                }
            }>Сохранить черновик</Button>
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