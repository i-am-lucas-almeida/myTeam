import {FaTwitter, FaLinkedin} from 'react-icons/fa';
import '../styles/CardProfile.css';

import iconCross from '../../images/icon-cross.svg';
import { useState } from 'react';

export default function CardProfile({ image, name, profile, quote, twitter, linkedin }) {

    const [eventCard, setEventCard] = useState();

    return(

        <div className='card-c'>

            <div className={`card-perfil ${eventCard ? 'hidden-perfil' : ''}`}>

                <img src={image} alt={`imagem de perfil: ${name}`} />

                <h3>{name}</h3>

                <h4>{profile}</h4>

            </div>

            <div className={`card-description ${eventCard ? 'show-profile' : ''}`}>

                <h3>{name}</h3>

                <p>{quote}</p>

                <aside>

                    <a href={twitter} target='_blank' rel='noreferrer'>
                        <FaTwitter/>
                    </a>

                    <a href={linkedin} target='_blank' rel='noreferrer'>
                        <FaLinkedin/>
                    </a>

                </aside>

            </div>

            <button onClick={() => setEventCard(!eventCard)} className={`button-card ${eventCard ? 'btn-active' : ''}`}>

                <img src={iconCross} alt='ícone ver mais' />

            </button>

        </div>

    )

}