import React from 'react';
import Typed from 'react-typed';
import {Link} from 'react-scroll';


const Header = () => {
    return (
        <div id="home" className="header-wraper">
            <div className = "main-info">
                <h1>Web development services</h1>
                <Typed 
                    className="typed-text"
                    strings={['Web Design', 'Web Development', 'SEO', 'Graphic Design']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                
                <Link href="#" to="contact" smooth={true} offset={-110} className="btn-main-offer">Contact me</Link>
            </div>
            
        </div>
    )
}

export default Header
