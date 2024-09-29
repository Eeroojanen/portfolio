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
                        Feel free to reach out! You can contact me through the following:
                    </p>
                    <p> 
                        Email: Eeroojanen0@gmail.com
                    </p>
                    <p> 
                        Phone: +358443355686   
                    </p>
                    <p>
                        I am always open to discussing internship opportunities. Looking forward to connecting with you.
                    </p>
                </div>
            </div>
        <Loader type="ball-spin-fade-loader" />
        </>
    )
}

export default Contact