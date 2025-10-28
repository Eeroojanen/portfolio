import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Selfie from '../../assets/images/Eero_Selfie.jpg'
import Loader from "react-loaders";
import CSharp from '../../assets/images/CSharp.png'
import JS from '../../assets/images/JS.png'
import python from '../../assets/images/python.png'
import React from '../../assets/images/React.png'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['E','e','r','o']
    const jobArray = ['s','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r']

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
            <img className='logo1' src={CSharp} alt="CSharp" />
            <img className='logo2' src={JS} alt="JS" />
            <img className='logo3' src={python} alt="python" />
            <img className='logo4' src={React} alt="React" />
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _9`}>i,</span>
                <br />
                <span className={`${letterClass} _10`}>I</span>
                <span className={`${letterClass} _11`}>'m </span>
                <span> </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={12} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19} />
                </h1>
                <h3>
                I’m proficient in several programming languages, including Python, C#, React, and JavaScript. I have hands-on experience working with Git for version control and Azure for cloud-based development. 
                I enjoy building efficient, well-structured software solutions and continuously learning new technologies to improve my skills as a developer.
                </h3>
                <h2>Looking for job opportunities</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
            <div className='selfie'>
                <img src={Selfie} alt="Selfie" />
            </div>
        </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    );

}

export default Home