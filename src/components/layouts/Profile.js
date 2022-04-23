import { useEffect, useState } from 'react';
import CardProfile from './CardProfile';

import imagePattern_1 from '../../images/bg-pattern-about-2-contact-1.svg';
import imagePattern_2 from '../../images/bg-pattern-home-4-about-3.svg';

export default function Profile() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setData(data))

    }, []);

    return(

        <div className='profiles-c'>

            <img src={imagePattern_1} alt='imagem de fundo' className='pattern-profile_left' />  

            <div className='profile-title'>
                
                <h2>Conheça nosso time</h2>

            </div> 

            <div className='cards-c'>

                {data && data.map((item) => (

                    <CardProfile key={item.id} {...item} />

                ))}
                
            </div>   

            <img src={imagePattern_2} alt='imagem de fundo' className='pattern-profile_right' />      

        </div>

    )

}