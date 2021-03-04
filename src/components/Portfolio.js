import React from 'react'
import ecomm from '../images/ecomm.png';
import movie from '../images/movie.png';
import cozy_homes from '../images/cozy_homes.png';
import portfolio from '../images/portfolio.png';
import ravenous from '../images/ravenous.png';
import wanderlust from '../images/wanderlust.png';
import pokemon from '../images/pokemon.png';
import travel from '../images/travel.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons'; 
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {

  // Ecommerce app
  const openPopupboxecomm = () => {
    const content = (

        
      <>
        <h1 className="popupbox-title">React Ecommerce Application</h1>
        <img className="portfolio-image-popupbox" src={ecomm} alt="Netflix Clone Project..." />
        <p>Fully functional ecommerce website using React.js, Commerce.js, and stripe</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://nickryan13.github.io/Ecomm_shop/")}>https://nickryan13.github.io/Ecomm_shop/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigecomm = {
    titleBar: {
      enable: true,
      text: "Fully functional Ecommerce project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Movie Search app
  const openPopupboxMovieSearch = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={movie} alt="City Guide App Project..." />
        <h1 className="popupbox-title">React Movie Search Application</h1>
        <p>Ultimate movie database applicaiton done with React.js and MovieDB API.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://nickryan13.github.io/Movie_search/", "_blank")}>https://nickryan13.github.io/Movie_search//</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigMovieSearch= {
    titleBar: {
      enable: true,
      text: "Movie search database."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // cozy homes Project
  const openPopupboxCozyHomes = () => {
    const content = (
      <>
        <h1 className="popupbox-title">Cozy Homes Estates web design project</h1>
        <img className="portfolio-image-popupbox" src={cozy_homes} alt="Portfolio Project..." />
        <p>Real estate investment Web project done using bootstrap, html, css and javascript.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.cozyhomeestates.com/", "_blank")}>https://www.cozyhomeestates.com/</a>
\      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCozyHomes = {
    titleBar: {
      enable: true,
      text: "Real estate web design project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // portfolio
  const openPopupboxportfolio = () => {
    const content = (
      <>
        <h1 className="popupbox-title">React Portfolio Template Project</h1>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Task Manager React and Redux Project..." />
        <p>Portfolio template done using React.js and React material UI.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://www.nicholasmontgomery-reactportfolio.com/#/", "_blank")}>https://www.nicholasmontgomery-reactportfolio.com/#/</a>
        <br />
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

      
  

   // ravenous
   const openPopupboxRavenous = () => {
    const content = (
      <>
        <h1 className="popupbox-title">React.js Yelp Clone </h1>
        <img className="portfolio-image-popupbox" src={ravenous} alt="Netflix Clone Project..." />
        <p>Yelp clone made with React.js</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://nickryan13.github.io/react_portfolio_Nickryan13/")}>https://nickryan13.github.io/react_portfolio_Nickryan13/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigRavenous = {
    titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // wanderlust
  const openPopupboxWanderlust = () => {
    const content = (
      <>
              <h1 className="popupbox-title">Real time weather and attractions application </h1>
        <img className="portfolio-image-popupbox" src={wanderlust} alt="City Guide App Project..." />
        <p>Weather and attractions by city.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("http://nmontgomery.mydevryportfolio.com/portfolio/wanderlust/wanderlust/", "_blank")}>http://nmontgomery.mydevryportfolio.com/portfolio/wanderlust/wanderlust/</a>
        <br />
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWanderlust = {
    titleBar: {
      enable: true,
      text: "Weather and desination app."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // pokedex
  const openPopupboxpokemon = () => {
    const content = (
      <>
              <h1 className="popupbox-title">Online Pokedex</h1>
        <img className="portfolio-image-popupbox" src={pokemon} alt="Portfolio Project..." />
        <p>Pokemon library built with React.js and material UI.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://pokedex-1c10b.web.app/", "_blank")}>https://pokedex-1c10b.web.app/</a>
        <br />
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPokemon = {
    titleBar: {
      enable: true,
      text: "Pokedex app."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Travel
  const openPopupboxtravel = () => {
    const content = (
      <>
                <h1 className="popupbox-title">Online travel website</h1>
        <img className="portfolio-image-popupbox" src={travel} alt="Task Manager React and Redux Project..." />
        <p>Online travel website built with html, css, javascript and php.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("http://nmontgomery.mydevryportfolio.com/gmd311/Montgomery_wk7_lab/wk7_lab.html", "_blank")}>http://nmontgomery.mydevryportfolio.com/gmd311/Montgomery_wk7_lab/wk7_lab.html</a>
        <br />
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTravel = {
    titleBar: {
      enable: true,
      text: "Web development project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


    return (
        <div id="portfolio" className="portfolio-wrapper">
        <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxecomm}>
                    <img className="portfolio-image" src={ecomm} alt="ecomm shop..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                  
                {/* - */}
                <div className="portfolio-image-box" onClick={ openPopupboxMovieSearch }>

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
                 <div className="portfolio-image-box" onClick={openPopupboxRavenous}>
                    <img className="portfolio-image" src={ravenous} alt="react portfolio..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
                 {/* - */}
                 <div className="portfolio-image-box" onClick={openPopupboxWanderlust}>
                    <img className="portfolio-image" src={wanderlust} alt="react portfolio..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
                 {/* - */}
                 <div className="portfolio-image-box" onClick={openPopupboxpokemon}>
                    <img className="portfolio-image" src={pokemon} alt="react portfolio..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
                   {/* - */}
                   <div className="portfolio-image-box" onClick={openPopupboxtravel}>
                    <img className="portfolio-image" src={travel} alt="travel..." />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                 </div>
              </div>
            </div>
            <PopupboxContainer {...popupboxConfigecomm} />
            <PopupboxContainer {...popupboxConfigMovieSearch} />
            <PopupboxContainer {...popupboxConfigCozyHomes} />
            <PopupboxContainer {...popupboxConfigPortfolio} />
            <PopupboxContainer {...popupboxConfigRavenous} />
            <PopupboxContainer {...popupboxConfigWanderlust} />
            <PopupboxContainer {...popupboxConfigPokemon} />
            <PopupboxContainer {...popupboxConfigTravel} />



          </div>
          
    )
}

export default Portfolio
