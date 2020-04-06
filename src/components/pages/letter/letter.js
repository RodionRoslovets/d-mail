import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Letter = ({ heading, content, status, send, id, edit }) => {

    let hist = useHistory()

    const sendButton = () => {
        return (
            <button onClick={() => {
                send()
                setTimeout(() => {
                    setTimeout(() => {
                        hist.push('/send')
                    }, 1000)
                })
            }}>
                Отправить
            </button>
        )
    }

    return (
        <div>
            <h2>{heading}</h2>
            <hr />
            <div>
                {content}
            </div>
            {status === 'draft' ? 
                <div>
                    <Link to='/write' onClick={() => {
                            edit()
                        }}>
                            Редактировать
                    </Link> 
                    {sendButton()}
                </div> : null}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        heading: state.currLetter.heading,
        content: state.currLetter.content,
        status: state.currLetter.status
    }
}

export default connect(mapStateToProps, actions)(Letter);