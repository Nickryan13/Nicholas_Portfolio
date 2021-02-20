import React from 'react'
import ecomm from '../images/ecomm.png';
import movie from '../images/movie.png';
import cozy_homes from '../images/cozy_homes.png';
import portfolio from '../images/portfolio.png';
import ravenous from '../images/ravenous.png';
import wanderlust from '../images/wanderlust.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons'; 
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

  //ecomm
  const openPopupboxecomm = () => {
      const content = 
        (
      <>
      <img className="portfolio-image-popupbox" src={ecomm} alt="ecommerce project..."/>
      <p>Full Ecommerce website built with React.js, Commerce.js and stripe</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open ("https://nickryan13.github.io/Ecomm_shop/")}>https://nickryan13.github.io/Ecomm_shop/</a>
      </>
        )
      PopupboxManager.open({content})
  }

    const popupboxConfigecomm = {
        titleBar: {
            enable: true,
            text: "React Ecommerce project",
            fadeIn: true,
            fadeInSpeed: 500,
        }
    }

    //Movie search app
  const openPopupboxMovieSearch = () => {
    const content = 
      (
    <>
    <img className="portfolio-image-popupbox" src={movie} alt="Movie Search project..."/>
    <p>Movie Search app using React and MovieDB api</p>
      <b>Demo:</b> <a className="hyper-link" onClick={() => window.open ("https://nickryan13.github.io/Movie_search/")}>https://nickryan13.github.io/Movie_search//</a>
    </>
      )
    PopupboxManager.open({content})
}

  const popupboxConfigMovieSearch = {
      titleBar: {
          enable: true,
          text: "React Movie Search Project",
          fadeIn: true,
          fadeInSpeed: 500,
      }
  }
  //Cozy Homes
  const openPopupboxCozyHomes = () => {
    const content = 
      (
    <>
    <img className="portfolio-image-popupbox" src={cozy_homes} alt="Cozy Homes Estates..."/>
    <p>Web Design project done using booystrap, HTML, Css and javscript. Worked with client to build image Carasoul</p>
      <b>Demo:</b> <a className="hyper-link" onClick={() => window.open ("https://nickryan13.github.io/Movie_search/")}>https://nickryan13.github.io/Movie_search//</a>
    </>
      )
    PopupboxManager.open({content})
}

  const popupboxConfigCozyHomes = {
      titleBar: {
          enable: true,
          text: "Cozy Home estates",
          fadeIn: true,
          fadeInSpeed: 500,
      }
  }

  //Cozy Homes
  const openPopupboxportfolio = () => {
    const content = 
      (
    <>
    <img className="portfolio-image-popupbox" src={portfolio} alt="Cozy Homes Estates..."/>
    <p>Web portfolio template done using React, React Router, and React mdl-UI</p>
      <b>Demo:</b> <a className="hyper-link" onClick={() => window.open ("https://nickryan13.github.io/Movie_search/")}>https://nickryan13.github.io/Movie_search//</a>
    </>
      )
    PopupboxManager.open({content})
}

  const popupboxConfigportfolio = {
      titleBar: {
          enable: true,
          text: "Cozy Home estates",
          fadeIn: true,
          fadeInSpeed: 500,
      }
  }
    return (
        <div className="portfolio-wrapper">
        <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxecomm}>
                    <img className="portfolio-image" src={ecomm} alt="ecomm shop..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                  
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxMovieSearch}>

                    <img className="portfolio-image" src={movie} alt="movie search app..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>  
                
                 {/* - */}
                 <div className="portfolio-image-box" onClick={openPopupboxCozyHomes}>

                    <img className="portfolio-image" src={cozy_homes} alt="Real estate website..." />

                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>  
                
                 {/* - */}
                 <div className="portfolio-image-box" onClick={openPopupboxportfolio}>
                    <img className="portfolio-image" src={portfolio} alt="react portfolio..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
                 {/* - */}
                 <div className="portfolio-image-box" onClick={openPopupboxportfolio}>
                    <img className="portfolio-image" src={ravenous} alt="react portfolio..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
                 {/* - */}
                 <div className="portfolio-image-box" onClick={openPopupboxportfolio}>
                    <img className="portfolio-image" src={wanderlust} alt="react portfolio..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
              </div>
            </div>
            <PopupboxContainer {...popupboxConfigecomm} {...popupboxConfigMovieSearch} {...popupboxConfigCozyHomes} {...popupboxConfigportfolio}/>
          </div>
          
    )
}

export default Portfolio
