import React, { useState } from "react";
import './Main.css';
import logox1 from "../assets/logox1.png"
import WBB from "../assets/WAYBACKBOYS.png"
import Toothless from "../assets/TOOTHLESS.png"
import Funfootball from "../assets/FUNFOOTBALL.png"
import XMFC from "../assets/XMFC.png"
import arrow from "../assets/arrows.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



const MainDiv = () => {
    const navbuttonhandler = () => {

    }
    const element = <FontAwesomeIcon icon={faLocationDot} />
    const facebook = <FontAwesomeIcon icon={faFacebookF} />
    const whatsapp = <FontAwesomeIcon icon={faWhatsapp} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />


    return <React.Fragment>
        <div className="opacity__div"></div>
        <nav className="navbar">
            <div className="logo__div">
                <img className="logo__img" src={logox1} alt="expected toulouse" />
            </div>
            <ul>
                <li onMouseOver={() => {
                    navbuttonhandler()
                }}>SQUAD</li>
                <li onMouseOver={() => {
                    console.log("Event Happened")
                }}>TABLE</li>
                <li onMouseOver={() => {
                    console.log("Event Happened")
                }}>ABOUT</li>
            </ul>
        </nav>
        <div className="main__div">
            <div className="clock__div">
                <h5 className="next__match">NEXT MATCH:</h5>
                <div className="timer__box">
                    <div className="timer__div"><h1 className="timer__number timer__day">02:</h1><span>DAY</span></div>
                    <div className="timer__div"><h1 className="timer__number timer__hour">15:</h1><span>HR</span></div>
                    <div className="timer__div"><h1 className="timer__number timer__minute">13:</h1><span>MIN</span></div>
                    <div className="timer__div"><h1 className="timer__number timer__second">15</h1><span>SEC</span></div>
                </div>
            </div>
            <div className="nextgame__div">
                <div className="homeclub__div">
                    <h2>EXPECTED TOLOUSE FC</h2>
                    <img className=" logo__display" src={logox1} alt="expected toulouse" />
                </div>
                <div className="nextgame__time">
                    <h4>Tuesday</h4>
                    <h3>19:00</h3>
                    <h4>26 / 07</h4>
                </div>
                <div className="awayclub__div">
                    <img className=" logo__display" src={WBB} alt="expected toulouse" />
                    <h2>WAY BACK BOYS</h2>
                </div>
                <div className="footnote__div">
                    <span> {element}    Clontarf All Weather Pitches</span>
                </div>
            </div>
            <div className="lastresults__div">
                <div className="previuous">  <img className="previous__page" src={arrow} alt="previous arrow" /></div>
                <h5 className="results__match">LAST RESULTS:</h5>

                <div className="lastresults__game">
                    <div className="homeclub__result">
                        <img className="logo__result" src={logox1} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="divisor__result">X</span>
                    <div className="awayclub__result">
                        <img className="logo__result" src={XMFC} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="date__result">27 / JUL</span>

                </div>
                <div className="lastresults__game">
                    <div className="homeclub__result">
                        <img className="logo__result" src={logox1} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="divisor__result">X</span>
                    <div className="awayclub__result">
                        <img className="logo__result" src={Funfootball} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="date__result">27 / JUL</span>
                </div>
                <div className="lastresults__game">
                    <div className="homeclub__result">
                        <img className="logo__result" src={logox1} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="divisor__result">X</span>
                    <div className="awayclub__result">
                        <img className="logo__result" src={Funfootball} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="date__result">27 / JUL</span>
                </div>
                <div className="lastresults__game">
                    <div className="homeclub__result">
                        <img className="logo__result" src={logox1} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="divisor__result">X</span>
                    <div className="awayclub__result">
                        <img className="logo__result" src={Toothless} alt="expected toulouse" />
                        <span>5</span>
                    </div>
                    <span className="date__result">19 / JUL</span>
                </div>
                <div className="next__arrow">  <img className="next__page" src={arrow} alt="previous arrow" /></div>
            </div>

        </div>

        <div className="socialmedia__div">
            <div className="socialmedia__icon"><span>{facebook}</span></div>
            <div className="socialmedia__icon"><span>{twitter}</span></div>
            <div className="socialmedia__icon"><span>{whatsapp}</span></div>
        </div>

    </React.Fragment>
}

export default MainDiv;