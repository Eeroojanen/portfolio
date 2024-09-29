import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import CV from '../../assets/images/Kopio Eero Ojanen.jpg'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass} 
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
<<<<<<< HEAD
                <p>I am Eero Ojanen, a 24-year-old fourth-year Information Technology student at Vaasa University of Applied Sciences. 
                    I am currently seeking an internship and focusing on honing my skills in software development and cloud computing
                </p>
                <p>I have hands-on experience with various programming languages, including Python, C#, Java, React, and JavaScript, as well as tools like Git and Azure DevOps. 
                    As a hobby, I also enjoy video editing using Sony Vegas Pro.
                </p>
                <p>My goals is to pursue a career in software engineering, where I can contribute to building robust and scalable applications.
                </p>
=======
                <p>Yada yada yada tää on vaan demo tekstiä mitä keksin tähän kunnes oon saanu koko koodin tehtyä
                    siihen saakka tää saa olla tällänen
                </p>
                <p>Imen denssii ku viimestä päivää ja lempipuuhaani on denssirottien kuivaaminen paperiin ja sen jälkeen 100 kilometrin 
                    marssi kohti madafakin hätilää siuu
                </p>
                <p>Tommi döfää tsemisti ja vois vaikka ostaa uudet kengät sillä välin ku Särkkä varaa itselleen kaksi peflettiä saunaan</p>
>>>>>>> 20cf65bb0ccdd7658f88c99ef9277fe72ec63c70
            </div>

            <div className='cv-cont'>
                <img src={CV} alt="Ansioluettelo" />
            </div>
        </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    )
}

export default About