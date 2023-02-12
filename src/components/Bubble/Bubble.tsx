import React, { useEffect, useState } from 'react';
import './Bubble.css';


//The Bubble class accepts 6 inputs: 
// 1. size (which = circle circumference)
// 2. offset from left edge
// 3. offset from top edge
// 4. the first word which is in regular text
// 5. the second word which is in bold text
// 6. the url to open to a new window

const Bubble = ({size=100, left='0%', top='0%', first="", second="", url=""}) => {
    
    const [clickable, setClickable] = useState(false);
    useEffect(()=>{
        (url.length>0?setClickable(true):setClickable(false))
    },[url.length])

    const [linkText, setLinkText] = useState(<></>);
    useEffect(()=>{
        if(clickable){
            setLinkText(
                <a className='bubble-text' href={url} target="_blank" rel="noopener noreferrer">
                    {first}&nbsp;<b>{second}</b>
                </a>
            );
        }
    },[clickable,first,second,url])


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
            {linkText}
        </div>
    )

}

export default Bubble;
