import {Link} from 'react-router-dom';
import {FaFacebookSquare, FaPinterest, FaTwitter} from 'react-icons/fa';

import '../styles/Footer.css';
import imageLogo from '../../images/logo.svg';

export default function Footer() {

    return(

        <footer>

            <div className='container footer-c'>

                <div className='box-left'>

                    <img src={imageLogo} alt='imagem da logomarca' />

                    <ul>

                        <li>

                            <Link to='/'>Home</Link>

                        </li>

                        <li>

                            <Link to='/sobre'>Sobre</Link>

                        </li>

                    </ul>

                </div>

                <div className='box-center'>

                    <ul>

                        <li>Av. Ana Alencar, 137</li>
                        <li>São Paulo, SP</li>
                        <li>myteam@email.com</li>

                    </ul>

                </div>

                <div className='box-right'>

                    <ul className='social-medias'>

                        <li>

                            <FaFacebookSquare/>

                        </li>

                        <li>

                            <FaPinterest/>

                        </li>

                        <li>

                            <FaTwitter/>

                        </li>

                    </ul>

                    <p className='copy'>Copyright 2020. Todos os direitos reservados</p>

                </div>

            </div>

        </footer>

    )

}