import React from "react";

const Experience = () => {
  return (
    <div id="resume" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017</h3>
            <p>Was offered position as a store manager of O'reilly auto parts.  leadership skills, marketing strategies, customer service and time management. </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018</h3>
            <p>Enrolled into Devry University to earn undergraduate degree in web and graphic design. Learned basic HTML, css, Javascript as well as advanced techniques with Adobe cs applications.</p>
          </div>
          </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019</h3>
            <p>Decided to expand learning opportunities and learn different coding languages. took online courses and built first React.js application </p>
          </div>
      </div>
          <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020</h3>
            <p>Graduated from Devry University with degree in web and graphi design. Decided to expand education and earn bachelors degree in web development</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021</h3>
            <p>Continuing my bachelor's degree program and constantly trying to master coding and the web! including using React.js to build this very website!</p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022</h3>
            <p>WIll graduate Devry Univerysity with bachelors degree in the web development.</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Experience;
