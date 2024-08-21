import { Link } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from "react-loaders";

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
                <h2>Sponsored by EetuGaasiga </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    );

}

export default Home