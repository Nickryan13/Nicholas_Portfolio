import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wraper">
            <div className = "main-info">
                <h1>Web development services</h1>
                <Typed 
                    className="typed-text"
                    strings={['Web Design', 'Web Development', 'SEO', 'Graphic Design']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                
                < a href="#" className="btn-main-offer">Contact me</a>
            </div>
            
        </div>
    )
}

export default Header