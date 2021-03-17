import React from 'react';
import '../../App.css';

const Nav = ()=>{
    return(
        <div className = 'Nav'>
            <div className = 'Brand'>
                <div>EA.</div>
                
            </div>
            <div className='LinksContainer'>
                <div>
                    <ul>
                        <li><a href="#">Link</a></li>
                        <li className="middle"><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;