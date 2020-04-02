import React from 'react';

const Letter = ({heading}) => {
    const style={
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        border:'1px solid black',
        padding:'10px'
    }

    return ( 
        <li style={style}>
            {heading}
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
        </li>
     );
}
 
export default Letter;