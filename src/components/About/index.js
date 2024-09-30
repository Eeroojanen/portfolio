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
                <p>I am Eero Ojanen, a 24-year-old fourth-year Information Technology student at Vaasa University of Applied Sciences. 
                    I am currently seeking an internship and focusing on honing my skills in software development and cloud computing
                </p>
                <p>I have hands-on experience with various programming languages, including Python, C#, Java, React, and JavaScript, as well as tools like Git and Azure DevOps. 
                    As a hobby, I also enjoy video editing using Sony Vegas Pro.
                </p>
                <p>My goals is to pursue a career in software engineering, where I can contribute to building robust and scalable applications.
                </p>
  
                </div>
            </div>
        <div className='cv-cont'>
                    <img src={CV} alt="Ansioluettelo" />
                </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    )
}

export default About