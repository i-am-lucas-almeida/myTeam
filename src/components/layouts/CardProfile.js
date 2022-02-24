import {FaTwitter, FaLinkedin} from 'react-icons/fa';
import '../styles/CardProfile.css';

import iconCross from '../../images/icon-cross.svg';

export default function CardProfile(props) {

    return(

        <div className='card-c'>

            <div className={`${'card-perfil'} ${props.hidden} ${'animate__animated animate__fadeIn'}`}>

                <img src={props.image} alt={props.about} />

                <h3>{props.name}</h3>

                <h4>{props.profile}</h4>

            </div>

            <div className={`${'card-descrition'} ${props.show} ${'animate__animated animate__fadeIn'}`}>

                <h3>{props.name}</h3>

                <p>{props.reflection}</p>

                <aside>

                    <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                        <FaTwitter/>
                    </a>

                    <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                        <FaLinkedin/>
                    </a>

                </aside>

            </div>

            <button onClick={props.event} className={`${'button-card'} ${props.btnState}`}>

                <img src={iconCross} alt='icon' />

            </button>

        </div>

    )

}