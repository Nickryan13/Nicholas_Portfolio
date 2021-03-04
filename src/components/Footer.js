import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Orange County, Ca</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">(949) 619-9155</a>
            </div>
            <div className="d-flex">
              <p>MontgomeryNicholas30@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link className="footer-nav" offset={-110}  smooth={true} to="home">Home</Link>
                <br />
                <Link className="footer-nav" offset={-110} smooth={true} to="about">About me</Link>
                <br />
                <Link className="footer-nav" offset={-110} smooth={true} to="services">Services</Link>
              </div>
              <div className="col">
                <Link className="footer-nav" offset={-110} smooth={true} to="resume">Experience</Link>
                <br />
                <Link className="footer-nav" offset={-110} smooth={true} to="portfolio">Portfolio</Link>
                <br />
                <Link className="footer-nav" offset={-110} smooth={true} to="contact">Contacts</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <LinkedinShareButton
                url={"https://www.youtube.com/8020coding"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Nicholas Montgomery | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
