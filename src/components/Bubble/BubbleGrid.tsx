import React from 'react';
import './BubbleGrid.css';
import Bubble from './Bubble.tsx';

const BubbleGrid = () => {
    return (
        <div className='bubble-grid'>
            <div className='bubble-index one'>
                <Bubble left="-20%" first="" size={250} second="CLIMBR" url="https://clmbr.com/"/>
            </div>
            <div className='bubble-index two'>
                <Bubble left="" first="Meal" size={180} second="Prep" url="https://mickrueg-meal-prep.netlify.app/"/>
            </div>
            <div className='bubble-index three'>
                <Bubble top="60%" left="0%"/>
                <Bubble left="55%" top="40%" size={40}/>
            </div>
        </div>
    );
};

export default BubbleGrid;