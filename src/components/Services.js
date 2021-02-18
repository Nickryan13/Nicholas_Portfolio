import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faDesktop, faFileCode} from '@fortawesome/free-solid-svg-icons'; 
const Services = () => {
    return (
        <div className="services">
            <h1 classNmae="py-5">Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} sizze="2x" /></div>
                                <h3>Web Design</h3>
                                    <p>I approach each project individually and always foucs on the result</p>
                            </div>
                        </div>
                    {/* - */}
                    <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} sizze="2x" /></div>

                                <h3>Web Development</h3>
                                <p>Built with new and proven technologies</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} sizze="2x" /></div>

                                <h3>SEO</h3>
                                <p>Make sure your website is being seen.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} sizze="2x" /></div>

                                <h3>Graphic Design</h3>
                                <p>Create stunning compositions and layouts using all things Adobe CS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Services
