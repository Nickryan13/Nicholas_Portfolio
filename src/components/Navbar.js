import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'; 
import {Link} from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
     <div className="container">
         
  
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: '#fff'}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home"  offset={-110}className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about"  offset={-110}className="nav-link" href="#">about me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services"  offset={-110}className="nav-link" href="#">services</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="resume" offset={-110} className="nav-link" href="#">resume</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="portfolio"  offset={-110}className="nav-link" href="#">portoflio</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="contact"  offset={-110}className="nav-link" href="#">contact</Link>
      </li>
      
         </ul>
     </div>
</div>   
 </nav>
    )
}

export default Navbar
