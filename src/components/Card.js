import React from 'react';

const Card = (props) => {
    const {id, name, email} = props;
    return (
        <div className='bg-light-yellow tc dib br3 pa3 ma2 bw2 grow shadow-5'>
            <img alt='robots' src={`https://robohash.org/set_set3/${id*3}?size=200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        
    );
}

export default Card;