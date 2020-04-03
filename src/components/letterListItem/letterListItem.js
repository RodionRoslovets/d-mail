import React from 'react';

// import { Link } from 'react-router-dom';

const LetterListItem = ({ heading, id }) => {
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
                <button>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button>
                    <i className="far fa-star"></i>
                </button>
                <button>
                    <i className="fas fa-ban"></i>
                </button>
            </div>
        </div>
    );
}



export default LetterListItem;