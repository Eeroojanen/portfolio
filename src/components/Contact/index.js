import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
            setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','i','n','f','o','r','m','a','t','i','o','n']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        Emmät tiiä jotain shiistii tähän vois yapata you know
                        ettei näytä ihan dorkalta ku ei lue mitää
                    </p>
                    <p>
                        Sama juttu tähän mitä mä malagas pysyn hiton hyvin himassa 
                        eiks jees?
                    </p>
                    <p>
                        ORE WA MONKEY D.LUFFY, KAIZOKU OU NI NARU OTOKO DA!
                    </p>
                </div>
            </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    )
}

export default Contact