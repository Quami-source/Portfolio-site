import React from 'react';
import me from '../../../me.png';

const Body = ()=>{
    return(
        <div className = 'main-body'>
            <div className = 'leftSpan'>
                Hi, I'm Emmanuel
            </div>
            <div className = 'imageSpan'>
                <img src={me} width= "400" height = "400" />
            </div>
        </div>
    )
}

export default Body;