import React from 'react';
import './Bubble.css';

//The Bubble class accepts 6 inputs: 
// 1. size (which = circle circumference)
// 2. position from left edge
// 3. position from top edge
// 4. the first word
// 5. the second word
// 6. indicate "clickable" if the bubble can be clicked to active hover css

const Bubble = ({size=100, left='10%', top='10%', first="First", second="Second", clickable}) => {

    return (
        <div 
            className= {`bubble ${clickable}`}
            style={
                {width: `${size}px`, 
                height: `${size}px`, 
                left: `${left}`, 
                top: `${top}`, 
                fontSize:`${size*.12}px`}
                }>
            <div className='bubble-text'>
                {first}&nbsp;<b>{second}</b>
            </div>
        </div>
    )

}

export default Bubble;
