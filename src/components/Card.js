/* eslint-disable no-template-curly-in-string */
import React from 'react';

const Card = ( {name,email,id} ) => {
    // const = props;
    return (
       
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             <h1>ROBO FRIENDS</h1>
            <img alt='img' src ={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>
                    {name}
                </h2>
                <p>{email}</p>
            </div>
        </div>
    );

}

export default Card;