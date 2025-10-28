import AnimatedLetters from '../AnimatedLetters'
import './index.scss';
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
                <h2>
                <p>I’m Eero Ojanen, a 25-year-old final-year Information Technology student at Vaasa University of Applied Sciences. 
                    I have completed an internship in Azure cloud development and have continued working as a trainee, 
                    further developing my expertise in modern cloud technologies and software engineering.
                </p>
                <p>I have hands-on experience with several Azure services, including Azure Functions, Cosmos DB, Blob Storage, and Key Vault, as well as building and integrating REST APIs. Within Azure DevOps, 
                    I’ve worked extensively with pipelines, Bicep, and YAML to automate and manage infrastructure as code.
                </p>
                <p>My technical skill set includes programming languages such as C#, Python, JavaScript, and TypeScript, along with frameworks and technologies like .NET, React, and Node.js.
                </p>
                </h2>
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