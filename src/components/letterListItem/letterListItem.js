import React from 'react';

// import { Link } from 'react-router-dom';

const LetterListItem = ({ heading, del, id, imp, spam }) => {
    const style = {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid black',
        padding: '10px',
        marginBottom: '10px'
    }

    return (
        <div style={style}>
            {/* <Link to={`/letters/${id}`}> */}
                {heading}
            {/* </Link> */}
            <div className="buttons">
                <button onClick={()=>{del(id)}}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button onClick={()=>{imp(id)}}>
                    <i className="far fa-star"></i>
                </button>
                <button onClick={()=>{spam(id)}}>
                    <i className="fas fa-ban"></i>
                </button>
            </div>
        </div>
    );
}



export default LetterListItem;