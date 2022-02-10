import {FaTwitter, FaLinkedin} from 'react-icons/fa';
import '../styles/CardProfile.css';

export default function CardProfile({image, name, profile, about, linkLinkd, linkTwi}) {

    return(

        <div className='card'>

            <img src={image} alt={about} />

            <h3>{name}</h3>

            <h4>{profile}</h4>

            <a href={linkTwi} target='_blank' rel='noreferrer'>

                <FaTwitter/>

            </a>

            <a href={linkLinkd} target='_blank' rel='noreferrer'>

                <FaLinkedin/>

            </a>

        </div>

    )

}