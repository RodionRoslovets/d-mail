import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../button/button';
import style from './letterListItem.module.scss'

const LetterListItem = ({ heading, status, del, id, imp, spam, restore, openLetter }) => {

    return (
        <div className={style.letterListItem}>
            <div className={style.letterHeading}>
                <Link className={style.letterLink} to={`/letters/${id}`} onClick={() => { openLetter(id) }}>
                    {heading}
                </Link>
            </div>
            <div className={style.buttons}>

                {status !== 'deleted'
                    ? <Button
                        classes={style.delete}
                        listener={() => { del(id) }}>
                        <i className="fas fa-trash-alt"></i>
                    </Button>
                    : null}

                {status === 'deleted' || status === 'spam' || status === 'important'
                    ? <Button
                        classes={style.restore}
                        listener={() => { restore(id) }}>
                        <i className="fas fa-trash-restore"></i>
                    </Button>
                    : null}

                {status === 'income'
                    ? <Button
                        classes={style.spam}
                        listener={() => { spam(id) }}>
                        <i className="fas fa-ban"></i>
                    </Button>
                    : null}

                {status === 'income' 
                    ? <Button
                        classes={style.important}
                        listener={() => { imp(id) }}>
                        <i className="far fa-star"></i>
                    </Button>
                    : null}

            </div>
        </div>
    );
}

export default LetterListItem;