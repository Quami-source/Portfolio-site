import React from 'react';
import {Link,animateScroll as scroll} from 'react-scroll';
import '../../App.css';

const Nav = ()=>{
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor:'black',}}>
            <div className="container">
                <a className="navbar-brand" href="#" onClick={()=> scroll.scrollToTop} >Quamies</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" activeClass = "active" to = "body" smooth={true} spy={true} duration={500} offset={-70}>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "about" smooth={true} spy={true} duration={500} offset={-70}>About me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = "projects" smooth={true} spy={true} duration={500} offset={-70}>Projects</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} spy={true} duration={500} offset={-70}>Contact</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;